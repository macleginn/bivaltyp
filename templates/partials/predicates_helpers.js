function redraw() {
    const showRussianMeta = document.getElementById('russian_meta').checked;
    for (const el of document.querySelectorAll('.ru'))
        el.style.display = showRussianMeta ? 'block' : 'none';
}