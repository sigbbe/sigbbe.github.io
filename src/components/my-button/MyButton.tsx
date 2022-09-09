import { Box, Button, Link } from "@chakra-ui/react";
import { FC } from "react";
import { Link as RouterLink } from 'react-router-dom';

enum LinkType {
	Internal,
	External,
	None
}

function getLinkType(href?: string): LinkType {
	if (href === null) return LinkType.None;
	const r = new RegExp('^(?:[a-z+]+:)?//', 'i');
	if (r.test(href || "/")) {
		return LinkType.External;
	} else {
		return LinkType.Internal;
	}
}

function getLinkElement(linkType: LinkType, props: MyButtonPropsI, children: React.ReactNode): JSX.Element {
	switch (linkType) {
		case LinkType.None:
			return <> { children }</>;
		case LinkType.External:
			return <Link
				href={ props.href }
				download={ props.download }
				target={ props.newTab ? '__blank' : '_self' }>{ children }</Link>;
		case LinkType.Internal:
			if (!props.isAsset) {
				return <RouterLink
					to={ { pathname: props.href } }
					target={ props.newTab ? '__blank' : '_self' }
					download={ props.download }>{ children }</RouterLink>;
			}
			return <Link
				href={ `${window.location.origin}${props.href?.replaceAll("#", "")}` }
				download={ props.download }
				target={ props.newTab ? '__blank' : '_self' }>{ children }</Link>;

	}
}
export interface MyButtonPropsI {
	text: string;
	href?: string;
	Icon: React.ReactElement;
	iconPlacement?: "left" | "right";
	onClick?: (...args: [any]) => void;
	isAsset?: boolean;
	disabled?: boolean;
	newTab?: boolean;
	download?: boolean;
};

const MyButton: FC<MyButtonPropsI> = (props: MyButtonPropsI) => {
	const linkType = getLinkType(props.href);
	console.log(linkType, props.href);
	const children = <Button
		disabled={ props.disabled }
		rightIcon={ props.iconPlacement == "right" ? props.Icon : undefined }
		leftIcon={ props.iconPlacement != "right" ? props.Icon : undefined }>
		{ props.text }
	</Button>;
	return <Box margin={ "1em" }>{ getLinkElement(linkType, props, children) }</Box>;
};
export default MyButton;

// const ColorButton = withStyles((theme) => {
// 	// theme.palette.getContrastText('#fafafa')
// 	return {
// 		root: {
// 			color: "red",
// 			fontFamily: "'Press Start 2P', cursive",
// 			backgroundColor: '#ffffff',
// 			'&:hover': {
// 				backgroundColor: '#fafafa',
// 			},
// 		},
// 	};
// })(Button);

// const useStyles = makeStyles((theme) => ({
// 	margin: {
// 		color: theme.palette.getContrastText('#ffffff'),
// 		fontFamily: '\'Press Start 2P\', cursive',
// 		margin: theme.spacing(1),
// 		borderRadius: '0',
// 		'&:hover': {
// 			textDecoration: 'underline'
// 		}
// 	},
// 	buttonText: {
// 		color: theme.palette.getContrastText('#ffffff'),
// 		textDecoration: 'none'
// 	},
// 	icon: {
// 		fill: theme.palette.getContrastText('#ffffff'),
// 	}
// }));



// const MyButton: FC<MyButtonPropsI> = (props: MyButtonPropsI) => {
// 	const classes = useStyles();
// 	// const linkType = getLinkType(props.href);
// 	// const btn = <ColorButton
// 	// 	disabled={ props.disabled }
// 	// 	// variant="contained"
// 	// 	// color="secondary"
// 	// 	onClick={ props.onClick }
// 	// 	startIcon={ props.iconPlacement == "left" && <props.Icon className={ classes.icon } /> }
// 	// 	endIcon={ props.iconPlacement == "right" && <props.Icon className={ classes.icon } /> }
// 	// 	className={ classes.margin }
// 	// >{ props.text }</ColorButton>;
// 	// const LinkElement = getLinkElement(linkType, props, btn, classes);
// 	// console.log(LinkElement);
// 	// return LinkElement;
// 	return (
// 		<Button>
// 			{ getLinkElement(getLinkType(props.href), props, <ColorButton />, classes) }
// 			{/* <ColorButton
// 				disabled={ props.disabled }
// 				// variant="contained"
// 				// color="secondary"
// 				disableFocusRipple={ true }
// 				onClick={ props.onClick }
// 				startIcon={ props.iconPlacement == "left" || props.iconPlacement == undefined && <props.Icon className={ classes.icon } /> }
// 				endIcon={ props.iconPlacement == "right" && <props.Icon className={ classes.icon } /> }
// 			>{ props.text }</ColorButton> */}
// 		</Button>
// 	);
// };