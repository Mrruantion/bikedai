import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Echart from 'echarts/lib/echarts';

require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


const chart30ption = {
    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['数量']
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['8月','9月','10月','11月','12月','1月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '数量',
        type: 'line',
        smooth: true,
        data: [0, 0, 1, 0, 0, 1]
    }],
	itemStyle: {
			normal: {
				color: '#108ee9'
			}
		}
};




export default class AreaThree extends React.Component {

    constructor(props){

        super(props);


    }



    componentDidMount(){

        var myChart1 =Echart.init(this.refs.chart1);
        myChart1.setOption(chart30ption);
    }


    render(){
        return(
            <div className="ant-row" style={{marginTop:20}}>


                <div className="console-title console-title-border">
                    <div className="pull-left">
                        <h5>动态折线图</h5>
                    </div>
                </div>


                <div className="ant-col-md-24" style={{width: 378,height: 286}} ref="chart1"></div>



            </div>
        )
    }
}