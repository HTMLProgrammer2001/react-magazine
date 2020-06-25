import * as React from 'react';
interface IBurgerProps {
    isOpen: boolean;
    changeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Burger: React.FC<IBurgerProps>;
export default Burger;
