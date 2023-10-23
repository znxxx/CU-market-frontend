"use client";
import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="rounded-lg bg-[#40477B] text-white pl-4 text-2xl w-40 focus:outline-none"
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date: SetStateAction<Date>) => setStartDate(date)}
      // onSelect={console.log(startDate)}
    />
  );
};
export default Datepicker;
