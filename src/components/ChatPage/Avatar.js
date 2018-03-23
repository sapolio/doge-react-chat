import React from 'react';
import PropTypes from 'prop-types';
import MUIAvatar from 'material-ui/Avatar';
import getColor from '../../utils/colors';
import abbreviate from '../../utils/abbreviation';

const Avatar = ({ title, colorFrom }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }}>{abbreviate(title)}</MUIAvatar>
);

Avatar.propTypes = {
  colorFrom: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Avatar;
