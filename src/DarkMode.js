import React from "react";
const DarkMode=({handleDarkMode})=>
{
    return (
<div className="darkmode">
    <h2>Notes</h2>
<button onClick={()=>handleDarkMode((previousDarkMode)=> !previousDarkMode)} className="save">
    Toggle Mode
</button>
</div>
    );
}
export default DarkMode;