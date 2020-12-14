import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component';
import { auth } from './Firebase/firebase.utils';
import './App.css';

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    currentUser: null
  };
}

unsubscribeFromAuth = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { 
    this.setState({ currentUser: user });
    console.log(user);
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
