import { darkTheme, lightTheme } from "@/styles/theme";
import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components/native';

export default function Screen1() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const currentTheme = isDarkTheme ? darkTheme : lightTheme
    const data = {
        nombre: "Julian",
        curso: 'React Native'
    }

    return (
        <ThemeProvider theme={currentTheme}>

            <Container>
                <TextInputEntrada></TextInputEntrada>
            </Container>

        </ThemeProvider>
    )
}

const TextInputEntrada = styled.TextInput`
color: #fff
`

const Imagen = styled.Image`
width: 100px
height: 100px;
`
const Title = styled.Text`
color: #65b30c;
font-size: 90;
`

const Container = styled.View`
background: #770b0b;
flex: 1;
justify-content: center;
align-items:center;
`