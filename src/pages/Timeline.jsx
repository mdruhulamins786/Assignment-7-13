import { useState } from "react";
import { FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const timelineData = [
  {
    id: 1,
    type: "call",
    name: "Tom Baker",
    date: "March 23, 2026",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    type: "text",
    name: "John Doe",
    date: "March 22, 2026",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    type: "video",
    name: "Sarah Smith",
    date: "March 20, 2026",
    img: "https://i.pravatar.cc/100?img=3",
  },
];

const Timeline = () => {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <FaPhone />;
      case "text":
        return <FaMessage />;
      case "video":
        return <FaVideo />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Timeline</h3>

      {/* Filter */}
      <div className="mb-6">
        <select
          className="select select-bordered w-full sm:w-40"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-base-100 shadow p-4 rounded-xl"
          >
            {/* Avatar */}
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 rounded-full"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-primary">{getIcon(item.type)}</span>
                <h6 className="capitalize">{item.type}</h6>
                <span className="text-gray-500">with {item.name}</span>
              </div>

              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
