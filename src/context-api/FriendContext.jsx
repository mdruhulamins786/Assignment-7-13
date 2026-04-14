import { createContext, useEffect, useState } from "react";

export const FriendContextApi = createContext();

const FriendContext = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Failed to load friends:", error);
      }
    };

    loadData();
  }, []);

  return (
    <FriendContextApi.Provider
      value={{ friends, setFriends, timeline, setTimeline }}
    >
      {children}
    </FriendContextApi.Provider>
  );
};

export default FriendContext;
