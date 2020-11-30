const version = '0.1-alpha',
    lastReleaseYear = 2020;

function byId(id) {
    return document.getElementById(id);
}

function hide(id) {
    let el = byId(id);
    el.style.display = 'none';
}

function toggle(id) {
    let el = byId(id);
    if (el.style.display === 'none' || el.style.display === '') {
        el.style.display = 'block';
    } else
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

    byId('project-submenu-button').addEventListener('click', event => { 
        flipMenus(event, 'project-submenu'); 
    });
    byId('languages-submenu-button').addEventListener('click', event => { 
        flipMenus(event, 'languages-submenu'); 
    });
    byId('data-submenu-button').addEventListener('click', event => { 
        flipMenus(event, 'data-submenu'); 
    });
});

function flipMenus(event, id) {
    // Toggle the target menu; close all other menus.
    for (const menuId of [
        'project-submenu',
        'languages-submenu',
        'data-submenu'
    ]) {
        if (menuId !== id) {
            hide(menuId);
        }
    }
    toggle(id);
    event.stopPropagation();
}