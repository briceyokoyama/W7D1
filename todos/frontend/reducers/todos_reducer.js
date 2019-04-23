import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions'
import {merge} from 'lodash';

// Not sure about the line below:
import {allTodos} from './selectors';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const todos = {};
      action.todos.forEach(todo => {todos[todo.id] = todo})
      return merge({}, state, todos);
    case RECEIVE_TODO:
      const todo = {};
      todo[action.todo.id] = action.todo
      return merge({}, state, todo);
    default:
      return state;
  }
};