$(document).ready(function() {
    // $('#insurance').load('./first.html');

    $('body').on('click', '#exampleRadio', function(){
        console.log('clicked');
        $.ajax({
            type: 'GET',
            crossdomain: true,
            url: 'https://jsonplaceholder.typicode.com/users',
            beforeSend: function() {
                console.log('service start');
            },
            complete: function() {
                console.log('service end');
            },
            success: function(resp, stat) {
                // $('#firstID').find('option').remove();
                $.each(resp, function(i, item) {
                    $('#nameDropdown').append($('<option>', { //check
                      'value': i,
                      'text': item.name
                    }));
                    console.log(i, item);
                  });
                $("#btnSubmit, select, input[type='text'], input[type='tel']").removeAttr("disabled");
            },
            error: function(resp, stat) {

            }
        });
    });

    $('body').on('click', '#btnSubmit', function(){
        console.log("hi");
        var a = $('#phoneNumber').val();
        var phRegex = /^[0-9]{10}$/
        if(!phRegex.test($('#phoneNumber').val())) {
            alert("enter a valid phone number");
        }

        var nameRegex = /^[A-Za-z\s]{2, 15}$/;
        if(!nameRegex.test($('#fName').val())) {
            console.log($('#fName').val());
            alert('enter valid name');
        }

        $.ajax({
            type: 'GET',
            crossdomain: true,
            url: 'https://jsonplaceholder.typicode.com/users',
            beforeSend: function(){
                console.log('service start');
            },
            complete: function() {
                console.log('complete');
            },
            success: function(resp, stat) {
                console.log(resp);
                    
                $.each(resp, function(i, item) {
                    $("#listID").append('<li draggable="true" id="'+item.id+'" >' + item.name + '</li>');
                });
            
            },
            error: function(resp, stat) {

             }
        });
    })

    $('#listID').on({
        dragstart: function (event) {
            event.originalEvent.dataTransfer.setData("Text", event.target.id);
        },
        dragover: function (event) {
            event.preventDefault();
        },
        drop: function (event) {
            console.log('dsfsdf');
            event.preventDefault();
            var data = event.originalEvent.dataTransfer.getData("Text2");
            var name = event.originalEvent.dataTransfer.getData("Name2");
            var price = event.originalEvent.dataTransfer.getData("Price2");
            // $('#selectedInsList li').remove("#" + data);
            // $('#insuranceList li').attr("draggable", true);
            event.currentTarget.innerHTML += '<li draggable="true"  id="' + data + '" data-name="' + name + '" data-price="' + price + '">' + name + '[ $' + price + ' ] </li>';
        }
    });


    $('#selectedIns').on({
        dragstart: function (event) {
            event.originalEvent.dataTransfer.setData("Text", event.target.id);
            event.originalEvent.dataTransfer.setData("Name", event.target.dataset.name)
        },
        dragover: function (event) {
            event.preventDefault();
        },
        drop: function (event) {
            console.log('dsfsdfw222');
            event.preventDefault();
            var data = event.originalEvent.dataTransfer.getData("Text");
            // $('#selectedInsList li').remove("#" + data);
            // $('#insuranceList li').attr("draggable", true);
            event.currentTarget.innerHTML += '<li draggable="true"  id="' + data + '" data-name="' + name + '" data-price="' + price + '">' + name + '[ $' + price + ' ] </li>';
        }
    });



});