import GitHubIcon from '@material-ui/icons/GitHub';
import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import Laettis from '../components/laettis/Laettis';
import MyButton from '../components/my-button/MyButton';
import AnimationHeadingOne from '../components/my-heading/AnimationHeadingOne';
import './App.sass';

const App: FunctionComponent = () => {
    return (
        <>
            <div className={'Flex-center Flex-column Full-size'}>
                <Laettis />
                <AnimationHeadingOne title={'Sigbjørn Berdal\'s website'} typingSpeed={3}/>
                <MyButton text={'Github'} Icon={ GitHubIcon }/>
            </div>
        </>
    );
};
export default hot(App);
