$(document).ready(function(){
    var textArea = $('textarea');

    $('input[type="reset"]').click(function(){
        $(textArea).val('').keyup();
    });

    $(textArea).keyup(function(){
        let charCount = $('span.all_count');

        let count = $(this).val().length;

        let spaces = $(this).val().replace(/\s/g,'').length;
        let countSpaces = count - spaces;

        let wordChar = $(this).val().replace(/\W/g,'').length;
        let countWordChar = count - wordChar - countSpaces;

        let numeric = $(this).val().replace(/\d/g,'').length;
        let countNumeric = count - numeric;

        let alphaChar = count - countSpaces - countWordChar - countNumeric;

        $(charCount).text(count);
        $('.spaces').text(countSpaces);
        $('.alpha_char').text(alphaChar);
        $('.non_alpha_char').text(countWordChar);
        $('.numeric').text(countNumeric);
    });
});