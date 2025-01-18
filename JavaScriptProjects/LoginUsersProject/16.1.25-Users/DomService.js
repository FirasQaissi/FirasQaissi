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
        <td>${user.isLogedIn ? 'מחובר' : 'מנותק'}</td>
        `;
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'התנתקות';
        logoutBtn.addEventListener('click', () => {
            User.logout(user.id);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'מחיקה';
        deleteBtn.addEventListener('click', () => {
            User.removeUser(user.id);
        });

        // you should complete this part
        const editButton = document.createElement('button');
        editButton.textContent = 'עריכה';
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
            divEdit.appendChild(submitEdit)

            const changing = []
            submitEdit.addEventListener('click', () => {
                firstNameinput.value = push(changing)


                console.log(this.changing);




            })


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