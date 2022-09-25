import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface CustomButtonProps {
  onPress?: () => void;
  text?: string;
  textStyle: '_TERTIARY' | '_SECONDARY' | '';
  type: '_PRIMARY' | '_TERTIARY' | '_SECONDARY' | '';
  bgColor?: string;
  fgColor?: string;
}

const CusttomButton = ({
  onPress,
  text,
  type,
  textStyle,
  bgColor,
  fgColor,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        style.container,
        style[`container${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          style.text,
          style[`text${textStyle}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CusttomButton;

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3b71f3',
  },
  container_TERTIARY: {},
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'black',
  },
  text_SECONDARY: {
    color: '#3B71F3',
  },
});
