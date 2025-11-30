# Guía Rápida: Subir a GitHub

## Paso 1: Inicializar Git

```powershell
git init
git add .
git commit -m "Initial commit - Tienda de tazas térmicas"
```

## Paso 2: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `tienda-tazas-termicas` (o el que prefieras)
3. Déjalo como **Público** o **Privado** según prefieras
4. **NO** marques ninguna opción de inicializar con README, .gitignore o licencia
5. Haz clic en "Create repository"

## Paso 3: Conectar y Subir

GitHub te mostrará comandos, pero usa estos (reemplaza TU_USUARIO y TU_REPO):

```powershell
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

### Ejemplo:
Si tu usuario es "juanperez" y tu repo es "tienda-tazas":
```powershell
git remote add origin https://github.com/juanperez/tienda-tazas.git
git branch -M main
git push -u origin main
```

## Paso 4: Autenticación

La primera vez que hagas `git push`, GitHub te pedirá autenticarte:
- **Opción 1**: Usa GitHub Desktop (más fácil)
- **Opción 2**: Usa un Personal Access Token
  - Ve a GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token
  - Dale permisos de "repo"
  - Copia el token y úsalo como contraseña

## Actualizaciones Futuras

Después de hacer cambios:
```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

¡Eso es todo!
