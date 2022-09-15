import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import {useState, useEffect } from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'

export default function TableForm({
    desc,setDesc,
    itemCode,setItemCode, 
    quantity,setQuantity, 
    price,setPrice, 
    amount,setAmount,
    list, setList
}) {

    const [isEditing, setIsEditing]= useState(false)

    const [sizeForm, setSizeForm] = useState(6);
// submit form function
    const handleSubmit =(e)=>{
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            desc,
            itemCode,
            quantity,
            price,
            amount,
        }
        
        setDesc("")
        setItemCode("")
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
    
    <div>
        <div>
        <Box
        sx={{
          my: 1,
          mx: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {/* <form className="productForm" onSubmit={updateProduct}> */}

        <Box
          noValidate
         
          className="productForm"
          sx={{ m: 5 }}
        >
          {/* <div className="productFormLeft"> */}
          <Grid container spacing={4}>
            {/* <Grid item md={10}> */}
            <Grid container spacing={4}>
              <Grid item md={sizeForm}>
                <TextField
                  // defaultValue={product.title}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Item Code"
                  name="title"
                  autoFocus
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  // defaultValue={product.description}
                  // variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="Quantity"
                  label="Quantity"
                  name="Quantity"
                  autoFocus
                  onChange={(e)=>setQuantity(e.target.value)}
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Invoice Number"
                  name="invoiceNumber"
                  autoFocus
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  
                  margin="normal"
                  required
                  fullWidth
                  id="messure"
                  label="Invoice Date"
                  type="date"
                  name="messure"
                >
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          {/* </form> */}
        </Box>
      </Box>
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
    <br></br>
    </div>
    <button 
    className=""
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
