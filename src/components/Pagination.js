import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  pagination: {
    paddingTop: 20
  }
}));


const Pagination = ({ pageFilters, totalPages, goToPage }) => {
  const classes = useStyles();
  const { page } = pageFilters;

  return (
    <Grid container item justify='center' className={classes.pagination}>
      {page !== 1 && <Button color='primary' onClick={() => goToPage(1)}>First</Button>}
      {page !== 1 && <Button color='primary' onClick={() => goToPage(page - 1)}>Prev</Button>}
      <Button color='primary' classes={classes.currentPage} variant='outlined'>{page}</Button>
      {page !== totalPages
        && <Button color='primary' onClick={() => goToPage(page + 1)}>Next</Button>}
      {page !== totalPages
        && <Button color='primary' onClick={() => goToPage(totalPages)}>{totalPages}</Button>}
    </Grid>
  );
};

Pagination.propTypes = {
  goToPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageFilters: PropTypes.shape({
    page: PropTypes.number.isRequired
  }).isRequired
};

export default Pagination;
