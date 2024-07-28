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
*/


export default function handler(req, res) {
  const { income } = JSON.parse(req.body);

  const tax = income*0.30;

  res.status(200).json(
    tax
  );
}