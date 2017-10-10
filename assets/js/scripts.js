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
 * You should have received a copy of the GNU General Public License
 * along with Data URI Encoder.  If not, see <http://www.gnu.org/licenses/>. */
// Configuration de l'application :
var versionApplication = "1.1"; // Version de l'application
var debugMode = false; // Mettre à true pour activer le mode debug (affichage des erreurs), false pour le désactiver
var urlToUpdater = "http://www.eliastiksofts.com/data-uri-encoder/update.php?jsoncallback=?"; // URL vers le module permettant de vérifier les mises à jour de l'application
// Fin configuration de l'application
var nbErrorJavascript = 0; // Nb d'erreurs Javascript (ne pas changer cette valeur)
var numImageSelectionOrdi = 0; // Nb d'images encodées (ne pas changer cette valeur)
var numHTMLEncode = 0; // Nb de documents HTML encodés (ne pas changer cette valeur)
$("#noscript").hide();
$("#versionActuelle").text(versionApplication);
// émuler trim sur les anciens navigateurs
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
// permet aux anciens navigateurs de suporter la méthode "textContent"
if (Object.defineProperty &&
    Object.getOwnPropertyDescriptor &&
    Object.getOwnPropertyDescriptor(Element.prototype, "textContent") &&
    !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
    (function() {
        var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
        Object.defineProperty(Element.prototype, "textContent", {
            get: function() {
                return innerText.get.call(this);
            },
            set: function(s) {
                return innerText.set.call(this, s);
            }
        });
    })();
}
// function pour comparer deux chaînes de version - https://stackoverflow.com/questions/1179366/is-there-a-javascript-strcmp
String.prototype.strcmp = function(str) {
    return ( ( this == str ) ? 0 : ( ( this > str ) ? 1 : -1 ) );
};
// Affichage mode debug
if(debugMode == true) {
    $("#infosDebug").show();
}
function getDataUriImg(url, callback) {
    var extension = url.split('.').pop();
    var image = new Image();
    image.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        canvas.getContext('2d').drawImage(this, 0, 0);
        try {
            callback(canvas.toDataURL('image/' + extension));
        } catch (err) {
            callback(canvas.toDataURL('image/png'));
        }
    };
    image.src = url;
}

function getDataUriTextHTML(text) {
    return "data:text/html;charset=utf8," + text;
}

function validFirstForm() {
            startTime = new Date().getTime();
            elapsedTime = 0;
            $("#tmpTraitementOne").html("");
            var fileInput = document.querySelector('#cheminFile'); // on donne le champ du choix de fichier
            var reader = new FileReader(); // on crée un nouvel objet pour lire le fichier
            reader.addEventListener('load', function() { // une fois le fichier chargé
                $("#tmpTraitementOne").text(""); // on vide le temps de traitement
                var cheminImg2 = reader.result; // on lit le fichier
                if (cheminImg2.trim() == "") { // non utilisé
                    $("#erreurFormOne").show();
                    $("#erreurFormOne").html("<span class=\"icon icon-erreur\"></span> " + i18next.t("processing.emptyPath"));
                    return false;
                } else { // si tout va bien
                    $("#erreurFormOne").hide();
                    $("#erreurFormOne").html("");
                    numImageSelectionOrdi++;
                    var elAP = document.createElement("li");
                    elAP.innerHTML = '<label class="resultsLabel"><a href="#" onclick="linkToUrl(imageSelectOrdi' + numImageSelectionOrdi + '.value);" title="'+ i18next.t("processing.newTab") +'">'+ i18next.t("processing.imgSelectedDevice") + numImageSelectionOrdi + '</a></label><input type="text" class="inputResults" id="imageSelectOrdi' + numImageSelectionOrdi + '" value="' + cheminImg2 + '" onFocus="select();" readonly="readonly" /><div class="degrade-div"></div>';
                    var cheminImg2 = "";
                    document.getElementById("resultsList").appendChild(elAP);
                    elapsedTime = new Date().getTime() - startTime;
                    $("#tmpTraitementOne").html("<span class=\"icon icon-duree\"></span> " + i18next.t("processing.processingTime") + " " + elapsedTime / 1000 + " " + i18next.t("seconds"));
                    return true;
                }
            }, false);
            // on vérifie si un fichier a bien été choisi, et on le lit. Sinon, message d'erreur
            if (fileInput.files[0] != null) {
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                $("#erreurFormOne").show();
                $("#erreurFormOne").html("<span class=\"icon icon-erreur\"></span> " + i18next.t("processing.noImgSelected"));
                return false;
            }
}

