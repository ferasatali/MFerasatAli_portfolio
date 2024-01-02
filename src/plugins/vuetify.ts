/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          border: '#1D1E3B',
          text: "#000000"
        },
      },
      dark:{
        colors:{
          primary: '#092122',
          secondary: '#113031',
          border: '#1D1E3B',
          text: '#778CBC',
          background: "#030016"
        }
      }
    },
  },
})
