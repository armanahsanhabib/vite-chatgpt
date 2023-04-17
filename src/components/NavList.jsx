const NavList = (props) => {
    return (
        <li
            className={`${props.class} list-none flex items-center text-sm py-2 px-3 my-3 rounded hover:bg-dark-800 hover:outline hover:outline-1 hover:outline-dark-800 cursor-pointer select-none`}
            onClick={props.onClick}
        >
            <div className="icon mr-3">{<props.icon />}</div>
            <div className="text">{props.text}</div>
        </li>
    );
}

export default NavList;