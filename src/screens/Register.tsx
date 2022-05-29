import React from "react";
import { tw } from "../libs/tailwind";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity, View } from "react-native";
import { TextField } from "@/components/TextField";
import { TextFieldPassword } from "@/components/TextFieldPassword";
import { GradientButton } from "@/components/GradientButton";

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [form, setForm] = React.useState({ name: "", email: "", password: "" });

  function handleLoginFormChange(name: string, value: string) {
    setForm({ ...form, [name]: value });
  }

  async function submitForm() {
    console.log("submit Register Form", form);
  }

  function goToLogin() {
    navigation.navigate("login");
  }

  return (
    <View style={tw("flex-1 justify-between items-center bg-white py-12 px-4")}>
      <View style={tw("w-full items-center")}>
        <Text style={tw("font-sans text-lg")}>Hey there,</Text>
        <Text style={tw("font-sans-bold text-xl mb-8")}>Create an Account</Text>

        <View style={tw("w-full")}>
          <TextField
            iconName="user"
            placeholder="Name"
            autoCapitalize="sentences"
            value={form.name}
            onChange={(e) => handleLoginFormChange("name", e.nativeEvent.text)}
          />

          <TextField
            iconName="mail"
            placeholder="Email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleLoginFormChange("email", e.nativeEvent.text)}
          />

          <TextFieldPassword
            placeholder="Password"
            value={form.password}
            onChange={(e) => handleLoginFormChange("password", e.nativeEvent.text)}
          />
        </View>
      </View>

      <View style={tw("w-full")}>
        <View style={tw("w-full flex-row")}>
          <GradientButton onPress={submitForm} iconName="user-plus">
            Register
          </GradientButton>
        </View>

        <View style={tw("border border-gray-300 w-full my-8")}></View>

        <TouchableOpacity onPress={goToLogin} style={tw("py-2 flex-row justify-center")}>
          <Text style={tw("font-sans text-sm text-center")}>Already have an account?</Text>
          <Text style={tw("text-fuchsia-500 ml-1")}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Register };
