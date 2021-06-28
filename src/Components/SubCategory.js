import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddSubCategory from './AddSubCategory';
import axios from "axios";
import { API ,API_IMG} from "../config";
import SubSubCategory from './SubSubCategory';
import EditSubCategory from './EditSubCategory';
import { Avatar } from '@material-ui/core';
function SubCategory({name ,dataa,id,slug, icon}) {
    console.log(icon);
   

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const showAddSubCategory = () => {
        setShow(!show)
    }
    const showeditSubCategory = () => {
        setEdit(!edit)
    }

    const deleteSubCategory = () => {
        axios
        .delete(`${API}/category/${slug}`, {
          
        })
        .then((response) => {
          console.log(response);
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
        <div className="maincategories" style={{marginLeft:"55px" , marginTop:"20px"  }}>
        <div style={{display:"flex"}}>
            <div style={{display:"flex", alignItems:"center"}}>
            <Avatar style={{marginRight:"10px"}}  alt="Remy Sharp" src={`${API_IMG}/${icon}`} />
            {name}
                
            </div>
          
   
       
        <IconButton onClick={showAddSubCategory} style={{color:"green" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <AddIcon style={{fontSize:"40px",}} />
        </IconButton>
        <IconButton onClick={showeditSubCategory} style={{color:"yellow" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <EditIcon style={{fontSize:"40px",}} />
        </IconButton>
        <IconButton onClick={deleteSubCategory}  style={{color:"red" , border: "1px solid grey", borderRadius:"10%", padding:"6px" , marginLeft:"20px"}}>
        <CloseIcon style={{fontSize:"40px",}} />
        </IconButton>

            </div>
            
         
    
        <AddSubCategory  show={show} id={id} />
        <EditSubCategory id={id} edit={edit} slug={slug} />
        {dataa.children && dataa.children.map((d,iddd) => (
           <SubSubCategory name={d.name} id={d._id} slug={d.slug} dataa={d} icon={d.icon} /> 
        ))}
        
    </div>
    
    

    </>
            
        
    )
}

export default SubCategory
