import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";

const Page = async ({ params }: { params: { blogId: string } }) => {

  const { blogId } = await params;
  const req = await fetch(`http://localhost:3000/api/blog/${blogId}`);
  const blog = await req.json()

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