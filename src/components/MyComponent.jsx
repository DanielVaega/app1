export const MyComponent = ({
    title,
    description,
    subtitle0,
    content0,
    subtitle1,
    content1
}) => {
    return(
        <>
            <div>
                <h4>
                    {description}
                </h4>
                <h1>
                    {title}
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
                </p>
            </div>
        </>
    )
}