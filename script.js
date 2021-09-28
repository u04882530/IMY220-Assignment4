function updateProfile(){

		let lastVariable = $(this).parent();

		let second = lastVariable.children("b").html();
		let secondType = lastVariable.attr("data-type");

		if($(this).html() == "Edit")
			{
				let first = lastVariable.children("span").html();
			
				lastVariable.append(
					$("<div></div>").attr('id', second).addClass("row")
				);

				lastVariable.children(".row").append(
					$("<div></div>").addClass("col-8")
				);

				lastVariable.children(".row").append(
					$("<div></div>").addClass("col-4")
				);

				$(this).html('Update');
				lastVariable.children("b").remove();

				lastVariable.children(".row").children(".col-8").append(
					$("<input></input>").val(first).attr("type", secondType)
				);

				lastVariable.children(".row").children(".col-4").append(
					$(this)
				);
				lastVariable.children("span").remove();
			}
		else
			{
				lastVariable = lastVariable.parent();
				let first = lastVariable.children(".col-8").children("input").val();
				second = lastVariable.attr('id');
		
				lastVariable = lastVariable.parent();
				lastVariable.children().remove();
				
				lastVariable.append(
					$("<b></b>").html(second)
				);

				lastVariable.append(
					$("<span></span>").html(first)
				);

				lastVariable.append(
					$("<button></button>").html("Edit").addClass("btn btn-dark pull-right").on('click', updateProfile)
				);

				lastVariable = lastVariable.parent();
		}
}

$(document).ready(function(){
	$('button').on('click', updateProfile);
});