import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const back = process.env.BACKEND_URL;


export const signIn = async (email, password) => {
    const navigation = useNavigation();
    try {
        // const response = await axios.post(`${back}/auth/login`, {
        //     email,
        //     password
        // });
        navigation.navigate('Home');
        // return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}
