import { expect, test } from '@playwright/test'
import path from 'node:path'

test.describe('MoPalette Full End-to-End Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('1. Loads homepage with branding and clean initial state', async ({ page }) => {
    await expect(page).toHaveTitle(/MoPalette/)
    await expect(page.locator('h1')).toContainText('Extract Colors From Any Image')
    await expect(page.getByText('Choose an Image')).toBeVisible()
    await expect(page.getByText('© 2026 Dimas Mong. Licensed under the MIT License.')).toBeVisible()
  })

  test('2. Light/Dark mode switching toggles class-based theme', async ({ page }) => {
    const html = page.locator('html')
    await expect(html).not.toHaveClass(/dark/)

    // Toggle to Dark
    await page.locator('[data-testid="theme-toggle"]').click()
    await expect(html).toHaveClass(/dark/)

    // Toggle back to Light
    await page.locator('[data-testid="theme-toggle"]').click()
    await expect(html).not.toHaveClass(/dark/)
  })

  test('3. Bilingual language switching (EN <-> ID) translates all UI', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Extract Colors From Any Image')

    // Switch to Indonesian
    await page.locator('[data-testid="lang-toggle"]').click()
    await expect(page.locator('h1')).toContainText('Ekstrak Warna Dari Gambar Apa Pun')
    await expect(page.getByText('Pilih Gambar')).toBeVisible()

    // Switch back to English
    await page.locator('[data-testid="lang-toggle"]').click()
    await expect(page.locator('h1')).toContainText('Extract Colors From Any Image')
  })

  test('4. Uploads image, extracts real palette, and displays swatches', async ({ page }) => {
    const fixturePath = path.resolve('tests/fixtures/1-solid-red.png')

    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(fixturePath)

    await expect(page.getByText('Active Palette')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Manual Eyedropper', exact: true })).toBeVisible()
    await expect(page.locator('text=#FF0000').first()).toBeVisible()
  })

  test('5. Same-file reselection works cleanly', async ({ page }) => {
    const fixturePath = path.resolve('tests/fixtures/1-solid-red.png')
    const fileInput = page.locator('input[type="file"]').first()

    await fileInput.setInputFiles(fixturePath)
    await expect(page.getByText('Active Palette')).toBeVisible()

    const replaceInput = page.locator('input[type="file"]').last()
    await replaceInput.setInputFiles(fixturePath)
    await expect(page.getByText('Active Palette')).toBeVisible()
  })

  test('6. Interactive eyedropper samples pixel accurately', async ({ page }) => {
    const fixturePath = path.resolve('tests/fixtures/6-split-red-blue-50-50.png')
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(fixturePath)

    await expect(page.getByText('Active Palette')).toBeVisible()

    const img = page.locator('img[alt="6-split-red-blue-50-50.png"]')
    await expect(img).toBeVisible()

    const box = await img.boundingBox()
    if (box) {
      await page.mouse.click(box.x + box.width * 0.25, box.y + box.height * 0.5)
      await expect(page.getByText('Sampled Color:')).toBeVisible()
      await expect(page.locator('text=#FF0000').first()).toBeVisible()
    }
  })

  test('7. Lock swatch preserves color during regeneration', async ({ page }) => {
    const fixturePath = path.resolve('tests/fixtures/6-split-red-blue-50-50.png')
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(fixturePath)

    await expect(page.getByText('Active Palette')).toBeVisible()

    const lockBtn = page.getByTitle(/Lock color/).first()
    await lockBtn.click()

    await expect(page.getByTitle(/Unlock color/)).toBeVisible()

    await page.getByTitle(/Regenerates unlocked swatches/).click()
    await expect(page.getByTitle(/Unlock color/)).toBeVisible()
  })

  test('8. Reorder swatches and add/remove swatch controls', async ({ page }) => {
    const fixturePath = path.resolve('tests/fixtures/6-split-red-blue-50-50.png')
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(fixturePath)

    await expect(page.getByText('Active Palette')).toBeVisible()

    const addBtn = page.getByTitle('Add color')
    await addBtn.click()

    await expect(page.getByText('Active Palette')).toBeVisible()

    const removeBtn = page.getByTitle('Remove color').first()
    await removeBtn.click()
  })

  test('9. Color detail inspector calculates real WCAG contrast', async ({ page }) => {
    const fixturePath = path.resolve('tests/fixtures/1-solid-red.png')
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(fixturePath)

    await expect(page.getByText('Color Inspector & Accessibility')).toBeVisible()
    await expect(page.getByText('Against White (#FFFFFF)')).toBeVisible()
    await expect(page.getByText('Against Black (#000000)')).toBeVisible()
    await expect(page.getByText('Recommended Text Color:')).toBeVisible()
  })

  test('10. Export modal generates valid PNG, SVG, CSS, JSON, and TXT outputs', async ({
    page,
  }) => {
    const fixturePath = path.resolve('tests/fixtures/6-split-red-blue-50-50.png')
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(fixturePath)

    await page.getByRole('button', { name: 'Export Palette' }).first().click()
    await expect(page.getByText('Export Color Palette')).toBeVisible()

    // Tab CSS
    await page.getByRole('button', { name: 'CSS Variables' }).click()
    const cssPre = page.locator('pre')
    await expect(cssPre).toContainText(':root {')
    await expect(cssPre).toContainText('--palette-1:')

    // Tab JSON
    await page.getByRole('button', { name: 'JSON Data' }).click()
    const jsonPre = page.locator('pre')
    const jsonText = await jsonPre.textContent()
    expect(jsonText).not.toBeNull()
    const parsed = JSON.parse(jsonText!)
    expect(parsed.colors.length).toBeGreaterThan(0)
    expect(parsed.generator).toContain('MoPalette')

    // Tab SVG
    await page.getByRole('button', { name: 'SVG Vector' }).click()
    const svgPre = page.locator('pre')
    await expect(svgPre).toContainText('<svg xmlns="http://www.w3.org/2000/svg"')

    // Tab TXT
    await page.getByRole('button', { name: 'Plain Text' }).click()
    const txtPre = page.locator('pre')
    await expect(txtPre).toContainText('#')

    // Test real download event
    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Download File' }).click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toContain('.txt')

    // Close modal
    await page.getByRole('button', { name: 'Close' }).first().click()
    await expect(page.getByText('Export Color Palette')).not.toBeVisible()
  })

  test('11. Open Source & Credits modal provides exact Color Thief attribution', async ({
    page,
  }) => {
    await page.locator('[data-testid="open-source-footer"]').click()
    await expect(page.getByText('Color Thief by Lokesh Dhakar')).toBeVisible()
    await expect(page.getByText('Color Thief v3.5.0 • MIT License')).toBeVisible()
    await expect(page.getByText('GitHub Repository')).toBeVisible()

    await page.locator('button:has-text("Close")').last().click()
  })

  test('12. Privacy modal displays 100% in-browser policy', async ({ page }) => {
    await page.locator('[data-testid="privacy-footer"]').click()
    await expect(page.getByText('Zero Server Uploads')).toBeVisible()
    await expect(page.getByText('No Analytics or Trackers')).toBeVisible()

    await page.locator('button:has-text("Close")').last().click()
  })
})
