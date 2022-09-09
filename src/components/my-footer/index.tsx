import { ButtonGroup, Container, IconButton, Stack, Text } from "@chakra-ui/react";
import { GitHub, LinkedIn } from '@material-ui/icons';
import SigbbeIcon from "../laettis/SigbbeIcon";

export function MyFooter() {

	return (
		<Container
			as="footer" 
			role="contentinfo" 
			w={"100vw"}
			py={ { base: '12', lg: '16' } }>
			<Stack spacing={ { base: '4', md: '5' } }>
				<Stack justify="space-between" direction="row" align="center">
					<SigbbeIcon size="sm"/>
					<ButtonGroup variant="ghost">
						<IconButton
							as="a"
							href="#"
							aria-label="LinkedIn"
							icon={ <LinkedIn /> }
						/>
						<IconButton as="a" href="#" aria-label="GitHub" icon={ <GitHub /> } />
					</ButtonGroup>
				</Stack>
				<Text fontSize="sm" color="subtle">&copy; { new Date().getFullYear() } </Text>
			</Stack>
		</Container>
	);
}