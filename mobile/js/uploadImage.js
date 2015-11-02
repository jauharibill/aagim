$(function(){
	$(document).ready(function (e) {
    $('#formUpload').on('submit',(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type:'POST',
            url: "http://billtan.esy.es/kecoa-v.1.0/upload.php",
            data:formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                console.log("success");
                console.log(data);
            },
            error: function(data){
                console.log("error");
                console.log(data);
            }
        });
    }));

    $("#ImageBrowse").on("change", function() {
        $("#formUpload").submit();
    });
});
});