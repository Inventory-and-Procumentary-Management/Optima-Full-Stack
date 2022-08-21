import React from 'react'
import {useState, useEffect } from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'
import './printPO_supplier.css'

export default function TableForm({
    itemCode,setitemCode,
    desc,setDesc, 
    quantity,setQuantity, 
    price,setPrice, 
    amount,setAmount,
    list, setList
}) {

    const [isEditing, setIsEditing]= useState(false)

// submit form function
    const handleSubmit =(e)=>{
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            itemCode,
            desc,
            quantity,
            price,
            amount,
        }
        setitemCode("")
        setDesc("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
        console.log(list)
    }
// calculate amount
    useEffect(()=>{
        const calAmount = (amount)=>{
            setAmount(quantity * price)
        }
        calAmount(amount)
    },[amount,price,quantity,setAmount])

//edit function
const editRow= (id)=>{
    const editingRow = list.find((row)=> row.id === id)
    setList(list.filter((row)=> row.id !== id))
    setIsEditing(true)
    setDesc(editingRow.desc)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
}

//delete function
const deleteRow = (id)=>{
    setList(list.filter((row)=> row.id !== id))
}
   
  return (
    <>
    <form onSubmit={handleSubmit} className='form-style'>

    <div className="main-input-feild">
    <div>
    <label htmlFor='desc'>Item Code</label><br></br>
        <input 
        type="text" 
        name="itemCode" 
        id="itemCode"
        placeholder='Item Code' 
        value={itemCode}
        onChange={(e)=>setitemCode(e.target.value)}
        />
    </div>

    <div className="flex flex-col">

    <label htmlFor='desc'>Item Description</label><br></br>
        <input 
        type="text" 
        name="desc" 
        id="desc"
        placeholder='Item Description' 
        value={desc}
        onChange={(e)=>setDesc(e.target.value)}
        />
    </div>
    <div className="flex flex-col">
    <label htmlFor='quantity'>Quantity</label><br></br>
        <input 
        type="text" 
        name="quantity" 
        id="quantity"
        placeholder='Quantity' 
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        />
    </div>
    <div className="flex flex-col">
    <label htmlFor='price'>Item price</label> <br></br>
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
    </div>
    </div>
    <button 
    className="Add-table-item-btn"
        type='submit'>
        {isEditing ? "Editing Row Item":"Add Table Item"}    
        </button>
    </form>


    {/*Table Items */}
    <table width="100%" className='mb-10'>
         <thead className='table-head-form'>
                <tr >
                <td >Description</td>
                <td >Quantity</td>
                <td >Price</td>
                <td >Amount</td>
                <td >Action</td>
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
                <td>
                    <button onClick={()=>deleteRow(id)}>
                    <AiOutlineDelete  />
                    </button>
                    &nbsp;
                    &nbsp;
                    <button onClick={()=>editRow(id)}>
                    <AiOutlineEdit  />
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
