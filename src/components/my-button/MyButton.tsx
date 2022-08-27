import { Link } from '@chakra-ui/react';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { SvgIconComponent } from '@material-ui/icons';
import { FC } from 'react';
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

export interface MyLinkButtonPropsI {
	text: string;
	href: string;
	Icon: SvgIconComponent;
	newTab?: boolean;
}

const MyLinkButton = ({ text, Icon, href, newTab = true }: MyLinkButtonPropsI): JSX.Element => {
	const classes = useStyles();
	return (
		<Link className={ classes.buttonText } href={ href } target={ newTab ? '__blank' : '_self' }>
			<ColorButton
				variant="contained"
				color="secondary"
				startIcon={ <Icon className={ classes.icon } /> }
				className={ classes.margin }
			>{ text }</ColorButton>
		</Link>
	);
};

export interface MyActionButtonPropsI {
	text: string;
	disabled?: boolean;
	onClick: () => void;
	Icon: SvgIconComponent;
	iconPlacement?: "left" | "right";
}

const MyActionButton: FC<MyActionButtonPropsI> = ({ text, disabled = false, onClick, Icon, iconPlacement = "left" }: MyActionButtonPropsI) => {
	const classes = useStyles();
	return (
		<ColorButton
			disabled={ disabled }
			variant="contained"
			color="secondary"
			onClick={ onClick }
			startIcon={ iconPlacement == "left" && <Icon className={ classes.icon } /> }
			endIcon={ iconPlacement == "right" && <Icon className={ classes.icon } /> }
			className={ classes.margin }
		>{ text }</ColorButton>
	);
};


export { MyLinkButton, MyActionButton };
