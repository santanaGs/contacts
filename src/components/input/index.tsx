import { View, TextInput, ViewProps, TextInputProps } from "react-native";
import { styles } from "./style";
import { theme } from "@/theme";

function Input({ children, style }: ViewProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...rest}
      placeholderTextColor={theme.colors.gray_300}
    />
  );
}

Input.Field = Field;

export { Input };
