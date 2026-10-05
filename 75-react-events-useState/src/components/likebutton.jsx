function LikeButton() {

    function handleLike() {
        console.log("Liked!");
    }

    return (
        <button onClick={handleLike}>
            ❤️ Like
        </button>
    );
}

export default LikeButton;