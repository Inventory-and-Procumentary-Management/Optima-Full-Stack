import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import {useState, useEffect } from 'react'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'

export default function TableForm({
    desc,setDesc,
    itemCode,setItemCode, 
    itemName, setItemName,
    uom, setUom,
    quantity,setQuantity, 
    rate,setRate, 
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
            itemName,
            uom,
            quantity,
            rate,
            amount,
        }
        
        setDesc("")
        setItemCode("")
        setItemName("")
        setUom("")
        setQuantity("")
        setRate("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
        console.log(list)
    }
// calculate amount
    useEffect(()=>{
        const calAmount = (amount)=>{
            setAmount(quantity * rate)
        }
        calAmount(amount)
    },[amount,rate,quantity,setAmount])

//edit function
const editRow= (id)=>{
    const editingRow = list.find((row)=> row.id === id)
    setList(list.filter((row)=> row.id !== id))
    setIsEditing(true)
    setDesc(editingRow.desc)
    setItemCode(editingRow.itemCode)
    setItemName(editingRow.itemName)
    setUom(editingRow.uom)
    setRate(editingRow.rate)
    setQuantity(editingRow.quantity)
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
                  value={itemCode}
                  required
                  fullWidth
                  id="itemCode"
                  label="Item Code"
                  name="itemCode"
                  autoFocus
                  onChange={(e)=>{
                    setItemCode(e.target.value)
                }
                }
                />
              </Grid>
              <Grid item md={sizeForm}>
                <TextField
                  // defaultValue={product.title}
                  // variant="standard"
                  margin="normal"
                  value={itemName}
                  required
                  fullWidth
                  id="itemName"
                  label="Item Name"
                  name="itemName"
                  autoFocus
                  onChange={(e)=>setItemName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField
                  // defaultValue={product.description}
                  // variant="standard"
                  margin="normal"
                  value={quantity}
                  required
                  fullWidth
                  id="Quantity"
                  label="Quantity"
                  name="Quantity"
                  autoFocus
                  onChange={(e)=>setQuantity(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <TextField
                  // defaultValue={product.title}
                  // variant="standard"
                  margin="normal"
                  required
                  value={uom}
                  fullWidth
                  id="title"
                  label="UOM"
                  name="title"
                  autoFocus
                  onChange={(e)=>setUom(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <TextField
                  margin="normal"
                  required
                  value={rate}
                  fullWidth
                  id="description"
                  label="Rate"
                  name="invoiceNumber"
                  autoFocus
                  
                  onChange={(e)=>setRate(e.target.value)}
                />
                
              </Grid>
              <Grid item xs={6} md={6} alignItems="center">
                <TextField
                  margin="normal"
                  inputProps={
					{ readOnly: true, }
				}
                  value={amount}
                  fullWidth
                  id="description"
                  label="Amount"
                  name="invoiceNumber"
                  autoFocus
                  
                />
                 <Button type='submit' size = "medium" variant="contained">
                    {isEditing ? "Editing Row Item":"Add Table Item"}    
                </Button>
              </Grid>
              <Grid item xs={4} md={4}>
               
                </Grid>
              {/* <Grid item md={sizeForm}>
                <TextField
                  value={amount}
                >
                </TextField>
              </Grid> */}
            </Grid>
          </Grid>
          {/* </form> */}
        </Box>
      </Box>
        </div>
    </div>
    </form>

    <Box
        sx={{
          my: 0.5,
          mx: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >

    {/*Table Items */}
    <table width="100%" className='mb-10'>
         <thead className='table-head-form'>
                <tr >
                <td >Item Code</td>
                <td >Item Name</td>
                <td >UOM</td>
                <td >Price</td>
                <td >Quantity</td>
                <td >Amount</td>
                <td >Action</td>
                </tr>
         </thead>
        {list.map(({id,itemCode,itemName,uom,quantity,rate,amount}) =>(
            <React.Fragment key={id}>
            <tbody>
                <tr>
                <td>{itemCode}</td>
                <td>{itemName}</td>
                <td>{uom}</td>
                <td>{rate}</td>
                <td>{quantity}</td>
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

        </Box>


    </>
  )
}