function validSecondForm() {
    startTime = new Date().getTime();
        elapsedTime = 0;
        $("#erreurFormSecurite").hide();
        $("#erreurFormSecurite").html("");
        var cheminImg = $("#chemin").val(); // on récupère le chemin entré
        $("#tmpTraitement").text(""); // on vide le texte du temps de traitement
        if (cheminImg.trim() == "") { // si rien n'est entré
            $("#erreurForm").show();
            $("#erreurForm").html("<span class=\"icon icon-erreur\"></span> " + i18next.t("processing.emptyPath"));
            return false;
        } else { // si tout va bien
            $("#erreurForm").hide();
            $("#erreurForm").html("");
            $("#erreurFormSecurite").show();
            $("#erreurFormSecurite").html('<span class="icon icon-erreur"></span> ' + i18next.t("processing.error"));
            getDataUriImg(cheminImg, function(url) {
                if (url.trim() === '') {
                    $("#erreurFormSecurite").hide();
                    $("#erreurFormSecurite").html("");
                    $("#erreurForm").html("<span class=\"icon icon-erreur\"></span> " + i18next.t("processing.incorrectURL"));
                    return false;
                } else {
                    $("#erreurFormSecurite").hide();
                    $("#erreurFormSecurite").html("");
                    var elAP = document.createElement("li");
                    elAP.textContent = cheminImg;
                    var texteFormatted = elAP.textContent;
                    elAP.innerHTML = '<label class="resultsLabel"><a href="' + texteFormatted + '" target="_blank" title="'+ i18next.t("processing.newTab") +'">' + texteFormatted + '</a></label><input type="text" class="inputResults" value="' + url + '" onFocus="select();" readonly="readonly" /><div class="degrade-div"></div>';
                    document.getElementById("resultsList").appendChild(elAP);
                    elapsedTime = new Date().getTime() - startTime;
                    $("#tmpTraitement").html("<span class=\"icon icon-duree\"></span> " + i18next.t("processing.processingTime") + " " + elapsedTime / 1000 + " " + i18next.t("seconds"));
                    return true;
                }
            });
        }
        return false;
}

function validFormHTML() {
    startTime = new Date().getTime();
    elapsedTime = 0;
    var codeHTML = $("#codeHTML").val(); // on récupère le chemin entré
    $("#tmpTraitement2").text(""); // on vide le texte du temps de traitement
    if (codeHTML.trim() == "") { // si rien n'est entré
        $("#erreurForm2").show();
        $("#erreurForm2").html("<span class=\"icon icon-erreur\"></span> " + i18next.t("processing.emptyHTML"));
        return false;
    } else { // si tout va bien
        $("#erreurForm2").hide();
        $("#erreurForm2").html("");
        numHTMLEncode++;
        var htmlEncoded = getDataUriTextHTML(codeHTML);
        var elAP = document.createElement("li");
        elAP.innerHTML = '<label class="resultsLabel"><a href="#" onclick="linkToUrl(codeHTMLEncodeNum' + numHTMLEncode + '.value);" title="'+ i18next.t("processing.newTab") +'">' + i18next.t("processing.htmlDoc") + numHTMLEncode + '</a></label><input type="text" id="codeHTMLEncodeNum' + numHTMLEncode + '" class="inputResults" value="" onFocus="select();" readonly="readonly" /><div class="degrade-div"></div>';
        document.getElementById("resultsList").appendChild(elAP);
        $('#codeHTMLEncodeNum' + numHTMLEncode).val(htmlEncoded);
        var htmlEncoded = "";
        elapsedTime = new Date().getTime() - startTime;
        $("#tmpTraitement2").html("<span class=\"icon icon-duree\"></span> " + i18next.t("processing.processingTime") + " " + elapsedTime / 1000 + " " + i18next.t("seconds"));
        return true;
    }
    return false;
}

// appui bouton formulaire convertisseur html
$("#btnValider2").click(function() {
    $("#btnValider2").attr("disabled", "disabled");
    $("#overlayLoading").fadeToggle("linear", function() {
        validFormHTML();
        $("#overlayLoading").fadeToggle("linear");
    });
    $("#btnValider2").removeAttr("disabled");
});

