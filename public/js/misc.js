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
    document
        .getElementById('today')
        .innerText = d.getDate() + ' ' +
                     months[d.getMonth()] + ' ' +
                     d.getFullYear();
})
