import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface CustomInputProps {
  placeholder: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  secureTextEntry?: boolean;
  control?: Control<FieldValues, any>;
  name: string;
  rules?: {
    required?: boolean | string;
    minLength?: {value: number; message: string} | number;
    maxLength?: {value: number; message: string} | number;
    pattern?: {value: RegExp; message: string};
    validate?: (value: string) => boolean | string;
  };
}

const CustomInput = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
        return (
          <>
            <View
              style={[
                style.container,
                // eslint-disable-next-line react-native/no-inline-styles
                {borderColor: error ? 'red' : '#e8e8e8'},
              ]}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                style={style.input}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              // eslint-disable-next-line react-native/no-inline-styles
              <Text style={{color: 'red', alignSelf: 'stretch'}}>
                {error.message || 'Error'}
              </Text>
            )}
          </>
        );
      }}
    />
  );
};

export default CustomInput;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  input: {},
});
