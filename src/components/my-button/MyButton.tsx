

import { Button, makeStyles, SvgIconTypeMap, withStyles } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react';
import './MyButton.sass';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#000000'),
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#fafafa',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        borderRadius: '0'
    },
    buttonText: {
        color: theme.palette.getContrastText('#ffffff'),
        fontFamily: '\'Press Start 2P\', cursive'
    },
    icon: {
        fill: theme.palette.getContrastText('#ffffff'), 
    }
}));

export interface MyButtonI {
    text: string;
    Icon: OverridableComponent<SvgIconTypeMap>;
}

const MyButton = ({ text, Icon }: MyButtonI): JSX.Element => {
    const classes = useStyles();
    return (
        <ColorButton
            variant="contained"
            color="secondary"
            startIcon={<Icon className={ classes.icon }/>}
            className={classes.margin}
        ><a className={classes.buttonText} href={'https://material-ui.com/components/buttons/'}>{'Github'}</a></ColorButton>
    );
};


export default MyButton;