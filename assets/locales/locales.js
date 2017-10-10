/* Data URI Encoder
 *
 * Copyright (C) 2015-2017 Eliastik (eliastiksofts.com)
 *
 * This file is part of Data URI Encoder.
 *
 * Data URI Encoder is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Data URI Encoder is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * You should have received a copy of the GNU General Public License
 * along with Data URI Encoder.  If not, see <http://www.gnu.org/licenses/>. */
i18next.use(window.i18nextBrowserLanguageDetector).init({
    resources: {
        en: {
            "translation": {
                "tabs": {
                    "selectDevice": "Image on the device",
                    "selectInternet": "Image on Internet or other (absolute path)",
                    "update": "Update",
                    "lang": "Lang",
                    "html": "HTML document"
                },
                "selectDevice": {
                    "notCompatible": "Your browser is incompatible with this method of image choose because the File API is not supported. Update it or use the second method.",
                    "choice": "Image choice:"
                },
                "selectPath": {
                    "choice": "Absolute path to the image:"
                },
                "html": {
                    "document": "HTML code of the document:"
                },
                "update": {
                    "descr": "Here, you can see what is the current version and search if an app update is available:",
                    "current": "Current version:",
                    "unknown": "Unknown",
                    "new": "New version:",
                    "changes": "Version changes:",
                    "links": "Download link(s):",
                    "source": "URL of the update infos source:",
                    "button": "Search an app update",
                    "newVersionAvailable": "A new version of the app is available!",
                    "noNewVersion": "No new version of the app is available. You have the latest version.",
                    "error": "An error when searching an update seems to have occurred. Check your internet connection and try again. If the problem persists, check also the availability of the update source.",
                    "searchDuration": "Duration of the update searching:",
                    "seconds": "second(s)"
                },
                "lang": {
                    "labelLanguage": "Select a language:",
                    "confirm": "Confirm",
                    "fr": "Français",
                    "en": "English",
                    "changed": "Language changed!"
                },
                "confirm": "Confirm",
                "original": "Original",
                "result": "Conversions results:",
                "clearList": "Clear conversions list",
                "seconds": "second(s)",
                "yes": "Yes",
                "no": "No",
                "ok": "OK",
                "closeWindow": "Close the window",
                "close": "Close",
                "magicTitle": "Pac-Man! (home)",
                "appNotCompatible": "Data URI Encoder is partially incompatible with your web browser because it doesn't support the Canvas API. Please update it, and then try again. You can however use the HTML documents encoder.",
                "descr1": "This program allow you to",
                "descr2": "to convert images and texts in the form of a base64-encoded URI",
                "descr3": ". This allows, for example, to embed an image directly into HTML without a separate file, or to convert an entire HTML document by making it accessible only by using an URI.",
                "descr4": "Choose an image on the device",
                "descr5": "OR",
                "descr6": "enter the absolute path to the image",
                "descr7": ". You can also",
                "descr8": "use an URL address to an image on a website",
                "descr9": ", but it's possible that the website forbid the access to the image. To fully convert a HTML document, enter its code in the tab « HTML document ».",
                "credits1": "Read the",
                "credits2": "README file",
                "credits3": "to get more informations about the compatibility and others things. Program created by Eliastik (see the file",
                "credits4": "LICENCE.txt",
                "credits5": "). Discover",
                "credits6": "Javascript HQX",
                "credits7": ", another of my programs allowing to upscale images with the help of the HQX algorithm (used mostly in video games consoles emulators) directly on your favorite web browser.",
                "debugModeEnabled": "Debug mode enabled.",
                "infos": "The conversions list is displayed in the bottom of this page. If you quit the app, these results will be definitely lost.",
                "easterEggFound": "Congratulations, you have found an easter egg!!",
                "processing": {
                    "processingTime": "Processing time:",
                    "emptyPath": "You haven't entered any image paths. Please try again.",
                    "emptyHTML": "You haven't entered anything. Please try again.",
                    "newTab": "Open the image in a new tab",
                    "noImgSelected": "You haven't selected any image. Please try again.",
                    "imgSelectedDevice": "Image selected on the device n°",
                    "htmlDoc": "HTML document n°",
                    "error": "It appears that an error occurred. Maybe your browser is not compatible or it has disabled image loading as a security measure. Please try again on another browser. It is also possible that the image cannot be found. In this case, make sure the path of the image is correct.",
                    "incorrectURL": "The URL seems to be incorrect…"
                },
                "confirmClear": {
                    "title": "Confirmation",
                    "descr": "Are you sure that you want to clear the conversions list?"
                },
                "debugMode": {
                    "infosTitle": "Debug informations about the Javascript error n°",
                    "errorCode": "Error code:",
                    "script": "Script:",
                    "line": "Line:",
                    "column": "Column:",
                    "stacktrace": "Stack trace:",
                    "title": "Javascript error detected (error number :",
                    "moreInfo": "For more informations about the error,",
                    "clickHere": "click here",
                    "console": "or take a look to the Javascript console",
                    "close": "Close",
                    "primaryTitle": "Javascript errors :"
                }
            }
        },
        fr: {
            "translation": {
                "tabs": {
                    "selectDevice": "Image sur l'appareil",
                    "selectInternet": "Image sur Internet ou autre (chemin absolu)",
                    "update": "Mise à jour",
                    "lang": "Langue",
                    "html": "Document HTML"
                },
                "selectDevice": {
                    "notCompatible": "Votre navigateur est incompatible avec cette méthode de choix de fichier car l'API File n'est pas supportée. Mettez-le à jour ou utilisez la seconde méthode.",
                    "choice": "Choix de l'image :"
                },
                "selectPath": {
                    "choice": "Chemin absolu de l'image :"
                },
                "html": {
                    "document": "Code HTML du document :"
                },
                "update": {
                    "descr": "Ici, vous pouvez voir quelle est la version actuelle et rechercher si une mise à jour de l'application est disponible :",
                    "current": "Version actuelle :",
                    "unknown": "Inconnue",
                    "new": "Nouvelle version :",
                    "changes": "Changements de cette version :",
                    "links": "Lien(s) de téléchargement :",
                    "source": "URL de la source de la mise à jour :",
                    "button": "Rechercher une mise à jour de l'application",
                    "newVersionAvailable": "Une nouvelle version de l\'application est disponible !",
                    "noNewVersion": "Aucune mise à jour disponible. Vous disposez de la dernière version en date.",
                    "error": "Une erreur lors de la recherche d'une mise à jour semble être survenue. Vérifiez votre connexion internet, puis réessayez. Si le problème persiste, vérifiez également la disponibilité de la source de la mise à jour.",
                    "searchDuration": "Durée de recherche de la mise à jour :",
                    "seconds": "seconde(s)"
                },
                "lang": {
                    "labelLanguage": "Sélectionnez une langue :",
                    "confirm": "Valider",
                    "fr": "Français",
                    "en": "English",
                    "changed": "Langue changée !"
                },
                "confirm": "Valider",
                "result": "Résultats des conversions :",
                "clearList": "Vider la liste des conversions",
                "seconds": "seconde(s)",
                "yes": "Oui",
                "no": "Non",
                "ok": "OK",
                "closeWindow": "Fermer la fenêtre",
                "close": "Fermer",
                "magicTitle": "Pac-Man ! (accueil)",
                "appNotCompatible": "Data URI Encoder est partiellement incompatible avec votre navigateur car celui-ci ne supporte pas l'API Canvas. Mettez-le à jour, puis réessayez. Vous pouvez cependant utiliser l'encodeur de documents HTML.",
                "descr1": "Ce programme vous permet de",
                "descr2": "convertir des images et des textes sous la forme d'une URI encodée en Base64",
                "descr3": ". Cela permet, par exemple, d'intégrer une image directement dans du code HTML sans fichier séparé, ou encore de convertir un document HTML entier en le rendant accessible seulement à l'aide d'une URI.",
                "descr4": "Choississez l'image sur l'appareil",
                "descr5": "OU",
                "descr6": "entrez le chemin absolu de l'image",
                "descr7": ". Vous pouvez aussi",
                "descr8": "utiliser une adresse URL vers une image sur un site web",
                "descr9": ", mais il se peut que le site en interdise l'accès aux scripts. Pour convertir un document HTML en entier, entrez son code dans l'onglet « Document HTML ».",
                "credits1": "Lisez le",
                "credits2": "fichier README",
                "credits3": "pour plus d'informations sur la compatibilité et autres. Programme créé par Eliastik (voir le fichier",
                "credits4": "LICENCE.txt",
                "credits5": "). Découvrez",
                "credits6": "Javascript HQX",
                "credits7": ", un autre de mes programmes permettant d'agrandir des images à l'aide de l'algorithme HQX (utilisé dans la plupart des émulateurs de consoles de jeux vidéo) directement sur votre navigateur web préféré.",
                "debugModeEnabled": "Mode de débogage activé.",
                "infos": "La liste des conversions est affichée en bas de cette page. Si vous quittez l'application, ces résultats seront définitivement perdus.",
                "easterEggFound": "Bravo, vous avez trouvé un easter egg !!",
                "processing": {
                    "processingTime": "Durée du traitement :",
                    "emptyPath": "Vous n'avez entré aucun chemin d'image. Veuillez réessayer.",
                    "emptyHTML": "Vous n'avez rien entré. Veuillez réessayer.",
                    "newTab": "Ouvrir l'image dans un nouvel onglet",
                    "unknownFormat": "Format de fichier incorrect. Les formats de fichiers supportés sont les suivants :",
                    "noImgSelected": "Vous n'avez sélectionné aucune image. Veuillez réessayer.",
                    "imgSelectedDevice": "Image selectionnée sur l'appareil n°",
                    "htmlDoc": "Document HTML n°",
                    "error": "Il semble qu'une erreur soit survenue. Peut-être que votre navigateur n'est pas compatible ou qu'il ait désactivé le chargement de l'image par mesure de sécurité. Veuillez réessayer sur un autre navigateur. Il est également possible que l'image soit introuvable. Dans ce cas, assurez-vous que le chemin de l'image soit correct.",
                    "incorrectURL": "L'URL semble incorrecte…"
                },
                "confirmClear": {
                    "title": "Confirmation",
                    "descr": "Êtes-vous sûr de vouloir vider la liste des conversions ?"
                },
                "debugMode": {
                    "infosTitle": "Informations de débogage sur l'erreur Javascript n°",
                    "errorCode": "Code de l'erreur :",
                    "script": "Script :",
                    "line": "Ligne :",
                    "column": "Colonne :",
                    "stacktrace": "Trace de la pile :",
                    "title": "Erreur Javascript détectée (n° de l'erreur :",
                    "moreInfo": "Pour plus d'informations sur l'erreur,",
                    "clickHere": "cliquez ici",
                    "console": "ou jetez un coup d'œil à la console Javascript.",
                    "close": "Fermer",
                    "primaryTitle": "Erreurs Javascript :"
                }
            }
        }
    },
    fallbackLng: ['en', 'fr'],
    load: 'languageOnly',
    detection: {
        order: ['localStorage', 'querystring', 'navigator', 'htmlTag'],
        lookupQuerystring: 'lng',
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage'],
    },
}, function(err, t) {
    $(document).ready(function(){
        translateContent();
    });
});

function listTranslations(languages) {
    $("#languageSelect").text("");
    $.each(languages, function(index, value) {
        $("#languageSelect").append('<option data-i18n="lang.'+ value +'" value="'+ value +'"></option>');
    });
    $("#languageSelect").val(i18next.language.substr(0, 2));
}

function translateContent() {
    jqueryI18next.init(i18next, $, {
        handleName: 'localize',
        selectorAttr: 'data-i18n'
    });
    listTranslations(i18next.languages);
    $("body").localize();
}

function changeLng(lng) {
    i18next.changeLanguage(lng);
    $("#languageChanged").html('<span class="icon icon-infos"></span> ' + i18next.t('lang.changed'));
}

i18next.on('languageChanged', function() {
    translateContent();
});
