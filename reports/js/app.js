
// const translations = {

//     // English (United States)

//     en_US: {

//         language: "🇺🇸 English (United States)",
//         htmlLang: "en-US",

//         title: "Employee API Test Report",
//         total: "Total Tests",
//         passed: "Passed",
//         failed: "Failed",

//         generatedOn: "Generated On",
//         darkMode: "Dark Mode",
//         lightMode: "Light Mode",

//         search: "Search",
//         test: "Test",
//         status: "Status"

//     },


//     // English (United Kingdom)

//     en_GB: {

//         language: "🇬🇧 English (United Kingdom)",
//         htmlLang: "en-GB",

//         title: "Employee API Test Report",
//         total: "Total Tests",
//         passed: "Passed",
//         failed: "Failed",

//         generatedOn: "Generated On",
//         darkMode: "Dark Mode",
//         lightMode: "Light Mode",

//         search: "Search",
//         test: "Test",
//         status: "Status"

//     },


//     // Italian (Italy)

//     it_IT: {

//         language: "🇮🇹 Italiano (Italia)",
//         htmlLang: "it",

//         title: "Rapporto Test API Dipendenti",
//         total: "Test Totali",
//         passed: "Superati",
//         failed: "Falliti",

//         generatedOn: "Generato Il",
//         darkMode: "Modalità Scura",
//         lightMode: "Modalità Chiara",

//         search: "Cerca",
//         test: "Test",
//         status: "Stato"

//     }

// };


// // Build language dropdown

// function buildLanguageOptions() {

//     const select =
//         document.getElementById("languageSelect");

//     select.innerHTML = "";

//     Object.keys(translations).forEach(key => {

//         const option =
//             document.createElement("option");

//         option.value = key;

//         option.textContent =
//             translations[key].language;

//         select.appendChild(option);

//     });

// }


// // Apply selected language

// function loadLanguage(language) {

//     const t = translations[language];

//     if (!t) return;


//     // Update browser language

//     document.documentElement.lang = t.htmlLang;


//     // Update page title

//     document.title = t.title;

//     document.getElementById("title").textContent =
//         t.title;


//     // Update dashboard labels

//     document.getElementById("totalLabel").textContent =
//         t.total;

//     document.getElementById("passedLabel").textContent =
//         t.passed;

//     document.getElementById("failedLabel").textContent =
//         t.failed;


//     // Update table headings

//     document.getElementById("testHeader").textContent =
//         t.test;

//     document.getElementById("statusHeader").textContent =
//         t.status;


//     // Update generated date label

//     document.getElementById("generatedOnLabel").textContent =
//         t.generatedOn;


//     // Update search placeholder

//     document.getElementById("searchInput").placeholder =
//         t.search;


//     // Update dark mode button

//     updateThemeButton(t);

// }


// // Update dark mode button text

// function updateThemeButton(t) {

//     const button =
//         document.getElementById("darkModeBtn");

//     button.textContent =
//         document.body.classList.contains("dark")
//             ? t.lightMode
//             : t.darkMode;

// }


// // Toggle dark and light themes

// function toggleTheme() {

//     document.body.classList.toggle("dark");

//     const selectedLanguage =
//         document.getElementById("languageSelect").value;

//     updateThemeButton(
//         translations[selectedLanguage]
//     );

// }


// // Search test results

// function searchTests() {

//     const searchValue =
//         document.getElementById("searchInput")
//             .value.toLowerCase();

//     document
//         .querySelectorAll("#resultsTable tbody tr")
//         .forEach(row => {

//             const rowText =
//                 row.textContent.toLowerCase();

//             row.style.display =
//                 rowText.includes(searchValue)
//                     ? ""
//                     : "none";

//         });

// }


// // Initialize application

// document.addEventListener("DOMContentLoaded", () => {

//     // Build language dropdown

//     buildLanguageOptions();

//     const languageSelect =
//         document.getElementById("languageSelect");


//     // Set default language

//     languageSelect.value = "en_US";

//     loadLanguage("en_US");


//     // Language change event

//     languageSelect.addEventListener("change", event => {

//         loadLanguage(event.target.value);

//         searchTests();

//     });


//     // Search event

//     document
//         .getElementById("searchInput")
//         .addEventListener("input", searchTests);

// });



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

        test: "Test",

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