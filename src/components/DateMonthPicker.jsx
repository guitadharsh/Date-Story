import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateAndMonthExtractor } from '../utils/dateAndMonthExtractor';


/**
 * DateMonthPicker component for selecting a date (MM-DD format).
 * Sets the current date by default and updates the parent component on date change.
 *
 * @param {Object} props - The component props.
 * @param {function} props.setSearchDate - Function to update the selected date (month and day).
 * @returns {JSX.Element} The DateMonthPicker component.
 */

const DateMonthPicker = ({ setSearchDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const searchDate = dateAndMonthExtractor(today)
    setSearchDate(searchDate);
  }, [setSearchDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const searchDate = dateAndMonthExtractor(date)
    setSearchDate(searchDate);
  };

  return (
    <div className="datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM-dd"
        showMonthDropdown
        showDayDropdown
        dropdownMode="select"
        className="datepicker-input"
        todayButton="Today"
      />
    </div>
  );
};

export default DateMonthPicker;
