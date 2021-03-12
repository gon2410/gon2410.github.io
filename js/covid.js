function showButtons() {
    document.getElementById("myDropdown").style.display = "block";
}

var mykey = config.MY_KEY;

var world_button = document.createElement("button")
world_button.innerHTML = "World"

var north_button = document.createElement("button");
north_button.innerHTML = "North America";

var south_button = document.createElement("button");
south_button.innerHTML = "South America";

var europe_button = document.createElement("button");
europe_button.innerHTML = "Europe";

var oceania_button = document.createElement("button");
oceania_button.innerHTML = "Oceania";

var asia_button = document.createElement("button");
asia_button.innerHTML = "Asia";

var africa_button = document.createElement("button");
africa_button.innerHTML = "Africa";

function mergeSort(arr) {
    if (arr.length < 2){
        return arr
    }

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right))    
}
    
function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0].cases.total >= right[0].cases.total) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift())
    }
    
    return result;
}

fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": mykey,
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
    var north = [];
    var south = [];
    var europe = [];
    var oceania = [];
    var asia = [];
    var africa = [];
    var other = [];
    var world = []
    var i;    
    for (i=0; i<233;i++){
        var country = response.response[i]
        var conti = response.response[i].continent;
        world.push(country);
        if (conti == "North-America") {
            north.push(country);
        } else if (conti == "South-America") {
            south.push(country);
        } else if (conti == "Europe") {
            europe.push(country);
        } else if (conti == "Oceania") {
            oceania.push(country);
        } else if (conti == 'Asia') {
            asia.push(country);
        } else if (conti == "Africa") {
            africa.push(country);
        } else {
            other.push(country)
        }
    }

    world_button.addEventListener("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "World"
        document.getElementById('tbody').innerHTML = "";
        var sorted_world = mergeSort(world);
        var i;
        for (i=0;i<sorted_world.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_world[i].country + "</td><td>" + sorted_world[i].cases.total + "</td><td>" + sorted_world[i].cases.recovered  + "</td><td>" + sorted_world[i].deaths.total + "</td><td>" + sorted_world[i].population +  "</td></tr>"
        }
    })

    north_button.addEventListener ("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "North America"
        document.getElementById('tbody').innerHTML = "";
        var sorted_north = mergeSort(north)
        sorted_north.splice(0, 1)
        var i;
        for (i=0;i<sorted_north.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_north[i].country + "</td><td>" + sorted_north[i].cases.total + "</td><td>" + sorted_north[i].cases.recovered  + "</td><td>" + sorted_north[i].deaths.total + "</td><td>" + sorted_north[i].population +  "</td></tr>"
        }
    });
    
    south_button.addEventListener ("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "South America"
        document.getElementById('tbody').innerHTML = "";
        var sorted_south = mergeSort(south)
        sorted_south.splice(0, 1)
        var i;
        for (i=0;i<sorted_south.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_south[i].country + "</td><td>" + sorted_south[i].cases.total + "</td><td>" + sorted_south[i].cases.recovered  + "</td><td>" + sorted_south[i].deaths.total + "</td><td>" + sorted_south[i].population + "</td></tr>"
        }
    })

    europe_button.addEventListener("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "Europe"
        document.getElementById('tbody').innerHTML = "";
        var sorted_europe = mergeSort(europe)
        sorted_europe.splice(0, 1)
        var i;
        for (i=0;i<sorted_europe.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_europe[i].country + "</td><td>" + sorted_europe[i].cases.total + "</td><td>" + sorted_europe[i].cases.recovered  + "</td><td>" + sorted_europe[i].deaths.total + "</td><td>" + sorted_europe[i].population + "</td></tr>"
        }
    })

    oceania_button.addEventListener("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "Oceania"
        document.getElementById('tbody').innerHTML = "";
        var sorted_oceania = mergeSort(oceania)
        sorted_oceania.splice(0, 1)
        var i;
        for (i=0;i<sorted_oceania.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_oceania[i].country + "</td><td>" + sorted_oceania[i].cases.total + "</td><td>" + sorted_oceania[i].cases.recovered  + "</td><td>" + sorted_oceania[i].deaths.total + "</td><td>" + sorted_oceania[i].population + "</td></tr>" 
        }
    })

    asia_button.addEventListener("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "Asia"
        document.getElementById('tbody').innerHTML = "";
        var sorted_asia = mergeSort(asia)
        sorted_asia.splice(0, 1)
        var i;
        for (i=0;i<sorted_asia.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_asia[i].country + "</td><td>" + sorted_asia[i].cases.total + "</td><td>" + sorted_asia[i].cases.recovered  + "</td><td>" + sorted_asia[i].deaths.total + "</td><td>" + sorted_asia[i].population + "</td></tr>"
        }
    })

    africa_button.addEventListener("click", function() {
        document.getElementById("myDropdown").style.display = "none";
        document.getElementById("btn").innerHTML = "Africa"
        document.getElementById('tbody').innerHTML = "";
        var sorted_africa = mergeSort(africa)
        sorted_africa.splice(0, 1)
        var i;
        for (i=0;i<sorted_africa.length;i++){
            document.getElementById("tbody").innerHTML += "<tr><td>" + parseInt(i+1) + "</td><td>" + sorted_africa[i].country + "</td><td>" + sorted_africa[i].cases.total + "</td><td>" + sorted_africa[i].cases.recovered  + "</td><td>" + sorted_africa[i].deaths.total + "</td><td>" + sorted_africa[i].population + "</td></tr>"
        }
    })

    var body = document.getElementById("myDropdown");
    body.appendChild(world_button);
    body.appendChild(north_button);
    body.appendChild(south_button);
    body.appendChild(europe_button);
    body.appendChild(oceania_button);
    body.appendChild(asia_button);
    body.appendChild(africa_button);    

})
.catch(err => {
	console.error(err);
});
