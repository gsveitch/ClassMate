import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';

import dummyData from './DUMMYDATA';//<---DEV

export default class TeacherDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: dummyData.email,
      nameFirst: dummyData.nameFirst,
      nameLast: dummyData.nameLast,
      photoUrl: dummyData.photoUrl,
      sessions: dummyData.sessions,
      assignments: dummyData.assignments,
    };
  }

  componentDidMount() {
    console.log('HERE IS THEE STATE !!!\n', this.state);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    const { email, nameFirst, nameLast, photoUrl, sessions, assignments } = this.state;
    return (
      <View style={styles.container}>
        <Text h1>Class Mate</Text>
        <Text h2>Teacher Dashboard</Text>
        <Image source={{uri: `${photoUrl}`}} />
        <Text h3>{`Mr. ${nameFirst} ${nameLast}`}</Text>
        <Text h4>{email}</Text>
        <Text h2>Your Class Schedule</Text>
        {sessions.map((sesh) => {
          const { id, description, googleCal } = sesh;
          return (
            <View key={id}>
              <Text h4>{description}</Text>
              <Text h6>{googleCal}</Text>
            </View>
          );
        })}
        <Text h2>Upcoming Due Dates</Text>
        {assignments.map((ass) => {
          const { id, title, session, dueDate } = ass;
          return (
            <View key={id}>
              <Text h4>{title}</Text>
              <Text h5>{dueDate}</Text>
              <Text h6>{session}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
