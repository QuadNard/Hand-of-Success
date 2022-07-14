import { Link } from 'react-router-dom'





const Navbar = () => {
   
    return (
    <header>
        <div className="container">
         <Link to="/">
         <Link to="/quote">
         <Link to="/todo">
         <Link to="/zulu">
         </Link>
         </Link>   
         </Link>    
            <h1>Hand of success</h1>
         </Link>
        </div>
    </header>
    )
}

export default Navbar 