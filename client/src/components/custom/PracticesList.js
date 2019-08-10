/* eslint-disable react/destructuring-assignment */
import React, { Context } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const PRACTICES_QUERY = gql`
query getPracticeBy($suburb: String, $speciality: String) {
  getPracticeBy(suburb:$suburb, speciality: $speciality) {
    name
    lat
    lon
    speciality
    suburb
  }
}
`;
const PracticesList = ({ suburb, speciality }) => {
  console.log(suburb, speciality);
  return (
    <Query
      query={PRACTICES_QUERY}
      variables={{ suburb: 'Wendsleydale', speciality: 'S' }}
    >
      {(props) => {
        console.log(props);
        return (<h1>dasd</h1>);
      }}
    </Query>
  );
};


export default PracticesList;
