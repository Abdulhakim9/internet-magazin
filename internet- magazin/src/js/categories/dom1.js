import { deleteUser } from "./api1.js"
import {uniques} from "../../../uniques/constant.js"
let {category}=uniques

let grid = document.querySelector(".grid")
let searchss=document.querySelector('.searchss')
let searchs=document.querySelector('.searchs')
// let btnDash = document.querySelector(".btnSVG1")
// let btnProd = document.querySelector(".btnSVG2")
// let btnCategory = document.querySelector(".btnSVG3")
// let btnAdd = document.querySelector(".btnAdd")
// let prod = document.querySelector(".h32")
// let dash = document.querySelector(".h31")
// let category = document.querySelector(".h33")

// btnProd.onclick = () => {
//     window.location = "http://127.0.0.1:5500/product/index.html"
// }
// prod.onclick = () => {
//     window.location = "http://127.0.0.1:5500/product/index.html"
// }

// btnDash.onclick = () => {
//     window.location = "http://127.0.0.1:5500/dashboard/index.html"
// }
// dash.onclick = () => {
//     window.location = "http://127.0.0.1:5500/dashboard/index.html"
// }

// btnCategory.onclick = () => {
//     window.location = "http://127.0.0.1:5500/category/index.html"
// }
// category.onclick = () => {
//     window.location = "http://127.0.0.1:5500/category/index.html"
// }

export function get(data) {
    console.log(data);
    
    grid.innerHTML = ""
    data.forEach(el => {
        let all = document.createElement('div')
        all.classList.add("all2")
        let right = document.createElement("div")
        right.classList.add("btns")
        let left = document.createElement("div")
        left.classList.add("div")

        let img = document.createElement("img")
        img.src = el.avatar;
        img.classList.add("image")

        let name = document.createElement("h3")
        name.innerHTML = el.name
        name.classList.add("name")


        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
`
        // btnEdit.onclick = () => {
        //     localStorage.setItem("editUser", JSON.stringify(el))
        //     window.location = "http://127.0.0.1:5500/editCategory/index.html"
        // }

        btnEdit.classList.add("btnEdit")

        let btnDel = document.createElement("button")
        btnDel.classList.add("btnDel")
        btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
`
        btnDel.onclick = () => {
            deleteUser(el.id)
        }
        right.append(btnEdit, btnDel)
        left.append(img, name)
        all.append(left, right)
        grid.append(all)
    });
}

// btnAdd.onclick = () => {
//     window.location = "http://127.0.0.1:5500/addCategory/index.html"
// }

searchss.onsubmit = async (event) => {
    event.preventDefault()
    let value = searchss['searchs'].value

    try {
        let response = await fetch(category)
        let data = await response.json()
        let fillter = data.filter((user) => {
           return value.toLowerCase().includes(user.name.toLowerCase())
    });
    get(fillter)
    } catch (error) {
        console.error(error);                         
    }
}


searchs.oninput = async (event) => {
    event.preventDefault()
 
    let value = searchs.value 

    try {
        let response = await fetch(category)   
        let data = await response.json()
        let filter = data.filter((obj) => {
            return obj.name.toLowerCase().includes(value.toLowerCase())
        });
        get(filter)
    } catch (error) {
        console.error(error);
    }

}