$('#input-field').keyup(function () {
    if ($(this).val() == '') {
        $('#btnSubmit').prop('disabled', true);
    } else {
        $('#btnSubmit').prop('disabled', false);
    }
});


$('body').append('<div></div>');

$('body').append('<ul></ul>');

$('#btnSubmit').click(function (e) {
    alert($('#input-field').val());

    e.preventDefault();
    let submittedText = $('#input-field').val();
    $('ul').append('<li>' + submittedText + '</li>');

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $('li').click(function () {
        $(this).css({
            'background-color': getRandomColor(),
            // 'border-radius': Math.floor(Math.random() * 100) + 'px',
        })
    })

    $('li').dblclick(function () {
        $(this).remove()
    })
})

