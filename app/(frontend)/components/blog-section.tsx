import Link from 'next/link'
import React from 'react'
import type { Blog } from '@/app/payload-types'
import { formatDateString } from '@/app/utils/formatDate'

import configPromise from "@/app/payload.config";
import { getPayload } from 'payload';

const BlogSection = async () => {
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: "blog",
    sort: "-updatedAt",
    limit: 10,
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8"
      id="blog">

      <div className="flex gap-12 sm:gap-24 md:flex-row flex-col">
        <div className="w-72">
          <h2 className="text-4xl font-bold text-light ">
            Latest from <br />
            the blog
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {docs.map((blog: Blog) => (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="group block"
            >
              <article>
                <h3 className="texl-lg md:text-2xl font-semibold text-light group-hover:text-primary-400 transition-colors mb-3">
                  {blog.title}
                </h3>
              </article>
              <time className=''>{formatDateString(blog.createdAt)}</time>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection