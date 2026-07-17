import { darkTheme, lightTheme } from "@/styles/tema";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Button } from "react-native";
import styled, { ThemeProvider } from 'styled-components/native';

export default function Screen1() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const router = useRouter();
    const toogleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme)
    }
    const currentTheme = isDarkTheme ? darkTheme : lightTheme
    const data = {
        nombre: "Julian",
        curso: 'React Native'
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <Container>
                <Title>Hola mundo pantalla 1</Title>
                <Button title="Ir a pantalla 2" 
                onPress={() => router.push({
                    pathname: "/screen2",
                    params: data
                })}></Button>
            </Container>
        </ThemeProvider>
    )
}

const Title = styled.Text`
color: #65b30c;
font-size: 90;
`

const Container = styled.View`
background: #770b0b
flex: 1;
`