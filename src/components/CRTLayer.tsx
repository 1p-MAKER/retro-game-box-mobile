import React from 'react';

const CRTLayer: React.FC = () => {
    return (
        <>
            <div className="crt-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                zIndex: 100,
                backgroundSize: '100% 4px, 3px 100%',
                pointerEvents: 'none',
            }} />
            <div className="crt-flicker" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(18, 16, 16, 0.1)',
                opacity: 0,
                zIndex: 101,
                pointerEvents: 'none',
                animation: 'flicker 0.15s infinite',
            }} />
        </>
    );
};

export default CRTLayer;
