import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends React.Component {
  propTypes: {
    count:       React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.string.isRequired,
    onDecrement: React.PropTypes.string.isRequired
  }
  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return(
      <div>
        カウント: {count}回
        <br />
        <button onClick={onIncrement}>++</button>
        <button onClick={onDecrement}>--</button>
      </div>
    );
  }
}

// Actions
const INCREMENT_COUNTER = {
  type: 'INCREMENT_COUNTER'
};
const DECREMENT_COUNTER = {
  type: 'DECREMENT_COUNTER'
};

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch(action.type) {
  case 'INCREMENT_COUNTER':
    return { count: state.count + 1 };
  case 'DECREMENT_COUNTER':
    return { count: state.count - 1 };
  default:
    return state;
  }
}

// Store
const store = createStore(counterReducer);

function mapStateToProps(state) {
  return { count: state.count };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() { return dispatch(INCREMENT_COUNTER); },
    onDecrement() { return dispatch(DECREMENT_COUNTER); }
  };
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
