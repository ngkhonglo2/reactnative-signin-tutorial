import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CusttomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {RouterProps} from '../type';

const ConfirmEmail = ({navigation}: RouterProps) => {
  const {control, handleSubmit} = useForm();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.title}>Create an account</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          name="code"
          control={control}
          secureTextEntry={false}
          rules={{
            required: 'Confirmation code is requied',
          }}
        />
        <CusttomButton
          text="Confrim"
          onPress={handleSubmit(onConfirmPressed)}
          type="_PRIMARY"
          textStyle=""
        />
        <CusttomButton
          text="Resend code"
          onPress={onResendPress}
          type="_SECONDARY"
          textStyle="_SECONDARY"
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

export default ConfirmEmail;

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
