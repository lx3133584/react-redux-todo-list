import Add from '../components/add';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Add)
