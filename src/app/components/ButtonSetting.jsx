import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function ButtonSetting({ config, onClick }) {
    const language = useSelector(state => state.language || 'es');
    const isDark = useSelector(state => state.darkMode);
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    // Seleccionar icono y etiqueta según estado
    const iconSrc = config.id === 'auth'
        ? (isAuthenticated 
            ? (isDark ? config.iconOutW : config.iconOut)
            : (isDark ? config.iconInW : config.iconIn))
        : (isDark ? config.iconW : config.icon);

    const label = config.id === 'auth'
        ? (isAuthenticated 
            ? (language === 'es' ? config.labelEsOut : config.labelEnOut)
            : (language === 'es' ? config.labelEsIn : config.labelEnIn))
        : (language === 'es' ? config.labelEs : config.labelEn);

    return (
        <button
            onClick={onClick}
            className="flex items-center gap-1.5 px-2 py-1 text-xs font-semibold rounded hover:bg-slate-800 transition-colors"
        >
            <Image src={iconSrc} alt={label} width={18} height={18} />
            <span>{label}</span>
        </button>
    );
}

export default ButtonSetting;
