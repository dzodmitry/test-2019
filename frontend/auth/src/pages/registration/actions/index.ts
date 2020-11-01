import gql from 'graphql-tag'
import { auth } from '@frontend/common/src/constants/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  const stub = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    expiresIn: 1565448328,
  }

  try {
    const { data } = await client.mutate({
      mutation: gql`
          mutation Register($input: RegisterUserInput!) {
            register(input: $input) {
              errors {
                email
                password
              }
            }
          }
        `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })
    if (!data.register.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.register.errors,
      })
    }
    dispatch({
      type: actions.clear,
    })
  }
  catch (e) {
    dispatch({
      type: auth,
      token: stub.token,
      expiresIn: stub.expiresIn,
    })

    dispatch({
      type: actions.setErrors,
      errors: { message: e.message },
    })

  }
}

export const clear = () => ({
  type: actions.clear,
})
