import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const MaxWidth = styled.div`
  max-width: 400px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const AuthPageLayout = ({
  children,
  title,
  subtitle,
  link,
}) => (
  <MaxWidth className="mx-auto">
    {title && <Typography variant="h2" align="center">{title}</Typography>}
    {subtitle && (
      <Typography variant="h5" id="signUpQ" align="center">
        {subtitle}
        {link && link}
      </Typography>
    )}
    {children}
  </MaxWidth>
);

AuthPageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.object, // eslint-disable-line
};

AuthPageLayout.defaultProps = {
  title: '',
  subtitle: '',
  link: null,
};

export default AuthPageLayout;
