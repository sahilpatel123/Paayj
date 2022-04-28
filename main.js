/*function checkboxtoSquare() {
    // If card checkbox is ever clicked
    $(".card").on('click', '.checkbox', function () {
        let cardname = $(this).attr('id');
        if ($(this).is(':checked')) {
            renderCard(cardname);
          }
        else {
            document.getElementById(cardname).remove();
        }
    });
}

function renderCard(cardname) {
    $(".selectedcard").append(`
    <div class="splitcard" id=${cardname}>
        <p>
        ${cardname}
        </p>
        <input type="text" class="splitcardform mx-5" placeholder="50%">
    </div>
    `
  );
}

$(document).ready(function () {
    checkboxtoSquare();
  });
*/