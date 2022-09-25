import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Logo from '../../../assets/images/images.png';
import CusttomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {RouterProps} from '../type';
import {useForm} from 'react-hook-form';

const Login = ({navigation}: RouterProps) => {
  const {handleSubmit, control} = useForm();

  const onLoginPressed = () => {
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <CustomInput
          name="username"
          placeholder="UserName"
          control={control}
          secureTextEntry={false}
          rules={{required: 'Username is requied'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is requied',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
          secureTextEntry
        />
        <CusttomButton
          text="Login"
          onPress={handleSubmit(onLoginPressed)}
          type="_PRIMARY"
          textStyle=""
        />
        <CusttomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="_TERTIARY"
          textStyle="_TERTIARY"
        />
        <SocialSignInButtons />
        <CusttomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="_TERTIARY"
          textStyle="_TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
