var dataArr = [30,40,50,60];

var width = 500;
var height = 500;

var widthScale = d3.scale.linear()
                    .domain([0, d3.max(dataArr)]) // actual data range
                    .range([0, width]);// resulting range

var color = d3.scale.linear()
                .domain([0, d3.max(dataArr)])
                .range(['red', 'blue']);

var axis = d3.svg.axis()
                .ticks(5)
                .scale(widthScale);

var canvas = d3.select('body')
                .append('svg')
                .attr('width',width)
                .attr('height',height)
                .append('g')
                .attr('transform','translate(20,0)');

var bars = canvas.selectAll('rect') // returns empty selection
                .data( dataArr ) // binding empty selection with data
                .enter()  // placeholder for data
                    .append('rect')// creating rect element for each data
                    .attr('width',function(d){ return widthScale(d); })
                    .attr('height',50)
                    .attr('fill', function(d){ return color(d);})
                    .attr('y',function(d,i){ return i*100});

canvas.append('g')
        .attr('transform','translate(0,400)')
        .call(axis);