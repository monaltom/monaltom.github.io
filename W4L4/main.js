
$(function() {
    var $makeRequest = $('.make-request');
    var page = 1;
    $makeRequest.on('click', function() {
        $.ajax ({
            method:"GET",
            url: "https://reqres.in/api/users"
        }).done(handleResponse) 
    })

    function handleResponse(response) {
        // todo 
    }

    function addCell(val, className = "") {
    }

    $('.start-action').on('click', startProgress)
    $('.stop-action').on('click', stopProgress)

    function startProgress() {
        const cycleInterval = $('#cycle-interval').val()
        let width = 0;

            $('.progress').width(0);

            progressInterval = setInterval(function() {
                width ++;
                $('.progress').width(width + "%")

                if (width >= 100) {
                    stopProgress();
                }, cycleInterval * 1000 / 100)
            }
        }

function stopProgress() {
    clearInterval(progressInterval);
    console.log(new Date())
}

function resetProgress() {
    stopProgress()
    $('#cycle-interval').val("")
    $('.progress').width(0);
}

}) 