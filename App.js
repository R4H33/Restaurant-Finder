import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './View/screens/SearchScreen';
import ResultsShowScreen from './View/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Finder'
    }
  });

  export default createAppContainer(navigator);