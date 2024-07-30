// http://localhost:3000/pages/api/test/tax_calc_without_NR
// NOTE- this is the API which does not use NEXT-RESPONCE, here testing this API 

export async function handler(req, res) {
    const { income } = req.body
    console.log(income);
    if (req.method === 'POST'){
    try {
      const tax = income * 0.30; // Calculate tax
      console.log('so your tax will be =',tax);
      res.status(200).json({ tax });
    } catch (err) {
      res.status(500).send({ error: 'Failed to fetch data' })
    }}
  } 