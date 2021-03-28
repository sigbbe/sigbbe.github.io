// $('.hero-btn').click(function(){
//     if(!$('.hero-btn').parent().hasClass('active')){
//         $(this).parent().stop().addClass('active');
//         setTimeout(function(){
//             $('.hero-btn').parent().removeClass('active');
//         }, 2000);App
//     }
// });

import React, { MouseEvent } from 'react';

const ParticleButton = (props: any) => {
    const anime = (evt: MouseEvent<HTMLElement>) => {
        const target = evt.target;
        console.log(Object.getOwnPropertyNames(target));
        // if (! parent.classList.contains('active')) {
        //     parent.classList.add('active');
        //     setTimeout(function(a, b){
        //         console.log(a, b);
        //     }, 2 * 1000);
        // }
    }

    return (
        <div className={'parent'}>
            <button className={'hero-btn'} onClick={anime}>
                Hello, World!
            </button>
        </div>
    );
}

export default ParticleButton;
