import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './RequestProductStyle.css';
import Axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";
import { isInteger } from 'formik';



const defautlValues = {
  name :"",
  category: "",
  price_per_one: 0,
  quantity: 0,
  description:"",
  UOM:"",
};
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];


const Request_product = () => {
    const [formValues , setFormValues] = useState(defautlValues);
    const [priceError ,setPriceError] = useState(false);
    const [quantityError ,setquantityError] = useState(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
  
  }
  
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(isInteger(formValues.price_per_one) && isInteger(formValues.quantity) ){
      console.log(formValues);
    }
    

  

  }
  const handleName = (e)=>{
    console.log(e.target.value);
    if(e.target.value == "The Godfather"){
      alert("The Godfather!!");
    }
  }
  
    return (
      
      <div onSubmit={handleSubmit} className='Main-div' >
          <h2 className='Main-Topic-request-product'>Request product</h2>
          <div  className='sub-div'>
          
          <form onSubmit={handleSubmit}>
            
          <div className='Full-Form-style'> {/* Form start in here */}
  
  <div className='form-container'> {/* main div for form elements  */ }
  
  
  <div> {/* div 01 */ }
      <h4>Name</h4>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event , newValue)=>{if(newValue !== null){alert(newValue.label);}}}
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Name"  />}
    />
   
  </div>  {/* div 01 end */ }
  <div className='footer-section'>
    <p className='dont-have-a-product-name'>Dont Have a Product Name to add: <button className='click-me-btn'>
    <Link to="/supplier/Request_new_product">Click Here</Link>
      </button> </p>
    
  </div>
  <div> {/* div 02 */ }
      <h4>Category</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField 
  id="outlined-basic" 
  disabled
  name='category' 
  variant="outlined"
  value={formValues.category}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 02  end*/ }

  <div> {/* div 05 */ }
      <h4>Unit Of Measurement</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField
  id="outlined-basic"
  disabled
   name='UOM' 
   variant="outlined" 
   value={formValues.UOM}
  onChange = {handleInputChange}
  />
  
  </Box>
  </div> {/* div 05 end */ }
  
  <div> {/* div 03 */ }
      <h4>Price Per One</h4>
      
     
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField
  
  id="outlined-basic" 
  name='price_per_one' 
  variant="outlined" 
  // value={formValues.price_per_one}
  onChange = {(e)=>{
    handleInputChange(e);
    if(!isInteger(e.target.value)){
      setPriceError(true)
    }else{setPriceError(false)}
    }}
  />
  
  </Box>
  </div> {/* div 03 end */ }
  
  <div> {/* div 04 */ }
      <h4>Quantity</h4>
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <TextField
  required
  id="outlined-basic"
   name='quantity' 
   variant="outlined" 
  //  value={formValues.quantity}
  onChange = {(e)=>{
    handleInputChange(e);
    if(isInteger(e.target.value)){}
    }}
  />
  
  </Box>
  </div> {/* div 04 end */ }

  
  
  
  
  </div> {/* main div for form elements end  */ }
  
  
  <div className='description-textfield'> {/* div 0-1 */ }
      <h4>Description</h4>
      <Box
  component="form"
  sx={{
  '& .MuiTextField-root': { m: 1, width: '90ch' },
  }}
  noValidate
  autoComplete="off"
  >
  <div>
  <TextField
    id="outlined-multiline-flexible"
    name='description'
    multiline
    rows = {4}
    value={formValues.description}
  onChange = {handleInputChange}
    
  />
  </div>
  </Box>
  
  </div>  {/* div 0-1 end */ }
  <div className='button-container'>
  <div className='request-button'>
  <button variant="contained" type='submit' >Request</button>
  </div>

  <div className='cancel-button'>
  <button variant="contained" >Cancel</button>
  </div>
  </div>

  </div> {/* Form ends in here */}
        </form>
  
          
  
         
        </div>
  
  
      </div>
      
    )
}

export default Request_product