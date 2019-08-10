/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';

const AppData = React.createContext();

export class AppDataProvider extends React.PureComponent {
  state = {
    username: null,
    searchedSuburb: null,
    searchedSpeciality: null,
    practiceResults: [],
  }

  setSuburbAndState = (suburb, speciality) => {
    this.setState({ searchedSuburb: suburb, searchedSpeciality: speciality });
  }

  render() {
    return (
      <AppData.Provider value={{
        state: this.state,
        setSuburbAndState: this.setSuburbAndState,
      }}
      >
        { this.props.children }
      </AppData.Provider>
    );
  }
}

const withContext = Component => props => (
  <AppData.Consumer>
    {(context) => <Component {...props} appdata={context} />}
  </AppData.Consumer>
);


export default withContext;
