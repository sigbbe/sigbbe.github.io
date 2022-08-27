import { Box, Flex, Text } from '@chakra-ui/react';
import { ArrowBackIos, ArrowForwardIos, CloudDownload } from '@material-ui/icons';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { MyActionButton, MyLinkButton } from '../components/my-button/MyButton';
import "./PdfFile.sass";

export default function PdfFile({ file }: { file: string; }) {
	const [numPages, setNumPages] = useState<number | null>(null);
	const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

	function onDocumentLoadSuccess({ numPages }: { numPages: number; }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offset: number) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	const prevPageBtnDisabled = pageNumber <= 1;
	const nextPageBtnDisabled = pageNumber >= (numPages || 0);
	console.log(nextPageBtnDisabled);

	return (
		<>
			<Document
				className={ "my-pdf-document" }
				file={ file }
				options={ { workerSrc: "/pdf.worker.js" } }
				onLoadSuccess={ onDocumentLoadSuccess }
				renderMode={ "svg" }
			>
				<Page
					canvasRef={ "canvasRef" }
					pageNumber={ pageNumber } />
			</Document >
			<Box pos={ "fixed" } right="1.5em" top={ "1.5em" }>
				<MyLinkButton
					href={ file }
					text={ "Download" }
					Icon={ CloudDownload }
					newTab={ true } />
			</Box>
			<Text textAlign={ "center" }>Page { pageNumber }/{ numPages }</Text>
			<Flex flexDir={ "row" } justifyContent={ "center" } alignItems={ "center" } >
				<MyActionButton
					text={ "Previous" }
					Icon={ ArrowBackIos }
					disabled={ prevPageBtnDisabled }
					onClick={ previousPage } />
				<MyActionButton
					text={ "Previous" }
					Icon={ ArrowForwardIos }
					iconPlacement={ "right" }
					disabled={ nextPageBtnDisabled }
					onClick={ nextPage } />
			</Flex>
		</>
	);
};