// Si l'élement CANVAS est indisponible, on bloque tout, sauf l'onglet "Texte HTML"
if (window.HTMLCanvasElement == null) {
    // on affiche un message d'erreur et on désactive les formulaires
    $("#canvasError").show();
    $("#cheminFile").attr("disabled", "disabled");
    $("#algorithme1").attr("disabled", "disabled");
    $("#btnValider1").attr("disabled", "disabled");
    $("#chemin").attr("disabled", "disabled");
    $("#algorithme").attr("disabled", "disabled");
    $("#btnValider").attr("disabled", "disabled");
    $("#contenu_onglet_dialogForm").css("color", "grey");
    $("#contenu_onglet_form").css("color", "grey");
} else {
    // si l'API file n'est pas compatible
    if (typeof window.FileReader === 'undefined') {
        // on affiche un message d'erreur et on désactive le formulaire
        $("#erreurFileApi").show();
        $("#cheminFile").attr("disabled", "disabled");
        $("#algorithme1").attr("disabled", "disabled");
        $("#btnValider1").attr("disabled", "disabled");
        $("#contenu_onglet_dialogForm").css("color", "grey");
    } else {
        // si on clique sur le bouton du premier formulaire
        $("#btnValider1").click(function() {
            $("#btnValider1").attr("disabled", "disabled");
            $("#overlayLoading").fadeToggle("linear", function() {
                validFirstForm();
                $("#overlayLoading").fadeToggle("linear");
            });
            $("#btnValider1").removeAttr("disabled");
        });
    }

    // appui bouton second formulaire
    $("#btnValider").click(function() {
        $("#btnValider").attr("disabled", "disabled");
        $("#overlayLoading").fadeToggle("linear", function() {
            validSecondForm();
            $("#overlayLoading").fadeToggle("linear");
        });
        $("#btnValider").removeAttr("disabled");
    });

    // appui bouton entrer second formulaire
    $('#chemin').keypress(function(e){
        if( e.which == 13 ){
            $("#chemin").blur();
            $("#btnValider").attr("disabled", "disabled");
            $("#overlayLoading").fadeToggle("linear", function() {
                validSecondForm();
                $("#overlayLoading").fadeToggle("linear");
            });
            $("#btnValider").removeAttr("disabled");
        }
    });
}
/* autre */
// fermeture de l'information sur les fichiers PNG
$("#close").click(function() {
    $("#infosPng").fadeOut(250);
});
$("#closeMagic").click(function() {
    $("#infosMagic").fadeOut(250);
});
// lors du scroll, l'header devient transparent
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('#header').addClass("headerTransparent");
    } else {
        $('#header').removeClass("headerTransparent");
    }
});
// ...
var kona = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    nbk = 0;
$(document).keydown(function(e) {
    if (e.keyCode === kona[nbk++]) {
        if (nbk === kona.length) {
            $("#iconeApp").css("background-image", "url(assets/img/pacman.gif)");
            $("#iconeApp").attr("title", i18next.t("magicTitle"));
            $("#infosMagic").show();
            nbk = 0;
            return true;
        }
    } else {
        nbk = 0;
    }
});
// les onglets et la fonction
function change_onglet(name) {
    document.getElementById('onglet_' + anc_onglet).className = 'onglet_0 onglet';
    document.getElementById('onglet_' + name).className = 'onglet_1 onglet';
    document.getElementById('contenu_onglet_' + anc_onglet).style.display = 'none';
    document.getElementById('contenu_onglet_' + name).style.display = 'block';
    anc_onglet = name;
}
var anc_onglet = 'dialogForm';
change_onglet(anc_onglet);

function fermerJsError() {
    $("#javascriptErrors").fadeOut(250, function() {
        $("#javascriptErrorsList").html("");
    });
}

function openPopup(texte) {
    $.magnificPopup.open({
        items: {
            src: '<div class="white-popup">' + texte + '</div>',
            type: 'inline'
        }
    });
}

function linkToUrl(url) {
    window.open(url);
    return true;
}

function viderListeConversions() {
    openPopup("<h2>" + i18next.t("confirmClear.title") + "</h2><span class=\"icon icon-question\"></span> " + i18next.t("confirmClear.descr") + "<div style=\"margin-top: 15px;\"><button id=\"viderListeConversionOK\" onclick=\"viderListeConversionsOK();\"><span class=\"icon icon-valider\"></span> " + i18next.t("yes") + "</button> <button class=\"closeMagnificPopup\"><span class=\"icon icon-close\"></span> " + i18next.t("no") + "</button></div>");
}

function viderListeConversionsOK() {
    $("#resultsList").text("");
    $.magnificPopup.close();
}
$(document).on('click', '.closeMagnificPopup', function(e) {
    $.magnificPopup.close();
});

