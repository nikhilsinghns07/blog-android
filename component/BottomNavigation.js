import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Signup from '../Screens/SignUp';
import CreatePost from '../Screens/CreatePost';

const homeRoute = () => <Home />

const LoginRoute = () => <Login />;

const PostsRoute = () => <Signup />;

const CreatePostRoute = () => <CreatePost /> ;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Login', title: 'Login', focusedIcon: 'album' },
    { key: 'Posts', title: 'My Posts', focusedIcon: 'history' },
    { key: 'CreatePost', title: 'CreatePost', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: homeRoute,
    Login: LoginRoute,
    Posts: PostsRoute,
    CreatePost: CreatePostRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Footer;