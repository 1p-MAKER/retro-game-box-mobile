import React from 'react';
import CRTLayer from './CRTLayer';

interface GameWrapperProps {
    children: React.ReactNode;
}

const GameWrapper: React.FC<GameWrapperProps> = ({ children }) => {
    return (
        <div className="crt-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div className="crt-screen" style={{ width: '100%', height: '100%', position: 'relative' }}>
                {children}
                <CRTLayer />
            </div>
        </div>
    );
};

export default GameWrapper;
