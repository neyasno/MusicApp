
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