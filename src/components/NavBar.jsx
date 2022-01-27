import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';
import icon from '../images/cryptocurrency.png';

const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Crypto App</Link>
            </Typography.Title>
            {/* For mobile devices */}
            {/* <Button className="menu-control-container">

            </Button> */}
        </div>
    </div>
  );
}

export default NavBar;
