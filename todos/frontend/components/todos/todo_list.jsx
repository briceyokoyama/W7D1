import React from 'react';
import TodoListItem from './todo_list_item';

export default ({todos, receiveTodos}) => (
  todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)
);

