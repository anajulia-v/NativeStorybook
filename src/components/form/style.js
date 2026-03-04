import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 1px solid #A7A7A7;
  border-radius: 10px;
`

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #A7A7A7;
  border-radius: 10px;
` 

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #A7A7A7;
`