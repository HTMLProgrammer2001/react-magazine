import * as React from 'react';
import {Link} from 'react-router-dom';


interface IPath{
	name: string,
	path: string
}

interface IPaginateProps {
	paths: Array<IPath>
}

const Paginate: React.FC<IPaginateProps> = (props) => (
	<div className="paginate">
		<div className="container">
			<div className="paginate__content">
				<div className="paginate__name">SHOP SIDEBAR</div>
				<div className="paginate__path">
					{
						props.paths.map((item) => (
							<Link to={item.path} key={item.path} className='paginate__item'>
								{item.name}
							</Link>
						))
					}
				</div>
			</div>
		</div>
	</div>
);

export default Paginate;
