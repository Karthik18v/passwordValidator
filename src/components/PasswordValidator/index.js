import {useState} from 'react'

import {
  AppContainer,
  PassWordValidatorContainer,
  Title,
  Subtitle,
  PassWordInput,
  PasswordError,
} from './styledComponents'

const PasswordValidator = () => {
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setCount(prevCount => prevCount + 1)
    setPassword(event.target.value)
  }

  const showError =
    count >= 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <AppContainer>
      <PassWordValidatorContainer>
        <Title>Password Validator</Title>
        <Subtitle>Check how strong and secure is your password</Subtitle>
        <PassWordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <PasswordError>{showError}</PasswordError>
      </PassWordValidatorContainer>
    </AppContainer>
  )
}

export default PasswordValidator
