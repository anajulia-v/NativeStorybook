import Form from './src/components/form';
import styled from 'styled-components/native';
import InputField from './src/components/inputField';

const AppContainer = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <AppContainer>
      <Form buttonTitle="Entrar">
        <InputField label="E-mail" placeholder="usuario@gmail.com" placeholderTextColor="#A7A7A7"/>
        <InputField label="Senha" placeholder="******" placeholderTextColor="#A7A7A7"/>
      </Form>
    </AppContainer>
  )
}

