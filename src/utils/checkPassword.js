const checkPassword = (pwd) => {
    let reg = /^([a-zA-Z0-9]+)$/
    return reg.test(pwd)
}

module.exports = checkPassword