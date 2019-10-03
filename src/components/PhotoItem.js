import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const PhotosItem = ({ photo }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia component="img" className={classes.media} image={photo.urls.thumb} />
    </Card>
  );
};

PhotosItem.defaultProps = {
  photo: {
    author: '',
    description: '',
    link: '',
    media: {
      m: ''
    },
    published: '',
    tags: '',
    title: ''
  }
};

PhotosItem.propTypes = {
  photo: PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      thumb: PropTypes.string.isRequired
    })
  })
};

export default PhotosItem;
