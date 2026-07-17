import { useRouter } from "expo-router"
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Button, Text, View } from "react-native"

export default function Screen2() {
    const router = useRouter();
    const data = useLocalSearchParams();
    return (
        <View>
            <Text>Hola mundo pantalla 2</Text>
            <Text>{data.nombre} - {data.curso}</Text>
            <Button title="Regresar pantalla 1" onPress={() => router.back()}></Button>
        </View>
    )
}