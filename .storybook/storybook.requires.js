import { configure } from '@storybook/react-native'

configure(() => {
  require('../components/inputField/Input.stories')
  require('../components/form/Form.stories')
}, module)