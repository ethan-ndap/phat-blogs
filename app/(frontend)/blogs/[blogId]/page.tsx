"use client";
import { useEffect, useState } from "react";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";
import { useParams } from 'next/navigation'

const Page = () => {
  const params = useParams<{ blogId: string}>();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const req = await fetch(`http://localhost:3000/api/blog/${params.blogId}`);
      const data = await req.json();
      setBlog(data);
    };
    fetchBlog();
  }, [params.blogId]);

  if (!blog) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">{blog.title}</h1>
      <SerializedRichText
        className="payload-richtext"
        data={blog.content}
      />
    </div>
  );
};

export default Page;