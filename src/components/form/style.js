import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 20px 20px 0px 0px;
  position: absolute;
  bottom: 50;
  background-color: #552883;
`

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #FFFFFF;
` 

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #552883;
`