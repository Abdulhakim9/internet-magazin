let loginbtn=document.querySelector('.login_btn')
let loginform=document.querySelector('.loginform')
let url='http://localhost:3000/user';
let data=[]

async function getDate() {
    try {
        let response = await fetch(url)
        data = await response.json()
    } catch (error) {
        console.error(error);
    }
}

getDate()

loginform.onsubmit = (event) => {
    event.preventDefault()

    const email = loginform['email'].value
    const password = loginform['password'].value

    let userFaund = data.find((user) => {
        return user.email == email && user.password == password;
    });
    if(userFaund){
        window.location = '../../html/dashboard.html'
    }else{
        let conf = confirm('Если у вас нет аккунта ? Вам нужно с перво создат аккаунт!')
    if(conf){
            window.location = "../../html/password.html"
    }
}
}