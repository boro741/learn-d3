var dataArr = [30,40,50];

            var canvas = d3.select('body')
                            .append('svg')
                            .attr('width',500)
                            .attr('height',500);
            
            var bars = canvas.selectAll('rect') // returns empty selection
                            .data( dataArr ) // binding empty selection with data
                            .enter()  // placeholder for data
                                .append('rect')// creating rect element for each data
                                .attr('width',function(d){ return d * 10; })
                                .attr('height',50)
                                .attr('y',function(d,i){ return i*100});