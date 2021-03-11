$("#source-loaction").select2({
    placeholder: "Select your source",
    minimumResultsForSearch: -1
});
$("#destination-loaction").select2({
    placeholder: "Select your destination",
    minimumResultsForSearch: -1
});
$(document).ready(function() {
    destinationSectionEnable();
    submitAction();
});

function submitAction() {
    $('.submit').click(function() {
        let source = $('#source-loaction').select2('val');
        let destination = $('#destination-loaction').select2('val');
        if (emptyChecker(source) && emptyChecker(destination)) {
            redirectAction(source, destination);
        } else {
            swal("No Location Found", "Please select one source and destination", "warning");
        }
    })
}

function emptyChecker(str) {
    if (str != '') {
        return true;
    } else {
        return false;
    }
}

function destinationSectionEnable() {
    $('#source-loaction').on('select2:select', function(e) {
        $('.drop-down-dest').removeClass('disable');
    });
}

function redirectAction(source, destination) {
    //use if else for multiple source
    switch (destination) {
        case 'Majestic':
            window.open('redirect-pages/page1.html', '_blank');
        case 'Ecity':
            window.open('redirect-pages/page2.html', '_blank');
        case 'Columbia Asia Whitefield':
            window.open('redirect-pages/page3.html', '_blank');
		case 'Brookefield':
            window.open('redirect-pages/page4.html', '_blank');
		case 'contact':
            window.open('redirect-pages/page4.html', '_blank');
    }
}