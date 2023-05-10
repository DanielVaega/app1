import { Link, Outlet, useParams } from 'react-router-dom';
import React, { useState } from 'react';


export const BlogComponent = () => {
    const DisplayBlogs = ({ blog }) => {
        return (
            <>
                <div className="blog-post">
                    <img src={blog.image} alt={blog.headline} />
                    <h2>{blog.headline}</h2>
                    <p>{blog.date}</p>
                    <p>{blog.article}</p>
                </div>
            </>
        );
    };

    const blogPosts = [
        {
            id: 1,
            headline: 'My First Blog Post',
            article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere nulla nec arcu posuere ultrices. Suspendisse potenti. Duis lacinia, risus nec laoreet pellentesque, mauris nibh bibendum mauris, et eleifend est odio ut ipsum.',
            date: 'May 1, 2022',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            headline: 'My Second Blog Post',
            article: 'Praesent ac congue elit. Duis aliquam, enim vel feugiat faucibus, nunc felis porttitor tellus, ac faucibus nisi tellus vel quam. Vestibulum fermentum, nulla vel interdum pellentesque, lorem eros consectetur nisi, in malesuada enim augue sit amet purus.',
            date: 'June 15, 2022',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 3,
            headline: 'My Third Blog Post',
            article: 'Curabitur vel sapien posuere, faucibus ante sit amet, aliquet arcu. Duis tincidunt sagittis tellus eu congue. Pellentesque consequat tellus vitae gravida consectetur.',
            date: 'August 30, 2022',
            image: 'https://picsum.photos/200/300'
        }
    ];

    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    return (
        <>
            <div className="blog-container">
                {blogPosts.map((blog) => (
                    <div key={blog.id} onClick={() => handleBlogClick(blog)}>
                        <DisplayBlogs blog={blog} />
                    </div>
                ))}
                {selectedBlog && (
                    <div className="selected-blog">
                        <DisplayBlogs blog={selectedBlog} />
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogComponent;