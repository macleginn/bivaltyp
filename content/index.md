## Welcome to BivalTyp

BivalTyp is a typological database of bivalent verbs and their encoding frames. As of <span id='current-year'>2020</span>, the database presents data for <span id='number-of-languages'>86</span> {{ languages }}, mainly spoken in Northern Eurasia. The database is based on a {{ questionnaire }} containing 130 {{ predicates }} given in context. Language-particular encoding frames are identified based on the devices (such as cases, adpositions, and verbal indices) involved in encoding two predefined arguments of each predicate (e.g. ‘Peter’ and ‘the dog’ in ‘Peter is afraid of the dog’). In each language, one class of verbs is identified as transitive. The goal of the project is to explore the ways in which bivalent verbs can be split between the transitive and different intransitive valency classes.

## How to use BivalTyp

You can browse BivalTyp by [predicate]{{ predicates }} (e.g., in case you are interested in how the arguments of the verb ‘to fear’ are encoded in different languages) or by [language]{{ languages }} (e.g., in case you want to explore the behaviour of 130 predicates in a specific language). Besides, you can [take an overview]{{ patterns }} of the data in your browser, build customizable {{ maps }}, or search the database as an extended [spreadsheet]{{ all_data }} form. Finally, you can {{ download }} the spreadsheet with data for further use offline.

In order to properly interpret the tags used in the database, go to {{ how to read the data }}.

## How to cite BivalTyp
To cite BivalTyp as a whole

> Say, Sergey (ed.). 2020–. BivalTyp: Typological database of bivalent verbs and their encoding frames. St.&nbsp;Petersburg: Institute for Linguistic Studies, RAS. (Available online at {{ site_url }}, Accessed on {{ today }}.)

To cite the data from an individual language take the citation form from the specific [language]{{ languages }} page.

## Contact details

Please address inquiries about the data or the project at large to Sergey Say (<span style="font-family: monospace;">serjozhka /at/ yahoo /dot/ com</span>). If there is a technical issue on the website, please report it [here](https://github.com/macleginn/bivaltyp/issues).

## Compatibility

Some sections of the web-site rely on modern JavaScript capabilities and will not work correctly in older browsers.

<div id="landing-footer" style="position: fixed; right: 0; bottom: 0; padding-left: 25px; padding-right: 25px; background-color: cornsilk; opacity: 70%; border-radius: 1px;"><pre>The web-site built by <a href="https://dnikolaev.com">Dmitry Nikolaev</a>.</pre></div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        let d = new Date();
        document.getElementById('current-year').innerText = d.getFullYear();
        document.getElementById('number-of-languages').innerText = languageData.length-1;
    });
</script>
