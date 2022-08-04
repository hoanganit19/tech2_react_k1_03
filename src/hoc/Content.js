import {React, memo} from "react";

function Content(){

    console.log('re-render');

    return (
        <h1>Content</h1>
    )
}

export default memo(Content);