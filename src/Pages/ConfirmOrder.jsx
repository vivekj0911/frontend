import React, { useEffect, useState } from "react";
import axios from "axios";

const ConfirmOrder = () => {
    const API_URL = "https://prj-backend.vercel.app";
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch transactions
    const fetchTransactions = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}/get-seller-transactions`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            console.log(response.data.transactions);
            setTransactions(response.data.transactions);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    // Confirm or Reject Order
    const handleOrderAction = async (transactionId, status) => {
        try {
            const response = await axios.post(
                `${API_URL}/confirm-order`,
                { transactionId, status },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            alert(response.data.message);
            fetchTransactions(); // Refresh transactions after action
        } catch (error) {
            console.error("Error updating order status:", error);
            alert("Failed to update order status");
        }
    };
    

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Confirm Orders</h2>
            {loading ? (
                <p className="text-center text-gray-500">Loading transactions...</p>
            ) : (
                <div className="grid gap-4">
                    {transactions.map((tx) => (
                        <div
                            key={tx._id}
                            className="border rounded-lg p-4 shadow-lg bg-white"
                        >
                            <p className="text-gray-600">Product: {tx.product}</p>
                            <p className="text-lg font-semibold">Buyer name: {tx.buyer.firstName}</p>
                            <p className="text-lg font-semibold">Buyer email: {tx.buyer.email}</p>
                            <p className="text-lg font-semibold">Buyer phone: {tx.buyer.phone}</p>
                            
                            <p className="text-gray-800 font-medium">Price: ₹{tx.price}</p>
                            <p className={`font-semibold ${tx.status === "pending" ? "text-yellow-500" : tx.status === "confirmed" ? "text-green-500" : "text-red-500"}`}>
                                Status: {tx.status}
                            </p>
                            {tx.status === "pending" && (
                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => handleOrderAction(tx._id, "confirmed")}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => handleOrderAction(tx._id, "rejected")}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Reject
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ConfirmOrder;
