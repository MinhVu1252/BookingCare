import React from "react";

export function Time({ times }) {
  return (
    <div className="appointment-times grid grid-cols-4 gap-2 mb-2">
      {times.slice(0, 3).map((time, index) => (
        <div
          key={index}
          className="time-slot p-2 bg-gray-100 text-center rounded-md cursor-pointer text-lg font-semibold my-1"
        >
          {time}
        </div>
      ))}
    </div>
  );
}
