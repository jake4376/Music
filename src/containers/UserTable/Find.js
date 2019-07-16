import React from 'react';
import { Icon } from 'antd';

class Find extends React.Component {
    render() {
        return (
            <div className="loading">
                <Icon type="sync" spin />
                <span>Loading Data</span>
            </div>
        )
    }
}

export default Find;