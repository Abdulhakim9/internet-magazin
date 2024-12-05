import { get } from "./dom2.js";
import { gets } from "./dom2.js";
import { uniques } from "../../../uniques/constant.js";
let {url}=uniques
let {dashboard}=uniques
let {topselling}=uniques
// let {dashboardImg}=uniques
export async function getData(){
    try {
        const {data}=await axios.get(dashboard)
        get(data)
    } catch (error) {
     console.error(error);
    }
}
export async function getDatad(){
    try {
        const {datas}=await axios.get(topselling)
        gets(datas)
    } catch (error) {
     console.error(error);
    }
}