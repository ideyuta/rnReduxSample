import React from 'react-native';
import {connect} from 'react-redux/native';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/action';
import CounterPage from '../components/CounterPage';


class CounterApp extends React.Component {

  static propTypes = {
    count: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);
    return (
      <CounterPage
        count={this.props.count}
        onPressDecrement={actions.decrement}
        onPressIncrement={actions.increment}
      />
    );
  }
}

/**
 * state を整形
 *
 * @param {Object} state state
 * @return {Object}
 */
function mapStateToProps(state) {
  return {count: state.count};
}

export default connect(mapStateToProps)(CounterApp);
