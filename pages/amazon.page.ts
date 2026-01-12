import { Page } from '@playwright/test';

export class AmazonPage {
  constructor(private page: Page) {}

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://www.amazon.com/');
  }

  async searchProduct(product: string): Promise<void> {
    await this.page.getByPlaceholder('Search Amazon').fill(product);
    await this.page.getByPlaceholder('Search Amazon').press('Enter');
  }

  async filterByBrand(brand: string): Promise<void> {
    await this.page.locator('li').filter({ hasText: brand }).first().click();
  }

  async sortBy(option: string): Promise<void> {
    const sortMenu = this.page.locator('[aria-label="Sort by"]');
    await sortMenu.waitFor({ state: 'visible' });
    await sortMenu.click();

    const sortOption = this.page.getByRole('option', { name: option });
    await sortOption.waitFor({ state: 'visible' });
    await sortOption.click();
  }

  async logProductTitles(selector: string, limit: number = 5): Promise<void> {
    await this.page.waitForSelector(selector);
    const productTitles = this.page.locator(selector);
    const count = await productTitles.count();
    const limite = Math.min(limit, count);

    for (let i = 0; i < limite; i++) {
      const titulo = await productTitles.nth(i).textContent();
      console.log(`${i + 1}. ${titulo?.trim()}`);
    }
  }
}