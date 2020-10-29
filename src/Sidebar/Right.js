import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import style from './sidebar.module.css';
import close from '../images/close.svg';
import Category from "./Category";
import Photo from "./Photo";
import MoreDetails from "./MoreDetails";

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
   const [state, setState] = React.useState(false);
   const [file, setFile] = React.useState(null);

   const toggleDrawer = (side, open) => event => {
      setState(!state)
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
         {file ?
            <div>
               <MoreDetails file={file}/>
               <div className={style.approve}>
                  <h3>Done</h3>
               </div>
            </div>
            :
            <div>
               <Category/>
               <Photo setFile={setFile}/>
            </div>
         }
      </div>
   );

   return (
      <div>
         <Button onClick={toggleDrawer(true)}>Right</Button>
         <Drawer anchor='right' open={state}>
            {sideList('right')}
         </Drawer>
      </div>
   );
}