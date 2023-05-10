import { 
    MyComponent,
    //BlogComponent,
    OneBlogComponent,
    NavigationComponent,
    DataCollector,
    LoginComponent,
} from "./";

import { Routes, Route } from "react-router-dom";

export const BlogRouting = () => {
    const data = {
        title: "BALLING .",
        description: "What Everybody Ought To Know About :",
        subtitle0:"0 --> Intro to BALLING .",
        content0:`In the early days, things were simple.
        Every hunter had his spear, every framer had his cows.
        Fast forwards a few billion years, and there are billions
        of people living in abject poverty, while millions of
        others lap up the lionshare of the precious, finite
        resources provided by the gods on high. How is your
        average joe supposed to survive, let alone thrive,
        in this new age of scams, schemes, and subpar chooling?
        How are you expected to manouver through the many
        pitfalls and obstacles ladden on the path to financial
        freedom? Are there even any options left for the lucky
        entreprenuer starting a business in the 21st Century
        of our Lord? Thankfully for you, WE have the answers,
        and through the digestion of this brief, you will too.`,
        subtitle1: "1 --> The Question ___________  ( ' How Hard Is A Trick ? ' )",
        content1: "To answer the question . . . ",
        loginlink: "{(Log in to unlock the full page! - - >)}"
        // "http://127.0.0.1:5175/login",
    }
    return (
        <>
            <NavigationComponent/>
            <Routes>
                <Route
                    path="/"
                    element={<MyComponent {...data}/>}
                />
                
                {/*<Route
                    path="/blogs"
                    element={<BlogComponent/>}
                />*/}
                
                <Route
                    path=":id"
                    element={<OneBlogComponent/>}
                />

                <Route
                    path="account"
                    element={<DataCollector/>}
                />

                <Route
                    path="login"
                    element={<LoginComponent/>}
                />
            </Routes>
        </>
    )
}