import React from 'react';
import io from 'socket.io-client';
import { StyleSheet, View } from 'react-native';
import { Accelerometer } from 'expo';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { SERVER_URI, QueueRoute } from '../../constant';


class RaiseHand extends React.Component {
  state = {
    accelerometerData: {},
  }

  componentDidMount() {
    this._subscribe();

    const socket = io(SERVER_URI, {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('connected');
    });

    const { y } = this.state.accelerometerData;
    if (y > 0.7) {
      socket.emit('raisedHand', {
        student: this.props.state.user.First_name,
      });
    }
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener((accelerometerData) => {
      this.setState({ accelerometerData });
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    const { y } = this.state.accelerometerData;
    const className = this.props.state.selectSession.description || this.props.state.selectSession.className;

    return (
      <View style={styles.sensor}>
        <Text h3>{className || 'Class'}</Text>
        <Text h4>Lift up your phone to be added to the queue!</Text>
        <Text>y: {round(y)} </Text>
        <Text style={styles.red}>{y > 0.7 ? 'Added to the queue' : ''}</Text>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
  },
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(RaiseHand);


RaiseHand.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};