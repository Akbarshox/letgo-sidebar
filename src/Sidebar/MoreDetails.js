import React, {useEffect, useState} from "react";
import style from './sidebar.module.css';
import Grid from "@material-ui/core/Grid";
import images from '../images/image.svg';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function MoreDetails(props) {
   const [image, setImage] = useState([{img: props.file}])
   const [checked, setChecked] = React.useState(false);
   useEffect(() => {
      localStorage.setItem('images', JSON.stringify(image));
   }, [image])
   const handleChange = (e) => {
      let data = URL.createObjectURL(e.target.files[0])
      setImage(image => [...image, {img: data}])
   }
   const handleChangeable = (event) => {
      setChecked(event.target.checked);
   };
   // console.log(localStorage.getItem('images'))
   return (
      <div className={style.category}>
         <h3>Images</h3>
         <Grid container className={style.moreDetailsGrid} spacing={3}>
            {image ? image.map((e, i) =>
               <Grid item xs={4} key={i}><img src={e.img} alt=""/></Grid>
            ) : ''}
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