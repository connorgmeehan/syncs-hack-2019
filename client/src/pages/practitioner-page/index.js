/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { FormProps } from '../../render-props';
import Feedback from '../../components/common/feedback';
import PracticesList from '../../components/custom/PracticesList';
import PracticeMap from '../../components/PracticeMap';
import withContext from '../../app-data-provider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class PractitionerPage extends React.PureComponent {
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
            {
              
                
            



            }

            {/* and here */}
          </>
        )}
      </FormProps>
    );
  }
}

export default withContext(PractitionerPage);
