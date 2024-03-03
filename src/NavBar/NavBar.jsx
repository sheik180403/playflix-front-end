function NavBar() {


    const HomeClick = () => {
        window.scrollTo({ top: 750, behavior: "smooth" })
    }

    const ThrillerClick = () => {
        window.scrollTo({ top: 1300, behavior: "smooth" })
    }

    return (

        <>
            <ul>
                <h2 className="logo">Play<span>Flix</span></h2>
                <li><a  >Home</a></li>
                <li><a onClick={HomeClick}>Popular</a></li>
                <li><a onClick={ThrillerClick}>Thriller</a></li>
                <li><a onClick={ThrillerClick}>Action</a></li>
                <li><a >My List</a></li>
            </ul>



        </>
    )
}

export default NavBar