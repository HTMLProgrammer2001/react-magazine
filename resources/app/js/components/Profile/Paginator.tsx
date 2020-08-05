import * as React from 'react';
import c from 'classnames';


type IPaginatorProps = {
	curPage?: number,
	size?: number,
	totalPage: number,
	handler: (page: number) => void
};

const Paginator: React.FC<IPaginatorProps> = ({totalPage, curPage = 1, size = 5, handler}) => {
	const left = Math.floor((curPage - 1)/size);
	const right = Math.ceil(totalPage/size) - left - 1;

	console.log('Left: ', left);
	console.log('Right: ', right);

	const prev = () => {
		if(left > 0)
			handler(curPage - size);
	};

	const next = () => {
		if(right > 0)
			handler(curPage + size);
	};

	return (
		<div className="pagination mb-pad">
			<div
				className={c('pagination__item', {'pagination__item_disabled': left <= 0})}
				onClick={prev}>Prev</div>

			{
				new Array(size).fill('').map((i: string, index: number) => {
					//Calculate current render page number
					let p = left*size + index + 1,
						classes = c('pagination__item', {'pagination__item_active': curPage == p});

					return p <= totalPage ? (
						<div className={classes}
							 onClick={() => handler(p)}>{p}</div>) :
						false;
				})
			}

			<div
				className={c('pagination__item', {'pagination__item_disabled': right <= 0})}
				onClick={next}
			>Next</div>
		</div>
	);
};

export default Paginator;
