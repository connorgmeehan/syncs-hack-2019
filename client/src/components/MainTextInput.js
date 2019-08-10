/* eslint-disable no-useless-constructor */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';

class MainTextInput extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className="maintextinput-wrapper">
        <InputBase fullWidth classes={{input: "maintextinput"}} placeholder={placeholder} />
      </div>
    );
  }
}

export default MainTextInput;
