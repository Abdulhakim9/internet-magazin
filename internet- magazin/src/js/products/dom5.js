let tbody = document.querySelector('.tbody')
// let product = document.querySelector('.product')
// let dashboard=document.querySelector('.Dashboard')
let btnAdd=document.querySelector('.btnAdd')
let searchss=document.querySelector('.searchss')
let searchs=document.querySelector('.searchs')
// import { funcdeluser } from "./api5.js"
let btnDeleteProduct = document.querySelector('.btnDeleteProduct')
let btnCloseDel = document.querySelector('.btnCloseDel')
let btnDeleteItem = document.querySelector('.btnDeleteItem')
let checkDel = document.querySelector('.checkDel')
let btnDelCheck = document.querySelector('.btnDelCheck')
let diaDel = document.querySelector('.diaDel')
let deleteAll = []
let closeDel = document.querySelector('.closeDel')
import { DeleteUser } from "./api5.js"
import { getData } from "./api5.js"
// import { DeleteUser } from "./app.js"

import { DeleteItemUser } from "./api5.js"
 import { uniques } from "../../../uniques/constant.js"
 let {product}=uniques
 let index =null
export function get(data) {
    tbody.innerHTML = ""
    data.forEach((el) => {
        let tr = document.createElement('tr')

        let nametd = document.createElement('td')
        nametd.classList.add('nametd')
        let fullname=document.createElement('h3')
        fullname.innerHTML = el.name

        let img = document.createElement('img')
        img.src = `../../${el.img}`
        img.classList.add('imgs')

        // let inventorys=document.createElement('td')
        let inventory = document.createElement('td')
        inventory.innerHTML = el.inventory

        let category = document.createElement('td')
        category.innerHTML = el.category

        let price = document.createElement('td')
        price.innerHTML = el.price

        let btnDel = document.createElement('span')
        btnDel.style.color="red"
        btnDel.classList.add('btnDel')
        // btnDel.onclick=()=>{
        //     funcdeluser(el.id)
        // }
        btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
    `
    
    btnDel.onclick = () => {
        diaDel.showModal()
        index = product.id
    }

    btnDeleteProduct.onclick = () => {
        DeleteUser(el.iв)
        diaDel.close()
    }

    // btnDeleteItem.onclick = () => {
    //     DeleteItemUser(idx)
    //     checkDel.close()
    // }

    btnCloseDel.onclick = () => {
        diaDel.close()
    }

    closeDel.onclick = () => {
        diaDel.close()
    }

    // btnEdit.onclick = () => {
        
    // }
     

        let btnEdit = document.createElement('span');
        btnEdit.classList.add('btnEdit')
        btnEdit.style.color="blue"
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
`
        let actions=document.createElement('td')
        actions.append(btnDel,btnEdit)
        let chtd = document.createElement('td')
        let checkbox = document.createElement('input')
        chtd.appendChild(checkbox)
        checkbox.type = "checkbox"
        nametd.append(img,fullname)
        tr.append(chtd,nametd, inventory, category, price,actions)
        tbody.append(tr)
    })
}

// dashboard.onclick=()=>{
//     dashboard.localStorage.setItem('dashboard',JSON.stringify(dashboard)) 
//     window.location.href="../../html/dashboard.html"
// }
//  btnAdd.onclick=()=>{
//     window.location = "../../html/addproduct.html"
// }
 // let btnEdit=document.querySelector('.btnEdit')


 searchss.onsubmit = async (event) => {
    event.preventDefault()
    let value = searchss['searchs'].value

    try {
        let response = await fetch(product)
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
        let response = await fetch(product)   
        let data = await response.json()
        let filter = data.filter((obj) => {
            return obj.name.toLowerCase().includes(value.toLowerCase())
        });
        get(filter)
    } catch (error) {
        console.error(error);
    }

}


