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

1. Crea un repositorio **público** llamado `portafolio` en tu cuenta.
2. Sube el proyecto a la rama `main`.
3. En el repo: **Settings → Pages → Source: GitHub Actions**.
4. Cada push a `main` publica el sitio con el workflow de `.github/workflows/deploy.yml`.

URL resultante: `https://kevinlise.github.io/portafolio/`

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
├── .github/workflows/deploy.yml
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
