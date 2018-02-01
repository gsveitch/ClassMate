import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { StyleSheet, View, ScrollView, Image, FlatList, ImageBackground, Animated, Easing } from 'react-native';
import blackboard from '../../assets/blackboard.jpg';
import { SERVER_URI, SendBadges } from '../../constant';
import DashHeader from '../shared/Header';

class StudentBadges extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      badges: '',
    };

    this.renderImage = this.renderImage.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.animate = this.animate.bind(this);

    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentContainer: {
        flexGrow: 1,
      },
      item: {
        width: 310,
        height: 280,
      },
      view: {
        marginBottom: 40,
        alignItems: 'center',
      },
      buttonAdd: {
        marginBottom: 30,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 300,
      },
      video: {
        width: 310,
        height: 210,
      },
      text: {
        color: '#f4d35e',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
      },
      button: {
        marginTop: 10,
        height: 30,
        width: 310,
        backgroundColor: 'red',
        opacity: 0.6,
        alignSelf: 'center',
      },
      link: {
        color: '#0d3b66',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
  }

  componentDidMount() {
    const studentID = this.props.state.selectSession.participantID;
    axios.get(`${SERVER_URI}${SendBadges}`, {
      params: {
        studentID,
      },
    })
      .then((res) => {
        this.setState({ badges: res.data });
      })
      .catch(err => console.error(err));

    this.animate(Easing.bounce);
  }

  animate(easing) {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing,
      },
    ).start();
  }

  keyExtractor = item => item.link;

  renderImage(item) {
    return (
      <View style={this.styles.view}>
        <Icon
          color="white"
          name="rocket"
          size={50}
        />
      </View>
    );
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260],
    });
    const className = this.props.state.selectSession.sessionName;

    const list = this.state.fun;
    const imageList = list.length > 0 ? list.filter(item => item.type === 'image') : [];

    return (
      <ImageBackground
        source={blackboard}
        style={{
          backgroundColor: '#000000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <DashHeader
          navigation={this.props.navigation}
          className={className}
          back
        />
        <View style={this.styles.container}>
          <ScrollView
            contentContainerStyle={this.styles.contentContainer}
            scrollEnabled
          >
            <Text
              h3
              style={this.styles.text}
            >
              Student Badges
            </Text>

            <Animated.View
              style={[
                { marginLeft },
              ]}
            >
              <Icon
                color="white"
                name="rocket"
                size={30}
              />
            </Animated.View>

            <FlatList
              contentContainerStyle={this.styles.container}
              renderItem={({ item }) => this.renderImage(item)}
              data={imageList}
              keyExtractor={this.keyExtractor}
            />

          </ScrollView>
        </View>
      </ImageBackground>

    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(StudentBadges);
StudentBadges.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
