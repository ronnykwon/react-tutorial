import React, {Component} from 'react';
import { News } from '../containers/News';
class Home extends Component {
    render() {
        return ( 
        <div> 
            <div>Welcome to tcc News.com</div>
            <div>
                <News />
            </div>
        </div>

        )
    }
}

export default Home;