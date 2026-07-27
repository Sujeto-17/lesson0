import { FlatList } from "react-native";
import styled from "styled-components/native";

interface Ruta {
    id: number
    name: string;
}

export default function Index() {

    const dataRutas: Ruta[] = [
        {
            id: 1,
            name: "1- Conversor"
        },
        {
            id: 2,
            name: "teoria"
        },
    ]

    const renderItem = ({ item }: { item: Ruta }) => (
        <Title>{item.name}</Title>
    )

    return (
        <Container>
            <Title>Menu</Title>
            <FlatList keyExtractor={(item) => item.id.toString()} data={dataRutas} renderItem={renderItem}></FlatList>
        </Container>
    )
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Title = styled.Text``