// http://localhost:3000/pages/api/test/calculation
/*
import { NextResponse } from 'next/server';

async function calculateTax(income) {
  const tax = income * 0.30;

  return NextResponse.json({
    "you have to pay": tax
  });
}

export async function GET(req) {
  // Extract income from the request's query parameters or body
  const { searchParams } = new URL(req.url, 'http://localhost');
  const income = parseFloat(searchParams.get('income')) || 0;
    console.log(req)
  return calculateTax(income);
}



export default function handler(req, res) {
  const { income } = JSON.parse(req.body);

  const tax = income*0.30;

  res.status(200).json(
    tax
  );
}


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { income } = JSON.parse(req.body); // Parse incoming JSON body
      const tax = income * 0.30; // Calculate tax
      return res.status(200).json({ tax }); // Send JSON response with tax
    } catch (error) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' }); // Handle unsupported methods
  }
}


import { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req, res) {
  const { income } = req.body
  console.log(income);
  if (req.method === 'POST'){
  try {
    const tax = income * 0.30; // Calculate tax
    res.status(200).json({ tax });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }}
}*/


import { NextResponse } from 'next/server';
export async function POST(request) {
  const { income } = await request.json();
  try {
    const tax = income * 0.30;
    console.log('so your tax will be =',tax);
    return NextResponse.json({ tax });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to calculate tax' }, { status: 500 });
  }
}
