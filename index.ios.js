/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';
import DayItem from './src/day-item';

class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    )
  }
  days() {
    let daysItems = [];

    for (var i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} key={i} />
      )
    }
    return daysItems;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', () => Weekdays);