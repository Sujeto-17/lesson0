import { Stack } from "expo-router";
import styled from "styled-components/native";

export default function Layout() {

    return (
        <Stack screenOptions={{headerShown: false}}>
        </Stack>
    )
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Texto = styled.Text``

