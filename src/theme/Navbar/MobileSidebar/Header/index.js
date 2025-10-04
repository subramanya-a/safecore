import React from 'react';
import Header from '@theme-original/Navbar/MobileSidebar/Header';
import CustomSearchBar from '../../../DocSidebar/CustomSearchBar';

export default function HeaderWrapper(props) {
  return (
    <>
      <Header {...props} />
      <ul className="custom-mobile-navbar">
        <li className="custom-mobile-navbar__item" >
          <a className="custom-mobile-navbar__item-link mobile-navbar__cms-link" href="/knowhow/intro"><i className="ph-fill ph-feather"></i>Docsy</a>
        </li>
        <li className="custom-mobile-navbar__item" >
          <a className="custom-mobile-navbar__item-link mobile-navbar__cloud-link" href="/blog"><i className="ph-fill ph-cloud"></i>Blog</a>
        </li>
      </ul>
      <div className="custom-mobile-navbar__separator"></div>
      <CustomSearchBar />
    </>
  );
}
