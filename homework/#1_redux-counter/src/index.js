import { createStore } from 'redux'



const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const result = document.getElementById('num')

const PLUS = 'PLUS'
const MINUS = 'MINUS'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case PLUS: {
            state = state + 1
            return state
        }
        case MINUS: {
            state = state - 1
            return state
        }
        default:
            return state
    }
}

const store = createStore(reducer)
const plusF = (e) => {
    e.preventDefault()
    store.dispatch({ type: PLUS })
}
const minusF = (e) => {
    e.preventDefault()
    store.dispatch({ type: MINUS })
}

const log = () => result.innerText = store.getState()
store.subscribe(log)

plus.addEventListener('click', plusF)
minus.addEventListener('click', minusF)