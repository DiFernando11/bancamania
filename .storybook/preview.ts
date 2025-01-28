import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import '../src/shared/styles/typography.css'
import './styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
