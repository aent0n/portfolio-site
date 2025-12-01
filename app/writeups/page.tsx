import { getAllPosts } from "@/lib/mdx";
import WriteupsList from "@/components/WriteupsList";

export default function WriteupsPage() {
    const posts = getAllPosts();

    return <WriteupsList posts={posts} />;
}
