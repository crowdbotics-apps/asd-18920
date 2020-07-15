import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps78910Navigator from '../features/Maps78910/navigator';
import Add-Item78909Navigator from '../features/Add-Item78909/navigator';
import Maps78905Navigator from '../features/Maps78905/navigator';
import UserProfile78901Navigator from '../features/UserProfile78901/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps78910: { screen: Maps78910Navigator },
Add-Item78909: { screen: Add-Item78909Navigator },
Maps78905: { screen: Maps78905Navigator },
UserProfile78901: { screen: UserProfile78901Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
