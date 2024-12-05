let table1 = document.querySelector('.table1')
let tbody = document.querySelector('.tbody')
// let csd = document.querySelector('.csd')
let tbodys=document.querySelectorAll('.tbodys')
let orders=document.querySelectorAll('.orders')
let dashboard=document.querySelector('.Dashboard')

export function get(data) {
    tbody.innerHTML = ""
    data.forEach((el) => {
        let tr = document.createElement('tr')

        let name = document.createElement('td')
        name.classList.add('nametd')
        name.innerHTML = el.name

        let date = document.createElement('td')
        date.classList.add('datetd')
        date.innerHTML = el.date

        let price = document.createElement('td')
        price.classList.add('pricetd')
        price.innerHTML = el.price

        let statusUser = document.createElement('td')
        statusUser.classList.add('statustd')
        let status = document.createElement('span')
        if (el.status === 'paid') {
            status.innerHTML = "Paid"
            status.classList.add('active')
        } else if (el.status === 'pending') {
            status.innerHTML = "Pending"
            status.classList.add('inactive')
        }
        statusUser.append(status)
        tr.append(name, date, price, statusUser)
        tbody.append(tr)
    })
}
export function gets(datad) {
    tbodys.innerHTML = ""
    datad.forEach((elem) => {
        let tr = document.createElement('tr')
        tr.classList.add('trs')

        let div=document.createElement('div')
        let name = document.createElement('td')
        name.innerHTML = elem.name

        let unit = document.createElement('td')
        unit.innerHTML = elem.unit

        let price = document.createElement('td')
        price.innerHTML = elem.price

        let img =document.createElement('td')
        unit.innerHTML = elem.img
        div.append(img,name)
        tr.append(divprice,unit)
        tbodys.append(tr)
    })
}
// export function geta(datas) {
//     csd.innerHTML = ""
//     datas.forEach((el) => {
//         let topselling = document.createElement('h2')
//         topselling.innerHTML = el.name

//         let seall = document.createElement('h3')
//         seall.innerHTML = el.seall

//         let strelka = document.createElement('span')
//         strelka.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
// </svg>`

//         let div1 = document.createElement('div');
//         let div2 = document.createElement('div');
//         let div3 = document.createElement('div');
//         let div = document.createElement('div');
//         let div4= document.createElement('div');
//         let div5=document.createElement('div');
//         let img = document.createElement('img');
//         img.src = el.img

//         let text1 = document.createElement('h3');
//         text1.innerHTML = el.text1


//         let text2 = document.createElement('h3');
//         text2.innerHTML = el.text2

//         let text3 = document.createElement('h3');
//         text3.innerHTML = el.number

//         let text4 = document.createElement('h3');
//         text4.innerHTML = el.text4
//         div.append(img);
//         div1.append(topselling, seall,strelka)
//         div2.append(text1, text2);
//         div4.append(div,div2)
//         div5.append(div4,div3)
//         div3.append(text3,text4)

//         csd.append(div5)
//     })
// }

// dashboard.onclick=()=>{
//     dashboard.style.backgroundColor="white"
//     dashboard.style.color="black"
// }

// orders.onclick=()=>{
//     orders.style.backgroundColor="white"
//     orders.style.color="black"
// }