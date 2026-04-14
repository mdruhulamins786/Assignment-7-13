import { createContext, useEffect, useState } from "react";

export const FriendContextApi = createContext();

const FriendContext = ({ children }) => {
  const [friends, setFriends] = useState([]);

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
    <FriendContextApi.Provider value={{ friends, setFriends }}>
      {children}
    </FriendContextApi.Provider>
  );
};

export default FriendContext;
