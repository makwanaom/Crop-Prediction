import React, { useEffect, useState } from 'react';

function GoogleTranslate() {
  const [translatorLoaded, setTranslatorLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js';
    script.onload = () => {
      console.log('Google Translate script loaded.');
      setTranslatorLoaded(true);
      setTimeout(initializeGoogleTranslate, 100); // Add a small delay
    };
    script.onerror = (e) => {
      console.error('Error loading Google Translate script:', e);
    };
    document.head.appendChild(script);

    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
      } else {
        console.error('Google Translate library not available.');
      }
    };

    return () => {
     
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {translatorLoaded ? <div id="google_element"></div> : <div>Loading Translator...</div>}
    </div>
  );
}

export default GoogleTranslate;
