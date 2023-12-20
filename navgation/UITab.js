import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home, StoryDetail } from '../screens';
import { color } from '../contants';
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: color.primary,
    tabBarIcon: ({focused,color,size}) =>{
        let screenName = route.name;
        let iconName = "home";
        if(screenName == "Home") {
            iconName ="home"
        }
        return <Icon name={iconName} size={30} color={focused ? '#25c9e6' : 'grey'}>
        </Icon>
    }
});
function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={"Home"}  component={Home} options={{tabBarLabel : 'Home'}} />
    </Tab.Navigator>
}
export default UITab;