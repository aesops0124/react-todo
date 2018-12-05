const initialState = { 
    todos: []
  };
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "TODOS":
        console.log(state.todos)
        let newTodo = [];
        newTodo = state.todos.concat(payload);
        return {...state, todos: newTodo};
            
        default:
        return state;
    }
};

// addNewTodo = newTodo => {
//     this.state.todos.push(newTodo)
//     this.setState({todos: this.state.todos})