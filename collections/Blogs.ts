import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',
  fields: [
    {
      name: 'content',
      type: 'richText'
    }
  ],
}