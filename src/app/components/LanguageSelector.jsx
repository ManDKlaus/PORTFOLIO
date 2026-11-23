import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/actions';

function LanguageSelector() {
    const dispatch = useDispatch();
    const currentLang = useSelector(state => state.language);

    return (
        <div className="flex items-center gap-1 font-bold text-sm z-50 select-none">
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Evita interferir con clics del contenedor si se ubica en el Landing
                    dispatch(setLanguage('en'));
                }}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                    currentLang === 'en' 
                        ? 'text-yellow-400 border-b-2 border-yellow-400' 
                        : 'text-gray-400 hover:text-white'
                }`}
            >
                EN
            </button>
            <span className="text-gray-500">/</span>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(setLanguage('es'));
                }}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                    currentLang === 'es' 
                        ? 'text-yellow-400 border-b-2 border-yellow-400' 
                        : 'text-gray-400 hover:text-white'
                }`}
            >
                ES
            </button>
        </div>
    );
}

export default LanguageSelector;
