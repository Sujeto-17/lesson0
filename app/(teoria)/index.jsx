import { useState } from 'react';
import styled from 'styled-components/native';
import  FlatListComponent from "./flatlist";
import SectionListComponent from "./sectionlist"
import { Platform, StatusBar } from 'react-native';
import Gradientes from './gradiente';
import Fetch from './fetch';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {

    const dataCategorias = [
        {
            id: 1,
            name: "FlatList",
            component: <FlatListComponent />
        },
        {
            id: 2,
            name: "SectionList",
            component: <SectionListComponent />
        },
        {
            id: 3,
            name: "Gradientes",
            component: <Gradientes />
        },
        {
            id: 4,
            name: "Fetch",
            component: <Fetch />
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState(dataCategorias[0]);

    
    return (
        <Container style={{ paddingTop: Platform.OS === "ios" ? 0 : 50 }}>
            <GradientBackground/>
            <StatusBar style='light' />
            <Title>Seleccione un Categoria</Title>
            <CategoriasSection>
                {
                    dataCategorias.map((item) => {
                        return (
                            <CategoriaContainer key={item.id} selected={selectedCategory.id === item.id}
                                onPress={() => setSelectedCategory(item)} >
                                <CategoriaName selected={selectedCategory.id === item.id}>{item.name}</CategoriaName>
                            </CategoriaContainer>
                        )
                    })
                }
            </CategoriasSection>

            <ContentComponent>
                {selectedCategory.component}
            </ContentComponent>
        </Container>
    )
}

const Title = styled.Text`
font-size: 30px;
color: #fff;
`

const Container = styled.View`
flex: 1;
background-color: #000;
align-items: center;
position: relative;
`

const CategoriasSection = styled.View`
flex-wrap: wrap;
flex-direction: row;
margin-top: 10px;
`

// Item de categoria
const CategoriaContainer = styled.TouchableOpacity`
background-color: ${(props) => (props.selected ? '#147e39' : "transparent")};
border: ${(props) => (props.selected ? '2px solid #12c250' : "none")};
padding: 5px;
border-radius: 5px;
`

const CategoriaName = styled.Text`
font-size: 20px;
color: ${(props) => props.selected ? '#54bd79' : '#fff'};
`

// Componentes content
const ContentComponent = styled.View`
flex: 1;
width: 100%;
margin-top: 20px;
`

const GradientBackground = styled(LinearGradient).attrs({
    colors: ['#1db954', "transparent"],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0.5 }
})`
width: 100%;
height: 50%;
position: absolute;
`