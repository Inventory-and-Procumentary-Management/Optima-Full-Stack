import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBreadcrumb, getRemoveBreadcrumb } from '../../../redux/breadcrumbApiCalls';

const SupplierDetails = () => {
  const dispatch = useDispatch();
  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);
  useEffect(() => {
    const setBreadcrumb = () => {
      breadcrumbs.map((item)=>{
        if(item.link == "supplierDetails"){
          getRemoveBreadcrumb(dispatch,"supplierDetails");
        }
      });
      getBreadcrumb(dispatch, 
        {
          name: "Supplier Details",
          link: "supplierDetails",
        },
      );
    };
    setBreadcrumb();
  }, []);
  return (
    <div className='common'>SupplierDetails</div>
  )
}

export default SupplierDetails