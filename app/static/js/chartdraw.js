
function InitBar() {
    document.getElementById('mySVG').innerHTML = "";
    document.getElementById('mySVG').style.display = "none";
}

function InitRadar() {
    document.getElementById('frontSVG').innerHTML = "";
    document.getElementById('backSVG').innerHTML = "";
    document.getElementById('leftSVG').innerHTML = "";
    document.getElementById('rightSVG').innerHTML = "";

    document.getElementById('frontSVG').style.display = "none";
    document.getElementById('backSVG').style.display = "none";
    document.getElementById('leftSVG').style.display = "none";
    document.getElementById('rightSVG').style.display = "none";
}

function DrawBar(id) {
    // InitRadar();
    document.getElementById(id).style.display = "block";
    BarChart.draw(id);
}

function DrawRader(level, id, group, values, edge) {
    // InitBar();

    document.getElementById(id).style.display = "";

    data = GetData(group, values, edge)

    RadarChart.draw(level, id, data);
}

function GetData(group, values, edge) {

    let data4 = [
        {
            "group": group,
            "axes": [
                {
                    "axis": "one",
                    "value": values[0],
                    "description": "test 1"
                },
                {
                    "axis": "two",
                    "value": values[1],
                    "description": "test 2"
                },
                {
                    "axis": "three",
                    "value": values[2],
                    "description": "test 3"
                },
                {
                    "axis": "four",
                    "value": values[3],
                    "description": "test 4"
                }
            ]
        }
    ];
    
    
    let data5 = [
        {
            "group": group,
            "axes": [
                {
                    "axis": "one",
                    "value": values[0],
                    "description": "test 1"
                },
                {
                    "axis": "two",
                    "value": values[1],
                    "description": "test 2"
                },
                {
                    "axis": "three",
                    "value": values[2],
                    "description": "test 3"
                },
                {
                    "axis": "four",
                    "value": values[3],
                    "description": "test 4"
                },
                {
                    "axis": "five",
                    "value": values[4],
                    "description": "test 5"
                }
            ]
        }
    ];
    
    let data6 = [
        {
            "group": group,
            "axes": [
                {
                    "axis": "one",
                    "value": values[0],
                    "description": "test 1"
                },
                {
                    "axis": "two",
                    "value": values[1],
                    "description": "test 2"
                },
                {
                    "axis": "three",
                    "value": values[2],
                    "description": "test 3"
                },
                {
                    "axis": "four",
                    "value": values[3],
                    "description": "test 4"
                },
                {
                    "axis": "five",
                    "value": values[4],
                    "description": "test 5"
                },
                {
                    "axis": "six",
                    "value": values[5],
                    "description": "test 6"
                }
            ]
        }
    ];

    if (edge == 4)
        return data4;
    else if (edge == 5)
        return data5;
    else (edge == 6)
        return data6;
}