import Page from '../../../../../../Page/Page'
import DropUpMenu from '../../../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../../../components/sample/Block/Block'
import Title from '../../../../../../components/sample/Title/Title'


export const Cyclicalcommissionofelectromechanicaldisciplines = () => {
    const list = [
            {
                text: 'Партія виробів військового призначення для потреб ЗСУ',
                url: 'https://drive.google.com/file/d/1rmAZgTNgGBSP7ObwUcLVaEAhPiefWQpg/view',
            },
            {
                text: 'Зустріч учнів Черкаської гімназії №31 з провідними викладачами-практиками',
                url: 'https://drive.google.com/file/d/1Iw60uD09DopE6w3Tt7O6vgqdR2icS51y/view',
            },
            {
                text: 'Виховна година-конференція до Дня машинобудівника',
                url: 'https://drive.google.com/file/d/1RTd7aQEzlMkU4bykCKduIg0KlSGcNvzR/view',
            },
        ];

	const CyclicalcommissionofelectromechanicaldisciplinesContent = (
		<div>
   <Title text='Циклова комісія електромеханічних дисциплін' />
				<Title text='Наші події' />
				<DropUpMenu links={list} name={'2023-2024 н.р.'} />
				<div> </div>
        <hr className='hr-style' />
    </div>
	);

	return (
		<Page title='Циклова комісія електромеханічних дисциплін - ЧПФК'>
			<Block
				content={CyclicalcommissionofelectromechanicaldisciplinesContent}
			/>
		</Page>
	);
};
