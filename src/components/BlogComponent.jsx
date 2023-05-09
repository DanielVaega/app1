import {Link, Outlet, useParams} from "react-router-dom";
import { NavigationComponent } from "./NavigationComponent";
export const blogsPosts = [
    {
        id: 0,
    title: "My First Blog",
    description: "This is my first description.",
    date: "2020-01-01",
    images: "https://picsum.photos/id/100/200/300" // *
},
    {
        id: 1,
    title: "My Second Blog",
    description: "This is my second description.",
    date: "2020-01-01",
    images: "https://picsum.photos/id/100/200/300" // *
},
    {
        id: 2,
    title: "My Third Blog",
    description: "This is my third description.",
    date: "2020-01-01",
    images: "https://picsum.photos/id/100/200/300" // *
},
    {
        id: 3,
    title: "My Fourth Blog",
    description: "This is my fourth description.",
    date: "2020-01-01",
    images: "https://picsum.photos/id/100/200/300" // *
}
    ]; // pop, shift, push, filter, sort, map,

export const DisplayBlog = ({ id, title, description, date, image }) => {
    return (
            <Link to={`/blogs/${id}`} className="cover">
                <img src={image} alt={title} />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{date}</p>
            </Link>
    );
};

export const BlogComponent = () => {
    const { id } = useParams();
    return (
        <>
            <NavigationComponent/>
            <div className="blog-container">
            {!id ? (
                <>
                    <div className="blog-posts">
                        {blogsPosts.map(DisplayBlog(blog))}
                            <div key={blog.id}>
                                {DisplayBlog({...blog, key: blog.id})}
                            </div>
                    </div>
                </>
            ) : (
                <Outlet/>
            )}
            </div>
        </>
        
    )
}