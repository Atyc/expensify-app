// Higher order component (HOC) - A component that renders another component
//Reuse code
// render highjacking
// prop manipulation
// abstract state

import React from 'react';
import ReatcDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>  
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in</p>}
            
        </div>
    )
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReatcDom.render(<AdminInfo isAdmin={true} info="this are the details"/>, document.getElementById('app'));
ReatcDom.render(<AuthInfo isAuthenticated={true} info="this are the details"/>, document.getElementById('app'));