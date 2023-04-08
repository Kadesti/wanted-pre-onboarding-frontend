import React from 'react'
import { Route } from 'react-router-dom'

function PrivateRoute({ ...rest }) {
    return (
        // <Route {...rest}
        <Route path="/"
            render={
                props => localStorage.getItem('access_tocken')
                    ? <redirect to={{ pathname: '/todo' }} />
                    : <redirect to={{ pathname: '/sign_up' }} />
            }
        />
    )
}

export default PrivateRoute