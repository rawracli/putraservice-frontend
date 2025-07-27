import { Link } from "react-router-dom";

function navbar() {
    return(<div className="flex h-21 bg-black/18 items-center justify-center gap-4">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/service">service</Link>
        <Link to="/documentation">documentation</Link>
    </div>)
}

export default navbar;