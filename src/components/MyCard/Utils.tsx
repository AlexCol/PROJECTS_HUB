import { RefObject } from "react";


export const handleMouseEnter = (refList: RefObject<HTMLDivElement>, btnRef: RefObject<HTMLButtonElement>, colors: number[]) => {
	if (refList.current && btnRef.current) {
		refList.current.style.backgroundColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 1)`;
		btnRef.current.style.borderColor = 'black';
	}
};

export const handleMouseLeave = (refList: RefObject<HTMLDivElement>, btnRef: RefObject<HTMLButtonElement>, colors: number[]) => {
	if (refList.current && btnRef.current) {
		refList.current.style.backgroundColor = 'transparent';
		btnRef.current.style.borderColor = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 1)`;
	}
};

export const redirectToExternalSite = (linkTo: string) => {
	if(linkTo)
		window.open(`${linkTo}`, '_blank')
};