export function validatePassword(string) {
	//at least one uppercase
	//at least one special character
	//at least one number
	//at least one lower case
	//length handled by default prop minLength
	const validationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])$/;
	return validationRegex.test(string);
}
