import Page from '../../../../../Page/Page'
import DemoBlock from '../../../../../components/sample/DemoBlock/DemoBlock'
import Title from '../../../../../components/sample/Title/Title'

export const Tsyklovikomisii = () => {
	const tsyklovikomisiiLinks = [
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ДИСЦИПЛІН ЗАГАЛЬНООСВІТНЬОЇ ПІДГОТОВКИ',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr',
		},
		{ 
			name: 'ЦИКЛОВА КОМІСІЯ  ФІЛОЛОГІЧНИХ ТА ГУМАНІТАРНИХ ДИСЦИПЛІН', 
			path: '/entry-company/vstup' 
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ ТА СОЦІАЛЬНО-ЕКОНОМІЧНИХ ДИСЦИПЛІН',
			path: '/entry-company/starshoklasnykam',
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН ПРОФЕСІЙНО-ПРАКТИЧНОЇ ПІДГОТОВКИ ЕЛЕКТРОЕНЕРГЕТИЧНИХ СПЕЦІАЛЬНОСТЕЙ',
			path: '/entry-company/starshoklasnykam',
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ЕЛЕКТРОМЕХАНІЧНИХ ДИСЦИПЛІН',
			path: '/entry-company/starshoklasnykam',
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ЗАГАЛЬНОТЕХНІЧНИХ ДИСЦИПЛІН ТА ГАЛУЗЕВОГО МАШИНОБУДУВАННЯ',
			path: '/entry-company/starshoklasnykam',
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН АВТОМОБІЛЬНОГО ТРАНСПОРТУ',
			path: '/entry-company/starshoklasnykam',
		},
	];
	const tsyklovikomisiiRoutes = [
		{ name: 'ЦИКЛОВА КОМІСІЯ  ДИСЦИПЛІН ЗАГАЛЬНООСВІТНЬОЇ ПІДГОТОВКИ', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/es' },
		{ name: 'ЦИКЛОВА КОМІСІЯ  ФІЛОЛОГІЧНИХ ТА ГУМАНІТАРНИХ ДИСЦИПЛІН', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ep' },
		{ name: 'ЦИКЛОВА КОМІСІЯ  ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ ТА СОЦІАЛЬНО-ЕКОНОМІЧНИХ ДИСЦИПЛІН', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ov' },
		{ name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН ПРОФЕСІЙНО-ПРАКТИЧНОЇ ПІДГОТОВКИ ЕЛЕКТРОЕНЕРГЕТИЧНИХ СПЕЦІАЛЬНОСТЕЙ', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ek' },
		{ name: 'ЦИКЛОВА КОМІСІЯ ЕЛЕКТРОМЕХАНІЧНИХ ДИСЦИПЛІН', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/om' },
		{ name: 'ЦИКЛОВА КОМІСІЯ ЗАГАЛЬНОТЕХНІЧНИХ ДИСЦИПЛІН ТА ГАЛУЗЕВОГО МАШИНОБУДУВАННЯ', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ps' },
		{ name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН АВТОМОБІЛЬНОГО ТРАНСПОРТУ', path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ea' },
		];
	const tsyklovikomisiiContent = (
		<div>
				 <Title text='Циклові комісії' />
						<hr className='hr-style' />
		</div>
	)

	return (
		<Page title='Циклова комісія - ЧПФК'>
			<DemoBlock
				additionalLinks={tsyklovikomisiiLinks}
				content={tsyklovikomisiiContent}
				routes={tsyklovikomisiiRoutes}
			/>
		</Page>
	);
};
