import React from "react";
import { tw } from "../../libs/tailwind";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextField, ITextFieldProps } from "../TextField";

type IProps = Omit<ITextFieldProps, "iconName">;

const TextFieldPassword: React.FC<IProps> = ({ styles = "", ...inputProps }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={tw("relative")}>
      <TextField {...inputProps} secureTextEntry={!showPassword} styles={styles} iconName="lock" />

      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={tw("absolute right-0 top-[18px] text-gray-500 px-4")}
      >
        <Feather style={tw("text-gray-500")} name={showPassword ? "eye" : "eye-off"} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export { TextFieldPassword };