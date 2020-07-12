import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { ADD, DELETE, ONCHANGE } from "../redux/store";
import { DispatchOfTypes } from "../types/types";

const Div = styled.div`
  color: red;
  font-size: 50px;
`;

interface IState {
  changeText: string;
  todos: any[];
}
interface TodosObject {
  id: string;
  text: string;
}

const App: React.FunctionComponent = () => {
  const dispatch: DispatchOfTypes = useDispatch();
  const { changeText, todos } = useSelector((state: IState) => state);

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(ONCHANGE(value));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(ADD(changeText));
    dispatch(ONCHANGE(""));
  };
  const onDelete = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    dispatch(DELETE(id));
  };
  return (
    <Div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={changeText} />
        <button>Todo!</button>
      </form>
      <ul>
        {todos.map((i: TodosObject) => (
          <li key={i.id}>
            {i.text}
            <button onClick={onDelete} id={i.id}>
              del
            </button>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default App;
