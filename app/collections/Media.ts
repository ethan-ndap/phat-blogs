    // src/collections/Media.ts
    import type { CollectionConfig } from 'payload'

    export const Media: CollectionConfig = {
      slug: 'media',
      access: { read: () => true }, // public read so images load without auth
      upload: {
        staticDir: 'media', // Folder where media will be stored
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            position: 'centre',
            generateImageName: ({ height, sizeName, extension, width }) => {
              return `custom-${sizeName}-${height}-${width}.${extension}`
            },
          },
          {
            name: 'medium',
            height: undefined,
            width: 600,
            position: 'centre',
          },
          // ... other image sizes
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'], // Allow only image uploads
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        },
      ],
    }