import { get } from "./dom5.js";
import { uniques } from "../../../uniques/constant.js";
let {product}=uniques
// import {funcdeluser} from "./dom5.js"
export async function getData(){
    try {
        const {data}=await axios.get(product)
        get(data)
    } catch (error) {
     console.error(error);
    }
}


export async function DeleteUser(id) {
    try {
        const response = await axios.delete(`${product}/${id}`);
        getData();  
    } catch (error) {
        console.error("Ошибка при удалении:", error);
    }
}

export async function DeleteItemUser(id) {
    try {
        await fetch(`${product}/${id}`, {
            method: 'DELETE'
        });
        getData()
    } catch (error) {
        console.error(error);
    }
}

// export async function funcdeluser(id) {
//     try {
//         await axios.delete(`${product}/${id}`)
//         get(data)
//     } catch (error) {
//         console.error(error);
//     }
// }я