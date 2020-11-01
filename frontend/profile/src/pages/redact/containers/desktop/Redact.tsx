import { connect } from 'react-redux'
import { change, redact } from '../../../redact/actions'
import Redact from '../../../redact/components/desktop/Redact'

export default connect(
  state => ({
    email: state.me.email,
    profile: state.me.profile,
    mail: state.redact.email,
    firstName: state.redact.firstName,
    lastName: state.redact.lastName,
    errors: state.redact.errors
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onRedact: (history) => dispatch(redact(history)),
  })
)(Redact)
