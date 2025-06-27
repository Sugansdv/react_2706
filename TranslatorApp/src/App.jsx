import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' }
  ];

  const handleTranslate = async () => {
    if (!text.trim()) {
      alert('Please enter text to translate.');
      return;
    }

    if (fromLang === toLang) {
      alert('Choose different languages for translation.');
      return;
    }

    setLoading(true);
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
      const response = await axios.get(url);

      const translatedText = response.data.responseData.translatedText;
      setTranslated(translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslated('❌ Error translating text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4"> Multi-language Translator</h2>

      <div className="row mb-3">
        <div className="col-md-6">
          <label>From Language:</label>
          <select className="form-select" value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label>To Language:</label>
          <select className="form-select" value={toLang} onChange={(e) => setToLang(e.target.value)}>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="d-grid mb-4">
        <button className="btn btn-primary" onClick={handleTranslate} disabled={loading}>
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </div>

      <h5>Translated Text:</h5>
      <div className="bg-light p-3 border rounded" style={{ minHeight: '100px' }}>
        {translated || 'Translation will appear here...'}
      </div>
    </div>
  );
};

export default App;
