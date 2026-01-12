import { test, expect } from '@playwright/test';

async function logProductTitles(page: import('@playwright/test').Page, selector: string): Promise<void> {
  await page.waitForSelector(selector);
  const productTitles = page.locator(selector);
  const count = await productTitles.count();
  const limite = Math.min(5, count); // Asegurar que no exceda el total

  for (let i = 0; i < limite; i++) {
    const titulo = await productTitles.nth(i).textContent();
    console.log(`${i + 1}. ${titulo?.trim()}`);
  }
}

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').fill('zapatos');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await page.locator('li').filter({ hasText: 'Skechers' }).first().click();


  const resultsText = await page.locator('h2 span').first().innerText();
  console.log('📦 Resultados encontrados:', resultsText);

  await page.getByText('Sort by:Featured').click();
  await page.getByRole('option', { name: 'Price: High to Low' }).click();
  console.log('\n🔷 Productos ordenados por Precio: De más alto a más bajo:');


    await logProductTitles(page, 'div.s-result-list div div h2[aria-label]');


    await page.getByText('Sort by:Price: High to Low').click();
    await page.getByRole('option', { name: 'Newest Arrivals' }).click();
    console.log('\n🔷 Productos ordenados por Nuevos Lanzamientos:');
    await logProductTitles(page, 'div.s-result-list div div h2[aria-label]');

    
    
    await page.getByText('Sort by:Newest Arrivals').click();
    await page.getByRole('option', { name: 'Avg. Customer Review' }).click();
    console.log('\n🔷 Productos ordenados por Promedio de Comentarios:');
    await logProductTitles(page, 'div.s-result-list div div h2[aria-label]');


});