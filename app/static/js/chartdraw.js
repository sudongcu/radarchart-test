
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

/** Draw Bar Chart */
function DrawBar(id) {
    document.getElementById(id).style.display = "block";
    BarChart.draw(id);
}

/** Draw Radar Chart */
// level: 1~5 레이더
// id: 레이더 위치 할 element id
// group: 레이더 그룹 명 ( 차트 아래 표시 )
// values: 표시될 value 값 ( 배열 )
// edge: 레이더 차트 edge 수
function DrawRadar(level, id, group, values, edge) {

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