import { expect, test } from "@playwright/test";
import * as console from "console";


test.beforeAll(async () => {
  console.log('Before Slow Spec >> Before All')
});

test.beforeEach(async () => {
  console.log('Before Slow Spec >> Before test')
});


test.afterEach(async () => {
  console.log('After Slow Spec >> After test')
});

test.afterAll(async () => {
  console.log('After Slow Spec >> After All')
});

test.describe('Slow Spec file', async () => {
  test.beforeAll(async () => {
    console.log('Slow Spec >> Before All')
  });

  test.beforeEach(async () => {
    console.log('Slow Spec >> Before test')
  });


  test.afterEach(async () => {
    console.log('Slow Spec >> After test')
  });

  test.afterAll(async () => {
    console.log('Slow Spec >> After All')
  });


  test.fixme('Broken slow test @slow', async () => {
    console.log('Broken test >> executing')
    expect(1).toEqual(2);
  });

  test('Conditionally skipped slow test @slow', async () => {
    test.skip(2 < 5, 'Two is less then five');
    console.log('Conditionally skipped test >> executing')
    expect(1).toEqual(2);
  });

  test('Failing slow test @slow', async () => {
    console.log('Failing slow test >> executing')
    expect(1).toEqual(2);
  });

  test('Passing slow test @slow', async () => {
    console.log('Passing slow test >> executing')
    expect(1).toEqual(1);
  });
});
