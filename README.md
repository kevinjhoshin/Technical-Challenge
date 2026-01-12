# Amazon Challenge - Playwright Tests

## Descripción
Este proyecto contiene pruebas automatizadas para el sitio web de Amazon utilizando Playwright. Las pruebas incluyen búsqueda de productos, filtrado y ordenamiento.

## Requisitos
- Node.js (versión 18 o superior)
- Playwright

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/kevinjhoshin/Technical-Challenge.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd Amazon-challenge
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución de las pruebas
- Para ejecutar las pruebas localmente:
  ```bash
  npx playwright test
  ```
- Para ejecutar las pruebas en modo gráfico:
  ```bash
  npx playwright test --headed
  ```

## GitHub Actions
Este proyecto incluye un flujo de trabajo de GitHub Actions que ejecuta las pruebas automáticamente en cada push o pull request a la rama `main`.

### Configuración
1. Asegúrate de que el archivo `.github/workflows/playwright-tests.yml` esté en el repositorio.
2. El flujo realiza los siguientes pasos:
   - Instala las dependencias.
   - Instala los navegadores de Playwright.
   - Ejecuta las pruebas.
   - Sube el reporte como artefacto.

### Cómo verificar
1. Haz un commit y push al repositorio.
2. Ve a la pestaña **Actions** en GitHub.
3. Descarga el reporte desde los artefactos generados.

## Reporte de Ejecución
- Los reportes de las pruebas se generan automáticamente en la carpeta `playwright-report`.
- Los videos de las ejecuciones se guardan en la carpeta `test-results`.

## Evidencia de Ejecución
- Los videos de las pruebas se generan automáticamente y pueden ser revisados para validar los resultados.