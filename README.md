# radarchart_test
### javascript 레이더 구현 테스트
- d3 레이더 차트 관련 소스 참고하여 구현.
- d3 link: https://github.com/alangrafu/radar-chart-d3
- base version source: http://bl.ocks.org/nbremer/6506614
- radar.js, radardraw.js는 참고를 위해 받은 기존 소스로 그대로 두어 비교를 위한 데이터로 남겨두었다.

``` javascript
// level: 1~5 레이더
// id: 레이더 위치 할 element id
// group: 레이더 그룹 명 ( 차트 아래 표시 )
// values: 표시될 value 값 ( 배열 )
// edge: 레이더 차트 edge 수
DrawRadar(level, id, group, values, edge)

// Sample
DrawRader(1, 'sample4_1', 'RADAR 4', [5, 8, 3, 6], 4)
DrawRader(1, 'sample5_1', 'RADAR 5', [5, 10, 6, 7, 2], 5)
DrawRader(1, 'sample6_1', 'RADAR 6', [8, 10, 5, 3, 5, 6], 6)

DrawRader(5, 'sample4_5', 'RADAR 4', [5, 8, 3, 6], 4)
DrawRader(5, 'sample5_5', 'RADAR 5', [5, 10, 6, 7, 2], 5)
DrawRader(5, 'sample6_5', 'RADAR 6', [8, 10, 5, 3, 5, 6], 6)

```

![image](https://user-images.githubusercontent.com/39644202/214311102-75a1b169-18fe-4f81-8471-48c816f4bd99.png)
