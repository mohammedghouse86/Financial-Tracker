import { createMocks } from 'node-mocks-http';
import {handler} from '../src/app/pages/api/test/tax_calc_without_NR/route'; 

describe('Tax Calculation API', () => {
    it('should calculate tax correctly', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { income: 1000 }
      })
      //const response = await handler(req);
      //const data = response;
      await handler(req, res);
      const data = res._getJSONData();
      console.log('this is the test data',data)
      expect(data.tax).toBe(300);
    });})

    // TEST >>>>> npm run test tax_calc_without_NR.test.jsx :watch