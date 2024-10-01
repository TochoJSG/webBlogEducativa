import React, { useState, useEffect } from 'react';
import HeaderGral from '../componentes/HeaderGral.jsx';
import Footer from '../componentes/Footer.jsx';
const GestionCookies = () => {
  const [cookiesPreferences, setCookiesPreferences] = useState({
    technical: true, // Siempre habilitadas (ejemplo)
    analytics: false,
    advertising: false
  });

  useEffect(() => {
    // Aquí cargamos las preferencias guardadas en localStorage (si existen)
    const savedPreferences = JSON.parse(localStorage.getItem('cookiesPreferences'));
    if (savedPreferences) {
      setCookiesPreferences(savedPreferences);
    }
  }, []);

  const handlePreferenceChange = (type) => {
    setCookiesPreferences((prevPreferences) => {
      const updatedPreferences = {
        ...prevPreferences,
        [type]: !prevPreferences[type],
      };
      localStorage.setItem('cookiesPreferences', JSON.stringify(updatedPreferences)); // Guardamos en localStorage
      return updatedPreferences;
    });
  };

  const handleSavePreferences = () => {
    alert('Preferencias guardadas correctamente');
    // Aquí puedes agregar cualquier lógica adicional, como el envío de las preferencias a un backend si es necesario.
  };

  return (
    <>
    <HeaderGral />
    <section className="cookies-settings">
      <div className="title">
        <h2>Configuración de Cookies</h2>
      </div>
      <div className="preferences">
        <h3>Preferencias de Cookies</h3>
        
        <div className="preference-item">
          <input
            type="checkbox"
            checked={cookiesPreferences.technical}
            disabled // Las cookies técnicas no pueden desactivarse
          />
          <label>Cookies Técnicas (Siempre activas)</label>
          <p>Son esenciales para el funcionamiento básico del sitio web.</p>
        </div>
        
        <div className="preference-item">
          <input
            type="checkbox"
            checked={cookiesPreferences.analytics}
            onChange={() => handlePreferenceChange('analytics')}
          />
          <label>Cookies de Análisis</label>
          <p>Ayudan a mejorar nuestro sitio mediante la recolección de datos anónimos sobre el uso.</p>
        </div>
        
        <div className="preference-item">
          <input
            type="checkbox"
            checked={cookiesPreferences.advertising}
            onChange={() => handlePreferenceChange('advertising')}
          />
          <label>Cookies Publicitarias</label>
          <p>Se utilizan para mostrar anuncios relevantes basados en tus hábitos de navegación.</p>
        </div>
        
        <button onClick={handleSavePreferences}>Guardar preferencias</button>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default GestionCookies;
