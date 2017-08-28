import List from '../components/list';
import { connect } from 'react-redux';
import { completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function mapStateToProps(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.filter)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    completeTodos: (index) => {
      dispatch(completeTodo(index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)