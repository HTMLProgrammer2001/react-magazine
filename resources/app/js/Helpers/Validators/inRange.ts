export default (min: number, max: number) => (value: number) => {
	if(value == undefined)
		return undefined;

	return +value >= min && +value <= max ? undefined : 'Choose your mark';
};
