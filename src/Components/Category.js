import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import AddCategory from './AddCategory';
import EditCategory from './EditMainCategories';

function Category() {

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const showAddCategory = () => {
        setShow(!show)
    }
 

    return (
        <div className="category">
            
            <ul>
                <li style={{fontSize:"22px"}}>Categories  <IconButton onClick={showAddCategory} style={{color:"green" , border: "1px solid grey", borderRadius:"10%", padding:"5px" , marginLeft:"20px"}}>
                    <AddIcon style={{fontSize:"35px",}}  />
                    </IconButton></li>
            </ul>

            <AddCategory show={show} />
            <EditCategory edit={edit} />
        </div>
    )
}

export default Category
