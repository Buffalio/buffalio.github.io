import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";
import PostsClientPage from "./client-page";
import { NO_CACHE_POLICY } from "../../lib/query";

export default async function PostsPage() {
  const posts = await client.queries.postConnection(null, NO_CACHE_POLICY);

  if (!posts) {
    return null;
  }

  return (
    <Layout rawPageData={posts.data}>
      <PostsClientPage {...posts} />
    </Layout>
  );
}
