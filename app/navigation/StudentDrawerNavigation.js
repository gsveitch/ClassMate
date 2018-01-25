import { DrawerNavigator } from 'react-navigation';
import StudentDashboardNavigation from './StudentDashboardNavigation';
import StudentClassNavigation from './StudentClassNavigation';
import StudentDrawer from '../components/student/StudentDrawer';
import CheckIn from '../components/student/CheckIn';
import EmergencyContact from '../components/teacher/EmergencyContact';
import JoinClassContainer from '../containers/JoinClassContainer';

const StudentDrawerNavigator = DrawerNavigator({
  StudentDashboardNavigation: {
    screen: StudentDashboardNavigation,
  },
  StudentClassNavigation: {
    screen: StudentClassNavigation,
  },
  JoinClass: {
    screen: JoinClassContainer,
  },
  CheckIn: {
    screen: CheckIn,
  },
  EmergencyContact: {
    screen: EmergencyContact,
  },
}, {
  contentComponent: StudentDrawer,
  drawerWidth: 200,
});

export default StudentDrawerNavigator;
