const translations = {

    en_US: {

        language: "English (United States)",

        flagImage: "../images/us.webp",

        htmlLang: "en-US",

        title: "Employee API Test Report",

        total: "Total Tests",

        passed: "Passed",

        failed: "Failed",

        generatedOn: "Generated On",

        darkMode: "Dark Mode",

        lightMode: "Light Mode",

        search: "Search",

        test: "Test",

        status: "Status"

    },

    en_GB: {

        language: "English (United Kingdom)",

        flagImage: "../images/uk.webp",

        htmlLang: "en-GB",

        title: "Employee API Test Report",

        total: "Total Tests",

        passed: "Passed",

        failed: "Failed",

        generatedOn: "Generated On",

        darkMode: "Dark Mode",

        lightMode: "Light Mode",

        search: "Search",

        test: "Test",

        status: "Status"

    },

    it_IT: {

        language: "Italiano (Italia)",

        flagImage: "../images/italy.webp",

        htmlLang: "it",

        title: "Rapporto Test API Dipendenti",

        total: "Test Totali",

        passed: "Superati",

        failed: "Falliti",

        generatedOn: "Generato Il",

        darkMode: "Modalità Scura",

        lightMode: "Modalità Chiara",

        search: "Cerca",

        test: "Prova",

        status: "Stato"

    }

};

function buildLanguageOptions() {

    const select =
        document.getElementById(
            "languageSelect"
        );

    select.innerHTML = "";

    Object.keys(translations)
        .forEach(key => {

            const option =
                document.createElement(
                    "option"
                );

            option.value = key;

            option.textContent =
                translations[key].language;

            select.appendChild(option);

        });

}

function loadLanguage(language) {

    const t =
        translations[language];

    if (!t) return;

    document
        .documentElement
        .lang = t.htmlLang;

    document
        .getElementById(
            "flagIcon"
        )
        .src = t.flagImage;

    document.title =
        t.title;

    document
        .getElementById("title")
        .textContent =
        t.title;

    document
        .getElementById("totalLabel")
        .textContent =
        t.total;

    document
        .getElementById("passedLabel")
        .textContent =
        t.passed;

    document
        .getElementById("failedLabel")
        .textContent =
        t.failed;

    document
        .getElementById("generatedOnLabel")
        .textContent =
        t.generatedOn;

    document
        .getElementById("testHeader")
        .textContent =
        t.test;

    document
        .getElementById("statusHeader")
        .textContent =
        t.status;

    document
        .getElementById("searchInput")
        .placeholder =
        t.search;

    updateThemeButton(t);

}

function updateThemeButton(t) {

    const button =
        document.getElementById(
            "darkModeBtn"
        );

    button.textContent =
        document.body.classList
            .contains("dark")
            ? t.lightMode
            : t.darkMode;

}

function toggleTheme() {

    document.body.classList
        .toggle("dark");

    const selectedLanguage =
        document
            .getElementById(
                "languageSelect"
            )
            .value;

    updateThemeButton(
        translations[
        selectedLanguage
        ]
    );

}

function searchTests() {

    const searchValue =

        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();

    document
        .querySelectorAll(
            "#resultsTable tbody tr"
        )
        .forEach(row => {

            const rowText =
                row.textContent
                    .toLowerCase();

            row.style.display =

                rowText.includes(
                    searchValue
                )

                    ? ""

                    : "none";

        });

}

document.addEventListener(

    "DOMContentLoaded",

    () => {

        buildLanguageOptions();

        const languageSelect =
            document.getElementById(
                "languageSelect"
            );

        languageSelect.value =
            "en_US";

        loadLanguage(
            "en_US"
        );

        languageSelect
            .addEventListener(

                "change",

                event => {

                    loadLanguage(
                        event.target.value
                    );

                    searchTests();

                }

            );

        document
            .getElementById(
                "searchInput"
            )
            .addEventListener(
                "input",
                searchTests
            );

    }

);
