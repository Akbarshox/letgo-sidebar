import React, {useContext} from 'react';
import style from './sidebar.module.css';
import image from '../images/image.svg';
import {Store} from "../Store";

export default function Photo(props) {
   const {dispatch} = useContext(Store);
   const handleChange = (e) => {
      let data = URL.createObjectURL(e.target.files[0])
      return dispatch({type: 'IMAGE', payload: {data}})
   }

   return (
      <div className={style.category}>
         <p>Photos</p>
         <div className={style.photo}>
            <label htmlFor="files" className={style.imageLabel}>
               <img src={image} alt="img"/>
               <h3>Drag and drop, or browse</h3>
               <p>Upload up to 10 photos of what you're selling. Images must be in PNG or JPG format and under
                  5mb</p>
            </label>
            <input type="file" id="files" accept=".png, .jpg, .jpeg" onChange={(e) => handleChange(e)}/>
         </div>
      </div>
   )
}