export default {
    name:'product',
    type: "document",
    title: "Product",
    fields: [
        {
            name: "image",
            type: 'array',
            title: "Image",
            of: [{type: 'image'}],
            options: {
                hotspot: 'true',
            }
        },
        {
            name: "Name",
            type: 'string',
            title: "Name"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }

    ]

}