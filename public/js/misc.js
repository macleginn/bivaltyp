const version = '0.1-alpha',
    lastReleaseYear = 2020;

function byId(id) {
    return document.getElementById(id);
}

function toggle(id) {
    let el = byId(id);
    if (el.style.display === 'none' || el.style.display === '')
        el.style.display = 'block';
    else
        el.style.display = 'none';
}

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

document.addEventListener('DOMContentLoaded', () => {
    let d = new Date();
    try {
        byId('today')
            .innerText = d.getDate() + ' ' +
                         months[d.getMonth()] + ' ' +
                         d.getFullYear();
    }
    catch {}

    try {
        byId('last-release-year').innerText = String(lastReleaseYear);
    } catch {}

    try {
        byId('version').innerText = version;
    } catch {}
});
