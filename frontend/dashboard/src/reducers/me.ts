import { createReducer } from '@utils/reducer'
import * as actions from '../constants/me'
import { set } from '@frontend/profile/src/pages/redact/constants/'

const initialState = {
  id: '',
  email: '',
  profile: {
    firstName: '',
    lastName: '',
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { user }) => ({ ...state, ...user }),
  [set]: (state, { user }) => ({ ...state, ...user }),
  [actions.clear]: () => initialState,
})
