$(document).ready(function () {
    let $header = $('.page-header');

    $header.each(function () {
        let $thisHeader = $(this);

        //Find header btn and add listener
        $thisHeader.find('.menu-toggler').click(() => {
            //When clicked toggle "open" class to open or close the menu
            $thisHeader.toggleClass("open");
        });
    });
});