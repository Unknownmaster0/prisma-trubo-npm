"use client";
import React, { useEffect, useState } from "react";
import axios from "@repo/axios";

const Users = () => {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = (await axios.get("/api/user")).data;
        setUsers(response.users);
        console.log(response.users);
      } catch (error) {
        console.log("error while getting users", error);
      }
    })();
  }, [setUsers]);

  return (
    <div>
      {users &&
        users.map((user: any) => <Usercard key={user.id} user={user} />)}
    </div>
  );
};

function Usercard({ user }: { user: any }) {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <div
        style={{
          color: "pink",
        }}
      >
        Name:
        {user.name}
      </div>
      <div
        style={{
          color: "pink",
        }}
      >
        {" "}
        Email:
        {user.email}
      </div>
    </div>
  );
}

export default Users;
