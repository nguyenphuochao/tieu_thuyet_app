import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UITab from './UITab';
import { StoryDetail } from '../screens';
const Stack = createNativeStackNavigator();
function App(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false
        }}>
           <Stack.Screen name={"UITab"} component={UITab} />
           <Stack.Screen name={"StoryDetail"} component={StoryDetail} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;