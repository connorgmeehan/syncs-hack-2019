import React, { Context } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, CardContent, Typography } from '@material-ui/core';

const PRACTITIONERS_QUERY = gql`
query getPractitionersFromPracticeId($practiceId: String) {
  getPractitionersFromPracticeId(practiceId:$practiceId) {
    _id
    name
    createdAt
  }
}`;

const PracticeCard = ({
  _id, name, lat, lon, speciality, suburb,
}) => {
  console.log(_id);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="caption">Address</Typography>
        <Typography variant="caption">Phone</Typography>
      </CardContent>
      <CardContent>
        <Query
          query={PRACTITIONERS_QUERY}
          variables={{ practiceId: _id }}
        >
          {({ loading, data }) => {
            if (loading) {
              return <h1>...</h1>;
            }
            console.log(data);
            if(data && data.getPractitionersFromPracticeId) {
              return data.getPractitionersFromPracticeId.map((practice, key) => <h1 key={key}>{ practice.name }</h1> );
            }
            return <h1>this gp doesn't have practitioners yet</h1>
          }}
        </Query>
      </CardContent>
    </Card>
  );
};

export default PracticeCard;
