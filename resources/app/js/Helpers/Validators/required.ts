export default (value: string) => {
	if(value == undefined)
		return undefined;

	return value.length ? undefined : 'Required';
};
