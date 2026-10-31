import { chromium } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'

const outDir = path.resolve('docs/screenshots')
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

async function capture() {
  const browser = await chromium.launch()

  // 1. Desktop Light
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
    await page.goto('http://localhost:5173')
    // Upload 9-distinct-color-blocks.png
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(path.resolve('tests/fixtures/9-distinct-color-blocks.png'))
    await page.waitForSelector('text=Active Palette')
    await page.waitForTimeout(500)
    await page.screenshot({ path: path.join(outDir, 'desktop-light.png'), fullPage: true })
    console.log('Saved desktop-light.png')

    // 2. Export Modal
    await page.getByRole('button', { name: 'Export Palette' }).first().click()
    await page.waitForSelector('text=Export Color Palette')
    await page.waitForTimeout(300)
    await page.screenshot({ path: path.join(outDir, 'desktop-export-modal.png') })
    console.log('Saved desktop-export-modal.png')
    await page.locator('button:has-text("Close")').last().click()

    // 3. Desktop Dark
    await page.locator('[data-testid="theme-toggle"]').click()
    await page.waitForTimeout(300)
    await page.screenshot({ path: path.join(outDir, 'desktop-dark.png'), fullPage: true })
    console.log('Saved desktop-dark.png')

    await page.close()
  }

  // 4. Mobile Light & Dark
  {
    const page = await browser.newPage({
      viewport: { width: 393, height: 852 },
      isMobile: true,
      hasTouch: true,
    })
    await page.goto('http://localhost:5173')
    const fileInput = page.locator('input[type="file"]').first()
    await fileInput.setInputFiles(path.resolve('tests/fixtures/9-distinct-color-blocks.png'))
    await page.waitForSelector('text=Active Palette')
    await page.waitForTimeout(500)
    await page.screenshot({ path: path.join(outDir, 'mobile-light.png'), fullPage: true })
    console.log('Saved mobile-light.png')

    // Mobile Dark
    await page.locator('[data-testid="theme-toggle"]').click()
    await page.waitForTimeout(300)
    await page.screenshot({ path: path.join(outDir, 'mobile-dark.png'), fullPage: true })
    console.log('Saved mobile-dark.png')

    await page.close()
  }

  await browser.close()
  console.log('All screenshots captured successfully.')
}

capture().catch(console.error)
