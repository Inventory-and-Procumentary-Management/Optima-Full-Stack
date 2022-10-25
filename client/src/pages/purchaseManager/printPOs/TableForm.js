import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getProducts } from "../../../redux/productApiCalls";
import Autocomplete from "@mui/material/Autocomplete";
import { getSupplierProducts } from "../../../redux/SupplierProductApiCalls";

export default function TableForm({
  desc,
  setDesc,
  itemCode,
  setItemCode,
  itemName,
  setItemName,
  uom,
  setUom,
  quantity,
  setQuantity,
  rate,
  setRate,
  amount,
  setAmount,
  list,
  setList,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const [correctDataArray, setCorrectDataArray] = useState([]);
  const [listNew, setListNew] = useState([]);

  const [sizeForm, setSizeForm] = useState(6);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const supplierproducts = useSelector(
    (state) => state.supplierproduct.supplierproducts
  );
  const userType = useSelector((state) => state.user.userType);

  const [quantityNew, setQuantityNew] = useState(0);
  const [amountNew, setAmountNew] = useState(0);
  const [rateNew, setRateNew] = useState(0);
  const [uomNew, setUomNew] = useState("");

  useEffect(() => {
    const getProductsItems = async () => {
      const supplierStatus = await getSupplierProducts(dispatch);
      if (supplierStatus) {
        const inventoryProductsStatus = await getProducts(dispatch);
        if (inventoryProductsStatus) {
          let data = [];
          supplierproducts.map((item) => {
            products.map((x) => {
              if (item.inventor_item_id == x.inventor_item_id) {
                data.push({ ...item, ["inventoryItemData"]: x });
              }
            });
          });
          setDataArray(data);
        }
      }

      console.log(products);
      console.log(supplierproducts);
      console.log(dataArray);
      //console.log(userType);
    };
    getProductsItems();
  }, [dispatch]);

  const options = products.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  // submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      desc,
      itemCode,
      itemName,
      uom,
      quantity,
      rate,
      amount,
    };

    setDesc("");
    setItemCode("");
    setItemName("");
    setUom("");
    setQuantity("");
    setRate("");
    setAmount("");
    setList([...list, newItems]);
    setIsEditing(false);
    console.log(list);
  };
  // calculate amount
  useEffect(() => {
    const calAmount = (amount) => {
      setAmount(quantity * rate);
    };
    calAmount(amount);
  }, [amount, rate, quantity, setAmount]);

  //edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDesc(editingRow.desc);
    setItemCode(editingRow.itemCode);
    setItemName(editingRow.itemName);
    setUom(editingRow.uom);
    setRate(editingRow.rate);
    setQuantity(editingRow.quantity);
  };

  //delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  const clickAddTableItem = () => {
    console.log("Click una");
    // setListNew((prev) => {
    //   return { ...prev };
    // });
    let arrayData1 = [];
    arrayData1.push(listNew);
    arrayData1.push({
      id: correctDataArray.inventor_item_id,
      itemCode: correctDataArray.inventor_item_id,
      itemName: correctDataArray.inventoryItemData.title,
      quantity:quantityNew,
      uom: uomNew,
      rate: rateNew,
      amount: amountNew,
    });
    setListNew(arrayData1);
    setUomNew('');
    setQuantityNew(0);
    setRateNew(0);
    setAmountNew(0);
    // id, itemCode, itemName, uom, quantity, rate, amount
  };
  const changeValue = (data) => {
    dataArray.map((item) => {
      if (item.inventor_item_id == data.inventor_item_id) {
        setCorrectDataArray(item);
        setUomNew(item.inventoryItemData.uom);
        // setQuantity(item.inventoryItemData.totalQuantity);
        setRateNew(item.price);
        // setAmountNew(quantity*rate);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-style">
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

              <Box noValidate className="productForm" sx={{ m: 1 }}>
                {/* <div className="productFormLeft"> */}
                <Grid container spacing={1}>
                  {/* <Grid item md={10}> */}
                  <div className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-center">
                    <h1 className="font-bold uppercase tracking-wide text-3xl mb-3">
                      {/* {itemHeader.item6} */} Purchase Invoice
                    </h1>
                  </div>
                  <Grid container spacing={3}>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        value="OPTIMA"
                        required
                        fullWidth
                        id="companyName"
                        label="Company Name"
                        name="companyName"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        value="161/A, Aggona, Malabe, Sri Lanka"
                        required
                        fullWidth
                        id="companyAddress"
                        //label="Company Address"
                        name="companyAddress"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        value="optima@gmail.com"
                        required
                        fullWidth
                        id="companyAddress"
                        label="Company Email"
                        name="companyAddress"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        value="0116598453"
                        required
                        fullWidth
                        id="companyNumber"
                        //label="Company Number"
                        name="companyNumber"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="clientName"
                        label="Client Name"
                        name="clientName"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="clientAddress"
                        label="Client Address"
                        name="clientAddress"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="invoiceNum"
                        label="Invoice Num"
                        name="invoiceNum"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>
                    <Grid item md={sizeForm}>
                      <TextField
                        // defaultValue={product.title}
                        // variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="invoiceDate"
                        label="Invoice Date"
                        name="invoiceDate"
                        autoFocus
                        onChange={(e) => {}}
                      />
                    </Grid>

                    <Grid item md={sizeForm} mt={5}>
                      {/* <TextField
                        // defaultValue={product.title}
                        variant="standard"
                        margin="normal"
                        // value={itemName}
                        required
                        fullWidth
                        id="itemName"
                        label="Item Name"
                        name="itemName"
                        autoFocus
                        onChange={(e) => {
                          console.log(e.target.value);
                          setItemName(e.target.value);
                        }}
                      /> */}
                      <Autocomplete
                        id="grouped-demo"
                        onChange={(event, newValue) => {
                          changeValue(newValue);
                          console.log(newValue);
                          console.log(event);
                        }}
                        options={options.sort(
                          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                        )}
                        groupBy={(option) => option.firstLetter}
                        // getOptionLabel={(option) => option.title}
                        getOptionLabel={(option) => option.title}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Item Name"
                            variant="standard"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={4} md={4} mt={3}>
                      <TextField
                        // defaultValue={product.title}
                        variant="standard"
                        margin="normal"
                        required
                        value={uomNew}
                        fullWidth
                        id="title"
                        label="UOM"
                        name="title"
                        autoFocus
                        inputProps={{ readOnly: true }}
                        // onChange={(e) => setUom(e.target.value)}
                        onChange={(e) => {
                          setInputs((prev) => {
                            return { ...prev, [e.target.name]: e.target.value };
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        // defaultValue={0}
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="Quantity"
                        label="Quantity"
                        name="Quantity"
                        autoFocus
                        // onChange={(e) => setQuantity(e.target.value)}
                        onChange={(e) => {
                          setQuantityNew(e.target.value);
                          // setAmountNew(quantityNew*rateNew);
                          setAmountNew(e.target.value * rateNew);
                          setInputs((prev) => {
                            return { ...prev, [e.target.name]: e.target.value };
                          });
                          console.log(inputs);
                        }}
                        value={quantityNew}
                      />
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <TextField
                        defaultValue={0}
                        variant="standard"
                        margin="normal"
                        required
                        value={rateNew}
                        fullWidth
                        id="description"
                        label="Rate"
                        name="invoiceNumber"
                        autoFocus
                        inputProps={{ readOnly: true }}
                        // onChange={(e) => setRate(e.target.value)}
                        onChange={(e) => {
                          setInputs((prev) => {
                            return { ...prev, [e.target.name]: e.target.value };
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} md={4} alignItems="center">
                      <TextField
                        defaultValue={0}
                        variant="standard"
                        margin="normal"
                        inputProps={{ readOnly: true }}
                        value={amountNew}
                        fullWidth
                        id="description"
                        label="Amount"
                        name="invoiceNumber"
                        autoFocus
                        onChange={(e) => {
                          setInputs((prev) => {
                            return { ...prev, [e.target.name]: e.target.value };
                          });
                        }}
                      />
                    </Grid>
                    <Button
                      sx={{ m: 1 }}
                      type="submit"
                      size="medium"
                      variant="contained"
                      onClick={clickAddTableItem}
                    >
                      {isEditing ? "Editing Row Item" : "Add Table Item"}
                    </Button>
                    <Grid item xs={4} md={4}></Grid>
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
        <table width="100%" className="mb-10">
          <thead className="table-head-form">
            <tr>
              <td>Item Code</td>
              <td>Item Name</td>
              <td>UOM</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Amount</td>
              <td>Action</td>
            </tr>
          </thead>
          {listNew.map(
            ({ id, itemCode, itemName, uom, quantity, rate, amount }) => (
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
                      <button onClick={() => deleteRow(id)}>
                        <AiOutlineDelete />
                      </button>
                      &nbsp; &nbsp;
                      <button onClick={() => editRow(id)}>
                        <AiOutlineEdit />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          )}
        </table>
      </Box>
    </>
  );
}
