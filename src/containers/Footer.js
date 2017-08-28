import Footer from '../components/footer';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import './Footer.css'

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)