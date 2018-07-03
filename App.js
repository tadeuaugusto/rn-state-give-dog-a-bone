/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class App extends Component {

  state = {
      happy: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Give Dog A Bone!
        </Text>
        <Text style={styles.instructions}>
          Simple app to illustrate the use of 'state' for data management
        </Text>
        <Image
          // Change an image depending on state
          source={{ uri: this.state.happy 
                    ? 'https://i.imgur.com/LNKc5V3.jpg'
                    : 'https://i.imgur.com/74KCGU8.jpg' }}
          style={{ width: 300, height: 300 }}
        />
        <TouchableHighlight
            underlayColor='#4FAD54'
            style={styles.buttonWrapper}
            onPress={() => {
              // Change state value to the opposite of current one
              this.setState({ happy: !this.state.happy });
            }} >
            <Text style={styles.button}>{this.state.happy
                                          ? 'Take that bone away'
                                          : 'Give her a bone' }
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonWrapper: {
    backgroundColor: '#8BC051',
    borderRadius: 4,
    margin: 60,
    padding: 15
  },
  button: {
    color: '#ffffff',
    fontSize: 18,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
