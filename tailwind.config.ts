import { type Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        roboto: ['Roboto', 'Inter', 'sans-serif']
      },
      colors: {
        onyx: '#2E3532',
        alabasterWhite: '#E0E2DB',
        claretRed: '#8B2635',
        timberwolfGray: '#D2D4C8',
        teaGreen: '#D3EFBD'
      }
    }
  }
}

export default config
