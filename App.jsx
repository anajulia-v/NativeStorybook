import Form from './src/components/form';
import styled from 'styled-components/native';
import InputField from './src/components/inputField';

import StorybookUIRoot from './.storybook'
const ShowStorybook = false

const AppContainer = styled.SafeAreaView`
  flex: 1;
`

function App() {
  return (
    <AppContainer>
      <Form buttonTitle="Entrar">
        <InputField label="E-mail" placeholder="usuario@gmail.com" placeholderTextColor="#A7A7A7"/>
        <InputField label="Senha" placeholder="******" placeholderTextColor="#A7A7A7"/>
      </Form>
    </AppContainer>
  )
}

export default ShowStorybook ? StorybookUIRoot : App
