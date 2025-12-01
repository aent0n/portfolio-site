import Hero from "@/components/Hero";
import About from "@/components/About";
import LatestUpdates from "@/components/LatestUpdates";
import CTFPodiums from "@/components/CTFPodiums";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <LatestUpdates posts={posts} />
      <About />
    </div>
  );
}
