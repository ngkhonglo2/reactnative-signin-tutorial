import React from 'react';
import {useForm} from 'react-hook-form';
// eslint-disable-next-line prettier/prettier
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CusttomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {RouterProps} from '../type';

const EMAIL_REGEX = /^[a-zA-Z]+(\d|.|\w)*@[a-zA-Z]+.[a-zA-Z]+.*[a-zA-Z]+$/;

const SignUp = ({navigation}: RouterProps) => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('term of use');
  };

  const onPrivacyPressed = () => {
    console.warn('Privacy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.title}>Create an account</Text>
        <CustomInput
          placeholder="UserName"
          name="username"
          control={control}
          rules={{
            required: 'Username is requied',
            minLength: {
              value: 3,
              message: 'Username should be minimum 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be minimum 24 characters long',
            },
          }}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          secureTextEntry={false}
          rules={{pattern: {value: EMAIL_REGEX, message: 'email is invalid'}}}
        />
        <CustomInput
          placeholder="PassWord"
          name="password"
          control={control}
          rules={{
            required: 'Password is requied',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
          }}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          name="password-repeat"
          control={control}
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
          secureTextEntry={true}
        />
        <CusttomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="_PRIMARY"
          textStyle=""
        />
        <Text style={style.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={style.link} onPress={onTermsOfUsePressed}>
            Terms of use
          </Text>{' '}
          and{' '}
          <Text style={style.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <CusttomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="_TERTIARY"
          textStyle="_TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
