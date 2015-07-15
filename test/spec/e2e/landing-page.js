describe('The landing page', function (){

	it('should have a button with the text Click Me!',function (){

		browser.get('http://localhost:8080/app');

		expect(browser.getTitle()).toEqual('My Tests');
		
		expect(element(by.css('button')).getText()).toEqual('Click me!');
	});
});