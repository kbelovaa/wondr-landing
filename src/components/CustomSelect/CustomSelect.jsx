import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CustomSelect.scss';

const CustomSelect = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const { t } = useTranslation();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const options = ['Email', 'WhatsApp', 'Viber', 'Telegram'];

  return (
    <div className="custom-select" ref={selectRef}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        <span className="selected-option__name">{selectedOption}</span>
        <svg
          className={`arrow ${isOpen ? 'rotated' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 10L12 16L18 10" stroke="#37D1B5" strokeLinecap="round" />
        </svg>
      </div>
      {isOpen && (
        <div className="options-wrapper">
          <ul className="options-list">
            {options.map((option, index) => (
              <li
                key={index}
                className={option === selectedOption ? 'selected' : ''}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
