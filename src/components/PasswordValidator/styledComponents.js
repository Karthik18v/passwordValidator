import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const PassWordValidatorContainer = styled.div`
  background-color: #475569;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin-bottom: 0px;
  font-family: 'Roboto';
`

export const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 10px;
  margin-bottom: 30px;
`

export const PassWordInput = styled.input`
  height: 30px;
  width: 75%;
`
export const PasswordError = styled.p`
  color: red;
  font-size: 10px;
`
