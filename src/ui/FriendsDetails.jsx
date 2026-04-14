import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { FriendContextApi } from "../context-api/FriendContext";
import { FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { toast } from "react-toastify";

const FriendsDetails = () => {
  const { id } = useParams();
  const { friends = [], setTimeline } = useContext(FriendContextApi);

  const handleAddTimelineData = (data, type) => {
    if (!data) {
      toast.error("No data found ❌");
      return;
    }

    const { name, picture } = data;

    const newData = {
      id: crypto.randomUUID(),
      type,
      name,
      date: new Date().toISOString().split("T")[0],
      img: picture,
    };

    toast.success(`${name} added to timeline 🎉`);
    setTimeline((prev) => [...prev, newData]);
  };

  if (!friends.length) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-3 text-gray-500">Loading friend details...</p>
      </div>
    );
  }

  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Friend not found</h2>
        <Link to="/" className="btn btn-primary mt-4">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-4">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-base-200"
              />
            </figure>

            <div className="card-body items-center text-center space-y-3">
              <h2 className="card-title text-2xl">{friend.name}</h2>
              <p className="text-gray-500 text-sm">{friend.email}</p>

              <span
                className={`badge text-white px-3 py-2 ${
                  friend.status === "active"
                    ? "badge-success"
                    : friend.status === "busy"
                      ? "badge-warning"
                      : "badge-error"
                }`}
              >
                {friend.status}
              </span>

              <div className="flex flex-wrap gap-2 justify-center">
                {friend.tags?.map((tag, i) => (
                  <span key={i} className="badge badge-outline">
                    {tag}
                  </span>
                ))}
              </div>

              <Link className="btn btn-primary w-full" to="/">
                Back Home
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8">
          <div className="card bg-base-100 shadow-xl p-6 space-y-6">
            <h2 className="text-2xl font-bold">Friend Insights</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-base-200 rounded-xl">
                <p className="text-sm text-gray-500">Last Contact</p>
                <h3 className="text-xl font-bold">
                  {friend.days_since_contact} days ago
                </h3>
              </div>

              <div className="p-4 bg-base-200 rounded-xl">
                <p className="text-sm text-gray-500">Goal</p>
                <h3 className="text-xl font-bold">Every {friend.goal} days</h3>
              </div>

              <div className="p-4 bg-base-200 rounded-xl">
                <p className="text-sm text-gray-500">Status</p>
                <h3 className="text-xl font-bold capitalize">
                  {friend.status}
                </h3>
              </div>

              <div className="p-4 bg-base-200 rounded-xl">
                <p className="text-sm text-gray-500">Tags Count</p>
                <h3 className="text-xl font-bold">{friend.tags?.length}</h3>
              </div>
            </div>

            <div className="p-4 bg-base-200 rounded-xl">
              <p className="text-sm text-gray-500 mb-2">Bio</p>
              <p className="text-gray-700">{friend.bio}</p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAddTimelineData(friend, "call")}
                className="btn btn-success flex items-center gap-2"
              >
                <FaPhone /> Call
              </button>

              <button
                onClick={() => handleAddTimelineData(friend, "text")}
                className="btn btn-info flex items-center gap-2"
              >
                <FaMessage /> Message
              </button>

              <button
                onClick={() => handleAddTimelineData(friend, "video")}
                className="btn btn-secondary flex items-center gap-2"
              >
                <FaVideo /> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
