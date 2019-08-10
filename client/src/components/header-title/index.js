import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

// TODO: if the user isn't logged in, display Welcome at home page
class HeaderTitle extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => 
        <>
          <div class="header-title header__title no--select flex-auto center">
            <img className="header-logo" src="img/community_logo.png" alt="logo" />
          </div>
          <div class="header-right">
            <MenuIcon color="error">menu</MenuIcon>
          </div>
        </>} />
        <Route render={() => <img className="header-logo" src="img/community_logo_bw.png" alt="logo"/>} />
      </Switch>
    )
  };
}

export default HeaderTitle;
