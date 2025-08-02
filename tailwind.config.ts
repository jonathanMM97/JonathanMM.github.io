import { type Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        roboto: ['Roboto', 'Inter', 'sans-serif']
      },
      colors: {
        primary: '#2E3532',
        secondary: '#E0E2DB',
        red: '#8B2635',
        gray: '#D2D4C8',
        green: '#D3EFBD'
      }
    }
  }
}

export default config
