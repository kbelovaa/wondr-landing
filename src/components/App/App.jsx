import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import '../../utils/i18n';
import './App.scss';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const getCountryFromIP = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=353f74029ca066');
        const countryCode = response.data.country;
        localStorage.setItem('countryCode', countryCode.toLowerCase());
      } catch {
        localStorage.removeItem('countryCode');
      }
    };

    getCountryFromIP();

    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      document.documentElement.lang = storedLanguage;
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
