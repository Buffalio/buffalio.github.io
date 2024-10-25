import client from "../tina/__generated__/client";
import Layout from "../components/layout/layout";
import ClientPage from "./[...filename]/client-page";
import React from "react";

export default async function HomePage() {
  const data = await client.queries.page({
    relativePath: `home.md`,
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data}></ClientPage>
    </Layout>
  );
}
