import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface Iprops extends RouteComponentProps<any> { }

 class About extends React.Component<Iprops>{
    render() {
        return <h1>About us....</h1>
    }
}

export default withRouter(About);