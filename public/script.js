document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const welcomeContainer = document.getElementById('welcome-container');
    const adminOptions = document.getElementById('admin-options');
    const userOptions = document.getElementById('user-options');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, role })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('role', data.role);
                showWelcome(data.role);
            } else {
                showMessage(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Error al intentar iniciar sesión.');
        });
    });

    function showWelcome(role) {
        loginForm.style.display = 'none';
        welcomeContainer.style.display = 'block';
        if (role === 'admin') {
            adminOptions.style.display = 'block';
        } else if (role === 'user') {
            userOptions.style.display = 'block';
        }
    }

    function showMessage(message) {
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';
    }

    // Funciones para mostrar y cerrar formularios
    window.showRegisterProductForm = function() {
        document.getElementById('register-product-form').style.display = 'block';
    }

    window.showSearchProductForm = function() {
        document.getElementById('search-product-container').style.display = 'block';
    }

    window.showModifyProductForm = function() {
        document.getElementById('modify-product-form').style.display = 'block';
    }

    window.showDeleteProductForm = function() {
        document.getElementById('delete-product-form').style.display = 'block';
    }

    window.showReportForm = function() {
        document.getElementById('report-container').style.display = 'block';
    }

    window.closeForm = function(formId) {
        document.getElementById(formId).style.display = 'none';
    }

    window.viewInventory = function() {
        // Lógica para ver inventario
    }
});