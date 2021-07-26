import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from 'api';

const HomeContainer = () => {
  const [state, setState] = useState({
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  });

  const fetchData = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      setState({
        nowPlaying,
        upcoming,
        popular,
        loading: false,
      });
    } catch {
      setState({
        error: "Can't find movie information.",
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { nowPlaying, upcoming, popular, error, loading } = state;
  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default HomeContainer;
