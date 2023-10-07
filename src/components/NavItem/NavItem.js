import './NavItem.css'


const NavItem = (props) => {
    return (
        <>
            <li className="nav-item"> {props.children} </li>
        </>
    )
}


const NavItemDropdown = (props) => {
    return (
        <>
            <a className='menu-trigger'> {props.children} </a>
        </>
    )
}


export default NavItem 
export {NavItemDropdown}