import React from 'react'

function Error() {
    const array = ["shiya","yashi","filo"];
    const arraylist = array.map((w)=><li>{w}</li>)
  return (
    <div>
        <ul>{arraylist}</ul>
    </div>
  )
}
export default Error;