import React from "react";

const ActivityCard = ({ activityType, onClick }) => {
  return (
    <div
      className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold">{activityType}</h3>
    </div>
  );
};

export default ActivityCard;