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
				tabIndex={ -1 }
				href={ props.href }
				download={ props.download }
				target={ props.newTab ? '__blank' : '_self' }>{ children }</Link>;
		case LinkType.Internal:
			if (!props.isAsset) {
				return <RouterLink
					tabIndex={ -1 }
					to={ { pathname: props.href } }
					target={ props.newTab ? '__blank' : '_self' }
					download={ props.download }>{ children }</RouterLink>;
			}
			return <Link
				tabIndex={ -1 }
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
	const children = <Button
		minWidth={ "10em" }
		isDisabled={ props.disabled }
		onClick={ props.onClick }
		disabled={ props.disabled }
		rightIcon={ props.iconPlacement == "right" ? props.Icon : undefined }
		leftIcon={ props.iconPlacement != "right" ? props.Icon : undefined }>
		{ props.text }
	</Button>;
	return <Box margin={ "1em" }>{ getLinkElement(linkType, props, children) }</Box>;
};
export default MyButton;