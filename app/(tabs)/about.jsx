import styled from "styled-components/native";

export function About() {

    return (
        <Container>
            <Texto>Componente About</Texto>
        </Container>
    )
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Texto = styled.Text``