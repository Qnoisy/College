import React, { useState } from 'react';
import styles from './DropdownList.module.scss';

interface Option {
  name: string;
  path: string;
}

interface Props {
  options: Option[];
}

const DropdownList: React.FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selectedOption} onClick={handleToggle}>
        {selectedOption ? selectedOption.name : 'Select an option'}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option: Option) => (
            <li
              key={option.path}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
