
export async function staticprops() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    //console.log("this is data=",data)
    return data
    }
