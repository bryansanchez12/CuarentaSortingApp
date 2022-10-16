
function changeState(text){
    if (text === 'Sorteo'){
        document.getElementById("cardBody").innerHTML = sorteo;
    } else if (text === 'Cuadro'){
        document.getElementById("cardBody").innerHTML = cuadro;
    } else if (text === 'Posiciones'){
        document.getElementById("cardBody").innerHTML = posiciones;
    } else {
        document.getElementById("cardBody").innerHTML = welcome;
    }
}

function addRow1(var1, class1, number, equipo, name1, name2, wins, loses){
    var1 = " <tr class=\"" + class1 + "\">\n" +
        "        <th>" + number +"</th>\n" +
        "        <th>" + equipo +"</th>\n" +
        "        <th>" + name1 +"</th>\n" +
        "        <th>" + name2 +"</th>\n" +
        "        <th>" + wins +"</th>\n" +
        "        <th>" + loses +"</th>\n" +
        "    </tr>\n";
}

function addRow2(var2, number, equipo1, equipo2){
    var2 = " <tr class=\"col\">\n" +
        "        <th>" + number +"</th>\n" +
        "        <th>vs</th>\n" +
        "        <th>" + equipo1 +"</th>\n" +
        "        <th>" + equipo2 +"</th>\n" +
        "    </tr>\n";
}

function sortear() {
    document.getElementById("sorteoResult").innerHTML = "Estas son las parejas"
}

var welcome = "";

var sorteo = "<div id=\"sorteoTitle\">\n" +
    "              <p class=\"sorteoTitle\">Hay 15 parejas</p>\n" +
    "         </div>\n" +
    "         <div class=\"sorteoButton\">\n" +
    "              <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                      onclick=\"sortear()\" id=\"sorteo\">Iniciar Sorteo</button>\n" +
    "         </div>\n" +
    "\n" +
    "         <div id=\"sorteoResult\" class=\"tablesorteo\">\n" +
    "               <table class=\"table table-striped table-dark\" id=\"sorteoTable\">\n" +
    "                     <thead>\n" +
    "                            <tr class=\"col\">\n" +
    "                                 <th>#</th>\n" +
    "                                 <th>Equipo 1</th>\n" +
    "                                 <th>*</th>\n" +
    "                                 <th>Equipo 2</th>\n" +
    "                             </tr>\n" +
    "                     </thead>\n" +
    "                     <tbody id=\"sorteoTableBody\"></tbody>\n" +
    "                </table>\n" +
    "          </div>";

var cuadro =
    "<div class=\"wrapper row\">\n" +
    "\n" +
    "                                <div class=\"col-3\">\n" +
    "                                    <div class=\"card  card1C col-8\" id=\"card1C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq1\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq2\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card cardM card1C col-8\" id=\"card2C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq3\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq4\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  card1C col-8\" id=\"card3C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq5\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq6\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  cardM card1C col-8\" id=\"card4C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq7\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq8\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  card1C col-8\" id=\"card5C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq9\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq10\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  cardM card1C col-8\" id=\"card6C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq11\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq12\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  card1C col-8\" id=\"card7C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq13\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq14\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  cardM card1C col-8\" id=\"card8C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eq15\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eq16\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-3\">\n" +
    "                                    <div class=\"card  card2C col-8\" id=\"card9C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqB1\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqB2\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  cardM card2C col-8\" id=\"card10C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqB3\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqB4\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  card2C col-8\" id=\"card11C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqB5\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqB6\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  cardM card1C col-8\" id=\"card12C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqB7\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqB8\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-3\">\n" +
    "                                    <div class=\"card  card3C col-8\" id=\"card13C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqC1\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqC2\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"card  card1C col-8\" id=\"card14C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqC3\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqBC\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-3\">\n" +
    "                                    <div class=\"card  card4C col-8\" id=\"card15C\">\n" +
    "                                        <table class=\"table\">\n" +
    "                                            <tbody>\n" +
    "                                            <tr id=\"eqD1\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            <tr id=\"eqD2\">\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                                <td class=\"cuadroP\">-</td>\n" +
    "                                            </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                \n" +
    "                            </div>";

var posiciones = 
"<div class=\"ptable\">" +
"<h1 class=\"headin\">Posiciones</h1>"+
"<table class=\"table\" id=\"posiciones\">\n" +
"       <thead>\n" +
"            <tr class=\"col\">\n" +
"               <th>#</th>\n" +
"               <th>Equipo</th>\n" +
"               <th>Integrante 1</th>\n" +
"               <th>Integrante 2</th>\n" +
"               <th>Wins</th>\n" +
"               <th>Loses</th>\n" +
"            </tr>\n" +
"       </thead>\n"+
"       <tbody id=\"posicionesTable\">"+
"       </tbody>"+
"</table>"+
"</div>" ;
       

/* wpos is the class of winners */