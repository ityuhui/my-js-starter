
$(document).ready(function(){
  render();
});

var render = function(){

	var svg = d3.select("svg");
	svg.append("rect")
	  .attr("fill", "none")
		.attr("stroke", "#009900")
		.attr("stroke-width", 1)
    .attr("x", 100)
		.attr("y", 100)
		.attr("width", 500)
    .attr("height", 300);

var str = "平康";
var text = svg.append("text")
		.attr("x",200)
		.attr("y",200)
		.attr("font-size",30)
		.attr("font-family","simsun")
		.text(str).on("click",function(){ alert("a")});


}
