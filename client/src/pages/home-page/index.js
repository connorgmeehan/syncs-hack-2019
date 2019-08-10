import React from 'react';
import { propType } from 'graphql-anywhere';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { PWABtnProps, FormProps } from '../../render-props';
import { withUser } from '../../global-data-provider';
import userFragment from '../../graphql/user/fragment/user';
import LogoutBtn from '../../components/auth/logout-btn';
import SubscribeBtn from '../../components/pwa/subscribe-btn';
import UnsubscribeBtn from '../../components/pwa/unsubscribe-btn';
import PushBtn from '../../components/pwa/push-btn';
import Feedback from '../../components/common/feedback';
import Alert from '../../components/common/alert';
import Loading from '../../components/common/loading';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Json = styled.pre`
  word-wrap: break-word;
  white-space: pre-wrap;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const HomePage = ({ curUser }) => (
  <div>
    {/* <Typography align="center" variant="h2">Home Page</Typography> */}
    <div className="mb1" />
    <div className="homeText">
    <div className="initialText">
      <Typography variant="h4" className="headingInitialText">medical services recommended by people you trust - us.</Typography>
      <Typography variant="h5" className="secondaryInitialText">As LGBTQ+ individuals we can face difficulties finding services that get who we are.</Typography>
      <Typography variant="h5" className="secondaryInitialText">Whether you’ve had a hard time with a healthcare provider before or you’ve never known where to look.</Typography>
      <Typography variant="h5" className="secondaryInitialText">We are the place to start.</Typography>
    
    </div>

    
      <Typography variant="h2">I am looking for a</Typography>
      <InputBase fullWidth classes={{input: "maintextinput"}} placeholder="specialist" />
      <Typography variant="h2" className="secondaryText">around this</Typography>
      <InputBase fullWidth classes={{input: "maintextinput"}} placeholder="suburb" />
      <Button className="searchbtn" color="primary" size="large" variant="contained" fullWidth={true} >
          Search
        </Button>
      <Typography variant="h3" align="center" className="orText">or</Typography>
      <Button className="searchbtn" color="secondary" size="large" variant="contained" fullWidth={true} >
          Leave a recommendation
        </Button>

        <div className="boardTitle">
        <Typography variant="h2">Community Board</Typography>
        </div>
        
        <Button className="boardTag" color="primary" aria-label="small outlined button group" size="small" variant="contained" >
          Gay
        </Button>
        <Button className="boardTag" color="primary" size="small" variant="contained" >
          Lesbian
        </Button>
        <Button className="boardTag" color="primary" size="small" variant="contained" >
          Trans
        </Button>
       
    </div>

    <Card className="communityCard">
      <CardContent>
      <div className="communityBoards">
      <Typography variant="h3" className="boardHeading">My sexuality is degrading my mental health?</Typography>
        <Typography variant="h5" className="boardName">jaykatt7</Typography>
        <Typography variant="h5" className="boardTime">21 contributions - 2 days ago</Typography>
        <Typography variant="h5" className="boardText">People have been asking me if I'm gay all my life, and as of recently I've started saying yes, only because it's the easy … </Typography>
     
        </div>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    <Card className="communityCard">
      <CardContent>
      <div className="communityBoards">
        <Typography variant="h3" className="boardHeading">What's your experience of a perfect date?</Typography>
        <Typography variant="h5" className="boardName">masoniga11</Typography>
        <Typography variant="h5" className="boardTime">21 contributions - 2 days ago</Typography>
        <Typography variant="h5" className="boardText">I’m planning a date this coming weekend and was wondering what the perfect dates you’ve been on? Looking for some inspiration …</Typography>
      </div>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    <Card className="communityCard">
      <CardContent>
      <div className="communityBoards">
        <Typography variant="h3" className="boardHeading">Gay people with supportive and accepting families</Typography>
        <Typography variant="h5" className="boardName">cortez_g</Typography>
        <Typography variant="h5" className="boardTime">1 contribution - 5 days ago</Typography>
        <Typography variant="h5" className="boardText">I know it makes no sense but I am mad at them too. I am mad at them for having supportive families. And I know …</Typography>
      </div>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    <Json>
      {JSON.stringify(curUser, null, 2)}
    </Json>
    <div className="mb2" />
    <LogoutBtn />

    <div className="mb2" />
    <PWABtnProps>
      {(pwaBtnProps) => {
        const {
          supported,
          subscribed,
          handleSubscriptionChange,
        } = pwaBtnProps;

        return (
          <FormProps>
            {({
              disabled,
              errorMsg,
              successMsg,
              handleBefore,
              handleClientCancel,
              handleServerError,
              handleSuccess,
            }) => {
              // Display loading indicator while checking for push support
              if (supported === 'loading') {
                return <Loading />;
              }

              // Do not render subscribe and push notification buttons in case
              // notifications aren't supported
              if (!supported) {
                return (
                  <Alert
                    type="error"
                    content="Your browser doesn't support service workers"
                  />
                );
              }

              return (
                <React.Fragment>
                  <p>Enable Push notifications</p>
                  {subscribed ? (
                    <UnsubscribeBtn
                      disabled={disabled}
                      onBeforeHook={handleBefore}
                      onClientCancelHook={handleClientCancel}
                      onServerErrorHook={handleServerError}
                      onSuccessHook={() => {
                        handleSubscriptionChange({ subscribed: false });
                        handleSuccess();
                      }}
                    />
                  ) : (
                      <SubscribeBtn
                        disabled={disabled}
                        onBeforeHook={handleBefore}
                        onClientCancelHook={handleClientCancel}
                        onServerErrorHook={handleServerError}
                        onSuccessHook={() => {
                          handleSubscriptionChange({ subscribed: true });
                          handleSuccess();
                        }}
                      />
                    )}
                  <div className="my1" />
                  {subscribed && (
                    <PushBtn
                      disabled={disabled}
                      onBeforeHook={handleBefore}
                      onClientCancelHook={handleClientCancel}
                      onServerErrorHook={handleServerError}
                      onSuccessHook={handleSuccess}
                    />
                  )}
                  <div className="my1" />
                  <Feedback
                    className="mb2"
                    loading={disabled}
                    errorMsg={errorMsg}
                    successMsg={successMsg}
                  />
                </React.Fragment>
              );
            }}
          </FormProps>
        );
      }}
    </PWABtnProps>
  </div>
);

HomePage.propTypes = {
  curUser: propType(userFragment).isRequired,
};

export default withUser(HomePage);
