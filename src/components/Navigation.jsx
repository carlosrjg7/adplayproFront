import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='bg-gray-500'>
      <ul>
        <li>
          <Link to='/'>Landing</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
