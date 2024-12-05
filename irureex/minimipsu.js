import { useReducer } from 'react';

const initialState = {
  data: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => dispatch({ type: 'UPDATE_DATA', data }));
  };

  return (
    <div>
      {state.loading ? <p>Loading...</p> : <p>Data: {state.data}</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};
