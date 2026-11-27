# Portafolio — Kevin Escorcia

Landing personal de una sola página construida con **React + Vite**, inspirada en el template
[Elias Portfolio](https://github.com/EliasDevis) (CC BY 4.0) y adaptada con tipografía
**Space Grotesk** y contenido propio.

## Secciones

- Hero con presentación y tarjeta de código
- Proyectos destacados
- Habilidades (lenguajes, frontend, backend, datos & IA, herramientas)
- Sobre mí
- Contacto
- Footer con créditos

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/portafolio/`.

## Build de producción

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

El sitio se publica desde la rama **`gh-pages`** (solo el build estático). Para actualizarlo:

```powershell
.\deploy.ps1
```

El script compila con Vite y sube `dist` a `gh-pages`:

**https://kevinlise.github.io/portafolio/**

> La rama `main` guarda el código fuente; `gh-pages` solo el sitio compilado.
> Si algún día usas un dominio propio, cambia `base: '/portafolio/'` por `base: '/'` en
> `vite.config.js`.

## Editar contenido

Casi todo el texto vive en `src/data.js`:

- `profile`: nombre, rol, correo, GitHub y LinkedIn.
- `projects`: tarjetas de proyectos.
- `skillGroups`: columnas de habilidades.
- `about`: párrafos de "Sobre mí".

## Estructura

```
├── deploy.ps1
├── index.html
├── src
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
└── vite.config.js
```

## Créditos

Diseño original: [Elias Portfolio](https://github.com/EliasDevis) — licencia CC BY 4.0.
