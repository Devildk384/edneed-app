import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { uploadCategoryImage } from '../API/category';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons({image,setImage}) {
  const classes = useStyles();

  const handleChange = (name) => (e) => {
    let formData = new FormData();
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.append("file", value);
    console.log(value);
    console.log(formData);
    //save the Image we chose inside the Node Server
    uploadCategoryImage(formData).then((data) => {
      console.log(data.image);
      if (data) {
        setImage(data.image);
      } else {
        alert("Failed to save the Image in Server");
      }
    });
  };


  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleChange("photo")}

      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
    
    </div>
  );
}