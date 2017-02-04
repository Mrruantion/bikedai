import React, { Component } from 'react'
import Echart from 'echarts/lib/echarts'

require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/geo')
require('echarts/lib/component/visualMap')
require('echarts/map/js/china.js')

var data = [
     {name: '测试专用111', value: 273}
];
var geoCoordMap = {
    '测试专用111':[119.31,25.52],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

const option = {
    backgroundColor: '#404a59',
    tooltip : {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
	 series : [
        {
            name: '测试专用111',
            type: 'effectScatter',
            coordinateSystem: 'geo', /*该系列使用的坐标系*/
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: [20,20],    /*标记的大小*/
            showEffectOn: 'render', /*绘制完成后显示特效*/
            rippleEffect: {
                brushType: 'stroke' /*波纹的绘制方式*/
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}', /*标签内容格式器*/
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#009b93',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

export default class RiskMap extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var mapChart = Echart.init(this.refs.mapchart);
		mapChart.setOption(option);
	}
	render(){
		return(
			<div className="mapchart">
				 <div className="mapchart"  ref="mapchart"></div>
			</div>	
		)
	}
}

