import { connect } from 'react-redux'
import Info from '../../components/desktop/Info'

export default connect(
  state => ({
    email: state.me.email,
    profile: state.me.profile
  })
)(Info)
