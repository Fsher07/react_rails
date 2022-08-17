
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingApi());
  }, [dispatch]);
  const message = useSelector((state) => state.greetingsReducer);

  return (
          <div>
            <h2>{ message }</h2>
          </div>
        );
};

export default Greeting;