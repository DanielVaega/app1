export const MyComponent = ({
    title,
    description,
    subtitle0,
    content0,
    subtitle1,
    content1,
    loginlink,
}) => {
    return (
        <>
            <div>
                <h4>
                    {description}
                </h4>
                <h1>
                    {title}
                </h1>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <h6>
                    {subtitle0}
                </h6>
                <p>
                    {content0}
                </p>
                <h6>
                    {subtitle1}
                </h6>
                <p>
                    {content1}
                    <a href="http://127.0.0.1:5175/login" >
                        {loginlink}
                    </a>
                </p>
            </div>
        </>
    )
}