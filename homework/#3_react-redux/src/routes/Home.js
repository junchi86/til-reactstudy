import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ONCHANGE_TODO, ADD_TODO, DELETE_TODO } from '../redux/action'

const Home = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const onChange = (e) => {
        e.preventDefault()
        const onChangeText = e.target.value
        dispatch({ type: ONCHANGE_TODO, onChange: onChangeText })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ADD_TODO, id: Date.now(), text: state.onChange })
    }
    const onDelete = (e) => {
        e.preventDefault()
        dispatch({ type: DELETE_TODO, id: e.target.id })
    }
    console.log(state)
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={state.onChangeText} onChange={onChange} />
                <button>
                    ADD
                </button>
            </form>
            <ul>
                {state.todos?.map(i => <li key={i.id}>{i.text} <button id={i.id} onClick={onDelete} >del</button></li>)}
            </ul>
        </>
    )
}

export default Home