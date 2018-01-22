import { StackNavigator } from 'react-navigation';
import StudentLogin from '../components/student/StudentLogin';
import TeacherLogin from '../components/teacher/TeacherLogin';
import FirstPage from '../components/FirstPage';
import StudentDrawerNavigation from './StudentDrawerNavigation';
import TeacherDrawerNavigation from './TeacherDrawerNavigation';


const LoginNavigation = StackNavigator({
  Home: {
    screen: FirstPage,
  },
  StudentLogin: {
    screen: StudentLogin,
  },
  TeacherLogin: {
    screen: TeacherLogin,
  },
  StudentDrawerNavigation: {
    screen: StudentDrawerNavigation,
    navigationOptions: () => ({
      header: null,
    }),
  },
  TeacherDrawerNavigation: {
    screen: TeacherDrawerNavigation,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default LoginNavigation;
