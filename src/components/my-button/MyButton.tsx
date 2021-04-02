import React from 'react';
import { Button, SvgIconTypeMap } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
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
        color: theme.palette.getContrastText('#ffffff'),
        fontFamily: '\'Press Start 2P\', cursive',
        margin: theme.spacing(1),
        borderRadius: '0',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    buttonText: {
        color: theme.palette.getContrastText('#ffffff'),
        textDecoration: 'none'
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
        <a className={classes.buttonText} href={'https://github.com/sigbbe'} target={'__blank'}>
            <ColorButton
                variant="contained"
                color="secondary"
                startIcon={<Icon className={ classes.icon }/>}
                className={classes.margin}
            >{text}</ColorButton>
        </a>
    );
};


export default MyButton;
