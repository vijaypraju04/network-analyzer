links = [];
users = [];
targets = [];
clickables = [];
createdCard = false;

$(document).ready(fetch("https://network-analyzer.herokuapp.com/api/v1/links").then(res => res.json()).then(res=>data = res).then(res=>createlinks()));

$(document).ready(fetch("https://network-analyzer.herokuapp.com/api/v1/users").then(res => res.json()).then(res=>userdata = res).then(res=>createusers()))

$(document).ready(fetch("https://network-analyzer.herokuapp.com/api/v1/targets").then(res => res.json()).then(res=>targetdata = res).then(res=>createtargets()))

function createlinks(){
  for (var link of data) {
    object = {}
    object.source = link.user.name;
    object.target = link.target.name;
    object.type = link.kind.toLowerCase();
    links.push(object)
}}

function createusers(){
  for (var user of userdata) {
    object = {}
    object.name = user.name;
    object.bio = user.bio;
    object.photo = user.photo;
    object.contact = user.contact;
    users.push(object);
    clickables.push(object);
}}

function createusers(){
  for (var user of targetdata) {
    object = {}
    object.name = user.name;
    object.bio = user.bio;
    object.photo = user.photo;
    object.contact = user.contact;
    users.push(object);
    clickables.push(object);
}}

function finduser(searchname){
  for (user of users) {
  	if (user.name === searchname){
      return user
    }
  }
}


nodes = {};

function addlistener(){
$("svg").on( "click", "circle", function() {
  let name = this.__data__.name;
  if (createdCard){
    updateCard(name);
  }
  else {
    createCard(name);
  }
});
}

function createCard(name) {
  createdCard = true;
  console.log(name);
  let cardname = finduser(name)
  console.log(cardname);
  div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `<div class="image">\
        <img src="${cardname.photo}">\
      </div>\
      <div class="content">\
        <a id="cardname" class="header">${cardname.name}</a>\
        <div class="meta">\
          <span id="cardcontent" class="date">${cardname.contact}</span>\
        </div>\
        <div id="cardbio" class="description">\
          ${cardname.bio}\
        </div>\
      </div>\
    </div>`
    document.querySelector('.container').appendChild(div);
}

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

addlistener();
}

function clearPage(){
  nodes ={};
}
