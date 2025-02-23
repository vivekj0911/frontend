import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TotalExpenses = () => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        
            const token = localStorage.getItem("token");
            if (!token) {
              setError("User not authenticated");
              setLoading(false);
              return;
            }
        const response = await axios.get("http://localhost:3000/getTotalExpenses",{
            headers: { Authorization: `Bearer ${token}` },
        });
        setTotalExpense(response.data);
        
        // Mock data for different months (modify as needed)
        setChartData([
          { month: "Jan", amount: response.data * 0.8 },
          { month: "Feb", amount: response.data * 0.9 },
          { month: "Mar", amount: response.data },
          { month: "Apr", amount: response.data * 1.1 },
        ]);
      } catch (error) {
        console.error("Error fetching expenses", error);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-700">Total Expenses</h2>
        <p className="text-3xl font-semibold text-red-500 mt-2">₹{totalExpense}</p>
      </div>

      {/* Chart */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">Expense Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Bar dataKey="amount" fill="#f56565" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalExpenses;
