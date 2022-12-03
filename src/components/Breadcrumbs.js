import * as React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Breadcrumbs = () => {
    const pathname = useLocation();
    console.log(pathname);
    const { history } = useNavigate();
    //const pathnames = pathname.split("/").filter(x => x);
    return (
        <MUIBreadcrumbs aria-label="breadcrumb">
            {/* <Link onClick={() => history.push("/")}></Link>
            {pathnames.map((name, index) => {
                return <Link onClick={() => history.push("/")}>{name}</Link>
            })} */}
        </MUIBreadcrumbs>
    );
}

export default Breadcrumbs;