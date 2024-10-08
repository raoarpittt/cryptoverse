import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const location = useLocation();
  const selectedKey = location.pathname;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1020) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <Menu
      theme="dark"
      selectedKeys={[selectedKey]} // Set the selectedKeys prop
      mode="inline"
    >
      <Menu.Item icon={<HomeOutlined />} key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FundOutlined />} key="/cryptocurrencies">
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined />} key="/exchanges">
        <Link to="/exchanges">Exchanges</Link>
      </Menu.Item>
      <Menu.Item icon={<BulbOutlined />} key="/news">
        <Link to="/news">News</Link>
      </Menu.Item>
    </Menu>
      
      )}
    </div>
  );
};

export default Navbar;