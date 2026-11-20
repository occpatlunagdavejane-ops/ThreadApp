import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(unauthenticated)" />
      <Stack.Screen name="(authenticated)" />
    </Stack>
  );
}