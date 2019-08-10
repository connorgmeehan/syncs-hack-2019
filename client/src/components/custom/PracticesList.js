import React, {Context} from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const PracticesList = ({suburb, speciality}) => (
  <Query
    query={gql`
      query getPracticeBy($suburb: string, $speciality: string) {
        getPracticeBy(suburb:$suburb, speciality: $speciality) {
          name
          lat
          lon
          speciality
          suburb
        }
      }
    `}
  >
    {(props) => {
      console.log(props);
    }}
  </Query>
);

export default PracticesList;