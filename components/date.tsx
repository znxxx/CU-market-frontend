"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Datepicker = ({ startDate, setStartDate}) => {
  const initialStartDate = new Date()
  const handleDateChangeInternal = (date) => {
    setStartDate(date);
    // handleDateChange(date);
  };

  return (
    <DatePicker
      className="rounded-lg bg-[#40477B] text-white pl-4 text-2xl w-40 focus:outline-none"
      dateFormat="dd/MM/yyyy"
      selected={startDate || initialStartDate}
      onChange={handleDateChangeInternal}
    />
  );
};

export default Datepicker;
