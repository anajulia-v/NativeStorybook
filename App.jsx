import styled from 'styled-components/native';

import Form from './src/components/form';
import InputField from './src/components/inputField';

import StorybookUIRoot from './.storybook'
const ShowStorybook = true

const AppContainer = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <Form buttonTitle="Entrar">
        <InputField label="E-mail" placeholder="Digite seu e-mail" placeholderTextColor="#A7A7A7"/>
        <InputField label="Senha" placeholder="Digite sua senha" placeholderTextColor="#A7A7A7" secureTextEntry={true}/>
      </Form>
    </AppContainer>
  )
}

export default ShowStorybook ? StorybookUIRoot : App