function addslashes(string) {
    return string.replace(/\\/g, '\\\\').
    replace(/\u0008/g, '\\b').
    replace(/\t/g, '\\t').
    replace(/\n/g, '\\n').
    replace(/\f/g, '\\f').
    replace(/\r/g, '\\r').
    replace(/'/g, '\\\'').
    replace(/"/g, '\\"');
}
function jsoncallbackUpdate(data) {
    $("#erreurUpdate").html("");
    $("#erreurUpdate").hide();
    $("#infoUpdateSuccess").hide();
    $("#infoUpdateDispo").hide();
    var newVersionTest = versionApplication.strcmp(data.version);
    if(newVersionTest < 0) {
        $("#infoUpdateDispo").html('<span class="icon icon-infos"></span> ' + i18next.t("update.newVersionAvailable"));
        $("#infoUpdateDispo").show();
    } else {
        $("#infoUpdateSuccess").html('<span class="icon icon-valider"></span> ' + i18next.t("update.noNewVersion"));
        $("#infoUpdateSuccess").show();
    }
    $("#nouvelleVerison").text(data.version);
    $("#changementsVersion").text(data.changements);
    var linksList = "";
    $.each(data.liensTelechargementNew, function(index, value) {
        var valueFormatted = '<a href="' + addslashes(value) + '" target="_blank">' + addslashes(value) + '</a>';
        if(linksList == "") {
            linksList = valueFormatted + ", ";
        } else if(typeof(data.liensTelechargementNew[index + 1]) !== "undefined") {
            linksList = linksList + valueFormatted + ", ";
        } else {
            linksList = linksList + valueFormatted;
        }
    });
    $("#lienNouvelleVersion").html(linksList);
    elapsedTimeSearchUpdate = new Date().getTime() - startTimeSearchUpdate;
    $("#tmpTraitementUpdate").html("<span class=\"icon icon-duree\"></span>  " + i18next.t("update.searchDuration") + " " + elapsedTimeSearchUpdate / 1000 + " " + i18next.t("update.seconds") + ".");
    clearTimeout(timeOutErrorUpdate);
    $("#btnUpdate").removeAttr("disabled");
}
function checkUpdate() {
    startTimeSearchUpdate = new Date().getTime();
    $("#tmpTraitementUpdate").html("");
    elapsedTimeSearchUpdate = 0;
    $("#btnUpdate").attr("disabled", "disabled");
    $("#sourceMiseAJour").html('<a href="'+ urlToUpdater +'" target="_blank">'+ urlToUpdater +'</a>');
    $("#erreurUpdate").hide();
    timeOutErrorUpdate = setTimeout(function(){ errorUpdate(); }, 3000);
    $.getJSON(urlToUpdater);
}
function errorUpdate() {
    $("#erreurUpdate").html("<span class=\"icon icon-erreur\"></span> " + i18next.t("update.error"));
    $("#erreurUpdate").show();
    $("#btnUpdate").removeAttr("disabled");
    clearTimeout(timeOutErrorUpdate);
}
$("#btnUpdate").click(function() {
    checkUpdate();
});
$("#btnValiderLang").click(function() {
    changeLng($("#languageSelect").val());
});
window.onerror = function(errorMsg, url, lineNumber, column, errorObj) {
    if(debugMode) {
        $("#infosDebug").show();
        nbErrorJavascript++;
        var errorAlertText = '<h2>' + i18next.t("debugMode.infosTitle") + nbErrorJavascript + '</h2><ul><li><strong>' + i18next.t("debugMode.errorCode") + '</strong> ' + errorMsg + '</li><li><strong>' + i18next.t("debugMode.script") + '</strong> ' + url + '</li><li><strong>' + i18next.t("debugMode.line") + '</strong> ' + lineNumber + '</li><li><strong>' + i18next.t("debugMode.column") + '</strong> ' + column + '</li><li><strong>' + i18next.t("debugMode.stacktrace") + '</strong> ' + errorObj + '</li></ul><button class=\'closeMagnificPopup\'><span class=\'icon icon-close\'></span> ' + i18next.t("closeWindow") + '</button>';
        var elError = document.createElement("li");
        var texteFormatted = addslashes(errorAlertText);
        elError.id = 'errorJavascriptNum' + nbErrorJavascript;
        elError.innerHTML = '<span class="icon icon-erreur"></span> ' + i18next.t("debugMode.title") + ' ' + nbErrorJavascript + '). ' + i18next.t("debugMode.moreInfo") + ' <a href="#" onclick="openPopup(\'' + texteFormatted + '\');">' + i18next.t("debugMode.clickHere") + '</a> ' + i18next.t("debugMode.console") + ' &nbsp;&nbsp;<span class="icon icon-close" style="color: black; cursor: pointer; font-size: 10pt;" title="' + i18next.t("debugMode.close") + '" onclick="$(\'#errorJavascriptNum' + nbErrorJavascript + '\').fadeOut(250,function(){$(\'#errorJavascriptNum' + nbErrorJavascript + '\').html(\'\')});"></span>';
        document.getElementById("javascriptErrorsList").appendChild(elError);
        $("#javascriptErrors").fadeIn(250);
    }
}
window.onbeforeunload = function() {
    return "Si vous fermez cette page, vous perdrez définitivement les conversions effectuées. Êtes-vous sûr de vouloir quitter cette page ?";
};
