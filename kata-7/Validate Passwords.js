const passwords = new Set()

function signIn(password) {
    passwords.add(password)
}

function logIn(password) {
    return passwords.has(password)
}