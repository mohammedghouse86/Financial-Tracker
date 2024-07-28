import tax from '../src/app/pages/api/test/calculation/route';

test('calculates order total', () => {
  const req = {
    body: JSON.stringify({
      income: 10000
    })
  }

  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json
    }
  })

  const res = {
    status
  }

  tax(req, res);
  console.log( json.mock.calls[0][0])
  expect(json.mock.calls[0][0]).toEqual(3000);
});