
// schemas/blogPost.js
export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().error('Title is required.'),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      validation: Rule => Rule.max(100).error('Subtitle must be 100 characters or less.'),
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
    },
  ],
};
