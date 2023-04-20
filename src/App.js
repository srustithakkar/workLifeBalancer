import React from 'react';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pointsReducer from './reducers/pointsReducer';

const store = createStore(pointsReducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
