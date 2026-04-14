import { useContext, useState } from "react";
import { FriendContextApi } from "../context-api/FriendContext";
import Friends from "./Friends";
import { toast } from "react-toastify";

const FriendsList = () => {
  const { friends } = useContext(FriendContextApi);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  if (!friends) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handleSearchChange = (value) => {
    setSearch(value);

    if (value.length > 0) {
      toast.info(`Searching: "${value}" 🔍`);
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    toast.success(`Filter applied: ${value} 🎯`);
  };

  const filteredFriends = friends.filter((friend) => {
    const matchSearch = friend.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter = filter === "all" ? true : friend.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-8 mt-10">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <h3 className="text-lg font-semibold text-center lg:text-left">
          Friends: <span className="text-primary">{friends.length}</span>
        </h3>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search */}
          <input
            type="text"
            placeholder="Search friend..."
            className="input input-bordered w-full sm:w-64"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          {/* Filter */}
          <select
            className="select select-bordered w-full sm:w-40"
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="busy">Busy</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* No Data */}
      {filteredFriends.length === 0 ? (
        <div className="text-center text-gray-500 font-medium">
          No friends found 😢
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredFriends.map((friend) => (
            <Friends key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
