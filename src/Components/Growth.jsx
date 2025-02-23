import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const activityTypes = ["sowing", "fertilization", "pesticide", "weeding", "harvesting"];

const Growth = () => {
  const location = useLocation();
  const crop = location.state?.crop;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newActivityData, setNewActivityData] = useState({ date: new Date() });
  const [responseData, setResponseData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCapture = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://prj-backend.vercel.app/checkGrowth", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
      const data = await response.json();
      setResponseData(data);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Upload error:", error);
      setResponseData({ message: "Failed to upload image." });
      setIsPopupOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-6 flex justify-center">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleCapture}
          className="hidden"
          id="cameraInput"
        />
        <label
          htmlFor="cameraInput"
          className="bg-green-600 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-green-700"
        >
          {isLoading ? "Processing..." : "Track Growth"}
        </label>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-lg font-semibold mb-2">Growth Analysis</h2>
            <p><strong>Message:</strong> {responseData?.message}</p>
            <p><strong>Leaf Size:</strong> {responseData?.currentData?.leafSize ?? "N/A"}</p>
            <p><strong>Plant Height:</strong> {responseData?.currentData?.plantHeight ?? "N/A"}</p>
            <p><strong>New Leaves Detected:</strong> {responseData?.currentData?.newLeavesDetected ? "Yes" : "No"}</p>
            <p><strong>Comparison:</strong> {responseData?.growthComparison?.message ?? "No previous data"}</p>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Growth;
