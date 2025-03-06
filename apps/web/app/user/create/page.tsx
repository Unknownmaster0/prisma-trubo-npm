"use client";
import React, { useState } from "react";
import axios from "@repo/axios";

const Usercreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onclickHandler = async function () {
    const response = (
      await axios.post("/api/user", {
        email,
        name,
      })
    ).data;

    if (response.status >= 200 && response.status <= 300) {
      console.log("user added successfully");
      console.log(response.newuser);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="your email"
        value={email}
        style={{
          marginBottom: "10px",
        }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="your name"
        value={name}
        style={{
          marginBottom: "10px",
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onclickHandler}>Submit</button>
    </div>
  );
};

export default Usercreate;
