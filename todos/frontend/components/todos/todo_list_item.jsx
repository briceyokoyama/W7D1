import React from 'react';

export default ({todo}) => (
  <ul>
    <li>
      Title: {todo.title}
    </li>
    <li>
      Body: {todo.body}
    </li>
  </ul>
)

