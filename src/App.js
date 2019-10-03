import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import debounce from 'lodash.debounce';
import { STATUS_CODE_SUCCESS } from './constants/status';
import Photos from './components/Photos';
import Filters from './components/Filters';
import Pagination from './components/Pagination';

const CLIENT_ID = '8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  },
  currentPage: {
    textDecoration: 'underline'
  }
}));

const App = () => {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [filters, setFilters] = useState({ query: 'random' });
  const [pageFilters, setPageFilters] = useState({ page: 1, pageSize: 10 });
  const [totalPages, setTotalPages] = useState(0);

  const getPhotos = async ({ page, pageSize, query }) => {
    try {
      const url = `https://api.unsplash.com/search/photos/?page=${page}&per_page=${pageSize}&query=${query || 'random'}&client_id=${CLIENT_ID}`;
      const response = await axios.get(url);
      const { status } = response;
      if (status === STATUS_CODE_SUCCESS) {
        const { results, total_pages } = response.data;
        setTotalPages(total_pages);
        setPhotos(results);
      } else {
        console.log('Error fetching photos');
      }
    } catch (error) {
      console.log('Error fetching photos:', error);
    }
  };

  const debounceGetPhotos = React.useCallback(
    debounce(filterProps => getPhotos(filterProps), 2000), []
  );

  useEffect(() => {
    getPhotos({ page: pageFilters.page, pageSize: pageFilters.pageSize, query: filters.query });
  }, []);

  useEffect(() => {
    getPhotos({ page: pageFilters.page, pageSize: pageFilters.pageSize, query: filters.query });
  }, [pageFilters]);

  useEffect(() => {
    debounceGetPhotos({
      query: filters.query,
      page: pageFilters.page,
      pageSize: pageFilters.pageSize
    });
  }, [filters.query]);

  const handleChange = event => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handlePageSizeChange = event => {
    setPageFilters({
      ...pageFilters,
      pageSize: event.target.value
    });
  };

  const goToPage = page => {
    setPageFilters({
      ...pageFilters,
      page
    });
  };

  return (
    <div className={classes.root}>
      <Grid container component="main">
        <Filters
          handleChange={handleChange}
          handlePageSizeChange={handlePageSizeChange}
          pageSize={pageFilters.pageSize}
        />
        <Photos photos={photos} />
        <Pagination pageFilters={pageFilters} totalPages={totalPages} goToPage={goToPage} />
      </Grid>
    </div>
  );
};

export default App;
