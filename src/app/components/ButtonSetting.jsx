import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function ButtonSetting({ config, onClick }) {
    const language = useSelector(state => state.language || 'es');
    const isDark = useSelector(state => state.darkMode);
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    // Selección de ícono según estado
    const iconSrc = config.id === 'auth'
        ? (isAuthenticated 
            ? (isDark ? config.iconOutW : config.iconOut)
            : (isDark ? config.iconInW : config.iconIn))
        : (isDark ? config.iconW : config.icon);

    // Selección de texto según idioma y estado
    const label = config.id === 'auth'
        ? (isAuthenticated 
            ? (language === 'es' ? config.labelEsOut : config.labelEnOut)
            : (language === 'es' ? config.labelEsIn : config.labelEnIn))
        : (language === 'es' ? config.labelEs : config.labelEn);

    return (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
        >
            <Image src={iconSrc} alt={label} width={18} height={18} />
            <span>{label}</span>
        </button>
    );
}

export default ButtonSetting;
