import { defineMessages } from 'react-intl'

const namespace: string = 'profile.redact'

export default defineMessages({
  title: {
    id: `${namespace}.title`,
    defaultMessage: 'Редактирование профиля',
  },
  enterLastName: {
    id: `${namespace}.enter_lastName`,
    defaultMessage: 'Введите вашу фамилию',
  },
  enterFirstName: {
    id: `${namespace}.enter_firstName`,
    defaultMessage: 'Введите ваше имя',
  },
  enterEmail: {
    id: `${namespace}.enter_email`,
    defaultMessage: 'Введите ваш email',
  },
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'Имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Фамилия',
  },
  email: {
    id: `${namespace}.email`,
    defaultMessage: 'Почта',
  },
  redact: {
    id: `${namespace}.redact`,
    defaultMessage: 'Редактировать',
  },
  back: {
    id: `${namespace}.back`,
    defaultMessage: 'Назад',
  },
})
