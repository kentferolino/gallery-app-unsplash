import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  filters: {
    margin: 20
  },
  select: {
    margin: '0 10px',
    minWidth: 180
  },
  textField: {
    margin: '0 10px'
  }
}));


const Filters = ({ handleChange, handlePageSizeChange, pageSize }) => {
  const classes = useStyles();

  return (
    <Grid item md={12} className={classes.filters}>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        name='query'
        onChange={handleChange}
        className={classes.textField}
      />
      <FormControl className={classes.select}>
        <InputLabel htmlFor="page-size">Page size</InputLabel>
        <Select
          name='pageSize'
          value={pageSize}
          onChange={handlePageSizeChange}>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

Filters.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handlePageSizeChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired
};

export default Filters;
