import React, { PureComponent } from 'react';
import Svg, {G, Defs,Stop,Pattern,RadialGradient,Rect,Circle} from "react-native-svg";
import * as scale from "d3-scale";
import * as shape from "d3-shape";
import * as array from "d3-array";
import Layer from './Layer';
const d3 = {
  scale,
  shape,
  array
};

type Props={

}
class Floorplan extends PureComponent <Props>{
  constructor(){
    super()
    this.layers=[];
    this.panZoomEnabled=true;
    this.maxZoom=5;
    this.xScale = d3.scale.scaleLinear();
    this.yScale = d3.scale.scaleLinear();
  }
  render(){
    var width = this.xScale.range()[1] - this.xScale.range()[0],
    height = this.yScale.range()[1] - this.yScale.range()[0];
    return (<Svg height={height} width={width}>
      <Defs>
        <RadialGradient id="metal-bump" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" style={{"stop-color": 'rgb(170, 170, 170)', 'stop-opacity': 0.6}}></Stop>
          <Stop offset="100%" style={{'stop-color': 'rgb(204, 204, 204)', 'stop-opacity': 0.5,}}></Stop>
        </RadialGradient>
        <Pattern patternUnits="userSpaceOnUse" x="0" y="0" width="3" height="5">
          <Rect height="3" width="3" stroke="none" fill="rgba(204,204,204,0.5)"></Rect>
          <Circle cx="1.5" cy="1.5" r="1" stroke="none" fill="url(#metal-bump)"></Circle>
        </Pattern>
      </Defs>
      <G height={height} width={width}>
        <Rect pointer-events="all" style={{opacity:0}}></Rect>
        {this.layers}
      </G>
    </Svg>)
  }
}

export default Floorplan;