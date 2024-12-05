// let passwordform=document.querySelector('.passwordForm')
// let url='http://localhost:3000/user'
// let data=[]

// async function getData(){
//     try {
//         let response = await fetch(url)
//         data = await response.json()
//         } catch (error) {
//             console.error(error);
//     }
// }

// function getData(){
//     const fullName = passwordform['name'].value
//     const email = passwordform['email'].value
//     const phone = passwordform['phone'].value
//     const password = passwordform['password'].value
//     let newUser = {
//         fullName: passwordform['name'].value,
//         email: passwordform['email'].value,
//         phone: passwordform['phone'].value,
//         password: passwordform['password'].value
//     }
//     if(user.fullName == fullName || user.email == email || user.phone == phone || user.password == password){
//         alert('Аккаунт с такой fullName или email или Phone number или password уже сушествует!')
//     }else{
//         registration(newUser)
//     }
// }

// async function registration(newUser) {
//     try {
//         await fetch(url, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newUser)
//         });
//         getDate()
//     } catch (error) {
//         console.error(error);
//     }
// }

let passwordform = document.querySelector('.passwordForm');
let url = 'http://localhost:7000/user';
let data = [];

async function getData() {
    try {
        let response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Переименуем функцию, чтобы избежать конфликта с getData
async function registerUser() {
    const fullName = passwordform['name'].value;
    const email = passwordform['email'].value;
    const phone = passwordform['phone'].value;
    const password = passwordform['password'].value;

    // Проверка на уникальность пользователя
    const userExists = data.some(user => 
        user.fullName === fullName || 
        user.email === email || 
        user.phone === phone || 
        user.password === password
    );

    if (userExists) {
        alert('Аккаунт с таким fullName, email, phone или password уже существует!');
    } else {
        const newUser = {
            fullName,
            email,
            phone,
            password
        };
        await registration(newUser);
    }
}

async function registration(newUser) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });
        
        if (response.ok) {
            console.log('Пользователь успешно добавлен');
            // Обновление данных после добавления нового пользователя
            await getData();
        } else {
            console.error('Ошибка при добавлении пользователя:', response.statusText);
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
}

// Инициализируем данные при загрузке страницы
getData();
