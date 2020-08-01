export default (value: string) => {
	if(value == undefined)
		return undefined;

	return /.+@.+\..{3,5}/.test(value) ? undefined : 'Value must be email';
}
