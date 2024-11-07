// schemas/category.js
export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().error('Category title is required.'),
      options: {
        list: [
          { title: 'Blog', value: 'Blog' },
          { title: 'Presentation', value: 'Presentation' },
          { title: 'Event', value: 'Event' },
        ],
      },
    },
  ],
};
