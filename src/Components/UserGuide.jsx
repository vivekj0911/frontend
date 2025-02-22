import React from 'react';
import welcomeImg from '../assets/images/welcome.jpg';
import featuresImg from '../assets/images/features.jpeg';
import howToUseImg from '../assets/images/howtouse.jpeg';
import faqImg from '../assets/images/faq.jpeg';

function UserGuide(){
    return (
        <div className="p-8 mt-20 ml-48"> 
            {/* Introduction */}
            <section className="mb-12">
                <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome to KrishiSarthi</h1>
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg">
                    <img src={welcomeImg} alt="Welcome" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                        KrishiSarthi is a smart agriculture management system designed to provide up-to-date agricultural insights, 
                        market trends, and financial tracking for farmers. Our platform helps you manage crops efficiently, 
                        track expenses, and get AI-powered suggestions for better farming decisions.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-green-700 mb-4">Features</h2>
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white p-6 rounded-lg shadow-lg">
                    <img src={featuresImg} alt="Features" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                    <ul className="list-disc pl-6 text-lg text-gray-700">
                        <li>🔥 **Trending Agriculture News** - Stay updated with real-time farming news.</li>
                        <li>💰 **Expense Tracking** - Record and analyze profit & loss for your crops.</li>
                        <li>🌱 **Crop Insights** - Get detailed analysis of your crops’ health and market value.</li>
                        <li>🤖 **AI Chatbot** - Smart suggestions and answers for your farming queries.</li>
                    </ul>
                </div>
            </section>

            {/* How to Use */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-green-700 mb-4">How to Use</h2>
                <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg">
                    <img src={howToUseImg} alt="How to Use" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                    <ol className="list-decimal pl-6 text-lg text-gray-700">
                        <li>🔑 **Login/Register** - Create an account to access all features.</li>
                        <li>🌾 **Add Your Crops** - Enter details about your cultivated crops.</li>
                        <li>📈 **Update Crop Details** - Log updates on growth, expenses, and yield.</li>
                        <li>💵 **Track Profit & Loss** - Manage and analyze your farming finances.</li>
                        <li>📜 **Access Logs** - View historical data and trends for better decision-making.</li>
                    </ol>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-green-700 mb-4">Frequently Asked Questions (FAQ)</h2>
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white p-6 rounded-lg shadow-lg">
                    <img src={faqImg} alt="FAQ" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                    <ul className="list-disc pl-6 text-lg text-gray-700">
                        <li><strong>How do I register?</strong> - Click on the sign-up button and fill in the required details.</li>
                        <li><strong>Can I update crop details later?</strong> - Yes, you can edit and update your crop details anytime.</li>
                        <li><strong>How does the AI chatbot work?</strong> - It provides smart farming suggestions based on your queries.</li>
                        <li><strong>Is my data secure?</strong> - Yes, we use advanced security measures to protect your information.</li>
                        <li><strong>Where can I view my profit & loss?</strong> - You can track it in the expense tracking section.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default UserGuide;
