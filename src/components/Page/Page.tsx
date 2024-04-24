import { useEffect } from 'react';

const Page = ({ title }: { title: string }) => {
	useEffect(() => {
		document.title = title;
	}, [title]); // Зависимость от значения title

	return (
		<div>
			{/* Остальное содержимое вашей страницы */}
			<h1>{title}</h1>
			{/* Другой контент */}
		</div>
	);
};

export default Page;
