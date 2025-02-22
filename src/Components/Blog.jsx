import React from "react";

const Blog = () => {
  const blogs = [
    {
      image: "/assets/blog1.jpg",
      title: "स्मार्ट खेती के लिए आधुनिक तकनीक",
      description:
        "आधुनिक तकनीकों के इस्तेमाल से खेती को अधिक कुशल बनाया जा सकता है। ड्रोन और IoT डिवाइसेज़ के जरिए स्मार्ट फार्मिंग संभव हो रही है।",
    },
    {
      image: "/assets/blog2.jpg",
      title: "जैविक खेती के फायदे और विधियाँ",
      description:
        "जैविक खेती से मिट्टी की गुणवत्ता बनी रहती है और पर्यावरण को भी कम नुकसान होता है। इसमें रासायनिक उर्वरकों का उपयोग नहीं किया जाता।",
    },
    {
      image: "/assets/blog3.jpg",
      title: "सटीक सिंचाई प्रणाली कैसे मदद कर सकती है?",
      description:
        "सटीक सिंचाई प्रणाली से जल की बचत होती है और फसलों की उत्पादकता भी बढ़ती है। यह पारंपरिक सिंचाई की तुलना में अधिक प्रभावी है।",
    },
    {
      image: "/assets/blog4.jpg",
      title: "फसल चक्र अपनाने के लाभ",
      description:
        "फसल चक्र अपनाने से भूमि की उर्वरता बनी रहती है और पैदावार में सुधार आता है। यह किसानों के लिए आर्थिक रूप से भी लाभकारी है।",
    },
    {
      image: "/assets/blog5.jpg",
      title: "खेती में आर्टिफिशियल इंटेलिजेंस का महत्व",
      description:
        "AI आधारित सिस्टम्स से खेती में स्वचालन संभव हो रहा है, जिससे किसानों को बेहतर निर्णय लेने में मदद मिल रही है।",
    },
  ];

  return (
    <section className="mt-24 ml-48 py-16 bg-gray-100 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-700">Agriculture Blogs</h1>
        <p className="text-lg text-gray-600 mt-3">
          Stay updated with the latest agricultural trends and techniques.
        </p>
      </div>

      {/* Blog Banners */}
      <div className="max-w-screen-lg mx-auto space-y-12">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white flex items-center"
          >
            {/* Blog Image */}
            <div className="w-1/3">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-l-lg group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Blog Content */}
            <div className="w-2/3 p-6">
              <h3 className="text-3xl font-semibold text-green-700 group-hover:underline">
                {blog.title}
              </h3>
              <p className="text-gray-700 mt-2">{blog.description}</p>
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
