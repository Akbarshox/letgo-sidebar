import React, {useContext, useEffect, useState} from "react";
import style from './sidebar.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import images from '../images/image.svg';
import trash from '../images/trash.svg';
import {Store} from "../Store";

export default function MoreDetails() {
   const [checked, setChecked] = React.useState(false);
   const {state, dispatch} = useContext(Store);

   useEffect(() => {
      localStorage.setItem('images', JSON.stringify(state.images));
   }, [state.images])
   const handleChange = (e) => {
      let data = URL.createObjectURL(e.target.files[0])
      return dispatch({type: 'IMAGE', payload: {data}})
   }
   const handleChangeable = (event) => {
      setChecked(event.target.checked);
   };
   const handleDelete = (e) => {
      return dispatch({type: 'DELETE', payload: e})
   }

   return (
      <div className={style.category}>
         <h3>Images</h3>
         <Grid container className={style.moreDetailsGrid} spacing={3}>
            {state.images.map((e, i) =>
               <Grid item xs={4} key={i}>
                  <div className={style.image}>
                     <img src={e.data} alt=""/>
                     <div className={style.trash} onClick={() => handleDelete(e)}><img src={trash} alt=""/></div>
                  </div>
               </Grid>
            )}
         </Grid>
         <p>Tip: add at least 3 photos</p>
         <label htmlFor="uploadMore" className={style.uploadMore}>
            <img src={images} alt=""/>
            <p>Upload more images</p>
         </label>
         <input type="file" id="uploadMore" accept=".png, .jpg, .jpeg"
                onChange={(e) => handleChange(e)} style={{visibility: 'hidden'}}/>
         <h3>Price</h3>
         <Grid container className={style.price}>
            <Grid item xs={6} className={style.price}>
               {checked === false ? <TextField id="standard-basic" placeholder="Enter price"/> : ''}
               {checked === false ? <p>TL</p> : ''}
            </Grid>
            <Grid item xs={6} className={style.price}>
               <p>Give it away for free</p>
               <Checkbox inputProps={{'aria-label': 'uncontrolled-checkbox'}} onChange={handleChangeable}/>
            </Grid>
         </Grid>
         <div className={style.bottom}>
            <h3>Title</h3>
            <TextField style={{width: '100%'}}/>
            <h3>Description</h3>
            <TextField style={{width: '100%'}}/>
         </div>
      </div>
   )
}