import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import { Typography } from '@material-ui/core';

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
const PracticeMap = withScriptjs(withGoogleMap(({suburb, speciality, appdata}) => {

  return (
    <GoogleMap 
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Query
        query={PRACTICES_QUERY}
        variables={{ suburb, speciality }}
      >
        {({loading, error, data }) => {
          console.log(data);
          if(loading) {
            return <h1>Loading</h1>
          } else {
            if(data && data.getPracticeBy) {
              return data.getPracticeBy.map((practice, key) => <Marker key={key} position={{ lat: practice.lat, lng: practice.lon }} /> )
            }
          }
          return <Typography>Loading</Typography>
        }}
      </Query>
    </GoogleMap>
  ); 
}));

export default PracticeMap;