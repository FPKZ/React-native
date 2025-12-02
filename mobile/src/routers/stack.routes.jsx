import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../pages/auth/LoginScreen';
import EsqueciSenha from '../pages/auth/EsqueciSenha';
import HomeScreen from '../pages/home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ 
                headerShown: false,
                animation: 'none'
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={EsqueciSenha} />
                <Stack.Screen name="Home" component={HomeScreen} />
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