import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CusttomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {RouterProps} from '../type';

const ForgotPassword = ({navigation}: RouterProps) => {
  const {control, handleSubmit} = useForm();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.title}>Reset your password</Text>
        <CustomInput
          placeholder="User name"
          name="username"
          control={control}
          secureTextEntry={false}
          rules={{
            required: 'username is requied',
          }}
        />
        <CusttomButton
          text="Send"
          onPress={handleSubmit(onSendPressed)}
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

export default ForgotPassword;

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
