"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Define interface for your data
interface Item {
  id: number;
  name: string;
  date: Date;
}

const YourComponent: React.FC = () => {
  // Sample data
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1", date: new Date("2024-03-10") },
    { id: 2, name: "Item 2", date: new Date("2024-03-11") },
    { id: 3, name: "Item 3", date: new Date("2024-03-12") },
  ]);

  // State for storing filtered items
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  // State for date range
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Function to filter items by date range
  const filterByDateRange = () => {
    if (startDate && endDate) {
      const filtered = items.filter((item) => {
        return item.date >= startDate && item.date <= endDate;
      });
      setFilteredItems(filtered);
    }
  };

  // Function to handle filter button click
  const handleFilter = () => {
    filterByDateRange();
  };

  return (
    <div>
      <h1>Your Component</h1>
      {/* Date picker for start date */}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      {/* Date picker for end date */}
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      {/* Filter button */}
      <button onClick={handleFilter}>Filter</button>
      {/* Display filtered items */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
