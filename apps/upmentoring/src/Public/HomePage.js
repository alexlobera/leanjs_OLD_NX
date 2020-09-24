import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <React.Fragment>
    <h1>Home page</h1>
    <Link to="/backoffice">Go to backoffice</Link>
  </React.Fragment>
);

export default HomePage;
