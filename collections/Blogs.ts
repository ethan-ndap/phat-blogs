import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
export const Blog: CollectionConfig = {
  slug: 'blog',
  access: {
    read: () => true,// allow public read
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
    }
  ],
}