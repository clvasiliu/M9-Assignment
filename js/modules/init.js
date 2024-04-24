async function initEmployees() {
	try {
		const response = await fetch('./data/employees.json', {'Content-Type': 'text/xml', 'mode': 'no-cors'});
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}
export default initEmployees;