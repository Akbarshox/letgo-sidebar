import React, {useState} from "react";
import {CategoryData} from "./CategoryJson";
import style from './sidebar.module.css';
import {Grid} from "@material-ui/core";
import check from '../images/check.svg';

export default function Category() {
   const [ref, setRef] = useState(1);

   const handleChoose = (e) => {
      localStorage.setItem('category', e.id);
      setRef(JSON.parse(localStorage.getItem('category')))
   }

   return (
      <div className={style.category}>
         <p>Choose a category</p>
         <Grid container className={style.categoryBorder}>
            {CategoryData.map((e, i) =>
               <Grid item xs={4} lg={4} key={i}>
                  <div className={[style.categoryBorderInner, ref === e.id ? style.back : ''].join(' ')} onClick={() => handleChoose(e)}>
                     <img src={e.image} alt=""/>
                     {ref === e.id ? <img src={check} className={style.check} alt=""/> : ''}
                     <p className={style.categoryName}>{e.name}</p>
                  </div>
               </Grid>
            )}
         </Grid>
      </div>
   )
}