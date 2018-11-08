$("document").ready(function(){

	function addTask(){
		var taskText = $("#task").val();
		if (taskText=="") {
			$("#control").html("You didn't type anything!");
		}else{
			$("#control").html("");
			$("#list").append('<div class="task"><div class="taskCheck"></div>' + taskText + '</div><br>');		
			$("#task").val("");
			$(".taskCheck").click(function(){
				var index = $(".taskCheck").index(this);
				console.log(index);
				$(this).addClass("checked");
				$(this).text(" X");
 				$(".task")[index].className+=" done";
			});
		}
	}

	$("#addStuff").click(addTask);	

})
