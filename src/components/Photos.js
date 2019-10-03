import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import Grid from '@material-ui/core/Grid';
import PhotosItem from './PhotoItem';

const Photos = ({ photos }) => (
  <Grid container item md={12}>
    {
      photos.map(photo => (
        <Grid item md={4} key={`${photo.title}-${uuid()}`}>
          <PhotosItem photo={photo} />
        </Grid>
      ))
    }
  </Grid>
);

Photos.defaultProps = {
  photos: []
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      thumb: PropTypes.string.isRequired
    })
  }))
};

export default Photos;
