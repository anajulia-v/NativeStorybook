import { ButtonContainer, ButtonTitle, Container } from "./style";

export default function Form({children, buttonTitle}) {
  return(
    <Container>
      {children}
      <ButtonContainer>
        <ButtonTitle>{buttonTitle}</ButtonTitle>
      </ButtonContainer>
    </Container>
  )
}