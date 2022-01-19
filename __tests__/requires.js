test('should require all eslint configs without error', () => {
	expect(() => {
		require('../index');
	}).not.toThrow();
	expect(() => {
		require('../nodejs');
	}).not.toThrow();
	expect(() => {
		require('../react');
	}).not.toThrow();
	expect(() => {
		require('../lib/shared');
	}).not.toThrow();
});
