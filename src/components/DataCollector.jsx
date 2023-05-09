export const DataCollector = () => {
    return (
        <>
            <form id="signin" className="sign-in">
                <label id="fullname">Full Name</label>
                <br/>
                <input type="text" id="name" name="name"/>
                <br/>
                <label id="email">Email</label>
                <br/>
                <input type="text" id="email" name="email"/>
                <br/>
                <label id="phone">Phone</label>
                <br/>
                <input type="text" id="phone" name="phone"/>
                <br/>
                <label id="address">Address</label>
                <br/>
                <input type="text" id="address" name="address"/>
                <br/>
            </form>
        </>
    )
}