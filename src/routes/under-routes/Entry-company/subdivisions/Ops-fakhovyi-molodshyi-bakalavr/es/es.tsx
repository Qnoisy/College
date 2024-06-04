import Page from '../../../../../../Page/Page'
import Block from '../../../../../../components/sample/Block/Block'
import Title from '../../../../../../components/sample/Title/Title'


export const ES = () => {

	const esContent = (
		<div>
				<Title text='Монтаж, обслуговування та ремонт електротехнічних установок в агропромисловому комплексі' />
				<hr className='hr-style' />
    <br />
    <p>Код та найменування спеціальності: 141 Електроенергетика, електротехніка та електромеханіка.
    </p>
    <br />
    <p>Шифр  та галузь знань: 14 Електрична інженерія.</p>
    <br />
		<p>Кваліфікація: технік-електрик.</p><br />
		<p>Термін навчання:</p><br />
      <li> на основі базової загальної середньої освіти - 3 роки 10 місяців; </li> 
        <li>на основі повної загальної середньої освіти - 2 роки 10 місяців.</li><br />
    <p>Ліцензований обсяг прийому: </p>
    <p>60 осіб денна форма навчання та 50 заочна.</p><br />
    <p>Підготовка за спеціалізацією проводиться з 1928 року.</p>
    <p>
        Підготовка фахового молодшого бакалавра з кваліфікацією техніка-електрика здійснюється для роботи в господарствах, підприємствах, організаціях агропромислового напрямку, а також у госпрозрахункових, підрядних, орендних колективах, як спеціаліста, керівника та виконавця технологічних операцій з монтажу та технічного обслуговування електроустановок, ремонту, монтажу і наладки засобів автоматизації в сільськогосподарському виробництві.
    </p><br />
    <p>Кваліфікаційною характеристикою випускника передбачено посади:</p>
        <li>інженера-електрика та техніка-електрика з монтажу і налагодження електрообладнання, технічного обслуговування і експлуатації електроустановок, контрольно-вимірювальних приладів і засобів автоматики;</li>
        <li>завідуючого електроремонтною майстернею.</li>
    <p>
        За час проходження навчальних практик студенти додатково оволодівають робітничою професією "Електромонтер з обслуговування і ремонту електроустаткування".
    </p><br />
    <Title text='Провідні дисципліни фахової підготовки:' />
        <li>"Електротехнології"</li>
        <li>"АТП і САК"</li>
        <li>"Експлуатація і ремонт електроустаткування і засобів автоматизації"</li>
        <li>"Технологія виробництва, зберігання і переробки с/г продукції"</li>
        <li>"Економіка і організація агроенергосервісу"</li>
        <li>"Електропостачання сільського господарства"</li><br />
    <p>
        Випускники спеціалізації коледжу продовжують навчання за скороченим терміном переважно в Національному університеті біоресурсів та природокористування, Національному технічному університеті України «Київський політехнічний інститут імені Ігоря Сікорського», Центральноукраїнському національному технічному університеті, Кременчуцькому національному університеті імені Михайла Остроградського та Черкаському державному технологічному університеті.
    </p>
    <hr className='hr-style' />
</div>
	);

	return (
		<Page title='Монтаж, обслуговування та ремонт електротехнічних установок в агропромисловому комплексі - ЧПФК'>
			<Block
				content={esContent}
			/>
		</Page>
	);
};
