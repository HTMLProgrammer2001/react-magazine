export default (value: string) => {
	if(value == undefined)
		return undefined;

	return value.split(/\s+/).filter((w) => w).length == 2 ?
		undefined :
		'Enter valid full name';
};
