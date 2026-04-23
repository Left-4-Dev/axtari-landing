/**
 * asset.utils.ts
 * --------------
 * Helpers para construir rutas de assets públicos.
 *
 * Centraliza las rutas de public/ para que un cambio en la
 * estructura de carpetas solo requiera editar este archivo.
 *
 * Uso:
 *   import { sectionImage, iconSocial, iconBrand } from "@lib/utils/asset.utils";
 *
 *   sectionImage("buyers", "buyer1.svg")  → "/images/sections/buyers/buyer1.svg"
 *   iconSocial("facebook.svg")            → "/icons/social/facebook.svg"
 *   iconBrand("Logo.svg")                 → "/icons/brand/Logo.svg"
 */

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, ""); // Eliminar slash final si existe

const BASE_IMAGES   = `${BASE_URL}/images`;
const BASE_ICONS    = `${BASE_URL}/icons`;
const BASE_SECTIONS = `${BASE_IMAGES}/sections`;
const BASE_UI       = `${BASE_IMAGES}/ui`;

/** Imagen de una sección específica */
export const sectionImage = (section: string, filename: string): string =>
  `${BASE_SECTIONS}/${section}/${filename}`;

/** Asset decorativo de UI reutilizable entre secciones */
export const uiImage = (filename: string): string =>
  `${BASE_UI}/${filename}`;

/** Icono de red social (footer) */
export const iconSocial = (filename: string): string =>
  `${BASE_ICONS}/social/${filename}`;

/** Logo o variante de marca */
export const iconBrand = (filename: string): string =>
  `${BASE_ICONS}/brand/${filename}`;

/** Icono de contacto (footer) */
export const iconContact = (filename: string): string =>
  `${BASE_ICONS}/contact/${filename}`;

/** Ruta del sprite SVG principal */
export const SPRITE_URL = `${BASE_URL}/assets/sprite.svg`;

/** Construye el href para un símbolo del sprite */
export const spriteIcon = (id: string): string => `${SPRITE_URL}#${id}`;
