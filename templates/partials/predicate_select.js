function hide(element) {
    element.style.display = 'none';
}

function show(element) {
    element.style.display = 'block';
}

function filterExamples() {
    const valpalFilter = document.getElementById('valpal-select').value,
        locusFilter = document.getElementById('locus-select').value;

    let examples = document.querySelectorAll('div[data-valpal]'),
        count = 0;
    for (const ex of examples) {
        if (valpalFilter !== 'any' && ex.dataset.valpal !== valpalFilter) {
            hide(ex)
            continue;
        }
        if (locusFilter !== 'any' && ex.dataset.locus !== locusFilter) {
            hide(ex);
            continue;
        }
        count++;
        show(ex);
    }
    if (count === 1)
        document.getElementById('stats').innerText = `${count} predicate selected.`;
    else
        document.getElementById('stats').innerText = `${count} predicates selected.`;
}

function filterExamplesByLocus(locus) {
    let examples;
    if (locus === 'any') {
        examples = document.querySelectorAll('div[data-locus]');
        for (const ex of examples)
            ex.style.display = 'block';
    }
    else {
        examples = document.querySelectorAll(
            `[data-locus="${locus}"]`
        );
        for (const ex of examples)
            ex.style.display = 'block';
        examples = document.querySelectorAll(
            `[data-locus]:not([data-locus="${locus}"])`
        );
        for (const ex of examples)
            ex.style.display = 'none';
    }
}

document
    .getElementById('valpal-select')
    .addEventListener('change', e => {
        filterExamples();
});

document
    .getElementById('locus-select')
    .addEventListener('change', e => {
        filterExamples();
});