import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const redact = (history) => async (dispatch, getState, client) => {
  const { email, firstName, lastName } = getState().redact
  const me = getState().me

  if (me.email === email && firstName === me.profile.firstName && lastName === me.profile.lastName) {
    dispatch({
      type: actions.clear,
    })
    history.push('/profile')
    return
  }

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query ChangeProfile($email: String!, $firstName: String!, $lastName: String!) {
          login(email: $email, firstName: $firstName, lastName: $lastName) {
            token {
              token
              expiresIn
            }
            errors {
              email,
              profile,
            }
          }
        }
      `,
      variables: {
        email,
        firstName,
        lastName
      },
    })

    if (!data.redact.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.redact.errors,
      })
    }

    dispatch({
      type: actions.set,
      user: {
        email: email,
        profile: {
          firstName,
          lastName
        }
      }
    })

    history.push('/profile')
    dispatch({
      type: actions.clear,
    })
  } catch (e) {
    dispatch({
      type: actions.setErrors,
      errors: {message: e.message},
    })
  }
}
