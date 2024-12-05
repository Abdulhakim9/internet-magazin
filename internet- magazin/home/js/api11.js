import get from "./dom11.js"
import { getcategory } from "./dom11.js"
import { getName } from "./dom11.js"

let url = 'http://localhost:7000/product'
let category = 'http://localhost:7000/category'


export default async function getDate(){
    try {
         let response = await fetch(url)        
         let data = await response.json()
         get(data)
    } catch (error) {
        console.error(error);
    }
}


export async function getCategory(){
    try {
        let response = await fetch(category)
        let data = await response.json()
        getcategory(data)
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


export async function getNameCategory(){
    try {
        let response = await fetch(category)
        let data = await response.json()
        getName(data)
    } catch (error) {
        console.error(error);
    }
}