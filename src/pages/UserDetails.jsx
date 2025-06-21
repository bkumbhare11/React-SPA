import React from "react";
import users from "../components/Users";
import { useParams } from "react-router-dom";
import Feed from "./Feed";

function UserDetails() {
  let { username } = useParams();
  const user = users.find((u) => u.username === username);
  return (
    <>
      <div className="max-w-[600px] flex flex-col  sm:flex-row mx-auto gap-4 items-center mt-8 p-3 box-border">
        <div className=" max-w-[200px]">
          <img
            src={user.image}
            alt=""
            className="w-[180px] h-[180px] rounded-full"
          />
        </div>

        <div className=" max-w-[400px]  flex flex-col gap-4  ">
          <div className="flex justify-between px-2.5 ">
            <div className="text-center">
              <p className="font-bold">{user.posts}</p>
              <p className="font-semibold">Posts</p>
            </div>

            <div className="text-center">
              <p className="font-bold">{user.followers}</p>
              <p className="font-semibold">Followers</p>
            </div>

            <div className="text-center">
              <p className="font-bold">{user.following}</p>
              <p className="font-semibold">Following</p>
            </div>
          </div>

          <div className=" flex flex-col px-2.5">
            <p className="text-2xl font-semibold">{user.name}</p>
            <p className="text-md text-neutral-600">@{user.username}</p>
            <p>{user.profession}</p>
            <p>{user.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[900px]">
        <div className="flex flex-wrap  gap-4 justify-center">
          {user.postsData.map((post) => (
            <Feed id={post.id} image={post.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
