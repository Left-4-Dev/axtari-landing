/**
 * gsap.setup.ts
 * -------------
 * Punto de entrada único para GSAP en el proyecto.
 *
 * Importar siempre desde aquí:
 *   import { gsap, ScrollTrigger } from "@lib/animations/gsap.setup";
 *
 * Nunca llamar gsap.registerPlugin() en componentes individuales.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip);

export { gsap, ScrollTrigger, ScrollSmoother, Flip };
