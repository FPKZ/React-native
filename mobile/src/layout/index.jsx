import Header from "./include/Header";
import Footer from "./include/Footer";
import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../contexts/ThemeContext";

export default function Layout(props) {
    const navigator = useNavigation();
    const { theme } = useTheme();
    return (
        <View className="flex-1"
            style={{ backgroundColor: theme.background }}
        >
            <Header buttonLeft={{
                name: "menu",
                color: "blue",
                bg_active: "bg-blue-100",
                onPress: () => {}
            }} buttonRight={{
                name: "settings-outline",
                color: "blue",
                bg_active: "bg-blue-100",
                onPress: () => {}
            }}>
                <Text className='text-2xl font-bold'>Home</Text>
            </Header>
            <View className="flex-1">
                {props.children}
            </View>
            <Footer />
        </View>
    );
}

export {
    Header,
    Footer,
    Layout
}

// buttonLeft={
                //     {
                //         name: "menu", 
                //         color: "#color-blue-900", 
                //         bg_active: "bg-slate-100", 
                //         onPress: () => {}
                //     }
                // }
                // buttonRight={
                //     {
                //         name: "settings-outline", 
                //         color: "#color-blue-900", 
                //         bg_active: "bg-slate-100", 
                //         onPress: () => {}
                //     }
                // }
            