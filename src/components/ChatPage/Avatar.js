import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import getColor from '../../utils/colors';
import abbreviate from '../../utils/abbreviation';

const Avatar = ({ title }) => (
  <MUIAvatar style={{ backgroundColor: getColor(title) }}>
    {abbreviate(title)}
  </MUIAvatar>
);

export default Avatar;
