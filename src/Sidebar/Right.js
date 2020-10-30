import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import style from './sidebar.module.css';
import close from '../images/close.svg';
import Category from "./Category";
import Photo from "./Photo";
import MoreDetails from "./MoreDetails";
import {Store} from "../Store";

const useStyles = makeStyles({
   list: {
      width: 500
   },
   fullList: {
      width: 'auto',
   },
});

export default function TemporaryDrawer() {
   const classes = useStyles();
   const {state} = useContext(Store);
   const [states, setState] = React.useState(false);

   const toggleDrawer = (side, open) => event => {
      setState(!states)
   };

   const sideList = side => (
      <div
         className={classes.list}
         role="presentation"
      >
         <div className={style.appbar}>
            <img src={close} alt="close" onClick={toggleDrawer(false)}/>
            <p>What are you selling?</p>
         </div>
         {state.images.length !== 0 ?
            <div style={{marginTop: 60}}>
               <MoreDetails/>
               <div className={style.approve}>
                  <h3>Done</h3>
               </div>
            </div>
            :
            <div style={{marginTop: 60}}>
               <Category/>
               <Photo/>
            </div>
         }
      </div>
   );

   return (
      <div>
         <Button onClick={toggleDrawer(true)}>Right</Button>
         <Drawer anchor='right' open={states}>
            {sideList('right')}
         </Drawer>
      </div>
   );
}