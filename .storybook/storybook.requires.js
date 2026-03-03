import { configure } from '@storybook/react-native'

configure(() => {
  require('../src/components/inputField/Input.stories.js')
  require('../src/components/form/Form.stories.js')
}, module)