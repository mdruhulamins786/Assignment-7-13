import React from "react";

const Friends = ({ friend }) => {
  const { id, name, picture, days_since_contact, tags = [], status } = friend;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <figure className="px-6 pt-6">
        <img
          src={picture}
          alt={name}
          className="w-24 h-24 object-cover rounded-full border-4 border-base-200 hover:scale-105 transition"
        />
      </figure>

      {/* Content */}
      <div className="card-body items-center text-center space-y-2">
        <h3 className="card-title">{name}</h3>

        <p className="text-sm text-gray-500">
          Last contact: {days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-ghost text-gray-400 badge-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="card-actions justify-center">
          <button
            className={`btn btn-sm capitalize ${
              status === "active"
                ? "btn-success"
                : status === "busy"
                  ? "btn-warning"
                  : "btn-error"
            }`}
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
