const { createToken } = require('./auth');

const users = [];

const login = (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    console.log({ email, password });

    if (!email) {
        return response.json({ status: 'error', message: 'i need your email first!' })
    }

    if (!password) {
        return response.json({ status: 'error', message: 'i need your password first!' })
    }

    const existingUser = users.find((user) => {
        if (user.email === email && user.password === password) {
            return true;
        }
        return false;
    });

    if (existingUser) {
        const token = createToken(existingUser.userId);

        return response.json({ status: 'ok', token });
    } else {
        return response.json({ status: 'error', message: 'wrong id' });

    }
}

const register = (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;

    console.log({ name, email, password });

    if (!name) {
        return response.json({ status: 'error', message: 'i need your name first!' })
    }

    if (!email) {
        return response.json({ status: 'error', message: 'i need your email first!' })
    }

    if (!password) {
        return response.json({ status: 'error', message: 'i need your password first!' })
    }

    const userWithSameEmail = users.find((user) => {
        if (user.email === email) {
            return true;
        }
        return false;
    });

    if (userWithSameEmail) {
        return response.json({ status: 'error', message: 'User with this email already exists' });
    }

    users.push({ name, email, password, userId: users.length + 1 });

    response.json({ status: 'ok' });
}

module.exports = { users, login, register };
