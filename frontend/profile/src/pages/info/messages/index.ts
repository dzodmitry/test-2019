import { defineMessages } from 'react-intl'

const namespace: string = 'profile.info'

export default defineMessages({
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
