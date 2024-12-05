import { uniques } from "../../../uniques/constant.js";
import { get } from "./dom1.js";
let { url } = uniques
let {category}=uniques
export async function getData() {
    try {

        let { data } = await axios.get(category)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUser(id) {
    try {
        const { data } = await axios.delete(`${category}/${id}`)
        getData()
    }
    catch (error) {
        console.error(error);
    }
} 
