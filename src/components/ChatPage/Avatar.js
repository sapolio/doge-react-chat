import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import getColor from '../../utils/colors';
import abbreviate from '../../utils/abbreviation';

const Avatar = ({ title, colorFrom }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }}>
    {abbreviate(title)}
  </MUIAvatar>
  );

export default Avatar;
