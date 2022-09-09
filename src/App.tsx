import { Flex } from '@chakra-ui/react';
import { AccountBox, GitHub, LinkedIn } from '@material-ui/icons';
import './App.sass';
import SigbbeIcon from './components/laettis/SigbbeIcon';
import MyButton from './components/my-button/MyButton';
import { TypeWriterAnimationContent, TypeWriterAnimationHeading } from './components/my-heading/TypeWriterAnimationHeading';

export default function App() {
	return (
		<>
			<Flex className={ 'Flex-center Flex-column Full-size' }>
				<SigbbeIcon size={ "xl" } />
				<TypeWriterAnimationHeading typingSpeed={ 3 }>
					<TypeWriterAnimationContent>{ "Updates comming soon :)" }</TypeWriterAnimationContent>
					<TypeWriterAnimationContent>{ "Sigbjørn Berdal's homepage🚀" }</TypeWriterAnimationContent>
				</TypeWriterAnimationHeading>
				<Flex
					w={ "100vw" }
					margin={ "2em auto 2em auto" }
					justifyContent={ "center" }>
					<MyButton
						href={ 'https://github.com/sigbbe' }
						text={ 'Github' }
						Icon={ <GitHub /> }
						newTab
					/>
					<MyButton
						href={ '/cv' }
						text={ 'CV' }
						Icon={ <AccountBox /> } />
					<MyButton
						href={ 'https://www.linkedin.com/in/sigbj%C3%B8rn-berdal-1974661a1/' }
						text={ 'linkedin' }
						Icon={ <LinkedIn /> }
						newTab />
				</Flex>
			</Flex>
			{/* <MyFooter /> */}
		</>
	);
};
