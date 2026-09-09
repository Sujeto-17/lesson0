import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout(){
    return (
        <Tabs screenOptions={{headerShown: false,
            tabBarActiveTintColor: "#e22b2b"
        }}>
            <Tabs.Screen name="index" options=
            {{title: "Inicio", tabBarIcon:() =>
            (<MaterialIcons size={20} color={"#0b74ec"} name="access-time-filled"/>)
            }}/>
            <Tabs.Screen name="about"/>
        </Tabs>
    )
}