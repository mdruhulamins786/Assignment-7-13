import { useContext, useState } from "react";
import { FriendContextApi } from "../context-api/FriendContext";
import Friends from "./Friends";

const FriendsList = () => {
  const { friends } = useContext(FriendContextApi);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredFriends = friends?.filter((friend) => {
    const matchSearch = friend.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter = filter === "all" ? true : friend.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <h3 className="text-lg font-semibold text-center lg:text-left">
          Friends: <span className="text-primary">{friends?.length || 0}</span>
        </h3>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Search */}
          <input
            type="text"
            placeholder="Search friend..."
            className="input input-bordered w-full sm:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filter */}
          <select
            className="select select-bordered w-full sm:w-40"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="busy">Busy</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredFriends?.map((friend) => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
