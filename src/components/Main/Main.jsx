import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import background1 from '../../images/background1.png';
import screens from '../../images/screens.png';
import background2 from '../../images/background2.png';
import chart from '../../images/chart.png';
import background3 from '../../images/background3.png';
import screen12 from '../../images/screen12.png';
import screen3 from '../../images/screen3.png';
import screen4 from '../../images/screen4.png';
import note1 from '../../images/note1.svg';
import note2 from '../../images/note2.svg';
import note3 from '../../images/note3.svg';
import background4 from '../../images/background4.png';
import weekdays from '../../constants/weekdays';
import CustomSelect from '../CustomSelect/CustomSelect';
import './Main.scss';

const Main = () => {
  const [contactWay, setContactWay] = useState('Email');
  const [name, setName] = useState('');
  const [isNameActive, setIsNameActive] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPhoneActive, setIsPhoneActive] = useState(false);
  const [text, setText] = useState('');
  const [isTextActive, setIsTextActive] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isMessageSend, setIsMessageSend] = useState(false);

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const contactUsRef = useRef(null);

  const handleContactUsClick = () => {
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (contactWay === 'Email') {
      if (name && email && isEmailValid) {
        return true;
      }
    } else if (name && phone) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setIsFormValid(true);
      setIsMessageSend(true);
      setContactWay('Email');
      setName('');
      setPhone('');
      setEmail('');
      setText('');
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="main">
      <section className="banner-section" style={{ backgroundImage: `url(${background1})` }}>
        <div className="container">
          <div className="banner">
            <h1 className="banner__title">
              {t('turningDownTime')}
              <br /> {t('into')} <span className="banner__title_highlighted">{t('revenue')}</span>
            </h1>
            <p className="banner__text">
              {t('bannerLine1')} <br />
              {t('bannerLine2')} <br />
              {t('bannerLine3')}
            </p>
            <img className="banner__img" src={screens} alt="Screens" />
            <button className="btn" onClick={handleContactUsClick}>
              {t('contactUs')}
            </button>
          </div>
        </div>
      </section>
      <section className="benefits-section">
        <div className="container">
          <div className="benefits">
            <p className="benefits__text">
              {t('wondrIs')} <span className="benefits__text_bold">{t('wayToAttract')}</span>. {t('createAd')}{' '}
              <span className="benefits__text_bold">{t('maximumImpact')}</span>.
            </p>
            <p className="benefits__text">
              {t('youOnlyPay')}
            </p>
          </div>
        </div>
      </section>
      <section className="result-section" style={{ backgroundImage: `url(${background2})` }}>
        <div className="container">
          <div className="result">
            <h2 className="result__title">{t('result')}</h2>
            <div className="result__chart">
              <img className="result__chart-img" src={chart} alt="Chart" />
              <div className="result__weekdays">
                {weekdays.map((weekday, index) => (
                  <span key={index} className="result__day">
                    {t(weekday)}
                  </span>
                ))}
              </div>
              <span className="result__label">{t('breakEven')}</span>
            </div>
            <div className="result__legend">
              <h4 className="result__subtitle">{t('unusedCapacity')}</h4>
              <div className="result__indicator">
                <span className="result__value">
                  {t('before')}: <span className="result__value_bold">82.7%</span>
                </span>
                <div className="result__line">
                  <div className="result__bar"></div>
                </div>
              </div>
              <div className="result__indicator">
                <span className="result__value">
                  {t('after')}: <span className="result__value_bold">54.2%</span>
                </span>
                <div className="result__line">
                  <div className="result__bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="scenario-section">
        <div className="container">
          <div className="scenario">
            <p className="scenario__text">
              {t('scenario')} <span className="scenario__text_bold">{t('winScenario')}</span>{t('scenarioAfter')}
            </p>
            <div className="scenario__points">
              <div className="scenario__column">
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">{t('revenueB')}</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↓</span>
                  <span className="scenario__value">{t('downtime')}</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↓</span>
                  <span className="scenario__value">{t('customerAcCost')}</span>
                </div>
              </div>
              <div className="scenario__column">
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">{t('customerAwareness')}</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">{t('marketVisibility')}</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">{t('reach')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section" style={{ backgroundImage: `url(${background3})` }}>
        <div className="container">
          <div className="work">
            <h2 className="work__title">{t('howItWorks')}</h2>
            <div className="work__step">
              <img className="work__screen" src={screen12} alt="Screens" />
              <div className="work__info">
                <img className="work__note" src={note1} alt="Note" />
                <h3 className="work__subtitle">{t('create')}</h3>
                <p className="work__text">
                  {t('createText')}
                </p>
              </div>
            </div>
            <div className="work__step">
              <div className="work__info">
                <img className="work__note" src={note2} alt="Note" />
                <h3 className="work__subtitle">{t('schedule')}</h3>
                <p className="work__text">
                  {t('scheduleText')}
                </p>
              </div>
              <img className="work__screen" src={screen3} alt="Screen" />
            </div>
            <div className="work__step">
              <img className="work__screen" src={screen4} alt="Screen" />
              <div className="work__info">
                <img className="work__note" src={note3} alt="Note" />
                <h3 className="work__subtitle">{t('welcome')}</h3>
                <p className="work__text">
                  {t('welcomeText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="container">
          <div className="pricing">
            <h2 className="pricing__title">{t('pricing')}</h2>
            <p className="pricing__text">
              {t('pricingTextLine1')} <br />
              {t('pricingTextLine2')}
            </p>
            <div className="pricing__blocks">
              <div className="pricing__block">
                <span className="pricing__label">{t('takeOut')}</span>
                <span className="pricing__value">10%</span>
                <span className="pricing__label">{t('ofTheTotalBill')}</span>
              </div>
              <div className="pricing__block">
                <span className="pricing__label">{t('dinein')}</span>
                <span className="pricing__value">5 BYN</span>
                <span className="pricing__label">{t('perReservation')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cost-section">
        <div className="container">
          <div className="cost">
            <h2 className="cost__title">{t('customerAcCost')}</h2>
            <p className="cost__text">
              {t('cacText')}
            </p>
            <div className="cost__line">
              <span className="cost__label">Wondr</span>
              <p className="cost__formula">{t('wondrFormula')}</p>
            </div>
            <div className="cost__line">
              <span className="cost__label">{t('traditional')}</span>
              <p className="cost__formula">
                {t('traditionalFormulaLine1')}<br />
                {t('traditionalFormulaLine2')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="key-benefits-section">
        <div className="container">
          <div className="key-benefits">
            <h2 className="key-benefits__title">{t('keyBenefits')}</h2>
            <div className="key-benefits__items">
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">{t('instant')}</h3>
                <p className="key-benefits__text">{t('instantText')}</p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">{t('inexpensive')}</h3>
                <p className="key-benefits__text">{t('inexpensiveText')}</p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">{t('smart')}</h3>
                <p className="key-benefits__text">
                  {t('smartText')}
                </p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">{t('effective')}</h3>
                <p className="key-benefits__text">{t('effextiveText')}</p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">{t('competitive')}</h3>
                <p className="key-benefits__text">
                  {t('competitiveText')}
                </p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">{t('unique')}</h3>
                <p className="key-benefits__text">
                  {t('uniqueText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="exclusive-section">
        <div className="container">
          <div className="exclusive">
            <h2 className="exclusive__title">{t('exclusive')}</h2>
            <p className="exclusive__text">
              {t('exclusiveText1')}
            </p>
            <p className="exclusive__text">
              {t('exclusiveText2')}
            </p>
            <span className="exclusive__link">{t('seeList')}</span>
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="container">
          <div className="reviews">
            <div className="reviews__block">
              <span className="reviews__subtitle">{t('happyUsers')}</span>
              <span className="reviews__text">250+</span>
            </div>
            <div className="reviews__block">
              <span className="reviews__subtitle">{t('service')}</span>
              <div className="reviews__stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9996 17.8441L6.18281 20.9021L7.29371 14.4251L2.58786 9.838L9.09119 8.89301L11.9996 3L14.9079 8.89301L21.4113 9.838L16.7054 14.4251L17.8163 20.9021L11.9996 17.8441Z"
                      fill="#146C79"
                      stroke="#146C79"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div className="reviews__block">
              <span className="reviews__subtitle">{t('paySecure')}</span>
              <span className="reviews__text">{t('withStripe')}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="interested-section" style={{ backgroundImage: `url(${background4})` }}>
        <div className="container">
          <div className="interested">
            <div className="interested__window">
              <h2 className="interested__title">{t('letsTalk')}</h2>
              <p className="interested__text">
                {t('letsTalkText')}
              </p>
              <button className="btn interested__btn" onClick={handleContactUsClick}>
                {t('contactUs')}
              </button>
              <p className="interested__text">{t('letsTalkNote')}</p>
            </div>
          </div>
        </div>
      </section>
      {isMessageSend ? (
        <section className="confirmation-section">
          <div className="container">
            <div className="confirmation">
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                <path d="M10.5 32.5L23 45L50.5 17.5" stroke="#146C79" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="confirmation__title">{t('messageHasBeenSent')}</h2>
              <p className="confirmation__text">{t('weWillContactYou')}</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section" ref={contactUsRef}>
          <div className="container">
            <div className="contact">
              <h2 className="contact__title">{t('fillIn')}</h2>
              <form onSubmit={handleFormSubmit} className={isFormValid ? '' : 'invalid'}>
                <p className="contact__text">{t('contactWay')}</p>
                <CustomSelect selectedOption={contactWay} setSelectedOption={setContactWay} />
                {contactWay === 'Email' && (
                  <div className={`input-wrap ${isEmailActive || email ? 'active' : ''}`}>
                    <input
                      type="text"
                      className={`input ${!isFormValid && (!email || !isEmailValid) && 'invalid-field'}`}
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onFocus={() => setIsEmailActive(true)}
                      onBlur={() => setIsEmailActive(false)}
                    />
                    <label className="label">Email*</label>
                    {!isEmailValid && <p className="message">{t('enterValidEmail')}</p>}
                  </div>
                )}
                {contactWay !== 'Email' && (
                  <div className={`input-wrap ${isPhoneActive || phone ? 'active' : ''}`}>
                    <input
                      type="text"
                      className={`input ${!isFormValid && !phone && 'invalid-field'}`}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onFocus={() => setIsPhoneActive(true)}
                      onBlur={() => setIsPhoneActive(false)}
                    />
                    <label className="label">{t('phoneNumber')}*</label>
                  </div>
                )}
                <div className={`input-wrap ${isNameActive || name ? 'active' : ''}`}>
                  <input
                    type="text"
                    className={`input ${!isFormValid && !name && 'invalid-field'}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsNameActive(true)}
                    onBlur={() => setIsNameActive(false)}
                  />
                  <label className="label">{t('name')}*</label>
                </div>
                <div className={`input-wrap ${isTextActive || text ? 'active' : ''}`}>
                  <textarea
                    rows="1"
                    className="input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight + 2}px`;
                    }}
                    onFocus={() => setIsTextActive(true)}
                    onBlur={() => setIsTextActive(false)}
                  ></textarea>
                  <label className="label">{t('text')}</label>
                  {!isFormValid &&
                    (!name || (contactWay === 'Email' && !email) || (contactWay !== 'Email' && !phone)) && (
                      <p className="message">{t('fillAllFields')}</p>
                    )}
                </div>
                <button className="btn contact__btn" type="submit">
                  {t('send')}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Main;
