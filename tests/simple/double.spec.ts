import {expect, test} from "@playwright/test";
import console from "console";


test.beforeAll(async () => {
    console.log('Before Double Spec >> Before All')
});

test.beforeEach(async () => {
    console.log('Before Double Spec >> Before test')
});


test.afterEach(async () => {
    console.log('After Double Spec >> After test')
});

test.afterAll(async () => {
    console.log('After Double Spec >> After All')
});

test.describe('Group one', async () => {
    test.beforeAll(async () => {
        console.log('Group one >> Before All')
    });

    test.beforeEach(async () => {
        console.log('Group one >> Before test')
    });


    test.afterEach(async () => {
        console.log('Group one >> After test')
    });

    test.afterAll(async () => {
        console.log('Group one >> After All')
    });



    test.fixme('Broken Group one test', async () => {
        console.log('Broken Group one test >> executing')
        expect(1).toEqual(2);
    });

    test('Conditionally skipped Group one test', async () => {
        test.skip(2 < 5, 'Two is less then five');
        console.log('Conditionally skipped Group one test >> executing')
        expect(1).toEqual(2);
    });

    test('Failing Group one test', async () => {
        console.log('Failing Group one test >> executing')
        expect(1).toEqual(2);
    });

    test('Passing Group one test', async () => {
        console.log('Passing Group one test >> executing')
        expect(1).toEqual(1);
    });

});

test.describe('Group two', async () => {
    test.beforeAll(async () => {
        console.log('Group two >> Before All')
    });

    test.beforeEach(async () => {
        console.log('Group two >> Before test')
    });


    test.afterEach(async () => {
        console.log('Group two >> After test')
    });

    test.afterAll(async () => {
        console.log('Group two >> After All')
    });

    test.fixme('Broken Group two test', async () => {
        console.log('Broken Group two test >> executing')
        expect(1).toEqual(2);
    });

    test('Conditionally skipped Group two test', async () => {
        test.skip(2 < 5, 'Two is less then five');
        console.log('Conditionally skipped Group two test >> executing')
        expect(1).toEqual(2);
    });

    test('Failing Group two test', async () => {
        console.log('Failing Group two test >> executing')
        expect(1).toEqual(2);
    });

    test('Passing Group two test', async () => {
        console.log('Passing Group two test >> executing')
        expect(1).toEqual(1);
    });

});
