$(document).ready(function () {

    // Récupérer les livres

    $("#add-book-btn").click(function () {
        let title = $("#title").val().trim();
        let author = $("#author").val().trim();
        let read;
        let newBookText = {
            "title" : title,
            "author" : author,
            "read" : read
    };

        // let searchKeywords = Array; BOUH faut pas laisser des commentaires dans la version finale
        let errorMessage = $('#error-message');    
        if (newBookText === "" || title === "" || author === "" ) {
            if (errorMessage.length === 0) {
                $('#error-container').append('<p id="error-message" style="color: red;">Ne peut pas être vide. </p>');
            }
        } else {
            let newBook = $('<li><input type="checkbox" class="book-complete" id="book"><span for="book" class="book-text"> "' + newBookText.title + '" de ' + newBookText.author + '</span><button class="delete-book-btn btn btn-danger">Supprimer</button></li>');
            $('#list-book').append(newBook);
            $('#new-book').val("");
            $('#error-message').remove();
            // searchKeywords += title;
            // searchKeywords += author;
        }
    });

    // Marquer un livre comme fini
    $(document).on('change', '.book-complete', function () {
        let bookItem = $(this).closest('li');
        bookItem.toggleClass('completed');
    });

    // Supprimer un livre
    $(document).on('click', '.delete-book-btn', function () {
        $(this).closest('li').remove();
    });
    
    // Supprimer les livres finis
    $('#clear-completed-btn').click(function() {
        $('.completed').remove();
    });    
});
