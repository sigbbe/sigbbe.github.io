
import React, { FunctionComponent } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import './ParticleButton.sass';

const uwu = anime({
    targets: '.testing',
    keyframes: [
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});


const ParticleButton: FunctionComponent = () => {
    let playing = false;
    const anime = (evt: { preventDefault: () => void; target: EventTarget; }) => {
        evt.preventDefault();
        const t: HTMLElement = evt.target as HTMLElement;
        const p: HTMLElement | null = t.parentElement;
        if (p === null) {
            return;
        }
        if (playing) {
            uwu.pause();
        } else {
            uwu.play();
        }
        playing = !playing;
        if (! p.classList.contains('active')) {
            p.classList.add('active');
            setTimeout(() => {
                p.classList.remove('active');
            }, 2 * 1000);
        }
    }

    return (
        <div className={'parent'}>
            <button className={'hero-btn'} onClick={anime}>Hello, World!</button>
            <div className={'testing'} />
        </div>
    );
}

export default ParticleButton;
