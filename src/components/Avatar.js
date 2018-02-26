import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import getColor from '../utils/colors';
import abbreviate from '../utils/abbreviation';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {abbreviate(children)}
  </MUIAvatar>
);

export default Avatar;
