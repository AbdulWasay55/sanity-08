import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'BLog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            title: 'Blog Post Date',
            name: 'date',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
              calendarTodayLabel: 'Today'
            }
          },
        {
            name: 'text',
            type: 'string',
            title: 'Blog Text'
        },
        
{
    title: 'Image',
    name: 'image',
    type: 'image',
    options: {
      hotspot: true // <-- Defaults to false
    },
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
      },
      {
        name: 'attribution',
        type: 'string',
        title: 'Attribution',
      }
    ]
  }
    ]
}