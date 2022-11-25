import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
  
    //spinner
    if (loading || isSellerLoading) {
        return <button className=" m-72 btn btn-square loading"></button>;
    }
  
    if (user && isSeller) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;