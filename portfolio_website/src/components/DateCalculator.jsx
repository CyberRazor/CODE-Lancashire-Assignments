import React, { useState, useEffect } from 'react';

const DateCalculator = ({ startDate, endDate }) => {
  const [days, setDays] = useState(null);
  const [cost, setCost] = useState(null);
  const ratePerDay = 250;

  // Helper function to count weekdays between two dates
  const countWeekdays = (start, end) => {
    let count = 0;
    let currentDate = new Date(start);

    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay();
      // Only count weekdays (Monday to Friday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
  };

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Ensure that the start date is before the end date
      if (start <= end) {
        const weekdayCount = countWeekdays(start, end); // Count weekdays only
        const totalCost = weekdayCount * ratePerDay;
        setDays(weekdayCount);
        setCost(totalCost);
      } else {
        setDays(null);
        setCost(null);
        alert('End date should be after the start date');
      }
    }
  }, [startDate, endDate]);

  return (
    <div>
      <div>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
      </div>
      {days !== null && cost !== null ? (
        <div className='m-4 font-semibold'>
          <h2>Results:</h2>
          <p>Number of weekdays: {days}</p>
          <p>Estimated cost: £{cost}</p>
        </div>
      ) : (
        <p>Please select valid dates to calculate the cost.</p>
      )}
    </div>
  );
};

export default DateCalculator;
