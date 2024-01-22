enum ECategories {
    Services = 'Services',
    About = 'About',
    Contact = 'Contact',
    HowWeWork = 'HowWeWork',
}

export const categories: string = [...Object.values(ECategories)].join(', ')

export const delimeter = '###'

export const categoriesDescription = `
    category: ${ECategories.Services}
    description: If a customer is interested in services, he asks what services are available or what we can offer him. Also, if he is interested in a specific service or wants to order a development.
    ${delimeter}
    category: ${ECategories.About}
    description: If the client wants to know about us or about our service, about what kind of specialists we have.
    ${delimeter}
    category: ${ECategories.Contact}
    description: If the client wants to contact us or to get our contacts, then choose this category.
    ${delimeter}
    category: ${ECategories.HowWeWork}
    description: If the client wants to know how we work, how will the product be developed, how will it be implemented.
`
