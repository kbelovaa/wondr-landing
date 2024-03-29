import React, { useEffect, useRef, useState } from 'react';
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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const contactUsRef = useRef(null);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

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

  if (!imagesLoaded) {
    return (
      <div className="main">
        <div className='spinner'></div>
      </div>
    );
  }

  return (
    <div className="main">
      <section className="banner-section" style={{ backgroundImage: `url(${background1})` }}>
        <div className="container">
          <div className="banner">
            <h1 className="banner__title">
              Turning downtime
              <br /> into <span className="banner__title_highlighted">revenue</span>
            </h1>
            <p className="banner__text">
              With Wondr, restaurants can <br />
              instantly attract customers <br />
              when they need them most
            </p>
            <img className="banner__img" src={screens} alt="Screens" />
            <button className="btn" onClick={handleContactUsClick}>
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className="benefits-section">
        <div className="container">
          <div className="benefits">
            <p className="benefits__text">
              Wondr is an <span className="benefits__text_bold">easy and instant way to attract customers</span>. In a
              few simple steps you create ads with time-sensitive offers while Wondr’s algorithm analyses the
              addressable market and predicts consumer behaviour, resulting in highly targeted distribution to nearby
              customers. With minimal effort Wondr gives you{' '}
              <span className="benefits__text_bold">maximum impact and conversion rate</span>.
            </p>
            <p className="benefits__text">
              You only pay a small fee after a sale has taken place - a unique proposition in the world where
              advertising still is paid for upfront, without any guarantee of success.
            </p>
          </div>
        </div>
      </section>
      <section className="result-section" style={{ backgroundImage: `url(${background2})` }}>
        <div className="container">
          <div className="result">
            <h2 className="result__title">The result</h2>
            <div className="result__chart">
              <img className="result__chart-img" src={chart} alt="Chart" />
              <div className="result__weekdays">
                {weekdays.map((weekday, index) => (
                  <span key={index} className="result__day">
                    {weekday}
                  </span>
                ))}
              </div>
              <span className="result__label">Break-even</span>
            </div>
            <div className="result__legend">
              <h4 className="result__subtitle">Unused capacity</h4>
              <div className="result__indicator">
                <span className="result__value">
                  Before: <span className="result__value_bold">82.7%</span>
                </span>
                <div className="result__line">
                  <div className="result__bar"></div>
                </div>
              </div>
              <div className="result__indicator">
                <span className="result__value">
                  After: <span className="result__value_bold">54.2%</span>
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
              Customer traffic at restaurants naturally varies throughout operating hours, with slow periods and reduced
              guest numbers significantly impacting sales. Wondr solves this by empowering restaurants to drive customer
              traffic during crucial times. By creating and promoting targeted, time-limited offers during slower
              business hours, restaurants can effectively attract and engage customers right when needed, transforming
              underperforming hours into valuable revenue opportunities. While customers gain access to savings during
              low-traffic periods. <span className="scenario__text_bold">A true win-win scenario</span>.
            </p>
            <div className="scenario__points">
              <div className="scenario__column">
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">Revenue</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↓</span>
                  <span className="scenario__value">Downtime</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↓</span>
                  <span className="scenario__value">Customer Acquisition Cost </span>
                </div>
              </div>
              <div className="scenario__column">
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">Customer Awareness</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">Market Visibility</span>
                </div>
                <div className="scenario__point">
                  <span className="scenario__arrow">↑</span>
                  <span className="scenario__value">Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section" style={{ backgroundImage: `url(${background3})` }}>
        <div className="container">
          <div className="work">
            <h2 className="work__title">How it works</h2>
            <div className="work__step">
              <img className="work__screen" src={screen12} alt="Screens" />
              <div className="work__info">
                <img className="work__note" src={note1} alt="Note" />
                <h3 className="work__subtitle">Create</h3>
                <p className="work__text">
                  In a few simple steps restaurants create time-sensitive, take-out or dine-in offers seen by
                  purchase-ready nearby customers on the Wondr app.
                </p>
              </div>
            </div>
            <div className="work__step">
              <div className="work__info">
                <img className="work__note" src={note2} alt="Note" />
                <h3 className="work__subtitle">Schedule</h3>
                <p className="work__text">
                  Wondr’s algorithm suggests optimal times to run highly targeted offers with discounts to customers.
                </p>
              </div>
              <img className="work__screen" src={screen3} alt="Screen" />
            </div>
            <div className="work__step">
              <img className="work__screen" src={screen4} alt="Screen" />
              <div className="work__info">
                <img className="work__note" src={note3} alt="Note" />
                <h3 className="work__subtitle">Welcome</h3>
                <p className="work__text">
                  When purchasing take-out or making a dine-in reservation, the customer will receive a QR code, which
                  they will present to the restaurant to be scanned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="container">
          <div className="pricing">
            <h2 className="pricing__title">Pricing</h2>
            <p className="pricing__text">
              Priced to be efficient, measurable and the lowest advertising/customer <br />
              acquisition cost medium available, Wondr only charges upon actual sales results
            </p>
            <div className="pricing__blocks">
              <div className="pricing__block">
                <span className="pricing__label">Take-out</span>
                <span className="pricing__value">10%</span>
                <span className="pricing__label">of the total bill</span>
              </div>
              <div className="pricing__block">
                <span className="pricing__label">Dine-in</span>
                <span className="pricing__value">5 BYN</span>
                <span className="pricing__label">per reservation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cost-section">
        <div className="container">
          <div className="cost">
            <h2 className="cost__title">Customer Acquisition Cost</h2>
            <p className="cost__text">
              CAC - the most important yet elusive metric when growing the customer base and loyalty. With the
              traditional approach, finding a precise and real-time CAC is often difficult as it is based on past
              spending and fails to distinguish between high and low-spending clients. With Wondr, it is in real-time
              and precise, set by the restaurant itself.
            </p>
            <div className="cost__line">
              <span className="cost__label">Wondr</span>
              <p className="cost__formula">CAC = promotional discount + Wondr fee</p>
            </div>
            <div className="cost__line">
              <span className="cost__label">Traditional</span>
              <p className="cost__formula">
                CAC = all marketing costs per year /<br />
                number of customers per year
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="key-benefits-section">
        <div className="container">
          <div className="key-benefits">
            <h2 className="key-benefits__title">Key benefits</h2>
            <div className="key-benefits__items">
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">Instant</h3>
                <p className="key-benefits__text">Post an ad and instantly get access to purchase-ready customers</p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">Inexpensive</h3>
                <p className="key-benefits__text">Free to use and only pay when a successful sale is generated</p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">Smart</h3>
                <p className="key-benefits__text">
                  Wondr's algorithm suggests optimal times to run ads and attract the most customers
                </p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">Effective</h3>
                <p className="key-benefits__text">Allows you to upsell downtime + maximise peak hours</p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">Competitive</h3>
                <p className="key-benefits__text">
                  No upfront marketing or material cost, no time/cash investment into hit-or-miss marketing
                </p>
              </div>
              <div className="key-benefits__item">
                <h3 className="key-benefits__subtitle">Unique</h3>
                <p className="key-benefits__text">
                  Allows you to precisely calculate and set your own customer acquisition cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="exclusive-section">
        <div className="container">
          <div className="exclusive">
            <h2 className="exclusive__title">Exclusive</h2>
            <p className="exclusive__text">
              Wondr works exclusively with restaurants that offer excellent products and assists them in driving more
              customer traffic. The service is by invitation only and is extended solely to premium restaurants, which
              we categorize as Category A, representing approximately [x]% of all restaurants in [city]. Wondr
              differentiates itself from any discount app and does not offer low-quality food options from average and
              lower-tier restaurants.
            </p>
            <p className="exclusive__text">
              We have identified [nr] out of the [nr] restaurants in [city] as category A restaurants. To access the
              list of these outstanding restaurants, click the link below. This list undergoes continuous review to
              ensure accuracy and relevance in line with our high standards.
            </p>
            <span className="exclusive__link">See list!</span>
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="container">
          <div className="reviews">
            <div className="reviews__block">
              <span className="reviews__subtitle">Happy users</span>
              <span className="reviews__text">250+</span>
            </div>
            <div className="reviews__block">
              <span className="reviews__subtitle">Service</span>
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
              <span className="reviews__subtitle">Pay secure</span>
              <span className="reviews__text">with Stripe</span>
            </div>
          </div>
        </div>
      </section>
      <section className="interested-section" style={{ backgroundImage: `url(${background4})` }}>
        <div className="container">
          <div className="interested">
            <div className="interested__window">
              <h2 className="interested__title">Interested? Let’s talk</h2>
              <p className="interested__text">
                Simply click here to enhance your restaurant's performance with this powerful new tool.
              </p>
              <button className="btn interested__btn" onClick={handleContactUsClick}>
                Contact us
              </button>
              <p className="interested__text">No commitment. Cancel anytime.</p>
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
              <h2 className="confirmation__title">Your message has been sent</h2>
              <p className="confirmation__text">We will contact you soon</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section" ref={contactUsRef}>
          <div className="container">
            <div className="contact">
              <h2 className="contact__title">Fill in</h2>
              <form onSubmit={handleFormSubmit} className={isFormValid ? '' : 'invalid'}>
                <p className="contact__text">How do you want us to contact you?</p>
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
                    {!isEmailValid && <p className="message">Please enter a valid email address</p>}
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
                    <label className="label">Phone nr*</label>
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
                  <label className="label">Name*</label>
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
                  <label className="label">Text</label>
                  {!isFormValid &&
                    (!name || (contactWay === 'Email' && !email) || (contactWay !== 'Email' && !phone)) && (
                      <p className="message">Please fill in all fields</p>
                    )}
                </div>
                <button className="btn contact__btn" type="submit">
                  Send
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
