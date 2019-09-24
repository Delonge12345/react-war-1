/**
 * Created by Максим on 18.09.2019.
 */
import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";




//Describe позволяет объединить тесты
describe("ProfileStatus component", () => {

	test("status from props should be in the state", () => {
		const component = create(<ProfileStatus status="Max is good guy!" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("Max is good guy");
	});



	test("after creation span and status should be displayed with correct status", () => {
		const component = create(<ProfileStatus status="Max is good guy!" />);
		const instance = component.getInstance();
		const span = instance.findByType("input");
		expect(span).toBeNull();
	});


	test("after creation span and status should be displayed with correct status", () => {
		const component = create(<ProfileStatus status="Max is good guy!" />);
		const instance = component.getInstance();
		const span = instance.findByType("span");
		expect(span.children[0]).toBe("Cool!!!");
	});




});