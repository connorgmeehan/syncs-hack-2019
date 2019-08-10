/* eslint-disable react/no-unused-state */
import React from 'react';
import { withApollo } from 'react-apollo';
import { FormProps } from '../../render-props';
import Feedback from '../../components/common/feedback';
import PracticesList from '../../components/custom/PracticesList';
import AppDataProvider from '../../app-data-provider';

class SearchPage extends React.PureComponent {
  state = {
    results: null,
  }

  render() {
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
            <AppDataProvider.Context>
              {(context) => {
                console.log(context);
                return (
                  <PracticesList />
                );
              }}
            </AppDataProvider.Context>

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

export default withApollo(SearchPage);
