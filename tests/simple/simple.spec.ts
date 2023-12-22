import { expect, test } from "@playwright/test";
import console from "console";


test.beforeAll(async () => {
    console.log('Before Simple Spec >> Before All')
});

test.beforeEach(async () => {
    console.log('Before Simple Spec >> Before test')
});


test.afterEach(async () => {
    console.log('After Simple Spec >> After test')
});

test.afterAll(async () => {
    console.log('After Simple Spec >> After All')
});

test.describe('Simple tests Spec file', async () => {
    test.beforeAll(async () => {
        console.log('Nested Simple >> Before All')
    });

    test.beforeEach(async () => {
        console.log('Nested Simple >> Before test')
    });


    test.afterEach(async () => {
        console.log('Nested Simple >> After test')
    });

    test.afterAll(async () => {
        console.log('Nested Simple >> After All')
    });

    test.fixme('Broken Simple test', async () => {
        console.log('Broken Simple test >> executing')
        expect(1).toEqual(2);
    });

    test('Conditionally skipped Simple test', async () => {
        test.skip(2 < 5, 'Two is less then five');
        console.log('Conditionally skipped Simple test >> executing')
        expect(1).toEqual(2);
    });

    test('Failing Simple test', async () => {
        console.log('Failing Simple test >> executing')
        expect(1).toEqual(2);
    });

    test('Passing Simple test', async () => {
        console.log('Passing Simple test >> executing')
        expect(1).toEqual(1);
    });

});


