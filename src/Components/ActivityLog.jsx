import React, { useEffect, useState } from "react";
import { FaSeedling, FaTractor, FaWater, FaShoppingBasket } from "react-icons/fa";
import axios from "axios";

const ActivityLog = ({  }) => {
    const [cropId, setCropId] = useState(localStorage.getItem("cropid"));
  const [logData, setLogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://prj-backend.vercel.app/activities/${cropId}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const activityData = response.data;
        if (!activityData) {
          setLogData([]);
        } else {
          const extractedLogs = [];
          Object.keys(activityData).forEach((key) => {
            if (Array.isArray(activityData[key]) && activityData[key].length > 0) {
              activityData[key].forEach((entry, index) => {
                extractedLogs.push({
                  id: `${key}-${index}`,
                  action: key.charAt(0).toUpperCase() + key.slice(1),
                  type: entry.type || "N/A",
                  date: new Date(entry.date).toLocaleString(),
                });
              });
            }
          });
          setLogData(extractedLogs);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, [cropId]);

  const actionIcons = {
    Sowing: <FaSeedling className="text-green-500" />,
    Fertilization: <FaShoppingBasket className="text-yellow-500" />,
    Harvesting: <FaTractor className="text-red-500" />,
    Irrigation: <FaWater className="text-blue-500" />,
  };

  if (loading) return <p className="text-center text-gray-700">Loading activity log...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Crop Activity Log</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4 border">Sr. No</th>
              <th className="py-3 px-4 border">Action</th>
              <th className="py-3 px-4 border">Type</th>
              <th className="py-3 px-4 border">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logData.length > 0 ? (
              logData.map((log, index) => (
                <tr key={log.id} className={`text-center ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-green-100 transition`}>

                  <td className="py-3 px-4 border font-semibold">{index + 1}</td>
                  <td className="py-3 px-4 border flex items-center justify-center space-x-2">
                    {actionIcons[log.action] || <FaSeedling className="text-gray-500" />}
                    <span className="font-medium">{log.action}</span>
                  </td>
                  <td className="py-3 px-4 border">{log.type}</td>
                  <td className="py-3 px-4 border text-gray-600">{log.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">No activity records available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;