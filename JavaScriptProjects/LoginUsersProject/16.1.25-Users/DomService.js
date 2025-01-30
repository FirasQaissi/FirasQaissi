import { User } from './user.js';

const drawTableRows = (users) => {
    const tableBody = document.querySelector('#users-table-body');

    tableBody.innerHTML = '';

    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.isLogedIn ? 'online' : 'ofline'}</td>
        `
        user.isLogedIn ? row.style.backgroundColor = 'lightgreen' : row.style.backgroundColor = 'lightcoral'

        row.style.fontFamily = 'cruze'
            ;

        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';

            logoutBtn.addEventListener('click', () => {
                User.logout(user.id);

            });
            logoutBtn.style.backgroundColor = 'red';
            logoutBtn.style.color = 'white';
            logoutBtn.style.width = '85px'
            logoutBtn.style.height = '25px'

     
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            User.removeUser(user.id);
        });
        deleteBtn.style.backgroundColor = 'blue';
        deleteBtn.style.width = '85px'
        deleteBtn.style.height = '25px'
        deleteBtn.style.color = 'white';


        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.width = '85px'
        editButton.style.height = '25px'
        editButton.style.color = 'black';
        editButton.addEventListener('click', () => {
            const divEdit = document.getElementById('editing')
            divEdit.style.gap = '15px'
            divEdit.style.margin = 'auto'
            divEdit.style.fontFamily = 'fantasy'
            divEdit.style.marginLeft = '10%'
            divEdit.style.fontSize = '22px'
            const h1Edit = document.createElement('h1')
            h1Edit.textContent = 'Edit your Info'
            divEdit.appendChild(h1Edit)
            const firstNameinput = document.createElement('input')
            firstNameinput.placeholder = 'First Name'
            divEdit.appendChild(firstNameinput)
            const lastNameInput = document.createElement('input')
            divEdit.appendChild(lastNameInput)
            lastNameInput.placeholder = 'Last Name'
            const eMailInput = document.createElement('input')
            divEdit.appendChild(eMailInput)
            eMailInput.placeholder = 'Email'
            const changePasswordEdit = document.createElement('input')
            divEdit.appendChild(changePasswordEdit)
            changePasswordEdit.placeholder = 'Change Password'

            firstNameinput.value = user.firstName
            lastNameInput.value = user.lastName
            eMailInput.value = user.email
            changePasswordEdit.value = user.password

            const submitEdit = document.createElement('input')
            submitEdit.type = 'submit'
            submitEdit.style.backgroundColor = 'green'
            submitEdit.style.color = 'white'
            submitEdit.style.border = 'none'
            submitEdit.style.padding = '10px 20px'
            submitEdit.style.borderRadius = '15px'
            submitEdit.style.cursor = 'pointer'
            divEdit.appendChild(submitEdit)

            const changing = []
            submitEdit.addEventListener('click', () => {
                user.firstName = firstNameinput.value
                user.lastName = lastNameInput.value
                user.email = eMailInput.value
                user.password = changePasswordEdit.value
                changing.push(user)
                localStorage.setItem('users', JSON.stringify(changing))
                drawTableRows(changing)
                divEdit.innerHTML = ''
                if (submitEdit) {
                    const changeInfo = document.getElementById('changeInfo')
                    changeInfo.style.backgroundColor = 'green'
                    changeInfo.style.color = 'white'
                    changeInfo.style.border = 'none'
                    changeInfo.style.padding = '10px 20px'
                    changeInfo.style.borderRadius = '15px'
                    changeInfo.textContent = 'Info Changed successfully'
                    setTimeout(() => {
                        changeInfo.textContent = '';
                        changeInfo.style.backgroundColor = 'transparent';
                    }, 3000);
                }


            })
            editButton.style.backgroundColor = 'green'

        });

        row.appendChild(logoutBtn);
        row.appendChild(deleteBtn);
        row.appendChild(editButton);
        tableBody.appendChild(row);
    });



};

const registerForm = document.querySelector('.register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const users = User.usersList;

    if (users.find((user) => user.email === email)) {
        alert('משתמש עם כתובת דוא"ל זו כבר קיים');
        return;
    }
    new User(firstName, lastName, email, password);
    e.target.reset();
});

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const user = User.usersList.find((user) => user.email === email);
    if (user && user.password === password) {
        User.login(user.id);
        e.target.reset();
    } else {
        alert('שם משתמש או סיסמה לא נכונים');
    }
});

export { drawTableRows, registerForm, loginForm };