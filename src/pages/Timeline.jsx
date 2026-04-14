import { useContext } from "react";
import { FriendContextApi } from "../context-api/FriendContext";
import { FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Timeline = () => {
  const { timeline } = useContext(FriendContextApi);

  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <FaPhone className="text-green-500" />;
      case "text":
        return <FaMessage className="text-blue-500" />;
      case "video":
        return <FaVideo className="text-purple-500" />;
      default:
        return null;
    }
  };

  if (!timeline?.length) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No activity yet.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        📅 Activity Timeline
      </h2>

      {timeline.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-base-100 shadow-md p-4 rounded-xl"
        >
          {/* Avatar */}
          <img
            src={item.img}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover border"
          />

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">
              {item.type.toUpperCase()} • {item.date}
            </p>
          </div>

          {/* Icon */}
          <div className="text-xl">{getIcon(item.type)}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;