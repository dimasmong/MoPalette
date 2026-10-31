import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

// CRC32 table
const crcTable = new Uint32Array(256)
for (let n = 0; n < 256; n++) {
  let c = n
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  }
  crcTable[n] = c
}

function crc32(buf) {
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}

function writeChunk(type, data) {
  const len = data.length
  const buf = Buffer.alloc(4 + 4 + len + 4)
  buf.writeUInt32BE(len, 0)
  buf.write(type, 4, 4, 'ascii')
  data.copy(buf, 8)
  const crcVal = crc32(buf.subarray(4, 8 + len))
  buf.writeUInt32BE(crcVal, 8 + len)
  return buf
}

/**
 * Create a valid RGBA PNG buffer
 */
export function encodePng(width, height, getPixel) {
  // Signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

  // IHDR
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type RGBA
  ihdr[10] = 0 // compression
  ihdr[11] = 0 // filter
  ihdr[12] = 0 // interlace
  const ihdrChunk = writeChunk('IHDR', ihdr)

  // Uncompressed scanlines
  const scanlineLength = 1 + width * 4
  const rawData = Buffer.alloc(height * scanlineLength)

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength
    rawData[rowOffset] = 0 // filter type None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4
      const [r, g, b, a] = getPixel(x, y, width, height)
      rawData[pxOffset] = r
      rawData[pxOffset + 1] = g
      rawData[pxOffset + 2] = b
      rawData[pxOffset + 3] = a
    }
  }

  // IDAT (deflate)
  const compressed = zlib.deflateSync(rawData, { level: 6 })
  const idatChunk = writeChunk('IDAT', compressed)

  // IEND
  const iendChunk = writeChunk('IEND', Buffer.alloc(0))

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk])
}

const fixturesDir = path.resolve('tests/fixtures')
if (!fs.existsSync(fixturesDir)) {
  fs.mkdirSync(fixturesDir, { recursive: true })
}

console.log('Generating deterministic test fixtures...')

// 1. Solid Red (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '1-solid-red.png'),
  encodePng(100, 100, () => [255, 0, 0, 255])
)

// 2. Solid Green (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '2-solid-green.png'),
  encodePng(100, 100, () => [0, 255, 0, 255])
)

// 3. Solid Blue (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '3-solid-blue.png'),
  encodePng(100, 100, () => [0, 0, 255, 255])
)

// 4. Pure Black (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '4-pure-black.png'),
  encodePng(100, 100, () => [0, 0, 0, 255])
)

// 5. Pure White (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '5-pure-white.png'),
  encodePng(100, 100, () => [255, 255, 255, 255])
)

// 6. 50% Red / 50% Blue (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '6-split-red-blue-50-50.png'),
  encodePng(100, 100, (x, _y, w) =>
    x < w * 0.5 ? [255, 0, 0, 255] : [0, 0, 255, 255]
  )
)

// 7. 75% Red / 25% Blue (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '7-split-red-blue-75-25.png'),
  encodePng(100, 100, (x, _y, w) =>
    x < w * 0.75 ? [255, 0, 0, 255] : [0, 0, 255, 255]
  )
)

// 8. Grayscale Gradient (256x100)
fs.writeFileSync(
  path.join(fixturesDir, '8-grayscale-gradient.png'),
  encodePng(256, 100, (x) => [x, x, x, 255])
)

// 9. Distinct Color Blocks (200x200): Red, Yellow, Cyan, Magenta
fs.writeFileSync(
  path.join(fixturesDir, '9-distinct-color-blocks.png'),
  encodePng(200, 200, (x, y, w, h) => {
    if (x < w / 2 && y < h / 2) return [255, 0, 0, 255] // Red
    if (x >= w / 2 && y < h / 2) return [255, 255, 0, 255] // Yellow
    if (x < w / 2 && y >= h / 2) return [0, 255, 255, 255] // Cyan
    return [255, 0, 255, 255] // Magenta
  })
)

// 10. Fully Transparent PNG (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '10-fully-transparent.png'),
  encodePng(100, 100, () => [0, 0, 0, 0])
)

// 11. Partially Transparent PNG (100x100)
fs.writeFileSync(
  path.join(fixturesDir, '11-partially-transparent.png'),
  encodePng(100, 100, (x, _y, w) =>
    x < w / 2 ? [0, 0, 0, 0] : [124, 58, 237, 255]
  )
)

// 12. High-Resolution Image (1600x1200)
fs.writeFileSync(
  path.join(fixturesDir, '12-high-resolution.png'),
  encodePng(1600, 1200, (x, y, w, h) => {
    const rx = Math.floor((x / w) * 255)
    const gy = Math.floor((y / h) * 255)
    return [rx, gy, 180, 255]
  })
)

// 13. Low-Resolution Icon (16x16)
fs.writeFileSync(
  path.join(fixturesDir, '13-low-resolution-icon.png'),
  encodePng(16, 16, (x, y) => {
    return (x + y) % 2 === 0 ? [124, 58, 237, 255] : [246, 193, 119, 255]
  })
)

// 14. Corrupt Image
fs.writeFileSync(
  path.join(fixturesDir, '14-corrupt-image.png'),
  Buffer.from('NOT_A_VALID_PNG_OR_IMAGE_DATA_CORRUPT_HEADER_XYZ')
)

// 15. Unsupported Format
fs.writeFileSync(
  path.join(fixturesDir, '15-unsupported-format.txt'),
  Buffer.from('This is a plain text file, not an image format.')
)

console.log('Successfully generated all 15 test fixtures in tests/fixtures/')
