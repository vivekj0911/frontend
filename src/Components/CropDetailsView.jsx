import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CropDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const crop = location.state?.crop;
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        if (!crop?._id) return;
  
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://prj-backend-git-main-prathameshkhandares-projects.vercel.app/activities/${crop._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
  
        console.log("API Response:", response.data); // Debugging
  
        if (response.data) {
          const ALLOWED_ACTIVITIES = [
            "sowing",
            "fertilization",
            "pesticideApplication",
            "weeding",
            "harvesting",
          ];
  
          // Get activities that are NOT empty
          const activitiesList = ALLOWED_ACTIVITIES.filter(
            (key) => response.data[key] && response.data[key].length > 0
          );
  
          console.log("Extracted Activity Keys:", activitiesList); // Debugging
  
          const activityOptions = activitiesList.map((key) => ({
            label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
            value: key,
          }));
  
          console.log("Filtered Activities:", activityOptions); // Debugging
  
          setActivities(activityOptions);
        }
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      }
    };
  
    fetchActivities();
  }, [crop]);
  
  

  const handleActivitySelect = () => {
    if (!selectedActivity) return;
    navigate(`/update-activity/${crop._id}/${selectedActivity}`, {
      state: { crop, selectedActivity }, // Pass selectedActivity explicitly
    });
  };

  if (!crop) {
    return <p className="text-center mt-10 text-lg text-red-600">Crop details not found.</p>;
  }

  return (
    <div className="p-10">
      <button className="mb-4 px-4 py-2 bg-gray-700 text-white rounded" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <img src={crop.image || "https://via.placeholder.com/300"} alt={crop.cropName} className="w-full h-60 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{crop.cropName}</h1>
        <p className="text-gray-600 mt-2">🌍 Location: {crop.location || "Unknown"}</p>
        <p className="text-gray-600">📅 Harvest Date: {crop.harvestDate || "Not available"}</p>
        <p className="text-gray-600">💰 Expected Yield: {crop.expectedYield || "Unknown"}</p>

        {/* Update Button */}
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Update Activity
        </button>
      </div>

      {/* Modal for Activity Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Select Activity to Update</h2>
            <select
              className="w-full p-2 border rounded-lg mb-4"
              onChange={(e) => setSelectedActivity(e.target.value)}
              value={selectedActivity}
            >
              <option value="">-- Select an Activity --</option>
              {activities.length > 0 ? (
                activities.map((activity) => (
                  <option key={activity.value} value={activity.value}>
                    {activity.label}
                  </option>
                ))
              ) : (
                <option disabled>No activities available</option>
              )}
            </select>

            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleActivitySelect} disabled={!selectedActivity}>
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDetails;