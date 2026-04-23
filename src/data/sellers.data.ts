import { sectionImage } from "@lib/utils/asset.utils";

export const sellerCards = [
  {
    number: "01",
    icon: "onboarding-icon",
    title: "CUENTA DEL PROVEEDOR",
    image: sectionImage("sellers", "seller1.svg"),
    active: true,
    items: [
      {
        label: "PERSONALIZACIÓN",
        descriptions: [
          "Opciones para adaptar el espacio de acuerdo a tu imagen de marca.",
        ],
      },
      {
        label: "VERIFICACIÓN",
        descriptions: [
          "Muestra tu ISO y tus certificaciones de calidad.",
        ],
      },
      {
        label: "CONEXIÓN",
        descriptions: [
          "Facilita la comunicación entre el cliente y el proveedor mediante mensajes internos y llamadas.",
        ],
      },
    ],
  },
  {
    number: "02",
    icon: "listing-icon",
    title: "GESTIÓN DE PRODUCTOS",
    image: sectionImage("sellers", "seller2.svg"),
    light: true,
    items: [
      {
        label: "EXPOSICIÓN",
        descriptions: [
          "Exhibe tus productos en un espacio digital.",
        ],
      },
      {
        label: "EDICIÓN",
        descriptions: [
          "Sube fotos o videos del producto.",
          "Edita los precios y descuentos.",
          "Modifica el stock disponible.",
          "Clasifícalos por modelo, tamaño, entre otras características.",
        ],
      },
    ],
  },
  {
    number: "03",
    icon: "management-icon",
    title: "ANÁLISIS Y REPORTE",
    image: sectionImage("sellers", "seller3.svg"),
    light: true,
    items: [
      {
        label: "MÉTRICAS",
        descriptions: [
          "Visualiza información clave para tu gestión comercial.",
        ],
      },
      {
        label: "RENDIMIENTO",
        descriptions: [
          "Identifica productos y acciones con mayor impacto.",
        ],
      },
      {
        label: "MEJORA",
        descriptions: [
          "Optimiza decisiones con datos concretos.",
        ],
      },
    ],
  },
  {
    number: "04",
    icon: "fulfillment-icon",
    title: "COMUNICACIÓN COMERCIAL",
    image: sectionImage("sellers", "seller4.svg"),
    light: true,
    items: [
      {
        label: "MENSAJES",
        descriptions: [
          "Atiende consultas y oportunidades en un solo lugar.",
        ],
      },
      {
        label: "SEGUIMIENTO",
        descriptions: [
          "Mantén el contacto con potenciales compradores.",
        ],
      },
      {
        label: "RELACIÓN",
        descriptions: [
          "Fortalece la comunicación durante todo el proceso.",
        ],
      },
    ],
  },
];