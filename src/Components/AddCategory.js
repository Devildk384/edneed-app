import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { addtoCategoriesList } from '../API/category';

function AddCategory({show,id}) {
    const [name, setName] = useState("")

    
    
    const handleChange =(e) => {
        setName(e.target.value)
    }
    const AddCategories = (e) => {
        const parent = id;
        // e.preventDefault();
        addtoCategoriesList({name:name,parent:parent})
           
    }

    const clearCategoryField = (e) => {
        setName("")

    }



    return (
        <>

        {show === true ?  <div className="addcategory" style={{marginLeft:"42px"}}>
        <form onSubmit={AddCategories}>
        <TextField id="outlined-basic" label="Category Name" variant="outlined" value={name} onChange={handleChange} />

        <IconButton type="submit" style={{color:"green" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <DoneIcon style={{fontSize:"40px",}} />
        </IconButton>
        <IconButton onClick={clearCategoryField} style={{color:"grey" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <CloseIcon style={{fontSize:"40px",}} />
        </IconButton>

        </form>
       
    </div> : ""}
       
       </>
    )
}

export default AddCategory
