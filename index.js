
links = [
  {source: "Ramy", target: "Soccer", type: "hobby", value:10},
  {source: "Ramy", target: "Engineering", type: "interested", value:5},
  {source: "Ramy", target: "Basketball", type: "interested", value:5},
  {source: "Ramy", target: "Football", type: "hobby", value:10},
  {source: "Ramy", target: "Entrepreneurship", type: "passion", value:10},
  {source: "Ramy", target: "Art", type: "passion", value:10},
  {source: "Ramy", target: "DJ", type: "passion", value:10},

  {source: "Vijay", target: "Soccer", type: "hobby", value:10},
  {source: "Vijay", target: "Javascript", type: "passion", value:1},
  {source: "Vijay", target: "D3", type: "passion", value:10},
  {source: "Vijay", target: "Video Games", type: "passion", value:200},
  {source: "Vijay", target: "Engineering", type: "interested", value:10},

  {source: "Gene", target: "Soccer", type: "interested", value:10},
  {source: "Gene", target: "Javascript", type: "hobby", value:10},
  {source: "Gene", target: "Basketball", type: "interested", value:10},
  {source: "Gene", target: "Football", type: "interested", value:10},
  {source: "Gene", target: "Entrepreneurship", type: "passion", value:10},

  {source: "Diego", target: "Coffee", type: "interested", value:10},
  {source: "Diego", target: "Pokemon", type: "interested", value:10},
  {source: "Diego", target: "Politics", type: "passion", value:10},
  {source: "Diego", target: "Basketball", type: "passion", value:10},

  {source: "Es", target: "Javascript", type: "interested", value:10},
  {source: "Es", target: "Ruby", type: "passion", value:10},
  {source: "Es", target: "Teaching", type: "passion", value:10},
  {source: "Es", target: "Football", type: "passion", value:10},

  {source: "Jason", target: "Javascript", type: "interested", value:10},
  {source: "Jason", target: "Ruby", type: "interested", value:10},
  {source: "Jason", target: "Coffee", type: "passion", value:10},
  {source: "Jason", target: "Teaching", type: "passion", value:10},

  {source: "Alex", target: "Javascript", type: "interested", value:10},
  {source: "Alex", target: "Ruby", type: "interested", value:10},
  {source: "Alex", target: "Art", type: "passion", value:10},
  {source: "Alex", target: "Teaching", type: "passion", value:10},

  {source: "Avi", target: "DJ", type: "interested", value:10},
];

nodes = {};

// Compute the distinct nodes from the links.


function runPage() {

links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  (link.source.group = 1);
  // (nodes[link.source].group = 1);
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
  // (nodes[link.target].group = 2);
  (link.target.group = 2);
});


var color = d3.scale.category10().domain([0, 1, 2]);
var width = 1000,
    height = 600;


var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(80)
    .charge(-300)
    .on("tick", tick)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Per-type markers, as they don't inherit styles.
svg.append("defs").selectAll("marker")
    .data(["interested", "hobby", "passion"])
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("g").selectAll("path")
    .data(force.links())
  .enter().append("path")
    .attr("class", function(d) { return "link " + d.type; })
    .attr("marker-end", function(d) { return "url(#" + d.type + ")"; })
    .attr("stroke-width", function(d) { return Math.sqrt(d.value); });;

var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
    .attr("r", 6)
    .attr("fill", function(d) { return color(d.group); })
    .call(force.drag);

var text = svg.append("g").selectAll("text")
    .data(force.nodes())
  .enter().append("text")
    .attr("x", 8)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });

// Use elliptical arc path segments to doubly-encode directionality.
function tick() {
  path.attr("d", linkArc);
  circle.attr("transform", transform);
  text.attr("transform", transform);
}

function linkArc(d) {
  var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

function transform(d) {
  return "translate(" + d.x + "," + d.y + ")";
}
}

function clearPage(){
  nodes ={};
}
