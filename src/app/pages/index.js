import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const responseFacebook = (response) => {
    if (response.accessToken) {
      // Save user info to local storage or state
      localStorage.setItem('user', JSON.stringify(response));
      router.push('/welcome');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div>
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId="496619619768826" // Replace with your Facebook App ID
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default Index;
