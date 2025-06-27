$(document).ready(function() {
    $('#onload').fadeOut();

    $('a.nav-link').on('click', function(e) {
        if (!$(this).attr('target') && this.href && this.href.indexOf('#') === -1) {
            $('#onload').fadeIn();
        }
    });

    $('form').on('submit', function() {
        $('#onload').fadeIn();
    });
});