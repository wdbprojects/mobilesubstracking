import { routes } from "@/config/routes";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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
    </SafeAreaView>
  );
}
