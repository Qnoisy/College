import { useEffect } from 'react';

const Page = ({ title }: { title: string }) => {
	useEffect(() => {
		document.title = title;
	}, [title]); 

	return (
		<div>
		</div>
	);
};

export default Page;
