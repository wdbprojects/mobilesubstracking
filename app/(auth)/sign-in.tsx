import { routes } from "@/config/routes";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href={routes.signUp}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Create Account
      </Link>
    </View>
  );
};

export default SignIn;
