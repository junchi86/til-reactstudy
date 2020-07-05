import { ADD_TODO, DELETE_TODO, ONCHANGE_TODO } from './action'

const initialState = { todos: [], onChange: '' }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state = { ...state, todos: [...state.todos, { id: action.id, text: action.text }] }
        case DELETE_TODO:
            return state = { ...state, todos: state.todos.filter(i => (Number(action.id) !== Number(i.id))) }
        case ONCHANGE_TODO:
            return state = { ...state, onChange: action.onChange }
        default:
            return state
    }
}
export default reducer