sidebar = "<div class=\"d-flex flex-column flex-shrink-0 p-3 text-bg-dark\" style=\"width: 280px; height: 100vh;\">\n" +
    "        <a href=\"/\" class=\"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none\">\n" +
    "            <svg class=\"bi pe-none me-2\" width=\"40\" height=\"32\">\n" +
    "                <use xlink:href=\"#shop\"/>\n" +
    "            </svg>\n" +
    "            <span class=\"fs-4\">CoolCommerce</span>\n" +
    "        </a>\n" +
    "        <hr>\n" +
    "        <ul class=\"nav nav-pills flex-column mb-auto\">\n" +
    "            <li id='Home'>\n" +
    "                <a href=\"tutorial.html\" class=\"nav-link text-white\" aria-current=\"page\">\n" +
    "                    <svg class=\"bi pe-none me-2\" width=\"16\" height=\"16\">\n" +
    "                        <use xlink:href=\"#home\"/>\n" +
    "                    </svg>\n" +
    "                    Home\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li id='Dashboard'>\n" +
    "                <a href=\"dashboard.html\" class=\"nav-link text-white\">\n" +
    "                    <svg class=\"bi pe-none me-2\" width=\"16\" height=\"16\">\n" +
    "                        <use xlink:href=\"#speedometer2\"/>\n" +
    "                    </svg>\n" +
    "                    Dashboard\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li id='Products'>\n" +
    "                <a href=\"products.html\" class=\"nav-link text-white\">\n" +
    "                    <svg class=\"bi pe-none me-2\" width=\"16\" height=\"16\">\n" +
    "                        <use xlink:href=\"#grid\"/>\n" +
    "                    </svg>\n" +
    "                    Products\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li id='Customers'>\n" +
    "                <a href=\"customers.html\" class=\"nav-link text-white\">\n" +
    "                    <svg class=\"bi pe-none me-2\" width=\"16\" height=\"16\">\n" +
    "                        <use xlink:href=\"#people-circle\"/>\n" +
    "                    </svg>\n" +
    "                    Customers\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>"

document.getElementById("sidebar").innerHTML = sidebar + document.getElementById("main").innerHTML;
const title = document.getElementsByTagName("title")[0].innerHTML;
console.log(title)
document.getElementById(title).innerHTML = document.getElementById(title).innerHTML.replace("text-white", "active");