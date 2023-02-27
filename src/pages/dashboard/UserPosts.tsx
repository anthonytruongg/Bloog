import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import api from "../../components/APIinstance";
import { UserContext } from "../../context/UserContext";

function UserPosts() {
  const userContext = useContext(UserContext);

  async function getUserPosts() {}
  return (
    <Layout>
      <Title title="Your posts" />
      <h1>Welcome {userContext.user?.email}</h1>
    </Layout>
  );
}

export default UserPosts;
