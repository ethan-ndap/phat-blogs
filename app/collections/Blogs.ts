import type { CollectionConfig } from 'payload'
import { lexicalEditor, UploadFeature } from '@payloadcms/richtext-lexical'

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
      name: 'blogImage',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: 'displaySize',
                    type: 'select',
                    label: 'Image size',
                    defaultValue: 'original',
                    options: [
                      { label: 'Thumbnail (400x300)', value: 'thumbnail' },
                      { label: 'Medium (600w)', value: 'medium' },
                      { label: 'Original', value: 'original' },
                    ],
                  },
                ],
              },
            },
          }),
        ],
      })
    }
  ],
}