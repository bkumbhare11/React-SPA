import users from "../components/Users";
import UserCard from "../components/UserCard";

function Requests() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6">
        People requested to follow you
      </h1>

      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </>
  );
}

export default Requests;
