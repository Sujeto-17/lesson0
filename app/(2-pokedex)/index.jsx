import { ActivityIndicator, Platform, View, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { PokemonCard } from "../../components/2-pokedex-components/PokemonCard";
import { globalStyles } from "../../styles/globarlStyles";

export default function Index() {

    // Consulta la lista de pokémon y obtiene el detalle (id y tipos) de cada uno
    const mostrarPokemons = async ({pageParam = "https://pokeapi.co/api/v2/pokemon?limit=20"}) => {
        const response = await axios.get(pageParam);

        // Se piden los detalles en paralelo; si uno falla, se devuelve un objeto mínimo
        const results = await Promise.all(
            response.data.results.map(async (pokemon) => {
                try {
                    const pokemonDetail = await axios.get(pokemon.url);
                    return {
                        name: pokemon.name,
                        stats: pokemonDetail.data.stats[0].base_stat,
                        weight: pokemonDetail.data.weight,
                        height: pokemonDetail.data.height,
                        stardust: pokemonDetail.data.base_experience,
                        id: pokemonDetail.data.id,
                        types: pokemonDetail.data.types.map((t) => t.type.name),
                    };
                } catch (error) {
                    console.log("Error al consultar datos", error.message);
                    return { name: pokemon.name, id: null, types: [] };
                }
            })
        );

        return { ...response.data, results };
    };

    // Estado de la consulta: datos, carga y error
    const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["mostrar pokemons"],
        queryFn: mostrarPokemons,
        getNextPageParam: (p) => p.next || undefined
    });

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#2594f0" />
            </View>
        );
    }

    if (isError) {
        return (
            <PokemonCard />
        );
    }

    const allPokemons = data?.pages?.flatMap((page) => page.results) ?? []
    const renderItem = ({ item }) => <PokemonCard pokemon={item} />;

    return (
        <Container style={globalStyles.container}>
            <StatusBar style="light" />
            <Imagefondo source={require("../../assets/images/pokeball.png")} />
            <Header>
                <UserData>
                    <ImagenUser source={require("../../assets/images/pokemonraro.png")} />
                </UserData>
                <Title>POKEDEX</Title>
            </Header>

            <FlatList
                data={allPokemons}
                numColumns={2}
                keyExtractor={(item, index) => index.toString}
                renderItem={renderItem}
                onEndReached= {() => {
                    if(hasNextPage) fetchNextPage() // Cargar mas datos cuando el usuario llega al final
                }}
                ListFooterComponent={
                    isFetchingNextPage?(<ActivityIndicator size={"large"} color="#1f93ff" />): null
                }
                columnWrapperStyle={{ justifyContent: "space-between" }}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

        </Container>
    )
}

const Container = styled.View`
flex: 1;
position: relative;
background-color: #000;
padding: 10px;
`

const Texto = styled.Text``

const Imagefondo = styled.Image`
position: absolute;
width: 300px;
height: 300px;
top: 0;
right: -100px;
opacity: 0.3;
object-fit: contain;
`

//#region
const Header = styled.View`
`

const UserData = styled.View`
height: 50px;
width: 50px;
border-radius: 8px;
background-color: #f8dfff;
padding: 8px;
align-self: flex-end;
`

const ImagenUser = styled.Image`
width: 100%;
height: 100%;
`

const Title = styled.Text`
color: #fff;
font-size: 30px;
font-weight: bold;
`
//#endregion