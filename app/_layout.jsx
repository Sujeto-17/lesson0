import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient();
export default function Layout() {

    return (
        <QueryClientProvider client={queryClient}>
            <Drawer>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                </Stack>
            </Drawer>
        </QueryClientProvider>
    )
}