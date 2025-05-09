import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { TextType } from "../../utils/Types";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  lineHeight,
  numberOfLines,
  fontWeight,
  textDecorationLine,
  label,
  textTransform,
}: TextType) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={
        [
          {
            color: color || theme.colors.black,
            fontSize: size || 10,
            fontWeight: fontWeight || "500",
            fontFamily: fontFam || fonts.Poppins_Regular,
            textTransform: textTransform,
            textDecorationLine: textDecorationLine,

            ...(lineHeight && { lineHeight: lineHeight }),
          },
          style,
        ] as StyleProp<TextStyle>
      }
    >
      {text}
      {label}
    </Text>
  );
};
export default CustomText;
