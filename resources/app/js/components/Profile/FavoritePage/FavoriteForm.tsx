import * as React from 'react';
import {InjectedFormProps, reduxForm, submit, Field} from 'redux-form';
import InputElement from '../../FormElements/InputElement';
import {Dispatch} from 'redux';


export type IFavoriteFindFormData = {
	find: string
};

type IFavoriteFormProps = InjectedFormProps<IFavoriteFindFormData>;

const FavoriteForm: React.FC<IFavoriteFormProps> = (props) => (
	<form onSubmit={props.handleSubmit} className="myOrders__header my-pad">
		<span className="myOrders__find">
			<Field
				component={InputElement}
				name="find"
				required
				placeholder="Enter product name"
			/>
		</span>
	</form>
);

export default reduxForm<IFavoriteFindFormData>({
	form: 'favoriteFind',
	onChange(values: Partial<IFavoriteFindFormData>, dispatch: Dispatch<any>): void {
		dispatch(submit('favoriteFind'));
	}
})(FavoriteForm);
