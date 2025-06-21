import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Link to={`/${user.username}`} className="hover:cursor-pointer mb-24 ">
      <div className="max-w-[590px]  flex flex-col sm:flex-row border mx-2 sm:mx-auto gap-4 items-center mt-8 p-3 rounded-lg">
        <img
          src={user.image}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <div>
            <p className="text-xl font-semibold">{user.name}</p>
            <p className="text-neutral-600">{user.description}</p>
          </div>
          <div className="flex    gap-2">
            <button className="bg-neutral-200 py-1 px-3 rounded-md">
              Accept
            </button>
            <button className="bg-neutral-200 py-1 px-3 rounded-md">✖</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
