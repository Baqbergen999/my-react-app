import { useLanguage } from './LanguageProvider';

function Main() {
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <div className='Main'>
      <h2>{translations[language].hi}</h2>
      <p>{translations[language].choose}:</p>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="kk">Kaz</option>
        <option value="ru">Rus</option>
        <option value="en">Eng</option>
      </select>
    </div>
  );
}

export default Main;
