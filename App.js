import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BreweryScreen from "./src/screens/BreweryScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Brewery: BreweryScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BrewBuzz",
    },
  }
);

export default createAppContainer(navigator);