import { createStore } from 'redux'
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state = [...state, { text: action.text, id: Date.now() }]

        case DELETE_TODO:
            return state = state.filter(i => Number(i.id) !== Number(action.id))
        default:
            return state
    }
}

const store = createStore(reducer)

const addTodo = (text) => store.dispatch({ type: ADD_TODO, text })

const submitTodo = (e) => {
    e.preventDefault()
    const inputText = input.value
    input.value = ''
    return addTodo(inputText)
}

const createLi = (text, id) => {
    const li = document.createElement('li')
    li.innerText = text
    li.id = id
    const del = document.createElement('button')
    del.innerText = 'del'
    const deleteTodo = () => store.dispatch({ type: DELETE_TODO, id: del.parentNode.id })
    del.addEventListener('click', deleteTodo)
    li.appendChild(del)
    return ul.appendChild(li)
}

const paintTodo = () => {
    ul.innerHTML = ''
    const state = store.getState()
    return state.map(i => createLi(i.text, i.id))
}

store.subscribe(paintTodo)

form.addEventListener('submit', submitTodo)