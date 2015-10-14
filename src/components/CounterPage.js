import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import NavButton from '../components/NavButton';

const styles = StyleSheet.create({
  count: {
    fontSize: 30,
    paddingTop: 180,
    paddingBottom: 40,
    textAlign: 'center'
  },
  view: {
    backgroundColor: '#fff',
    flex: 1
  },
  btnGroup: {
    flexDirection: 'row'
  }
});


export default class CounterPage extends React.Component {

  static propTypes = {
    count: React.PropTypes.object.isRequired,
    onPressDecrement: React.PropTypes.func.isRequired,
    onPressIncrement: React.PropTypes.func.isRequired
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.count}>{this.props.count.num}</Text>
        <View style={styles.btnGroup}>
          <NavButton
            label="-"
            onPress={this.props.onPressDecrement}
          />
          <NavButton
            label="+"
            onPress={this.props.onPressIncrement}
          />
        </View>
      </View>
    );
  }
}
