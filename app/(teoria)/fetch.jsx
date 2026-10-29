import { useEffect, useState } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { ActivityIndicator, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";

export default function Fetch() {

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["mostrar emojis"],
        queryFn: () =>
            axios.get("https://emojihub.yurace.pro/api/all").then(
                response => response.data
            ),
    });

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (isError) {
        return <Texto>Error {error.message}</Texto>
    }

    return (
        <Container>
            <Texto>Fetch</Texto>

            <FlatList 
                data={data} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Texto>{item.name}</Texto>
                )} 
            />
        </Container>
    )
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Texto = styled.Text`
color: #fff;
`