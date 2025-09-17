import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";
import type { Blog } from "@/app/payload-types";
import { toLexicalState } from "@/app/utils/assert-Lexical-Type";

import configPromise from "@/app/payload.config";
import { getPayload } from 'payload';

const Page = async (props: {
  params: Promise<{ blogId: string }>;
  }) => {
  const { blogId } = await props.params;
  const payload = await getPayload({ config: configPromise });

  let blog: Blog | null = null;
  try {
    blog = await payload.findByID({
      collection: "blog",
      id: Number(blogId),
    });
  } catch (e) {
    // not found or access denied
    blog = null;
  }

  if (!blog) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">{blog.title}</h1>
      <SerializedRichText
        className="payload-richtext"
        data={toLexicalState(blog.content)}
      />
    </div>
  );
};

export default Page;