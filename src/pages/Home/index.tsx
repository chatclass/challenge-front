import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest } from '../../store/ducks/weather/actions';
import { RootState } from '../../store/ducks/rootReducer';

const Home = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector(
    (state: RootState) => state.weather,
  );

  useEffect(() => {
    dispatch(loadRequest);
  }, []);

  return <div />;
};

export default Home;
