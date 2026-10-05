import { useState } from 'react'

function Counterlikebutton() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    const [likes, setLikes] = useState(0);

    function handleLike() {
        setLikes(likes + 1);
    }
    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increase}>
                +
            </button>

             <p>Likes: {likes}</p>

            <button onClick={handleLike}>
                ❤️ Like
            </button>

        </div>
    );
}

export default Counterlikebutton;

/*
Initial:
count = 0

Click
 ↓
setCount(1)
 ↓
React schedules update
 ↓
Component renders again
 ↓
count = 1
 ↓
UI shows 1

Click again:

1
 ↓
setCount(2)
 ↓
render
 ↓
2

*/