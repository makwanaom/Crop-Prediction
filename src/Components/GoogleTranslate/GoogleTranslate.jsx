import React, { useEffect, useState } from 'react';

function GoogleTranslate() {
  const [translatorLoaded, setTranslatorLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'google-translate-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('Google Translate script loaded.');
        setTranslatorLoaded(true);
      };
      script.onerror = (e) => {
        console.error('Error loading Google Translate script:', e);
      };
      document.head.appendChild(script);

      window.initializeGoogleTranslate = () => {
        if (window.google && window.google.translate && window.google.translate.TranslateElement) {
          new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
        } else {
          console.error('Google Translate library not available.');
        }
      };
    } else {
      setTranslatorLoaded(true);
      window.initializeGoogleTranslate();
    }
  }, []);

  return (
    <div>
      {translatorLoaded ? <div id="google_element"></div> : <div>Loading Translator...</div>}
    </div>
  );
}

export default GoogleTranslate;
