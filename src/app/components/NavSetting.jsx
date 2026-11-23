import React from 'react';
import LanguageSelector from './LanguageSelector';
import ModeButton from './ModeButton';
import ButtonSetting from './ButtonSetting';
import { buttonSettings } from '../utils/buttonSettings';
import { useDispatch, useSelector } from 'react-redux';

function NavSetting() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    const handleAction = (actionType) => {
        if (actionType === 'auth') {
            // Lógica de Sign In / Sign Out
        } else if (actionType === 'dashboard') {
            // Lógica para abrir Dashboard
        } else if (actionType === 'chat') {
            // Lógica para abrir Chat
        }
    };

    return (
        <div className="flex items-center gap-3">
            <LanguageSelector />
            
            {/* Botones de control configurables */}
            <div className="flex items-center gap-1">
                {buttonSettings.map((btn) => {
                    // Mostrar Chat y Dashboard solo si está autenticado (o según tu regla)
                    if ((btn.id === 'chat' || btn.id === 'dashboard') && !isAuthenticated) return null;

                    return (
                        <ButtonSetting
                            key={btn.id}
                            config={btn}
                            onClick={() => handleAction(btn.action)}
                        />
                    );
                })}
            </div>

            <ModeButton />
        </div>
    );
}

export default NavSetting;
