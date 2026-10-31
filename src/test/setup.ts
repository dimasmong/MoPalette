// Vitest JSDOM environment setup
if (typeof globalThis.ImageData === 'undefined') {
  class ImageDataPolyfill {
    width: number
    height: number
    data: Uint8ClampedArray
    colorSpace: PredefinedColorSpace

    constructor(data: Uint8ClampedArray, width: number, height: number)
    constructor(width: number, height: number)
    constructor(
      arg1: Uint8ClampedArray | number,
      arg2: number,
      arg3?: number
    ) {
      if (typeof arg1 === 'number') {
        this.width = arg1
        this.height = arg2
        this.data = new Uint8ClampedArray(arg1 * arg2 * 4)
      } else {
        this.data = arg1
        this.width = arg2
        this.height = arg3 || Math.floor(arg1.length / (4 * arg2))
      }
      this.colorSpace = 'srgb'
    }
  }

  // @ts-expect-error polyfill for jsdom
  globalThis.ImageData = ImageDataPolyfill
}
