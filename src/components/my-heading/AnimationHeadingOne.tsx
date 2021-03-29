
import React, {
    ReactElement,
    Component,
    ReactNodeArray,
    ReactPortal,
    FunctionComponent, PropsWithChildren,
} from 'react';
import PropTypes from 'prop-types';
import './AnimationHeadingOne.sass';

const str = 'Sigbjørn Berdal';

type MyReactElement =
    ReactElement<any, string | ((props: any) => (ReactElement<any, any> | null))
    | {new(props: any): Component<any, any, any>}>;

// type MyType = ReactElement<any, string | ((props: any) => (React.ReactElement<any, any> | null)) | {new(props: any): React.Component<any, any, any>}> | React.ReactNodeArray

type AnyReactElement = ReactElement<any,
        string
        | ((props: any) => (ReactElement<any, any> | null))
        | {new(props: any): Component<any, any, any>}
> ;

type MyType = AnyReactElement[] | ReactNodeArray;
interface AnimationHeadingOneInterface = { children: MyType, ...props: any};

const AnimationHeadingOne: FunctionComponent = (props: AnimationHeadingOneInterface) => {
    if (children === undefined || children === null) {
        return null;
    }
    // ReactElement<any, string, | ((props) => ReactElement<any, any | null>)>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ("forEach" in children) {
        children.forEach(child => console.log(child));
    }

    return (
        <div className={'Animation-parent'}>
            {/*<button className={'hero-btn'} onClick={anime}>Hello, World!</button>*/}
            {/* <div id={'pulsate'} onClick={anime} /> */}
            <h1 className={'Animation-heading-h1 Non-selectable'}
            >{str}</h1>
        </div>
    );
}

AnimationHeadingOne.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AnimationHeadingOne;
