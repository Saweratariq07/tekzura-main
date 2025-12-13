// /src/components/LanguageSelector.js
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="text-white space-x-4">
      <button onClick={() => handleChangeLanguage('en')} className="text-white">EN</button>
      <button onClick={() => handleChangeLanguage('ur')} className="text-white">UR</button>
      {/* Add more languages as needed */}
    </div>
  );
}

export default LanguageSelector;
