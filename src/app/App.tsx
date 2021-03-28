import React, { FunctionComponent } from "react";
import ParticleButton from "../components/particle-button/ParticleButton";

import './App.sass';

const App: FunctionComponent = () => {
    return (
        <div className={'Flex-center Flex-column Full-size'}>
            <h1>Sigbjørn Berdal</h1>
            <ParticleButton/>
        </div>
    );
};
export default App;
