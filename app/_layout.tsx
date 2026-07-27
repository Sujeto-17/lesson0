import { Stack } from "expo-router";

export default function Layout(){

    return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Menú Principal" }}/>
        <Stack.Screen name="(1-conversor)" options={{headerShown: false}}/>
        <Stack.Screen name="(teoria)"/>
    </Stack>
    )
}