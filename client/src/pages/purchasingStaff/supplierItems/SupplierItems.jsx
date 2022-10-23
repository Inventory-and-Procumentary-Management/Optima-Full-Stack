import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreadcrumb, getRemoveBreadcrumb } from '../../../redux/breadcrumbApiCalls';

const SupplierItems = () => {
  const dispatch = useDispatch();
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
  return (
    <div className='common'>SupplierItems</div>
  )
}

export default SupplierItems