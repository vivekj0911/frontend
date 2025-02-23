import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Growth from "./Growth";
import Customexpense from "./Customexpense"; // Import the Customexpense component

const activityTypes = ["sowing", "fertilization", "pesticide", "weeding", "harvesting"];

const fieldMappings = {
  sowing: ["date", "seedType", "quantity", "landArea", "expenses", "expensesDesc"],
  fertilization: ["date", "type", "quantity", "expenses", "expensesDesc"],
  pesticide: ["date", "chemicalsUsed", "quantity", "expenses", "expensesDesc"],
  weeding: ["date", "method", "expenses", "expensesDesc"],
  harvesting: ["date", "yieldAmount", "quality", "expenses", "expensesDesc"],
};

const CropDetails = () => {
  const location = useLocation();
  const crop = location.state?.crop;
  localStorage.setItem("cropid", crop._id);
  const [cropData, setCropData] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newActivityData, setNewActivityData] = useState({ date: new Date() });
  const [isCustomExpenseOpen, setIsCustomExpenseOpen] = useState(false); // State to control custom expense modal

  useEffect(() => {
    if (!crop?._id) return;

    const fetchCropDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return console.error("No token found");

        const response = await axios.get(
          `https://prj-backend.vercel.app/activities/${crop._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCropData(response.data);
      } catch (error) {
        console.error("Error fetching crop details:", error);
      }
    };

    fetchCropDetails();
  }, [crop?._id]);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const openUpdateForm = () => {
    setNewActivityData({ date: new Date() });
    setIsFormOpen(true);
  };

  const handleInputChange = (field, value) => {
    setNewActivityData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdateActivity = async () => {
    if (Object.values(newActivityData).some((val) => val === "")) {
      return alert("Please fill all fields!");
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) return console.error("No token found");

      await axios.post(
        `https://prj-backend.vercel.app/activities/${crop._id}/${selectedActivity}`,
        newActivityData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCropData((prev) => ({
        ...prev,
        [selectedActivity]: [...(prev[selectedActivity] || []), newActivityData],
      }));

      setIsFormOpen(false);
      setIsModalOpen(false);
      alert("Activity updated successfully!");
    } catch (error) {
      console.error("Error updating activity:", error);
      alert("Failed to update activity!");
    }
  };

  return (
    <div className="p-8 pt-36 pl-49 bg-gray-100 min-h-2/3">
      <h1 className="text-3xl font-bold mb-6 text-center">Crop Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activityTypes.map((activity) => (
          <div
            key={activity}
            className="p-6 border rounded-xl shadow-lg bg-white cursor-pointer hover:bg-gray-200 text-center transition duration-300"
            onClick={() => handleActivityClick(activity)}
          >
            <h3 className="text-xl font-semibold capitalize">{activity}</h3>
          </div>
        ))}
      </div>

      {isModalOpen && selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold capitalize">Activity: {selectedActivity}</h3>
            {cropData?.[selectedActivity]?.length > 0 ? (
              <table className="mt-4 w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-300">
                    {fieldMappings[selectedActivity].map((field) => (
                      <th key={field} className="border border-gray-300 p-2 capitalize">
                        {field.replace(/([A-Z])/g, " $1")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cropData[selectedActivity].map((item, index) => (
                    <tr key={index} className="border border-gray-300">
                      {fieldMappings[selectedActivity].map((field) => (
                        <td key={field} className="border border-gray-300 p-2">
                          {item[field] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-sm text-gray-500">No data found</p>
            )}
            <button
              onClick={openUpdateForm}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Update Activity
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold capitalize">Update {selectedActivity}</h3>
            <DatePicker
              selected={newActivityData.date}
              onChange={(date) => handleInputChange("date", date)}
              className="w-full p-2 border rounded mt-2"
              dateFormat="yyyy-MM-dd"
            />
            {fieldMappings[selectedActivity].slice(1).map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field.replace(/([A-Z])/g, " $1")}
                className="w-full p-2 border rounded mt-2"
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            ))}
            <button
              onClick={handleUpdateActivity}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded w-full hover:bg-green-700 cursor-pointer"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsFormOpen(false)}
              className="mt-2 bg-gray-600 text-white py-2 px-4 rounded w-full hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Custom Expense Button */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setIsCustomExpenseOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Custom Expense
        </button>
        <Growth />
      </div>

      {/* Custom Expense Modal */}
      {isCustomExpenseOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <Customexpense cropId={crop._id} />
            <button
              onClick={() => setIsCustomExpenseOpen(false)}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDetails;
