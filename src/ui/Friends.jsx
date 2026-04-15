import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Friends = ({ friend }) => {
  const { id, name, picture, days_since_contact, tags = [], status } = friend;

  const handleStatusClick = () => {
    if (status === "active") {
      toast.success(`${name} is Active`);
    } else if (status === "busy") {
      toast.warn(`${name} is Busy`);
    } else {
      toast.error(`${name} is Inactive`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Clickable Area */}
      <Link to={`/friend/${id}`}>
        <figure className="px-6 pt-6">
          <img
            src={picture}
            alt={name}
            className="w-24 h-24 object-cover rounded-full border-4 border-base-200 hover:scale-105 transition"
          />
        </figure>

        <div className="card-body items-center text-center space-y-2">
          <h3 className="card-title">{name}</h3>
          <p className="text-sm text-gray-500">{days_since_contact} days ago</p>
        </div>
      </Link>

      {/* Non-clickable Actions */}
      <div className="card-body items-center text-center space-y-2 pt-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="card-actions justify-center gap-2">
          <button
            onClick={handleStatusClick}
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

          <Link to={`/friend/${id}`} className="btn btn-sm btn-outline gap-1">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Friends;
