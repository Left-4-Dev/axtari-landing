# 🏗️ Axtari Landing Page

¡Bienvenido al repositorio de la Landing Page oficial de **Axtari**! Este proyecto es una plataforma de alto rendimiento diseñada para conectar industrias con proveedores certificados, enfocada en la eficiencia, seguridad y escalabilidad.

## 🚀 Tecnologías Principales

- **[Astro 6](https://astro.build/)**: Framework web para una carga ultra rápida y una arquitectura orientada a componentes.
- **[GSAP (GreenSock)](https://greensock.com/)**: Motor de animaciones líder para experiencias visuales premium y fluidas.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto y mantenible.
- **CSS3 (Custom System)**: Sistema modular de estilos basado en Design Tokens.

## 🛠️ Arquitectura y Organización

El proyecto sigue una estructura modular inspirada en **Clean Architecture**:

- **`src/components/sections/`**: Componentes de dominio específicos para cada sección de la landing.
- **`src/components/ui/`**: Componentes atómicos y reutilizables (Botones, Cards, etc.).
- **`src/data/`**: Centralización de contenido y configuración de datos puros.
- **`src/lib/`**: Lógica de animaciones GSAP centralizada y utilidades de sistema.
- **`src/styles/`**: Sistema de diseño dividido en Tokens, Tipografía y Layout Global.

## 📦 Instalación y Desarrollo Local

Este proyecto utiliza **pnpm** para la gestión de dependencias.

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Left-4-Dev/axtari-landing.git
   ```

2. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   El sitio estará disponible en `http://localhost:4321/`.

## 🚢 Despliegue

El proyecto cuenta con un flujo automatizado de **GitHub Actions** (`.github/workflows/deploy.yml`).

Cada vez que se realiza un `push` a la rama `main`, el sitio se construye y despliega automáticamente en **GitHub Pages**.

---

Desarrollado con ❤️ por el equipo de Left4Dev.
