$().ready(() => {

    $('#btn-task').click( () => {

        let valInput = $('#tsk').val();

        if (valInput != '') {   
            let task = $("<li class=''></li>").text(valInput);
            $(task).append("<button class='rem'>DELETE</button>")
            $(task).append("<button class='done'>Done</button>")
            $('#list-task').append(task);
            $(valInput).val('')
            
            $('.rem').click( function(){
                $(this).parent().remove();
            });
            $('.done').click( function(){
                $(this).parent().toggleClass('doneTask');
            });
        } else {
            alert("please fill the task first!!!")
        }
    
        });
        
    
  
});