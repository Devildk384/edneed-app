import React,{useState,useEffect} from "react"
import { getCategoriesList } from "./API/category";
import Category from "./Components/Category";
import MainCategories from "./Components/MainCategories";

function App() {

  const [categoryData, setCategoryData] = useState("");

  useEffect(() => {
    const fetchCategories = async () => await getCategories();
    fetchCategories();
  }, []);

  const getCategories = async () => {
    getCategoriesList().then(data => {
      if (!data) {
        setCategoryData("")
        
      }
      else{
        setCategoryData(data)
      }
    })
  };

  console.log(categoryData);




   

   

  return (
    <div className="App">
     <div className="App__add">
       <Category />
     </div>
     <div className="App__main">
       {categoryData && categoryData.map((dataa ,idx) => (
       <MainCategories name={dataa.name} dataa={dataa} slug={dataa.slug} id={dataa._id} />
   ))}
      
     </div>

    </div>
  );
}

export default App;
