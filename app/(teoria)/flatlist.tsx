import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import styled from 'styled-components/native';

export function FlatListComponent() {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const llamarData = (page: number) => {
        return Array.from({length: 20}, (_,i) => `item ${page * 20 + i +1}`);
    }

    const cargarData =() => {
        if (loading) return;
        setLoading(true);
        setTimeout(() => {
            const newData = llamarData(page);
            setData([...data, ...newData]);
            setPage(page+1)
            setLoading(false)
        }, 1500);
    }

    useEffect(() => {
        cargarData();
    },[])

    const renderItem = ({ item }: { item: string }) => {
        return (
            <ContainerItem>
                <Producto>{item}</Producto>
            </ContainerItem>
        )
    }

    return (
        <Container>
            <Title>FlatList</Title>
            <ListaFlat 
                keyExtractor={(item, index) => index.toString()} // Usamos el índice ya que el item es un string
                data={data} 
                renderItem={renderItem}
                onEndReached={cargarData}
                ListFooterComponent={()=> loading?<ActivityIndicator size="large" color="#000fff" /> : null}
            />
        </Container>
    )
}

const Title = styled.Text`
font-size: 50px;
color: #fff;
`

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

// Estilos para el renderItem del FlatList
const ListaFlat = styled(FlatList<string>)`
`

const ContainerItem = styled.View`
flex-direction: row;
gap: 20px;
`

const Producto = styled.Text`
color: #fff
`

// Estilos para el section List
const HeaderText = styled.Text`
    color: #3498db;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    text-transform: uppercase;
`