/* eslint-disable react/destructuring-assignment */
import React, { Context } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PracticeCard from './PracticeCard';

const PRACTICES_QUERY = gql`
query getPracticeBy($suburb: String, $speciality: String) {
  getPracticeBy(suburb:$suburb, speciality: $speciality) {
    _id
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
      {({loading, error, data }) => {
        console.log(data);
        if(loading) {
          return <h1>Loading</h1>
        } 
          return data.getPracticeBy.map((practice, key) => <PracticeCard key={key}
            _id={practice._id}
            name={practice.name}
            lat={practice.lat}
            lon={practice.lon}
            speciality={practice.speciality}
            suburb={practice.suburb}
           /> )
      }}
    </Query>
  );
};


export default PracticesList;
