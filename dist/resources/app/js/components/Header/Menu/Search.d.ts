import * as React from 'react';
export interface IMenuProps {
    openMenu: string;
    changeOpen: React.Dispatch<React.SetStateAction<string>>;
}
declare const Search: React.FC<IMenuProps>;
export default Search;
