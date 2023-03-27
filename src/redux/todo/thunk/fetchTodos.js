import { loadedTodo } from "../action";

const fetchTodo = async (dispatch) => {
  const response = await fetch("https://todos-server-vxdl.onrender.com/todos");
  const todos = await response.json();

  dispatch(loadedTodo(todos));
};

export default fetchTodo;
