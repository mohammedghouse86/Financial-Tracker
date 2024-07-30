//IN THIS API YOU CAN ACCESS IT USING THE 
// url: 'http://localhost:3000/pages/api/test/URLApiCall?income=50000&dude=Ghouse'
import { NextResponse } from 'next/server';

async function calculateTax(income, who) {
  const tax = income * 0.30;
  return NextResponse.json({
    'Candidate':who,
    'has to pay': tax
  });
}

export async function GET(req) {
  // Extract income from the URL query parameters
  console.log(req)
  const { searchParams } = new URL(req.url);
  console.log(new URL(req.url))
  const income = parseFloat(searchParams.get('income')) || 0;
  const who =searchParams.get('dude')
  return calculateTax(income, who);
}
