# Guía de Despliegue en Cloudflare Pages

## Método 1: Desde el Dashboard de Cloudflare (Recomendado para principiantes)

### Paso 1: Preparar el repositorio Git
```powershell
# En tu terminal PowerShell, navega al directorio del proyecto
cd "c:\Users\qwert\OneDrive\Escritorio\proyecto de E-commerce"

# Inicializa Git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit - Tienda de tazas térmicas"
```

### Paso 2: Subir a GitHub
1. Ve a [github.com](https://github.com) y crea un nuevo repositorio
2. No inicialices con README, .gitignore o licencia
3. Copia el comando para conectar tu repositorio local:

```powershell
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Paso 3: Configurar Cloudflare Pages
1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Selecciona tu cuenta
3. Ve a "Workers & Pages" → "Create application" → "Pages"
4. Conecta tu cuenta de GitHub
5. Selecciona tu repositorio
6. Configura el build:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
7. Haz clic en "Save and Deploy"

¡Tu sitio estará en línea en unos minutos!

---

## Método 2: Usando Wrangler CLI (Avanzado)

### Instalación
```powershell
# Instalar dependencias
npm install

# Instalar Wrangler globalmente
npm install -g wrangler
```

### Autenticación
```powershell
# Iniciar sesión en Cloudflare
wrangler login
```

### Build y Deploy
```powershell
# Construir el proyecto
npm run build

# Desplegar a Cloudflare Pages
wrangler pages deploy out --project-name=tienda-tazas-termicas
```

### Despliegues subsecuentes
Después del primer despliegue, solo necesitas:
```powershell
npm run build
wrangler pages deploy out
```

---

## Método 3: Deploy automático con GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: tienda-tazas-termicas
          directory: out
```

---

## Verificación Local

Antes de desplegar, prueba localmente:

```powershell
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Solución de Problemas

### Error: "Module not found"
```powershell
rm -r node_modules
rm package-lock.json
npm install
```

### Error en el build
```powershell
npm run build
# Revisa los errores en la consola
```

### Actualizar después de cambios
```powershell
git add .
git commit -m "Descripción de cambios"
git push
# Cloudflare Pages desplegará automáticamente
```

---

## Notas Importantes

- El dominio será: `tienda-tazas-termicas.pages.dev`
- Puedes configurar un dominio personalizado en Cloudflare
- El sitio es completamente estático (sin servidor backend)
- El carrito usa localStorage del navegador
- Las imágenes se cargan desde Unsplash

---

## Recursos

- [Documentación de Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Dashboard de Cloudflare](https://dash.cloudflare.com)
