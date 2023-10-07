import './Header.css'
import logo from '../../assets/images/logo.png'
import profile_header from '../../assets/images/profile-header.jpg'
import NavItem, { NavItemDropdown } from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'




const Header = (props) => {
  return (
      <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">

                      {/* <!-- ***** Logo Start ***** --> */}
                      <Link to="/" className="logo">
                          <img src={logo} alt="" />
                      </Link>
                      {/* <!-- ***** Logo End ***** -->


                      <!-- ***** Search End ***** --> */}
                      <div className="search-input">
                        <form id="search" action="#">
                          <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                          <i className="fa fa-search"></i>
                        </form>
                      </div>
                      {/* <!-- ***** Search End ***** --> */}


                      {/* <!-- ***** Menu Start ***** --> */}
                      <ul className="nav">
                          <NavItem> <Link to="/" className="active">Home</Link> </NavItem>
                          <NavItem> <Link to="browse">Browse</Link> </NavItem>
                          <NavItem> <Link to="details">Details</Link> </NavItem>
                          <NavItem> <Link to="streams">Streams</Link> </NavItem>
                          <NavItem> <Link to="profile">Profile <img src={profile_header} alt="" /> </Link></NavItem>
                      </ul>
                      <NavItemDropdown>
                          <span>Menu</span>
                      </NavItemDropdown>
                      {/* <!-- ***** Menu End ***** --> */}
                  </nav>
              </div>
          </div>
      </div>
    </header>
  )
}

export default Header