import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { default as cv } from "./assets/cv.pdf";
import { theme } from './components/my-button/MyButtonStyleConfig';
import PdfFile from './utils/PdfFile';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<HashRouter basename="/">
				<Routes>
					<Route key={1} path="/" element={ <App /> } />
					<Route key={2} path="/cv" element={ <PdfFile file={ cv } /> } />
				</Routes>
			</HashRouter>
		</ChakraProvider>
	</React.StrictMode>
);
