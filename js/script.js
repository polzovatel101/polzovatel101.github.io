/**
 * Created by Илья Яновой on 07.06.2016.
 */
(function () {

    var $owl = $('.owl-carousel');

    $owl.eq(0).owlCarousel({
        items:1,
        loop:true,
        margin:20,
        nav:true
    });

    $owl.eq(1).owlCarousel({
        items:1,
        loop:true,
        margin:20,
        nav:true,
        startPosition:1
    });

    $owl.eq(2).owlCarousel({
        items:1,
        loop:true,
        margin:20,
        nav:true,
        startPosition:2
    });

    $image = $('.image');
    var success = false;

    $.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=tb", function (data) {
        console.log(data);
        for (var i = 0; i < data.images.length; i++) {
            $image.eq(i).attr({"src": data.images[i].imageurl, "alt": data.images[i].word});
        }
        success = true;
    });

    if(success) {
        $('.grid').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.grid-sizer'
            }
        });
    }

    function search(word){
        $.getJSON("http://api.pixplorer.co.uk/image?word=" + word + "&amount=7&size=tb", function (data) {
        console.log(data);
        for(var i = 0; i < data.images.length; i++){
            $image.eq(i).attr({"src": data.images[i].imageurl, "alt": data.images[i].word });
        }
    })}

    $('#button').on('click', function () {
        success = false;
        $word =  $('#search').val();
        console.log($word);
        search($word);
        success = true;
        if(success){$('.grid').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            percentPosition: true
        });
        }
    });
})();