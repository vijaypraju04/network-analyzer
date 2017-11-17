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

/// Vijay JS November 16

window.addEventListener('load', getFetch)

function getFetch() {
fetch('https://network-analyzer.herokuapp.com/api/v1/users')
.then(res=> res.json())
.then(json => getUsers(json))
}

function getUsers(data) {
  let userArr = []
  for (let i = 0; i < data.length; i++) {
    userArr.push(data[i]["name"])
  }
  return getDropDown(userArr)
}

function getDropDown(userArr) {
  for (let i = 0; i < userArr.length; i++) {
    let option = document.createElement("OPTION")
    let selectUser = document.getElementById("selectuser")
    let txt = document.createTextNode(userArr[i])
    option.appendChild(txt)
    option.setAttribute("value", userArr[i])
    selectUser.insertBefore(option, selectUser.lastChild)
  }
}


function getTargetArray() {
  let multiDrop1 = document.getElementById("multi-drop").querySelector("input").value.split(",")
  let multiDrop2 = document.getElementById("multi-drop1").querySelector("input").value.split(",")
  let multiDrop3 = document.getElementById("multi-drop2").querySelector("input").value.split(",")

  if (multiDrop1 == ""){
    multiDrop1 = []
  }

  if (multiDrop2 == ""){
    multiDrop2 = []
  }

  if (multiDrop3 == ""){
    multiDrop3 = []
  }

  let passionCount = multiDrop1.length
  let hobbiesCount = multiDrop2.length
  let interestCount = multiDrop3.length

  countArray = []

  for(var i=0; i < passionCount; i++){
    countArray.push("passion")
  }

  for(var i=0; i < hobbiesCount; i++){
    countArray.push("hobby")
  }

  for(var i=0; i < interestCount; i++){
    countArray.push("interest")
  }

  console.log(countArray)

 let firstArr = multiDrop1.concat(multiDrop2)
 let finalArr = firstArr.concat(multiDrop3)

 return { kind : countArray, targets : finalArr };
}

function getTargetString(targetArr) {
  for (let i = 0; i < targetArr.length; i++) {
    if (targetArr[i] !== "") {
      postTarget(targetArr[i])
    }
  }
}


// function postUser() {
//
//   bodyJSON = {
//     "user":{
//       "name":document.getElementById("name").value,
//       "contact":document.getElementById("email").value,
//       "photo":document.getElementById("photolink").value,
//       "bio":document.getElementById("bio").value,
//       "target_params" :{
//         "name":"gym"
//       },
//       "link_params": {
//         "kind": "passions"
//       }
//     }
//    }
//
//
// fetch("http://localhost:3000/api/v1/users", {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json',
//          'Accept': 'application/json'
//        },
//        body: JSON.stringify(bodyJSON)
//      })
//    }
//
//
// function postTarget(eachValue) {
//
//  bodyJSON = {
//     "name": eachValue,
//     "category": "dummydata"
//   }
//   fetch("https://network-analyzer.herokuapp.com/api/v1/targets", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(bodyJSON)
//   })
// }


function postData(){
targInput = getTargetArray().targets
linkInput = getTargetArray().kind

let newName = document.getElementById("name").value
let nameCapitaized = newName.charAt(0).toUpperCase()+newName.slice(1),


bodyJSON = {
    "user":{
      "name":nameCapitaized,
      "contact":document.getElementById("email").value,
      "photo":document.getElementById("photolink").value,
      "bio":document.getElementById("bio").value},
	"target" :{
        "name":targInput
      },
	"link" : {
        "kind":linkInput
      }
    }


    if (targInput.length !== 0) {
      for(var i=0; i < targInput.length; i++){
        let newObject = {
          "source":nameCapitaized,
        	"target" :targInput[i].charAt(0).toUpperCase()+targInput[i].slice(1),
        	"type" : linkInput[i].charAt(0).toUpperCase()+linkInput[i].slice(1)
            }
        links.push(newObject)
      }
    }

fetch("https://network-analyzer.herokuapp.com/api/v1/users", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       body: JSON.stringify(bodyJSON)
     })
}

/// END - Vijay JS November 16

function addRefreshButton() {
  $('#header').append('<input class="ui button" type="button" value="Reload Page" onClick="window.location.reload()">');
}

function updateBackend(){
  postData();
  clearPage();
  runPage();
}

function clearPage() {
  d3.selectAll("svg > *").remove();
}


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
var width = 1800,
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
$('#main').remove();
addRefreshButton()


}
