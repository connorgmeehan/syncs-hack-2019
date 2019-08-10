/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { FormProps } from '../../render-props';
import Feedback from '../../components/common/feedback';
import PracticesList from '../../components/custom/PracticesList';
import PracticeMap from '../../components/PracticeMap';
import withContext from '../../app-data-provider';

class SearchPage extends React.PureComponent {
  render() {
    console.log(this.props);
    const { searchedSuburb, searchedSpeciality } = this.props.appdata.state;    
    const defaultControls = {
      fullscreenControls: false,
    };
    return (
      <FormProps>
        {({
          disabled,
          errorMsg,
          successMsg,
          setSuccessMessage,
          handleBefore,
          handleClientCancel,
          handleClientError,
          handleServerError,
          handleSuccess,
        }) => (
          <>
            <PracticeMap 
              googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyChp5Eld9vxLxYlbOoRTBseprod5OaYiwc&v=3.exp&libraries=geometry,drawing,places"}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              defaultOptions={defaultControls}
              suburb={searchedSpeciality}
              speciality={searchedSpeciality}
               />
            <PracticesList suburb={searchedSuburb} speciality={searchedSpeciality} />
            <div className="mb2" />
            <Feedback
              loading={disabled}
              errorMsg={errorMsg}
              successMsg={successMsg}
            />
          </>
        )}
      </FormProps>
    );
  }
}

export default withContext(SearchPage);
