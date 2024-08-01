"use server";

import { signIn, signOut } from "../../auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
/*
export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/home" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}*/

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function uploadexpense(formData) {
  try {
    //console.log('running uploadexpense')
    const total = formData.get("unitcost")*formData.get("qty")
    const response = await fetch(
      `http://localhost:3000/api/auth/ExpenseEntryAPI`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: formData.get("category"),
          description: formData.get("description"),
          unit: formData.get("unit"),
          qty: formData.get("qty"),
          unitcost: formData.get("unitcost"),
          totalcost: total,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}

export async function getexpense() {
  try {
    //console.log('running uploadexpense')
    //console.log('this is formData =',formData.get("description"))
    const response = await fetch(
      `http://localhost:3000/api/auth/GetExpensesAPI`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
}
