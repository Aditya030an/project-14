import React, { useEffect, useState } from "react";

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col sm:flex-row items-center border border-gray-300">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="w-32 h-32 rounded-lg border-2 border-gray-500"
        />
        <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-xl font-semibold">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 mt-2">Gender: {user.gender}</p>
          <p className="text-gray-700 mt-2">Phone: {user.phone}</p>
          <p className="text-gray-700 mt-2">DOB: {new Date(user.dob.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;