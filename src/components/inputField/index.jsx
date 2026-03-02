import { Container, Label, Input } from "./style";

export default function InputField(props) {
  return(
    <Container>
      <Label>{props.label}</Label>
      <Input
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  )
}