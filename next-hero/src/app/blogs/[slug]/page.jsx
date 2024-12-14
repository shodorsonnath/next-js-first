import React from "react";

const Page = ({params}) => {
    const {title, description} = blogs.find((blog) => blog.slug == params.slug);

    return (
        <div>
            <h5>{title}</h5>
            <h5>{description}</h5>
        </div>
    )
}

const blogs = [
    {
      "slug": "introduction-to-programming",
      "title": "Introduction to Programming",
      "description": "Learn the basics of programming, including syntax, logic, and problem-solving techniques."
    },
    {
      "slug": "modern-web-development",
      "title": "Modern Web Development",
      "description": "Explore the latest tools and technologies for building responsive and dynamic web applications."
    },
    {
      "slug": "data-science-foundations",
      "title": "Data Science Foundations",
      "description": "An introductory course on data analysis, visualization, and machine learning techniques."
    },
    {
      "slug": "cybersecurity-basics",
      "title": "Cybersecurity Basics",
      "description": "Understand the fundamentals of cybersecurity and learn how to protect systems from threats."
    },
    {
      "slug": "digital-marketing-strategies",
      "title": "Digital Marketing Strategies",
      "description": "Master the art of online marketing with strategies for SEO, social media, and content creation."
    }
  ]


export default Page;