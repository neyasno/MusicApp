
export default function getCookieValue(name :string) {

    const cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i];
        const [cookieName, cookieValue] = cookie.split('=');

        if (cookieName === name) {
        return cookieValue;
        }
    }

    return null;
}

export const setToken = (token : string) =>{

    const date = new Date()
    date.setTime(date.getTime() + (2 * 60 * 1000))
    const expireTime = "expireTime=" + date.toUTCString() + ";"

    document.cookie = "token=" + token + ";path=/;" + expireTime
}
