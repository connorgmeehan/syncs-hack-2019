/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { FormProps } from '../../render-props';
import Feedback from '../../components/common/feedback';
import PracticesList from '../../components/custom/PracticesList';
import PracticeMap from '../../components/PracticeMap';
import withContext from '../../app-data-provider';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

class SearchPage extends React.PureComponent {
  render() {
    console.log(this.props);
    const { searchedSpeciality, searchedSuburb } = this.props.appdata.state;    
    const defaultControls = {
      fullscreenControls: false,
    };
    console.log(searchedSpeciality, searchedSuburb);
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

          <div class="searchTopBar">
            <InputBase fullWidth classes={{input: "maintextinput searchInput"}} placeholder="specialist" onChange={e => this.setState({ suburb: e.target.value })} />
            <Typography className="innn">in</Typography>
            <InputBase fullWidth classes={{input: "maintextinput searchInput suburbPad"}} placeholder="suburb" onChange={e => this.setState({ speciality: e.target.value })} />
            </div>
          {/* </div> */}
             <div className="boardTagWrapper">
                <div className="boardTagScroll searchTagScroll">
                  <Button className="boardTag" color="primary" size="small" variant="outlined" >Gender</Button>
                  <Button className="boardTag" color="primary" size="small" variant="outlined" >Specialty</Button>
                  <Button className="boardTag" color="primary" size="small" variant="outlined" >Focus</Button>
                  <Button className="boardTag" color="primary" size="small" variant="outlined" >Language</Button>
                  <Button className="boardTag" color="primary" size="small" variant="outlined" >Other</Button>
                
                </div>
              </div>


            <PracticeMap 
              googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyChp5Eld9vxLxYlbOoRTBseprod5OaYiwc&v=3.exp&libraries=geometry,drawing,places"}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              defaultOptions={defaultControls}
              suburb={searchedSuburb}
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
