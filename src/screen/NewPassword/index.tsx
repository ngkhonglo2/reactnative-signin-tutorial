import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CusttomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {RouterProps} from '../type';

const NewPassword = ({navigation}: RouterProps) => {
  const {control, handleSubmit} = useForm();

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.title}>Reset your password</Text>
        <CustomInput
          placeholder="Code"
          control={control}
          name="code"
          rules={{
            required: 'code is requied',
          }}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is requied',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
          }}
        />
        <CusttomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
          type="_PRIMARY"
          textStyle=""
        />
        <CusttomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="_TERTIARY"
          textStyle="_TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPassword;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
