import { FlatList, SectionList } from 'react-native';
import styled from 'styled-components/native';

interface ProductoItem {
    id: number;
    producto: string;
    precio: string;
}

interface SectionData {
    descripcion: string;
    data: ProductoItem[];
}

export function SectionListComponent() {

    const dataSection: SectionData[] = [
        {
            descripcion: "c", data: [
                {
                    id: 1,
                    producto: "Cerveza",
                    precio: "$ 60",
                },
                {
                    id: 3,
                    producto: "Coco mineral",
                    precio: "$ 20"
                }
            ]
        },
        {
            descripcion: "s", data: [
                {
                    id: 2,
                    producto: "Sabritas",
                    precio: "$ 20"
                },
            ]
        },

    ]

    const renderItem = ({ item }: { item: ProductoItem }) => {
        return (
            <ContainerItem>
                <Producto>{item.producto}</Producto>
                <Producto>{item.precio}</Producto>
            </ContainerItem>
        )
    }
    
    const renderHeader = ({ section }: { section: SectionData }) => {
        return(
            <HeaderText>{section.descripcion}</HeaderText>
        )
    }
    const footerList = () => {
        return (
        <Producto>Pie de pagina</Producto>
        )
    }

    return (
        <Container>
            <Title>SectionList</Title>
            <SectionList keyExtractor={(item: ProductoItem) => item.id.toString()} sections={dataSection} renderItem={renderItem}
            renderSectionHeader={renderHeader} ListFooterComponent={footerList} />
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
const ListaFlat = styled(FlatList<ProductoItem>)`
background-color: #f005;
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