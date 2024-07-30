import { GET } from '../src/app/pages/api/test/URLApiCall/route'; // Assuming your API function is in a file named route.js

describe('Tax Calculation API', () => {
  it('should calculate tax correctly', async () => {
    // Mock request object
    const req = {
      //json: () => Promise.resolve({ income: 1000,dude:Ghouse }) // Simulate request.json() method
      url: 'http://localhost:3000/pages/api/test/URLApiCall?income=1000&dude=Ghouse'
    };

    // Call the API handler
    const response = await GET(req);

    // Extract JSON response data
    const data = await response.json();
    console.log(data)
    // Test that the tax calculation is correct
    expect(data).toEqual({
        "Candidate": "Ghouse",
        "has to pay": 300
        });
  });
});