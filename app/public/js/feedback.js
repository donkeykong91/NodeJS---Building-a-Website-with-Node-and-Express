$(function() {

    $.getJSON("api", updateFeedback);

    
    $(".feedback-form").submit(function (e) {
        
        e.preventDefault();

        $.post("api", {

            name: $("#feedback-form-name").val(),

            title: $("#feedback-form-title").val(),

            message: $("#feedback-form-message").val()

        }, updateFeedback);

    });

    function updateFeedback (data) {
        
        var output = "";

        $.each(data, function (key, speaker) {

            output += '            <div class="feedback-item item-list media-list">';

            output += '                <div class="feedback-item media">';

            output += '                    <div class="media-left">';
            
            output += '                       <button class="feedback-delete btn btn-xs btn-danger">';
                                            
            output += '                           <span id="' + key + '" class=glyphicon glyphicon-remove></span>';
                                            
            output += '                       </button>';
                                        
            output += '                    </div>';

            output += '                    <div class="feedback-info media-body">';

            output += '                        <div class="feedback-head">';

            output += '                            <div class="feedback-title">' + speaker.title;
                                        
            output += '                                <small class="feedback-name label label-info">' + speaker.name;

            output += '                                </small>';

            output += '                            </div>';

            output += '                        </div>';

            output += '                        <div class="feedback-message">' + speaker.message;
                                    
            output += '                        </div>';

            output += '                    </div>';

            output += '                </div>';

            output += '            </div>';

        });

        $(".feedback-messages").html(output);

    }

});