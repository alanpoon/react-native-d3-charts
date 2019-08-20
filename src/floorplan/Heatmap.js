import * as scale from "d3-scale";
import  {select,event} from "d3-selection";
import * as transition from "d3-transition";
import * as zoom from "d3-zoom";
import * as array from "d3-array";
import {format} from "d3-format";
import * as svg from 'd3-svg';
import {Tooltip,Text} from 'react';
import Svg, {G, Defs,Stop,Pattern,RadialGradient,Rect,Circle,Path} from "react-native-svg";
const d3 = {
  scale,
	select,
	transition,
	zoom,
	event,
	array,
	format,
	svg
};

import Layer from './Layer';
class Cell{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
class IrregularCell{
  constructor(points,color){
    this.points =points;
    this.color= color;
  }
}
class Heatmap extends Layer{
  constructor(){
    super();
    this.title = "heatmap";
  }
  render(data){
    var line = d3.svg.line()
		.x(function(d) { return this.x(d.x); })
		.y(function(d) { return this.y(d.y); });
    return (
      <G>
        <Rect style={{opacity:0,fill:'rgb(0,0,255)'}} pointer-events="all" x="0" y="0" width={this.width} height={this.height}></Rect>
        {data.map.forEach(function(element) {
            if (element instanceof Cell){
              return (<Rect style={{opacity: 0.6}} x={this.x(element.x)} y={this.y(element.y)} height={Math.abs(this.y(data.binSize) - this.y(0))} width={Math.abs(this.x(data.binSize) - this.x(0))}>
                <Text></Text>
              </Rect>);
            }else{
              return(<Path vector-effect="non-scaling-stroke" pointer-events="all" d={line(element.points) + "Z"} style={{cursor: "move"}} fill={element.color}>
                <Tooltip>
                  <Text>Hi</Text>
                </Tooltip>
              </Path>);
            }
          
        }
        )}
      </G>
    )
  }
}

export default Heatmap;