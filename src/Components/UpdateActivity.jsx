import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const UpdateActivity = () => {
  const { cropId, selectedActivity } = useParams(); // Ensure these are correctly extracted
  const location = useLocation();
  const crop = location.state?.crop || {}; // Get crop details from state
  const [activityDetails, setActivityDetails] = useState(null);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        if (!cropId || !selectedActivity) {
          console.error("Missing cropId or selectedActivity");
          return;
        }

        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://prj-backend-git-main-prathameshkhandares-projects.vercel.app/activity/${cropId}/${selectedActivity}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("API Response:", response.data);
        setActivityDetails(response.data);
      } catch (error) {
        console.error("Error fetching activity details:", error);
      }
    };

    fetchActivityDetails();
  }, [cropId, selectedActivity]);

  if (!activityDetails) {
    return <p>Loading activity details...</p>;
  }

  return (
    <div>
      <h1>Update Activity: {selectedActivity}</h1>
      <form>
        {/* Render dynamic fields based on `activityDetails` */}
        {Object.keys(activityDetails).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input type="text" value={activityDetails[key]} readOnly />
          </div>
        ))}
      </form>
    </div>
  );
};

export default UpdateActivity;
