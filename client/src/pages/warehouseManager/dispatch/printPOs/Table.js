import React from 'react'

export default function ({list}) {
  console.log(list)
  return (
    <>
    <table width="100%" className='mb-10'>
         <thead>
                <tr className='bg-gray-100 p-1'>
                <td className='font-bold'style={{align:"canter"}}>Description</td>
                <td className='font-bold'style={{align:"canter"}}>Quantity</td>
                {/* <td className='font-bold'>Price</td>
                <td className='font-bold'>Amount</td> */}
                </tr>
         </thead>
        {list.map(({id, desc,quantity,price,amount}) =>(
            <React.Fragment key={id}>
            <tbody style={{alignItems:"canter"}}>
                <tr>
                <td style={{alignSelf:"canter"}}>{desc}</td>
                <td style={{align:"canter"}}>{quantity}</td>
                {/* <td>{price}</td>
                <td>{amount}</td> */}
                </tr>
            </tbody>
            </React.Fragment>
        ))}
    </table>
    </>
  )
}
