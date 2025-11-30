# Tienda de Tazas Térmicas ☕

E-commerce moderno de tazas térmicas construido con Next.js y Tailwind CSS, desplegado en Cloudflare Pages.

## 🚀 Características

- Catálogo de productos de tazas térmicas
- Carrito de compras funcional
- Diseño responsive y moderno
- Optimizado para Cloudflare Pages
- Sin necesidad de base de datos

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo Local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 Despliegue en Cloudflare Pages

### Opción 1: Desde el Dashboard de Cloudflare (Recomendado)

1. Sube tu código a GitHub
2. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Ve a "Workers & Pages" → "Create application" → "Pages"
4. Conecta tu repositorio de GitHub
5. Configura los siguientes ajustes:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. Haz clic en "Save and Deploy"

### Opción 2: Deploy Manual con Wrangler

```bash
# Instalar Wrangler globalmente
npm install -g wrangler

# Autenticar con Cloudflare
wrangler login

# Construir el proyecto
npm run build

# Desplegar
wrangler pages deploy out --project-name=tienda-tazas
```

## 📁 Estructura del Proyecto

```
.
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── page.js       # Página principal
│   │   ├── productos/    # Página de productos
│   │   ├── carrito/      # Página del carrito
│   │   └── layout.js     # Layout principal
│   ├── components/       # Componentes React
│   └── data/            # Datos de productos
├── public/              # Archivos estáticos
└── package.json
```

## 🎨 Personalización

Edita los productos en `src/data/products.js` para agregar, eliminar o modificar las tazas térmicas del catálogo.

## 📄 Licencia

MIT
