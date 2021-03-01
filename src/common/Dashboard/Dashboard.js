import React, { useEffect } from 'react';
import './Dashboard.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header/Header';
import { getAllUserPrivileges } from '../../screens/Users/redux/UserManagementAction';

const Dashboard = props => {
  const { children } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserPrivileges());
  }, []);

  return (
    <div className="dashboard-container">
      <SideMenu />
      <div className="right-side-container">
        <Header />
        <div className="page-container">{children}</div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.element,
};

Dashboard.defaultProps = {
  children: null,
};

export default Dashboard;
