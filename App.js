import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BreweryScreen from "./src/screens/BreweryScreen";
import UserScreen from "./src/screens/UserScreen";
import SearchScreen from "./src/screens/SearchScreen";
import NearbyScreen from "./src/screens/NearbyScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Brewery: BreweryScreen,
    User: UserScreen,
    Search: SearchScreen,
    Nearby: NearbyScreen,
    SignUp: SignUpScreen,
    ResetPassword: ResetPasswordScreen,
    ForgotPassword: ForgotPasswordScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BrewBuzz",
    },
  }
);

export default createAppContainer(navigator);