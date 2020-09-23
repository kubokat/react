import React from 'react';
import UserInfo from '../users/UserInfo';
import { Link } from 'react-router-dom';

const Layout = (props) => (
  <>
    <header className="flex bg-black text-white font-bold pr-8 pl-8">
      <div className="self-center w-1/2">
        <Link to={'/'}>Store</Link>
      </div>
      <UserInfo />
    </header>
    <main>
      {props.children}
    </main>
    <footer className="p-8">&copy; {new Date().getFullYear()}</footer>
  </>
);

export default Layout;
