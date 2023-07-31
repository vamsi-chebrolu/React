import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

export const SlotAvailability = () => {
  const [selectedDate, setSelectedDate] = useState([null, null]);

  const handleDateChange = (dates) => {
    setSelectedDate(dates);
  };

  return (
    <div>
      <h1>Date and Time Picker</h1>
      <DateRangePicker
        value={selectedDate}
        onChange={handleDateChange}
        cleanable
      />
      <div>
        <strong>Selected Start Date and Time:</strong>{" "}
        {selectedDate[0] ? selectedDate[0].toLocaleString() : "Not selected"}
      </div>
      <div>
        <strong>Selected End Date and Time:</strong>{" "}
        {selectedDate[1] ? selectedDate[1].toLocaleString() : "Not selected"}
      </div>
    </div>
  );
};
