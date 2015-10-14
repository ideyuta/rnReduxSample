import React from 'react-native';
import {Provider} from 'react-redux/native';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import CounterApp from './counterApp';

const store = createStore(rootReducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}
