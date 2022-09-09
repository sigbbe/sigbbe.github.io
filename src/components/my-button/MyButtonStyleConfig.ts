import { extendTheme } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const MyButtonStyleConfig: ComponentStyleConfig = {
	// The styles all button have in common
	baseStyle: {
		fontFamily: "'Press Start 2P', cursive",
		fontWeight: 'bold',
		textTransform: 'uppercase',
		backgroundColor: '#ffffff',
		'&:hover': {
			backgroundColor: '#fafafa',
			textDecoration: 'underline'
		},
		borderRadius: "0",
	},
	// Two sizes: sm and md
	sizes: {
		sm: {
			fontSize: 'sm',
			px: 4, // <-- px is short for paddingLeft and paddingRight
			py: 3, // <-- py is short for paddingTop and paddingBottom
		},
		md: {
			fontSize: 'md',
			px: 6, // <-- these values are tokens from the design system
			py: 4, // <-- these values are tokens from the design system
		},
	},
	// Two variants: outline and solid
	variants: {
		outline: {
			border: '3px solid',
			borderColor: 'black.500',
			color: 'black.500',
		},
		solid: {
			bg: 'black.500',
			color: 'white',
		},
	},
	// The default size and variant values
	defaultProps: {
		size: 'md',
		variant: 'outline',
	},
};

const theme = extendTheme({
	components: {
		Button: MyButtonStyleConfig
	},
});

export { theme };

export default {
	// Styles for the base style
	baseStyle: {},
	// Styles for the size variations
	sizes: {},
	// Styles for the visual style variations
	variants: {},
	// The default `size` or `variant` values
	defaultProps: {},
};

