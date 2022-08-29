import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession } from "next-auth/react";
import Player from "../components/Player";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
export default function Home() {
  return (
    <Layout>
      <div className="pl-10 pr-0 mr-0 pbindex overflow-y-scroll scrollbar-hide h-screen overflow-hidden">
        <Row title="Trending" getcollection="Pop" />
        <Row title="Rock" getcollection="Pop" />
        <Row title="Metal" getcollection="Pop" />
        <Row title="Pop" getcollection="Pop" />
        <Row title="Relaxing" getcollection="Pop" />
        <Row title="Phonk" getcollection="Pop" />
      </div>
    </Layout>
    //
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
