// http://localhost:3000/pages/api/test/users
import { NextResponse } from 'next/server';

async function Ghouse_Family_names() {
  return NextResponse.json([
    { id: 1, username: 'Gouse' },
    { id: 2, username: 'Sana' },
    { id: 3, username: 'Ayesha' },
    { id: 4, username: 'Aleena' },
  ]);
}

export async function GET(){
  return Ghouse_Family_names();
}