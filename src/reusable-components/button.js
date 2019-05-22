import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ( {
    root: {    
      backgroundColor: 'white',
      width: '100%',
      fontWeight: '700',
      marginLeft: '4px',
      height: '55px',
      '&:focus': {
        outline: 'none',
      },
    },
  } );

 const CustomButton = function(props){
    const { classes } = props;
    return(
        <Button className={classes.root} {...props} >
        {props.name}
        </Button>
    )
} 
export default withStyles( styles )( CustomButton );