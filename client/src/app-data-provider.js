/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';

const AppData = React.createContext();

export class AppDataProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      searchedSuburb: "Wendsleydale",
      searchedSpeciality: "S",
      practiceResults: [],
      selectedPractitionerId: null
    }
  }
  selectPractitioner = (practitioner) => {
    this.setState({selectedPractitionerId: practitioner});
  }
  setSuburbAndState = (suburb, speciality) => {
    console.log(`AppDataProvider::setSuburbAndSpecialit ${suburb} ${speciality}`)
    this.setState({ searchedSuburb: suburb, searchedSpeciality: speciality });
  }

  render() {
    return (
      <AppData.Provider value={{
        state: this.state,
        setSuburbAndState: this.setSuburbAndState,
        selectPractitioner: this.selectPractitioner,
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
