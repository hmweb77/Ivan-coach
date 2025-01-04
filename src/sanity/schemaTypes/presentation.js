// schemas/presentation.js
export default {
  name: 'presentation',
  title: 'Presentation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Presentation Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          }
        ]
      }],
    },
    {
      name: 'duration',
      title: 'Duration (hours)',
      type: 'number',
      initialValue: 1,
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'details',
      title: 'Detailed Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }
          ]
        }
      ],
    },
  
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book Now',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      duration: 'duration'
    },
    prepare({title, media, duration}) {
      return {
        title,
        subtitle: `${duration} hour${duration === 1 ? '' : 's'}`,
        media
      }
    }
  }
};