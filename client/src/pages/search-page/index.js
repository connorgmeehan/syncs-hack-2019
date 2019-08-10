/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { FormProps } from '../../render-props';
import Feedback from '../../components/common/feedback';
import PracticesList from '../../components/custom/PracticesList';
import withContext from '../../app-data-provider';

class SearchPage extends React.PureComponent {
  render() {
    console.log(this.props);
    const { searchedSuburb, searchedSpeciality } = this.props.appdata.state;    
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
