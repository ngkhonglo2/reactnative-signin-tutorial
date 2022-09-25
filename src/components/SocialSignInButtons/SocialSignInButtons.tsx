import React from 'react';
import CusttomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('facebook');
  };

  const onSignInGoogle = () => {
    console.warn('google');
  };

  const onSignInApple = () => {
    console.warn('Apple');
  };
  return (
    <>
      <CusttomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        type="_PRIMARY"
        textStyle=""
        bgColor="#E7EAF4"
        fgColor="#4765a9"
      />
      <CusttomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        type="_PRIMARY"
        textStyle=""
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CusttomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        type="_PRIMARY"
        textStyle=""
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
