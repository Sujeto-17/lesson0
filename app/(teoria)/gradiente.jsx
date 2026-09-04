import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export function Gradientes() {

    return (
        <Container>
            <LinearGradient
                colors={['#12c420', '#0b20e0',]}>
                <Card></Card>
            </LinearGradient>
        </Container>
    )
}

const Card = styled.View`
    width: 300px;
    height: 300px;
`

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Texto = styled.Text``