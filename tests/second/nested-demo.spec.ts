import {expect, test} from "@playwright/test";
import console from "console";


test.beforeAll(async () => {
    console.log('Before Nested Spec >> Before All')
});

test.beforeEach(async () => {
    console.log('Before Nested Spec >> Before test')
});


test.afterEach(async () => {
    console.log('After Nested Spec >> After test')
});

test.afterAll(async () => {
    console.log('After Nested Spec >> After All')
});

test.describe('Nested tests Spec file', async () => {
    test.beforeAll(async () => {
        console.log('Nested Spec >> Before All')
    });

    test.beforeEach(async () => {
        console.log('Nested Spec >> Before test')
    });


    test.afterEach(async () => {
        console.log('Nested Spec >> After test')
    });

    test.afterAll(async () => {
        console.log('Nested Spec >> After All')
    });

    test.describe('Sub-Group tests', async () => {
        test.beforeAll(async () => {
            console.log('Sub-Group >> Before All')
        });

        test.beforeEach(async () => {
            console.log('Sub-Group >> Before test')
        });


        test.afterEach(async () => {
            console.log('Sub-Group >> After test')
        });

        test.afterAll(async () => {
            console.log('Sub-Group >> After All')
        });

        test.fixme('Broken Sub-Group test', async () => {
            console.log('Broken Sub-Group test >> executing')
            expect(1).toEqual(2);
        });

        test('Conditionally skipped Sub-Group test', async () => {
            test.skip(2 < 5, 'Two is less then five');
            console.log('Conditionally Sub-Group skipped test >> executing')
            expect(1).toEqual(2);
        });

        test('Failing Sub-Group test', async () => {
            console.log('Failing Sub-Group test >> executing')
            expect(1).toEqual(2);
        });

        test('Passing Sub-Group test', async () => {
            console.log('Passing Sub-Group test >> executing')
            expect(1).toEqual(1);
        });
    });

    test.fixme('Broken nested test', async () => {
        console.log('Broken nested test >> executing')
        expect(1).toEqual(2);
    });

    test('Conditionally skipped nested test', async () => {
        test.skip(2 < 5, 'Two is less then five');
        console.log('Conditionally skipped nested test >> executing')
        expect(1).toEqual(2);
    });

    test('Failing nested test', async () => {
        console.log('Failing nested test >> executing')
        expect(1).toEqual(2);
    });

    test('Passing nested test', async () => {
        console.log('Passing nested test >> executing')
        expect(1).toEqual(1);
    });

});


