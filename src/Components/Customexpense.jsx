import React, { useState,useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const categories = [
   
  { value: "labor", label: "Labor (मजुरी)" },
  { value: "machinery", label: "Machinery (यंत्रसामग्री)" },
  { value: "other", label: "Other (इतर)" },
];

const Customexpense = ({ cropId }) => {
  console.log("Crop ID:", cropId); // Debugging to ensure cropId is received

  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    date: new Date(),
    description: "",
    category: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);





  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setExpenseData((prevData) => ({
      ...prevData,
      date,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
  
    console.log("Sending Data to API:", expenseData, "Crop ID:", cropId);
  
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
  
      const response = await axios.post(
        `https://prj-backend.vercel.app/activities/addothereexpenses/${cropId}`, // Send cropId as a query parameter
        expenseData, // Send only expenseData in the request body
        {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      setMessage("Expense added successfully!");
      setExpenseData({
        title: "",
        amount: "",
        date: new Date(),
        description: "",
        category: "",
      });
    } catch (error) {
      setMessage("Failed to add expense.");
      console.error("Error adding expense:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      {message && <p className="text-center mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title (शिर्षक / शीर्षक)"
          value={expenseData.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (रक्कम / राशि)"
          value={expenseData.amount}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <DatePicker
          selected={expenseData.date}
          onChange={handleDateChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <select
          name="category"
          value={expenseData.category}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        >
          <option value="">Select Category (वर्ग निवडा / श्रेणी चुनें)</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Description (वर्णन / विवरण)"
          value={expenseData.description}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default Customexpense;
