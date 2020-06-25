import * as React from 'react';
interface IPath {
    name: string;
    path: string;
}
interface IPaginateProps {
    paths: Array<IPath>;
}
declare const Paginate: React.FC<IPaginateProps>;
export default Paginate;
