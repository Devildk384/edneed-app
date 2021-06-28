import axios from "axios";
import { API } from "../config";

export function getCategoriesList() {
 const request =  axios
    .get(`${API}/categories/list`, )
    .then((response) => response.data)
    .catch(err => {
        alert('Categories List Failed');

    });
  

    return request;

}

export function addtoCategoriesList({name :name,parent:parent,icon:image}) {

    const request =  axios
       .post(`${API}/category/create`, {name:name,parent:parent,icon:image} )
       .then((response) => response.data)
       .catch(err => {
           alert('Categories add failed');
   
       });
       return request;
   
   }

   export function uploadCategoryImage(formData) {

    const request =  axios
       .post(`${API}/category/uploadImage`, formData )
       .then((response) => response.data)
       .catch(err => {
           alert('Categories add failed');
   
       });
    
   
       return request;
   
   }


 

   