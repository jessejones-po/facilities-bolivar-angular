# Despliegue en GitHub Pages

## Requisito: Git

Para publicar en GitHub Pages necesitas **Git** instalado. Descárgalo desde: https://git-scm.com/download/win

---

## Pasos para desplegar

### 1. Instalar Git
- Instala Git desde https://git-scm.com/download/win
- Reinicia la terminal después de instalar

### 2. Crear el repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: **facilities-bolivar-angular** (debe coincidir con el base-href)
3. Crea el repositorio (puedes dejarlo vacío)

### 3. Subir el código e iniciar el despliegue

En la terminal, dentro de la carpeta del proyecto:

```powershell
git init
git add .
git commit -m "Initial commit - Facilities Bolívar"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/facilities-bolivar-angular.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu nombre de usuario de GitHub.

### 4. Activar GitHub Pages
1. En el repositorio: **Settings** → **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en cada push a `main`

### 5. URL final
Tras el primer despliegue (2-3 minutos):
**https://TU_USUARIO.github.io/facilities-bolivar-angular/**

---

## Despliegue manual (alternativa)

Si prefieres desplegar sin GitHub Actions:

```powershell
npm run build:gh-pages
npx gh-pages -d dist/facilities-bolivar-angular/browser
```

(Requiere el paquete `gh-pages`: `npm install -D gh-pages`)
