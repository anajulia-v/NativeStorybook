import { storiesOf } from "@storybook/react-native";
import Form from '.'
import InputField from '../inputField'

storiesOf('Form', module)
  .add('Login Form', () => (
    <Form buttonTitle="Entrar">
      <InputField
        label="E-mail"
        placeholder="Digite seu e-mail"
        placeholderTextColor="#A7A7A7"
      />
      <InputField
        label="Senha"
        placeholder="Digite sua senha"
        placeholderTextColor="#A7A7A7"
        secureTextEntry={true}
      />
    </Form>
  ))

