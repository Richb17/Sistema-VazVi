import './btn-cancel.css';
import React from 'react';

export interface BtnCancelProps {
    className?: string;
}

export const BtnCancel: React.FC<BtnCancelProps> = ({ className = '' }) => (
    <div className={className}><button className="Btn">Cancelar</button>
    </div>
);