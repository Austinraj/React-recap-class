import React from "react";

import Counter from "./Counter";

function App(){
    const show = false //conditinal rending
    const appName = "my website";
    return (
        <> 
        {/* error =>Adjacent JSX element must be wrapped in an enclosing tag */}
        {/* <> => fragment */}
        <h1>Welcome to { show ?appName :"Austin"} </h1>
        <Counter  count={0}/>
        </>
    )
    }

export default App;