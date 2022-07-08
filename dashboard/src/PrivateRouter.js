import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
    let auth = {'token':false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRouter;