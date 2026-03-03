import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-ondevice-actions'

import InputField from './index'

storiesOf('InputField', module)
  .add('Default', () => (
    <InputField
      label="E-mail"
      placeholder="usuario@gmail.com"
      placeholderTextColor="#A7A7A7"
    />
  ))

  .add('Password', () => (
    <InputField
      label="Senha"
      placeholder="Digite sua senha"
      placeholderTextColor="#A7A7A7"
      secureTextEntry
    />
  ))

  .add('With long label', () => (
    <InputField
      label="Endereço de e-mail corporativo"
      placeholder="email@empresa.com"
      placeholderTextColor="#A7A7A7"
    />
  ))