import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import cv from "./assets/cv.pdf";
import PdfFile from './utils/PdfFile';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <App /> } />
					<Route path="cv" element={ <PdfFile file={ cv } /> } />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
