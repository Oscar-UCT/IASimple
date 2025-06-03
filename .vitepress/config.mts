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
      { text: 'Artículos', link: '/articulos/cómo-usar' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: 'Cómo usar este sitio', link: '/articulos/cómo-usar' },
          { text: 'Mejores prácticas', link: '/articulos/mejores-prácticas' },
        ]
      },
      {
        text: 'Prompting',
        items: [
          { text: 'Creando una guía de trabajo', link: '/articulos/prompting/creando-una-guía-de-trabajo' },
          { text: 'Debates contra la IA', link: '/articulos/prompting/debates-contra-la-ia' },
          { text: 'Simulaciones de clientes', link: '/articulos/prompting/simulaciones-de-clientes' },
          { text: 'Ideas para actividades', link: '/articulos/prompting/ideas-para-actividades' },
          { text: 'Buscando bibliografía', link: '/articulos/prompting/buscando-bibliografía' },
        ]
      },
      {
        text: 'Material',
        items: [
          { text: 'Resumir documentos', link: '/articulos/material/resumir-documentos' },
          // { text: 'Adaptando contenido', link: '/articulos/material/adaptando-contenido' },
          { text: 'Crear presentaciones', link: '/articulos/material/crear-presentaciones' },
          // { text: 'Transcripción de audio', link: '/articulos/material/transcripción-de-audio' },
        ]
      },
      {
        text: 'Sobre nosotros',
        items: [
          { text: 'Preguntas Frecuentes', link: '/articulos/preguntas-frecuentes' },
        ]
      }
    ],

    outline:
    {
      label: "Contenido",
    },

    docFooter:
    {
      prev: "Artículo anterior",
      next: "Siguiente artículo"
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
  },
  markdown:
  {
    container: {
      infoLabel: 'Información',
      tipLabel: 'Consejo',
      warningLabel: 'Advertencia',
      dangerLabel: 'Peligro',
      detailsLabel: 'Detalles'
    }
  },
})
