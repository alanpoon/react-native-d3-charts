import React, { PureComponent } from 'react';
class Layer extends React.Component{
  constructor(){
    super()
    this.x = d3.scale.scaleLinear();
    this.y = d3.scale.scaleLinear();
  }

  xScale = function(scale){
    this.x = scale;
  }
  yScale = function(scale){
    this.y = scale;
  }
  colorSet = function(scaleName){
    this.colors =scaleName;
  }
  colorMode = function(scaleType){
    this.scaleType = scaleType;
  }
  customThresholds = function(val){
    this.customThresholds = val;
  }
  id = function(){
    return this.id;
  }
  title = function(t){
    this.name =t;
  }
}

export default Layer;