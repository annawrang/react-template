import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
 
interface Iprops extends RouteComponentProps<any>{ }


class Home extends React.Component<Iprops> {
    render() {
        return <h1>Home....</h1>
    }
}

export default withRouter(Home);