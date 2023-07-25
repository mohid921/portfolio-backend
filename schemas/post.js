import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Side Projects', value: 'Side Projects' },
          { title: 'Client Work', value: 'Client Work' },
          { title: 'Open Source',  value: 'Open Source' },
        ],
      }
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: "string" }],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineType({
          name: 'post',
          title: 'Post',
          type: 'document',
          fields: [
            defineField({
              name: 'LinkTitle',
              title: 'Link Title',
              type: 'string',
            }),
            defineField({
              name: 'LinkAddress',
              title: 'LinkAddress',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'createdAt',
      title: 'CreateAt',
      type: 'date',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
