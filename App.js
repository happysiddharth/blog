import React from 'react';
import {createAppContainer,createStackNavigator} from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import {Provider} from './src/context/BlogContext';

const navigator = createStackNavigator(
    {
      Home: IndexScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Blog'
      }
    }
);

const App =  createAppContainer(navigator);

export default ()=>{
  return <Provider><App/></Provider>;
};
