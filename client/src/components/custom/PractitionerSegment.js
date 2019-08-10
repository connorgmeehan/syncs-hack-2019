import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TAGS_QUERY = gql`
query getTagsByPractitionerId($practitionerId: String!){
  getTagsByPractitionerId(practitionerId:$practitionerId){
    text
    isEmpathy
  }
}
`;

const PractitionerSegment = ({_id, name}) => {
  console.log(_id, name);
  return (
    <div>
      <h1>{name}</h1>

      {_id && 
        <Query
          query={TAGS_QUERY}
          variables={{ practitionerId: _id }}
        >
        {({ loading, data }) => {
          if (loading) {
            return <h1>...</h1>;
          } else {
            console.log(data);
            if (data && data.getTagsByPractitionerId && data.getTagsByPractitionerId.length > 0) {
              return data.getTagsByPractitionerId.map((tag, key) => <div key={key} 
                className={`practioner-segment practioner-segment-${tag.isEmpath ? "empathy" : "skill"}`}>
                <h5>{tag.text}</h5>
              </div> );
            }
          }
          return <></>
        }}
      </Query>
      }
    </div>
  )
}

export default PractitionerSegment;