function linkedTab() {
    window.open(
        "https://www.linkedin.com/in/gonzalo-olivera-124b091b4",
        "_blank"
    )
}

function githubTab() {
    window.open(
        "https://github.com/gon2410",
        "_blank"
    )
}

function editorialmi9() {
  window.open(
    "https://editorialmi9.github.io",
    "_blank"
  )
}

function todo_source(){
  window.open(
    "https://github.com/gon2410/todo_gui",
    "_blank"
  )
}

$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      }
    });
  });
