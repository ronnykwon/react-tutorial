import React, { Component } from 'react';
 
class Layout extends Component {
    render() {
    return (
        <div>
            <div>
                <h1>MadOwlNews.com - Breaking news about Mad Owls</h1>
            </div>
            <div>
                { this.props.children }
            </div>
        </div>
        );
    }
}

export default Layout;