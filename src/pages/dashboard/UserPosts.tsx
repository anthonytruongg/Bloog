import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import api from "../../components/APIinstance";

function UserPosts() {
  async function getUserPosts() {}
  return (
    <Layout>
      <Title title="Your posts" />
    </Layout>
  );
}

export default UserPosts;
