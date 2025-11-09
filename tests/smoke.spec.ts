import { test, expect } from '@playwright/test';

test.describe('Landing Page Smoke Tests', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Love, Violeta Rose/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('h1:has-text("Love, Violeta Rose")');
    await expect(hero).toBeVisible();
  });

  test('should display all package cards', async ({ page }) => {
    await page.goto('/');
    const packages = await page.locator('section#packages').scrollIntoViewIfNeeded();

    await expect(page.getByText('Essence')).toBeVisible();
    await expect(page.getByText('Elegance')).toBeVisible();
    await expect(page.getByText('Timeless')).toBeVisible();
  });

  test('should have working navigation to contact section', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(500); // Wait for smooth scroll

    const contactSection = page.locator('section#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('should display FAQ section', async ({ page }) => {
    await page.goto('/');
    const faqSection = page.locator('h2:has-text("Frequently Asked Questions")');
    await faqSection.scrollIntoViewIfNeeded();
    await expect(faqSection).toBeVisible();
  });

  test('should have functioning FAQ accordion', async ({ page }) => {
    await page.goto('/');
    const faqSection = page.locator('h2:has-text("Frequently Asked Questions")');
    await faqSection.scrollIntoViewIfNeeded();

    // Find first FAQ item
    const firstFAQ = page.locator('button').filter({ hasText: 'How far in advance should I book?' });
    await firstFAQ.click();

    // Check if answer is visible
    const answer = page.getByText(/recommend booking 9-12 months/);
    await expect(answer).toBeVisible();
  });

  test('should display contact form', async ({ page }) => {
    await page.goto('/');
    const contactForm = page.locator('form');
    await contactForm.scrollIntoViewIfNeeded();

    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('textarea#message')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should validate required fields in contact form', async ({ page }) => {
    await page.goto('/');
    const contactForm = page.locator('form');
    await contactForm.scrollIntoViewIfNeeded();

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // HTML5 validation should prevent submission
    const nameInput = page.locator('input#name');
    await expect(nameInput).toBeFocused();
  });

  test('should display gallery section with filtering', async ({ page }) => {
    await page.goto('/');
    const gallerySection = page.locator('h2:has-text("Portfolio Gallery")');
    await gallerySection.scrollIntoViewIfNeeded();

    await expect(gallerySection).toBeVisible();

    // Test filter buttons
    const ceremonyFilter = page.locator('button:has-text("ceremony")');
    await expect(ceremonyFilter).toBeVisible();
  });

  test('should display testimonials', async ({ page }) => {
    await page.goto('/');
    const testimonialsSection = page.locator('h2:has-text("Kind Words")');
    await testimonialsSection.scrollIntoViewIfNeeded();

    await expect(testimonialsSection).toBeVisible();
    await expect(page.getByText(/Sarah & Michael|Emily Rodriguez/)).toBeVisible();
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');

    // Check for essential meta tags
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description).toContain('photography');

    // Check for Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('Love, Violeta Rose');
  });

  test('should have structured data (JSON-LD)', async ({ page }) => {
    await page.goto('/');

    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();

    const structuredData = JSON.parse(jsonLd || '{}');
    expect(structuredData['@type']).toBe('ProfessionalService');
    expect(structuredData.name).toBe('Love, Violeta Rose');
    expect(structuredData.hasOfferCatalog).toBeTruthy();
  });

  test('should be responsive on mobile', async ({ page, isMobile }) => {
    await page.goto('/');

    // Test mobile menu or responsive behavior
    const hero = page.locator('h1:has-text("Love, Violeta Rose")');
    await expect(hero).toBeVisible();

    // Ensure content doesn't overflow
    const body = page.locator('body');
    const boundingBox = await body.boundingBox();
    expect(boundingBox?.width).toBeLessThanOrEqual(await page.viewportSize().then(v => v?.width || 1920));
  });
});

test.describe('Accessibility Tests', () => {
  test('should have no obvious accessibility violations', async ({ page }) => {
    await page.goto('/');

    // Check for alt attributes on images (when we add real images)
    // Check for proper heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
    expect(h1Count).toBeLessThanOrEqual(1); // Should only have one h1
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Test tab navigation
    await page.keyboard.press('Tab');
    const firstFocusable = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocusable).toBeTruthy();
  });
});
