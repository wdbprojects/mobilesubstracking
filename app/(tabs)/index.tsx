import { routes } from "@/config/routes";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={routes.onboarding}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Onboarding!
      </Link>
      <Link
        href={routes.signIn}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Sign In
      </Link>
      <Link
        href={routes.signUp}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Create Account
      </Link>
    </View>
  );
}
