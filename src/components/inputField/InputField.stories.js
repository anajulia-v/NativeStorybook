import { storiesOf } from "@storybook/react-native";
import InputField from ".";

storiesOf("InputField", module)
  .add("Default", () => (
    <InputField
      label="E-mail"
      placeholder="Digite seu e-mail"
      placeholderTextColor="#A7A7A7"
    />
  ))

  .add("Password", () => (
    <InputField
      label="Senha"
      placeholder="Digite sua senha"
      placeholderTextColor="#A7A7A7"
      secureTextEntry={true}
    />
  ));
