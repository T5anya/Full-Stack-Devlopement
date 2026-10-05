function Navbar(){
    return(
        <div className="nav">
            <div className="left">
                <img src="https://tse4.mm.bing.net/th/id/OIP.OSbk7OsDR7L0-Nk20vclqwHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo" className="logo"/>
                <div className="logotext">Stayora</div>
            </div>
            <div className="right">
                <div className="navlink">Home</div>
                <div className="navlink">About</div>
                <div className="navlink">Explore</div>
                <button className="contact">Contact us</button>
                <button className="Signin">Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;