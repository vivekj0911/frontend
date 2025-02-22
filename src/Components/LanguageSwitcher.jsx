import useLanguageStore from "../store/useLanguageStore";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex space-x-4 p-4">
      {["en", "hi", "mr", "gu"].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-4 py-2 rounded ${language === lang ? "bg-green-600 text-white" : "bg-gray-300"}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
