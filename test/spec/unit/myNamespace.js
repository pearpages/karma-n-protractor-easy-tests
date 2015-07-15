describe('hello',function (){

	it('says hello', function(){
		expect(myNamespace.sayHello()).toBe('Hello');
	});

	it('says good bye', function(){
		expect(myNamespace.sayGoodBye()).toBe('Good Bye');
	});

	it('says good morning', function(){
		expect(myNamespace.sayGoodMorning()).toBe('Good Morning');
	});
});