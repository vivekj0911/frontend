import { Link } from "react-router-dom";

function Home (){
  const boxes = [
    { name: "Post Blog", path: "/post-blog" },
    { name: "Update Market Rate", path: "/update-market-rate" },
    { name: "See All Users", path: "/users" },
    { name: "See All Merchants", path: "/merchants" }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4">
        {boxes.map((box, index) => (
          <Link
            key={index}
            to={box.path}
            className="border border-gray-400 p-6 text-center bg-white hover:bg-green-500 transition"
          >
            {box.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;