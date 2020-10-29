import React from 'react';
import style from './sidebar.module.css';
import image from '../images/image.svg';

export default function Photo(props) {

   const handleChange = (e) => {
      let image = URL.createObjectURL(e.target.files[0])
      props.setFile(image)
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