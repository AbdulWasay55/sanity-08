'use client'
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type BlogItem = {
  title: string;
  text: string;
  date: number;
  image: string;
  attribution: string;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogItem[]>([]);

  // Fetch blog posts in useEffect
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts: BlogItem[] = await client.fetch(`*[_type == 'blog']`);
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold flex text-[24px] my-10 ml-4">
          Recent blog post
        </h1>
        <div className="grid sm:grid-cols-2 gap-10 lg:grid-cols-3 mx-5 mb-5">
          {blogPosts.map((post, index) => (
            <div
              key={post.title + index} // Use a unique key (e.g., title + index)
              className="flex flex-col gap-[10px] items-center bg-[#ebe3eb] p-[20px] rounded-2xl"
            >
              <div className="flex flex-col gap-[10px] justify-center">
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.attribution}
                  width={300}
                  height={200}
                  className="rounded-xl sm:w-[400px] sm:h-[300px]"
                />
                <p className="text-[#6941C6] font-semibold text-[14px]">
                  {new Date(post.date).toLocaleDateString()} {/* Format the date */}
                </p>
                <h2 className="font-medium">{post.title}</h2>
                <p className="line-clamp-3 text-[#667085] h-[80px] text-justify w-[300px] sm:w-[350px]">
                  {post.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
