import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
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
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
        console.log(this.state)
      });
    }
    this.setState({ currentUser: userAuth });
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
