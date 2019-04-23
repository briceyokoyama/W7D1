 import React from 'react';

 class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: ""
    }
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    return (
    <form>
      <label >
        <input
          type="text"
          value=
        />
      </label>
    </form>
    )
  }

 }

 export default TodoForm;