export const initialState = {
    todos: [
        {
            item: 'Learn Reducers',
            completed: false,
            id: 3892987589
          },
        {
            item: 'Learn Redux',
            completed: false,
            id: 3892987590
          },
        {
            item: 'Learn Async',
            completed: false,
            id: 3892987591
          },
        {
            item: 'Learn Context API',
            completed: false,
            id: 3892987592
          }
    ]
}

export const todoReducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                
            };
        case 'TOGGLE_TODO':
            console.log('state', state)
            console.log('action', action)
            console.log('payload', action.payload)
           const toggled = state.todos.map(task => task.id === action.payload ?  {...task, completed: !task.completed} : task);
           return {
               ...state,
               todos: toggled
           }
        case 'CLEAR_TODOS':
            console.log('state', state)
            console.log('action', action)
            const cleared = state.todos.filter(task => task.completed === false);
            return {
                ...state,
                todos: cleared
            } 
        default:
            return state;
    }
}