import { FlatList, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components/native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

interface Ruta {
    id: number
    name: string;
    href: string;
}

export default function Index() {

    const dataRutas: Ruta[] = [
        {
            id: 1,
            name: "1- Conversor",
            href: "(1-conversor)"
        },
        {
            id: 2,
            name: "teoria",
            href: "(teoria)"
        },
    ]

    const renderItem = ({ item }: { item: Ruta }) => {
        return (
            <TouchableOpacity onPress={() => router.push(item.href as any)}>
                <StatusBar style="light"/>
                <ButtonLink>
                    <IconContainer>
                        <MaterialIcons name="insert-drive-file" size={24} color={"#fff"} />
                        <Name>{item.name}</Name>
                    </IconContainer>
                    <Arrow name="arrow-forward-ios" />
                </ButtonLink>
            </TouchableOpacity>
        )
    }


    return (
        <Container style={{padding:Platform.OS === "ios" ? 0: 50}}>
            <Title>Menu</Title>
            <List keyExtractor={(item) => item.id.toString()} data={dataRutas} renderItem={renderItem}></List>
        </Container>
    )
}

const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #000;
`

const Title = styled.Text`
   color: #fff;
   margin-bottom: 10px;
   font-size: 20px;
   font-weight: bold;
   `

// Estilos para el renderItem
const ButtonLink = styled.View`
   padding: 15px;
    margin-bottom: 10px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    border: 2px solid #333;
    justify-content: space-between;
    width: 100%;
    display: flex;
`

const Name = styled.Text`
   color: #fff;
   font-size: 20px;
`

const Arrow = styled(MaterialIcons)`
   color: #fff;
   font-size: 30px
`
const IconContainer = styled.View`
   flex-direction: row;
   align-items: center;
   gap:5px;
`

const List = styled(FlatList)`
   width: 100%
   padding: 10px;
`