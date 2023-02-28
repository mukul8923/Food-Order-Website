import React ,{Fragment} from 'react';
import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (<Fragment>
    <header  className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton onShow={props.onShow} />
    </header>
       
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="Food Table" />
        </div>
    </Fragment>
    );    
};

export default Header;