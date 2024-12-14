import Link from "next/link";
import React from "react";

const BlogsPage = () => {
    return (
        <div>
            {
                blogs.map(blog => (<div key={blog.slug} className="border-2 p-12"> 
                <h3>{blog.title}</h3>
                <h3>{blog.description}</h3>
                <button className="bg-red-500 text-white p-2"><Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
                </div>) )
            }
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
  

export default BlogsPage;