import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


{/* <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
</Stack.Navigator> */}

{/* <Tab.Navigator>
    <Tab.Screen name="Login" component={LoginScreen} />
</Tab.Navigator> */}

{/* <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Login" component={LoginScreen} />
</Drawer.Navigator> */}