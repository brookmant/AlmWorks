
/*fake data*/
var Cities = [{
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    },
    {
        "city": "San Francisco",
        "state": "CA",
        "population": 805235,
        "density": 6.6589
    },
    {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "Akron",
        "state": "OH",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "New Jersey",
        "state": "NJ",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Orlando",
        "state": "Fl",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    },
    {
        "city": "New York",
        "state": "NY",
        "population": 8175133,
        "density": 10.4311
    }, {
        "city": "San Francisco",
        "state": "NY",
        "population": 805235,
        "density": 6.6589
    }, {
        "city": "Boston",
        "state": "MA",
        "population": 645149,
        "density": 5.1434
    }
];

//build a table
var table = $("<table/>").attr("id", "mytable");
$("#table").append(table);

var thcities = "<th> Cities </th>";
var thdensity = "<th> Density </th></tr>";

for (var i = 0; i < Cities.length; i++) {
    var tr = "<tr class=start'>";
    var td1 = "</tr><td>" + Cities[i]["city"] + "</td>";
    var td2 = "<td>" + Cities[i]["density"].toFixed(1) + "</td></tr>";

    $("#mytable").append(tr + td1 + td2);
}

//inputs for density
$('input#density').change(function () {
    var getCity = $("#city").val();
    var getDensity = $("#density").val();
    //var round = getDensity.toFixed(1);

    //if (getCity & getDensity !== '') {
        var newcities = "</tr><tr class='new'><td>" + getCity + "</td>";
        var newdensity = "<td>" + Math.round(getDensity * 10) / 10; + "</td></tr>";
        $("#mytable tr:first-child").after(newcities + newdensity);
    //}
});

$("#mytable tr:first-child").prepend( thcities + thdensity);

//*Time section
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

    var d = new Date();
    var x = document.getElementById("Time");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    x.innerHTML = h + ":" + m + " MSK";
