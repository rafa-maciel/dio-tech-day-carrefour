import { Provider } from 'react-redux';
import './App.css'
import Main from "./containers/Main";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
