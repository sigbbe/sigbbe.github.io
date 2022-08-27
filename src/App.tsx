import { Box, Flex } from '@chakra-ui/react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GitHubIcon from '@material-ui/icons/GitHub';
import './App.sass';
import SigbbeIcon from './components/laettis/SigbbeIcon';
import { MyLinkButton } from './components/my-button/MyButton';
import TypeWriterAnimationHeading from './components/my-heading/TypeWriterAnimationHeading';

export default function App() {
	return (
		<Flex className={ 'Flex-center Flex-column Full-size' }>
			<SigbbeIcon />
			<TypeWriterAnimationHeading
				message={ "Updates comming soon :)" }
				title={ "Sigbjørn Berdal\'s website" }
				typingSpeed={ 3 }
			/>
			<Box>
				<MyLinkButton
					href={ 'https://github.com/sigbbe' }
					text={ 'Github' }
					Icon={ GitHubIcon } />
				<MyLinkButton
					href={ '/cv' }
					text={ 'CV' }
					Icon={ AccountBoxIcon } />
			</Box>
		</Flex>
	);
};
