import React, {Component} from 'react';
import HOCShowName from "../component/HOCShowName";

class HOC extends Component {
    render() {
        return (
            <div>
                <HOCShowName list={[1, 2, 3, 4]} />
            </div>
        );
    }
}

export default HOC;
