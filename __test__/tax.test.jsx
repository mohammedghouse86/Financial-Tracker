import { POST } from '../src/app/pages/api/test/calculation/route'; // Assuming your API function is in a file named route.js
import { createMocks } from 'node-mocks-http'
import 'whatwg-fetch';
/*
describe('Tax Calculation API', () => {
  it('should calculate tax correctly', async () => {
    console.log('yoooooo')
    const Request = {
      json: jest.fn().mockResolvedValue({ income: 1000 }),
    };
    const response = await POST(Request);
    const data = response;
    console.log('this is the test data',data)
    expect(data.tax).toBe(300);
  });})
/**
 * @jest-environment node
 */
/*
  describe('Tax Calculation API', () => {
    it('should calculate tax correctly', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: JSON.stringify({ income: 1000 })
      })
      const response = await POST(req);
      const data = response;
      console.log('this is the test data',data)
      expect(data.tax).toBe(300);
    });})

*/
import { NextResponse } from 'next/server'; // Import NextResponse if needed

describe('Tax Calculation API', () => {
  it('should calculate tax correctly', async () => {
    // Mock request object
    const req = {
      json: () => Promise.resolve({ income: 4000 }) // Simulate request.json() method
    };

    // Call the API handler
    const response = await POST(req);

    // Extract JSON response data
    const data = await response.json();

    // Test that the tax calculation is correct
    expect(data.tax).toBe(1200);
  });
});