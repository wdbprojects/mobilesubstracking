import { routes } from "@/config/routes";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link
        href={routes.signIn}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Sign In
      </Link>
    </View>
  );
};

export default SignUp;
