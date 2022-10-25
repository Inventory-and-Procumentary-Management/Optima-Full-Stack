import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreadcrumb, getRemoveBreadcrumb } from '../../../redux/breadcrumbApiCalls';
import { useHistory } from "react-router-dom";

const SupplierItems = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);
  useEffect(() => {
    const setBreadcrumb = () => {
      breadcrumbs.map((item)=>{
        if(item.link == "supplierItems"){
          getRemoveBreadcrumb(dispatch,"supplierItems");
        }
      });
      getBreadcrumb(dispatch, 
        {
          name: "Supplier Items",
          link: "supplierItems",
        },
      );
    };
    setBreadcrumb();
  }, []);
  useEffect(()=>{
    history.push("/purchaseStaff/supplierItems");
  },[]);
  return (
    <div className='common'>SupplierItems</div>
  )
}

export default SupplierItems