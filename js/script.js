/**
 * Created by Илья Яновой on 07.06.2016.
 */
(function () {

    var $owl = $('.owl-carousel');
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item'
    });

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

    $.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=tb", function (data) {
        console.log(data);
        for (var i = 0; i < data.images.length; i++) {
            $image.eq(i).attr({"src": data.images[i].imageurl, "alt": data.images[i].word}).next().html(data.images[i].word);
        }

        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    });

    function search(word){
        $.getJSON("http://api.pixplorer.co.uk/image?word=" + word + "&amount=7&size=tb", function (data) {
        console.log(data);
        for(var i = 0; i < data.images.length; i++){
            $image.eq(i).attr({"src": data.images[i].imageurl, "alt": data.images[i].word}).next().html(data.images[i].word);
        }
    })}

    $('#button').on('click', function () {
        success = false;
        $word =  $('#search').val();
        console.log($word);
        search($word);
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    });
})();