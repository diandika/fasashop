import React, {Component} from 'react';
import './sidebar.css';

class Sidebar extends Component{
    render() {
        return(
            <div className="sidebar">
                <div className="sidebar-title">
                    <h3>Kategori</h3>
                </div>
                <hr/>
                <div className="Category-list">
                    <ul>
                        <li>Pria
                            <ul>
                                <li>Atasan</li>
                                <li>Bawahan</li>
                            </ul>
                        </li>
                        <li>Wanita</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;