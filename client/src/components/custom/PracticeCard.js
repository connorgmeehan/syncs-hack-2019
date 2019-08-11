import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, CardContent, Typography } from '@material-ui/core';
import PractitionerSegment from './PractitionerSegment';

const PRACTITIONERS_QUERY = gql`
query getPractitionersFromPracticeId($practiceId: String!) {
  getPractitionersFromPracticeId(practiceId:$practiceId) {
    _id
    name
    createdAt
  }
}`;

const PracticeCard = ({
  _id, name, speciality, suburb,
}) => {
  console.log(_id);
  return (
   <Card className="pracCard">
      <CardContent>
        <Typography className="pracName" variant="h5">{name}</Typography>
        <Typography className="pracAddress" variant="caption">Address</Typography>
        <Typography className="pracPhone" variant="caption">Phone</Typography>
      </CardContent>
      <Query
        query={PRACTITIONERS_QUERY}
        variables={{ practiceId: _id }}
      >
        {({ loading, data }) => {
          if (loading) {
            return <h1>...</h1>;
          } else if (!loading) {
            console.log(data);
            if (data && data.getPractitionersFromPracticeId.length) {
              return data.getPractitionersFromPracticeId.map((practice, key) => <PractitionerSegment 
                  key={key}
                  _id={practice._id}
                  name={practice.name}
                  createdDate={practice.createdDate}
                /> );
            } else {
              return <h1 className="noPrac">this gp doesn't have practitioners yet</h1>
            }
          }
        }}
      </Query>
    </Card>
  );
};

export default PracticeCard;
