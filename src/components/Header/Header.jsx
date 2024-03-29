import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Footer from '../Footer/Footer';
import './Header.scss';

const Header = () => {
  const [isLanguageOpened, setIsLanguageOpened] = useState(false);

  const { i18n } = useTranslation();
  const { language } = i18n;
  const availableLanguages = Object.keys(i18n.options.resources);

  const lngRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (lngRef.current && !lngRef.current.contains(e.target)) {
        setIsLanguageOpened(false);
      }
    };

    if (isLanguageOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpened]);

  const openLanguages = () => {
    setIsLanguageOpened((state) => !state);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
    setIsLanguageOpened(false);
  };

  return (
    <div className="content">
      <header className="header-section">
        <div className="container">
          <div className="header">
            <img className="header__logo" src={logo} alt="Wondr" />
            <div className={`language ${isLanguageOpened ? 'opened' : ''}`} ref={lngRef}>
              <div className="language__selected" onClick={openLanguages}>
                <span className="language__value">{language}</span>
                <svg
                  className="language__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.716265 4.33318C0.314979 4.75521 0.314979 5.41773 0.716265 5.83976L8 13.5L15.2837 5.83976C15.685 5.41773 15.685 4.75521 15.2837 4.33318C14.8528 3.87997 14.1302 3.87997 13.6993 4.33318L8 10.3271L2.30072 4.33318C1.86979 3.87998 1.14719 3.87998 0.716265 4.33318Z"
                    fill="#12A0A4"
                  />
                </svg>
              </div>
              <div className="language__variants">
                {availableLanguages.map((elem, index) => (
                  <span
                    key={index}
                    className={`language__value ${elem !== language ? 'not-selected' : ''}`}
                    onClick={() => changeLanguage(elem)}
                  >
                    {elem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
