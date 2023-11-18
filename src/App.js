import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import {Data}  from './Components/DataMovie';
import NavBarr from './Components/NavBar';
import Filter from './Components/Filter';
import { Rating } from 'react-simple-star-rating'
function App ()  {

const [info, setinfo] = useState(Data)
  
function Add(newTitle,desc,newRating){
  setinfo([...info,{title:newTitle, description:desc,rating:newRating}])
}
//function cal back
function serch(ret) { 
  console.log(ret)
 setinfo(info.filter((el)=> el.title.toLowerCase().includes(ret.toLowerCase())))

}
const [rating, setRating] = useState(0)

      // Catch Rating value
      const handleRating = (rate) => {
        setRating(rate)
setinfo(info.filter((el)=>el.rating>=rating))
      }

    return (
        <>
        {
        
          <div className='container text-center mt-3 box-state'>
            <NavBarr   Add={Add} />
            <Filter search={serch} />
            <Rating  onClick={handleRating} />
            <MovieList props={info} />
            
          </div>
        }
        </>
    );
  
}

export default App;