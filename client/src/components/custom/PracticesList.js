/* eslint-disable react/destructuring-assignment */
import React from 'react';
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
      variables={{ suburb, speciality }}
    >
      {({loading, error, data }) => {
        console.log(data);
        if(error)
          return <h4>Error: Couldn't get practices.</h4>
        if (!loading && data && data.getPracticeBy) {
          if (data.getPracticeBy.length <= 0) {
            return <h4>No practices</h4>
          }
          return data.getPracticeBy.map((practice, key) => <PracticeCard key={key}
            _id={practice._id}
            name={practice.name}
            lat={practice.lat}
            lon={practice.lon}
            speciality={practice.speciality}
            suburb={practice.suburb}
           /> )
        } else {
          return <h4>Loading practices...</h4>
        }
      }}
    </Query>
  );
};


export default PracticesList;
