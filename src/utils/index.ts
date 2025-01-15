// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanParams = (params: any) => {
	for (const key in params) {
		if (params[key] === '' && params[key] !== 0) {
			delete params[key];
		}
	}
	return params;
};
