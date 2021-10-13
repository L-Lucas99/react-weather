

export const getLocalStorage = (data) => {
    return JSON.parse(localStorage.getItem(data))
}

export const upDateLocalStorage = (name,data) => {
    localStorage.setItem(name,JSON.stringify(data))
}

