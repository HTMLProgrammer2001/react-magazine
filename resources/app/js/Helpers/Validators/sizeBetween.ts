export default (min: number, max: number) => (value: string) => {
	if(value == undefined)
		return undefined;

	return value.length >= min && value.length <= max ?
		undefined :
		`Value must be between ${min} - ${max} chars`
};
