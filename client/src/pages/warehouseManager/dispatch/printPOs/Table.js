import React from 'react'

export default function ({list}) {
  return (
    <>
    <table width="100%" className='mb-10'>
         <thead>
                <tr className='bg-gray-100 p-1'>
                <td className='font-bold'>Description</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold'>Price</td>
                <td className='font-bold'>Amount</td>
                </tr>
         </thead>
        {list.map(({id, desc,quantity,price,amount}) =>(
            <React.Fragment key={id}>
            <tbody>
                <tr>
                <td>{desc}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
                </tr>
            </tbody>
            </React.Fragment>
        ))}
    </table>
    </>
  )
}
