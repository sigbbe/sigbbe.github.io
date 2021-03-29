
import React, { FunctionComponent, KeyboardEvent, MouseEvent } from 'react';
import './ParticleButton.sass';

const str = 'Sigbjørn Berdal';

const ParticleButton: FunctionComponent = () => {
    const anime = (evt: { preventDefault: () => void; target: EventTarget; }) => {
        evt.preventDefault();
        const t: HTMLElement = evt.target as HTMLElement;
        const p: HTMLElement | null = t.parentElement;
        if (p === null) {
            return;
        }
        console.log(p.classList);
        if (!p.classList.contains('active')) {
            p.classList.add('active');
            setTimeout(() => {
                p.classList.remove('active');
            }, 2 * 1000);
        }
    }
    // const Heading = () => {
    //     const jsx = <h1 className={'Animation-heading-h1'} />;
    //     for (const char of str) {
    //         console.log(char);
    //     }
    //     console.log(jsx)
    //     return jsx;
    // }
    // Heading();
    let canEdit = false;
    const skrt = (evt: MouseEvent<HTMLHeadingElement>) => {
        evt.preventDefault();
        canEdit = true;
    }
    
    const skrtskrt = (evt: KeyboardEvent<HTMLHeadingElement>) => {
        evt.preventDefault();
        console.log(canEdit);
        console.log(evt.code == 'sklføsf');
    }

    
    return (
        <div className={'Animation-parent'}>
            {/*<button className={'hero-btn'} onClick={anime}>Hello, World!</button>*/}
            {/* <div id={'pulsate'} onClick={anime} /> */}
            <h1 className={'Animation-heading-h1 Non-selectable'}
                onDoubleClick={(e) => skrt(e)}
                onKeyDown={(e) => skrtskrt(e)}
            >{str}</h1>
        </div>
    );
}

export default ParticleButton;
