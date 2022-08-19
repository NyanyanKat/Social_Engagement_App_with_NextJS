import type { NextPage } from "next";
import Head from "next/head";
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-3 mx-auto">
    {/* <div className="max-w-5xl my-7 mx-auto"> */}
      <Head>
        <title>Jimmy Reddit</title>
      </Head>
      <PostBox />
      <div className="flex">
        {/* feed */}
      </div>
    </div>
  );
};

export default Home;
