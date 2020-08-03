function filterExamples(valencyPattern) {
    let examples;
    if (valencyPattern === 'any') {
        examples = document.querySelectorAll('div[data-valpal]');
        for (const ex of examples)
            ex.style.display = 'block';
    }
    else {
        examples = document.querySelectorAll(
            `[data-valpal="${valencyPattern}"]`
        );
        for (const ex of examples)
            ex.style.display = 'block';
        examples = document.querySelectorAll(
            `[data-valpal]:not([data-valpal="${valencyPattern}"])`
        );
        for (const ex of examples)
            ex.style.display = 'none';
    }
}

document
    .getElementById('valpal-select')
    .addEventListener('change', e => {
        filterExamples(e.target.value);
});