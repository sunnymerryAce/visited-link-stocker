import Index from '../index';

let dummyData;
beforeAll(() => {
  dummyData = {
    name: 'Alex',
    age: 29,
  };
});
// convertStringValueToObjectValue
describe('convertStringValueToObjectValue', () => {
  test.only('正常系', () => {
    expect(
      Index.convertStringValueToObjectValue({
        key: 1,
        value: JSON.stringify(dummyData),
      }),
    ).toMatchObject({ key: 1, value: dummyData });
  });

  test('異常系', () => {});
});
