import React from 'react';
import LanguageSelector from './LanguageSelector';
import ModeButton from './ModeButton';
import ButtonSetting from './ButtonSetting';
import { buttonSettings } from '../utils/buttonSettings';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, showNavIn } from '../redux/actions';

function NavSetting() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    const handleAction = (btn) => {
        if (btn.id === 'auth') {
            if (isAuthenticated) {
                dispatch(logout());
            } else {
                dispatch(login());
            }
        } else if (btn.id === 'dashboard') {
            dispatch(showNavIn('dashboard'));
        } else if (btn.id === 'chat') {
            dispatch(showNavIn('chat'));
        }
    };

    return (
        <div className="flex items-center space-x-3">
            <LanguageSelector />
            
            <div className="flex items-center space-x-2">
                {buttonSettings.map((btn) => {
                    // Ocultar Chat y Dashboard si no está autenticado
                    if (btn.requiresAuth && !isAuthenticated) return null;

                    return (
                        <ButtonSetting
                            key={btn.id}
                            config={btn}
                            onClick={() => handleAction(btn)}
                        />
                    );
                })}
            </div>

            <ModeButton />
        </div>
    );
}

export default NavSetting;
