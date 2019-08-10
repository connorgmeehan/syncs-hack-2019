/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';

const Context = React.createContext();

class AppDataProvider extends React.PureComponent {
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
      <Context.Provider value={{
        state: this.state,
        setSuburbAndState: this.setSuburbAndState,
      }}
      >
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default AppDataProvider;
