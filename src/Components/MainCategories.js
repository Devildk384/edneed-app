import React,{useState,useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddSubCategory from './AddSubCategory';
import SubCategory from './SubCategory';
import { deleteCategoryfromList } from '../API/category';
import axios from "axios";
import { API } from "../config";
import EditCategory from "./EditMainCategories"
function MainCategories({name ,dataa ,slug,id}) {
    console.log(dataa.children);
   

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

 
    const showAddSubCategory = () => {
        setShow(!show)
    }
    
    const showEditCategory = () => {
        setEdit(!edit)
    }

  const deleteCategory = () => {
    axios
    .delete(`${API}/category/${slug}`, {
      
    })
    .then((response) => {
      if (response) {
        alert(" Deleted successfully...");
        window.location.reload();
      } else {
        alert("Unable to Delete this ...");
      }
    });
  }

    return (
        <>
        <div className="maincategories" style={{marginLeft:"55px" , marginTop:"20px" }}>
          
        {name}
       
        <IconButton onClick={showAddSubCategory} style={{color:"green" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <AddIcon style={{fontSize:"40px",}} />
        </IconButton>
        <IconButton  onClick={showEditCategory}  style={{color:"yellow" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <EditIcon style={{fontSize:"40px",}} />
        </IconButton>
        <IconButton onClick={deleteCategory} style={{color:"red" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <CloseIcon style={{fontSize:"40px",}} />
        </IconButton>
         

        <EditCategory id={id} edit={edit} slug={slug} />
        <AddSubCategory id={id} show={show} />

        {dataa.children && dataa.children.map((d,iddd) => (
            <SubCategory name={d.name} dataa={d} id={d._id} slug={d.slug} icon={d.icon} />
        ))}
        
    </div>
    
    

    </>
            
        
    )
}

export default MainCategories
