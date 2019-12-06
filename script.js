function liMaker(obj) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let ul = document.getElementById("list");
    let children = ul.children.length + 1

    li.appendChild(a);
    a.textContent = " " + obj.li;

    document.getElementById("list").append(li);
    li.setAttribute("class", "nav-item");
    a.setAttribute("class", "nav-link");
    a.setAttribute("tabindex", "-1");
    a.setAttribute("href", "#");
    a.setAttribute("aria-disabled", "true");
    a.setAttribute("onclick", "myFunction" + children + '()')
    ul.appendChild(li)
}

//function formMaker(obj) {
//    let button = document.createElement("button");
//    let form = document.getElementById("form");
//    button.textContent = " " + obj.button;
//    document.getElementById("form").append(button);
//    button.setAttribute("class", "btn btn1 my-2 my-sm-0");
//    button.setAttribute("type", "submit");
//}


//JQuery
$.getJSON("header.json", function (data) {
    for (let i = 0; i < data.nav.length; i++) {
        liMaker(data.nav[i]);
    }
});

//$.getJSON("header.json", function (data) {
//    for (let i = 0; i < data.form.length; i++) {
//        formMaker(data.form[i]);
//    }
//});


function myFunction1() {
    var find = document.getElementById("mainFindPomach");
    var community = document.getElementById("mainCommunity");
    var blog = document.getElementById("mainBlog");
    var about = document.getElementById("mainAbout");

    find.style.display = "block";
    community.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";

    window.history.pushState("http://127.0.0.1:60244", "Sample Title", "/index.html");
}

function myFunction2() {
    var find = document.getElementById("mainFindPomach");
    var community = document.getElementById("mainCommunity");
    var blog = document.getElementById("mainBlog");
    var about = document.getElementById("mainAbout");

    blog.style.display = "none";
    find.style.display = "none";
    community.style.display = "block";
    about.style.display = "none";

    window.history.pushState("http://127.0.0.1:60244", "Sample Title", "/index.html/community");
}


function myFunction3() {
    var find = document.getElementById("mainFindPomach");
    var community = document.getElementById("mainCommunity");
    var blog = document.getElementById("mainBlog");
    var about = document.getElementById("mainAbout");

    blog.style.display = "block";
    find.style.display = "none";
    community.style.display = "none";
    about.style.display = "none";

    window.history.pushState("http://127.0.0.1:60244", "Sample Title", "/index.html/blog");

}

function myFunction4() {
    var find = document.getElementById("mainFindPomach");
    var community = document.getElementById("mainCommunity");
    var blog = document.getElementById("mainBlog");
    var about = document.getElementById("mainAbout");

    blog.style.display = "none";
    find.style.display = "none";
    community.style.display = "none";
    about.style.display = "block";

    window.history.pushState("http://127.0.0.1:60244", "Sample Title", "/index.html/about");

}
