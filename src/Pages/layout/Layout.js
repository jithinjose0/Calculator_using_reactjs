import { Outlet, Link } from "react-router-dom";
import styles from './layout.module.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Layout = () => {

    return (
        <div className={styles.divStyling}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand " style={{color: "white", marginLeft:"10px"}} href="#">Vaisesika</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " style={{justifyContent: "right", marginRight:"20px"}} id="navbarNav">
            <ul className="navbar-nav" style={{gap: "20px"}}>
            <li className="nav-item active">
                {/* <a className="nav-link" href="/">Home </a> */}
                <a type="button" href='/' className="btn btn-light">Home</a>
            </li>
            <li className="nav-item">
                {/* <a className="nav-link" href="/calculator">Calculator</a> */}
                <a type="button" href="/calculator" className="btn btn-light">Calculator</a>
            </li>
            
            </ul>
        </div>
        </nav>
        <Outlet />
        </div>
        // <div className={styles.divStyling}>
        //     <nav className={styles.navStyling}>
        //         <ul className={styles.ul}>
        //             <li className={styles.li}>
        //                 {/* <Link to="/" className={styles.a} >Home</Link> */}
        //                 <NavLink
        //                     to="/"
        //                     className={({ isActive, isPending }) =>
        //                         isPending ? `${styles.a} pending` : isActive ? `${styles.a} ${styles.active}` : `${styles.a}`
        //                     }
        //                 >
        //                     Home
        //                 </NavLink>
        //             </li>
        //             <li className={styles.li}>
        //                 {/* <Link to="/calculator" className={styles.a} activeClassName={styles.active}>Calculator</Link> */}
        //                 <NavLink
        //                     to="/calculator"
        //                     className={({ isActive, isPending }) =>
        //                         isPending ? `${styles.a}` : isActive ? `${styles.a} ${styles.active}` : `${styles.a}`
        //                     }
        //                 >
        //                     Calculator
        //                 </NavLink>
        //             </li>
        //         </ul>
        //     </nav>

        //     <Outlet />
        // </div>
    )
};

export default Layout;