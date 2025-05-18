import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IASimple",
  lang: "es-CL",
  description: "Aprende IA de forma sencilla",
  head: [['link', { rel: 'icon', href: '/cohete_icono.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Artículos', link: '/introducción' }
    ],

    sidebar: [
      {
        text: 'Artículos',
        items: [
          { text: 'Introducción', link: '/introducción' },
        ]
      },
      {
        text: 'Sobre nosotros',
        items: [
          { text: 'Preguntas Frecuentes', link: '/preguntas-frecuentes' },
        ]
      }
    ],

    outline:
    {
      label: "Contenido",
    },

    logo: "../cohete_icono.svg",

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar'
          },
          modal: {
            displayDetails: 'Mostrar lista detallada',
            resetButtonTitle: 'Restablecer búsqueda',
            backButtonTitle: 'Cerrar búsqueda',
            noResultsText: 'Sin resultados',
            footer: {
              selectText: 'Seleccionar',
              selectKeyAriaLabel: 'Enter',
              navigateText: 'Navegar',
              navigateUpKeyAriaLabel: 'Flecha arriba',
              navigateDownKeyAriaLabel: 'Flecha abajo',
              closeText: 'Cerrar',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oscar-uct/iasimple' }
    ]
  }
})
