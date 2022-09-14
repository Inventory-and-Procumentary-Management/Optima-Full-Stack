import React from 'react'
import {useState, useEffect } from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'

export default function TableForm({
    desc,setDesc, 
    quantity,setQuantity, 
    price,setPrice, 
    amount,setAmount,
    list, setList,
    itemName,dispatchQuantity
}) {

    const [isEditing, setIsEditing]= useState(false)

// submit form function
    const handleSubmit =(e)=>{
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            desc,
            quantity,
            price,
            amount,
        }
        setDesc("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
        console.log(list)
    }
// calculate amount
    // useEffect(()=>{
    //     const calAmount = (amount)=>{
    //         setAmount(quantity * price)
    //     }
    //     calAmount(amount)
    // },[amount,price,quantity,setAmount])

//edit function
const editRow= (id)=>{
    const editingRow = list.find((row)=> row.id === id)
    setList(list.filter((row)=> row.id !== id))
    setIsEditing(true)
    setDesc(editingRow.desc)
    setQuantity(editingRow.quantity)
    
}

//delete function
const deleteRow = (id)=>{
    setList(list.filter((row)=> row.id !== id))
}
   
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
    <label htmlFor='desc'>{itemName}</label>
        <input 
        type="text" 
        name="desc" 
        id="desc"
        placeholder='Item Description' 
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
        />
    </div>
    <div className="md:grid grid-cols-3 gap-10">
    <div className="flex flex-col">
    <label htmlFor='quantity'>{dispatchQuantity}</label>
        <input 
        type="text" 
        name="quantity" 
        id="quantity"
        placeholder='Quantity' 
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        />
    </div>
    {/* <div className="flex flex-col">
    <label htmlFor='price'>Item price</label>
        <input 
        type="text" 
        name="price" 
        id="price"
        placeholder='Item price' 
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        />
    </div>
    <div className="flex flex-col">
    <label htmlFor='amount'>Amount</label>
        <p>{amount}</p>
    </div> */}
    </div>
    <button 
    className=" mb-5 bg-blue-500 text-white 
        font-bold py-2 px-8 rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        type='submit'>
        {isEditing ? "Editing Row Item":"Add Table Item"}    
        </button>
    </form>
    {/*Table Items */}
    <table width="100%" className='mb-10'>
         <thead>
                <tr className='bg-gray-100 p-1'>
                <td className='font-bold'>Description</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold'>Action</td>
                </tr>
         </thead>
        {list.map(({id, desc,quantity}) =>(
            <React.Fragment key={id}>
            <tbody>
                <tr>
                <td>{desc}</td>
                <td>{quantity}</td>
                <td>
                    <button onClick={()=>deleteRow(id)}>
                    <AiOutlineDelete className='text-red-500 font-bold text-xl ' />
                    </button>
                </td>
                <td>
                    <button onClick={()=>editRow(id)}>
                    <AiOutlineEdit className='text-green-500 font-bold text-xl ' />
                    </button>
                </td>
                </tr>
            </tbody>
            </React.Fragment>
        ))}
    </table>
    </>
  )
}
