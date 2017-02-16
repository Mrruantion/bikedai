import React, { Component } from 'react'
import Echart from 'echarts/lib/echarts'

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/geo')
require('echarts/lib/component/visualMap')
require('echarts/map/js/china.js')

const schema = [
    {name: '测试专用111', index: 0, text: '测试专用111'},
    {name: '0', index: 1, text: '数量'},
    {name: '50%', index: 2, text: '比例'}
];
const option1 = {
    backgroundColor: '#404a59',
    tooltip : {
        trigger: 'item',
        formatter: function (obj) {
            return  schema[0].text + '<br>'
                + schema[1].text + '：' + '2'+ '<br>'
                + schema[2].text + '：' + '100%' + '<br>';
        }
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
            data: [{"name":"测试专用111","value":[119.31,25.52]}],
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
const option2 = {
    backgroundColor: '#404a59',
    tooltip : {
        trigger: 'item',
        formatter: function (obj) {
            return  schema[0].text + '<br>'
                + schema[1].text + '：' + '1'+ '<br>'
                + schema[2].text + '：' + '50%' + '<br>';
        }
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
            data: [{"name":"测试专用111","value":[119.31,25.52]}],
            symbolSize: [15,15],    /*标记的大小*/
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
                    color: '#049b93',
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
        this.state = {
            btn: true,
            option: option1,
        }
        this.getData = this.getData.bind(this);
        this.btnChange = this.btnChange.bind(this);
        
	}
	componentDidMount(){
		var mapChart = Echart.init(this.refs.mapchart);
		mapChart.setOption(this.state.option);
	}
    componentDidUpdate  (prevProps, prevState){
        if(prevState){
            var mapChart = Echart.init(this.refs.mapchart);
            mapChart.setOption(this.state.option);
        }
    }
    btnChange() {
        this.setState({
            btn: !this.state.btn
        }) 
    }
    getData(n){
        const dsr = W('.dsr').children;
        for(var i = 0; i<dsr.length; i++){
            dsr[i].className = '';
        }
        if(n == 1){
            W('#logo').src = './images/map_trace_logo.png';
            W('#ull1').style.display = 'none';
            W('#ull2').style.display = 'block';
            W('#state-show').children[0].style.display = "block";
            W('#state-show').children[1].style.display = "none";
            dsr[0].className = 'fir on';
            dsr[1].className = 'sec';
            this.setState({
                option: option2
            });  
        }else if(n == 2) {
            W('#logo').src = './images/map_pay_logo.png';
            W('#ull1').style.display = 'block';
            W('#ull2').style.display = 'none';
            W('#state-show').children[0].style.display = "none";
            W('#state-show').children[1].style.display = "block";
            dsr[0].className = 'fir';
            dsr[1].className = 'sec on';
            this.setState({
                option: option1
            });
            
        }
    }
    
	render(){
        const btn = this.state.btn
		return(
			<div className="mapchart">
				 <div className="mapchart"  ref="mapchart"></div>
                 <div className="map-logo">
                    <img id="logo" src="./images/map_pay_logo.png" alt="" />
                </div>
                <ul className="label-list qs-left" id="ull1" >
                    <li className="blu">正常(<font id="f11">2</font>)
                    </li>
                    <li className="red">逾期(<font id="f12">0</font>)
                    </li>
                    <li className="pur">不良(<font id="f13">0</font>)
                    </li>
                    <li className="ora">拖车(<font id="f14">0</font>)
                    </li>
                    <li className="skb">结清(<font id="f15">0</font>)
                    </li>
                </ul>
                <ul className="label-list qs-left" id="ull2"  style={{display: 'none'}}>
                    <li className="blu">正常(<font id="f21">1</font>)
                    </li>
                    <li className="ora">可疑(<font id="f22">0</font>)
                    </li>
                    <li className="red">高危(<font id="f23">1</font>)
                    </li>
                </ul>
                <div className="label-list qs-right">
                    <div className="tit clearfix">
                        <div id="state" className="dsf fl" onClick={this.btnChange}></div>
                        <div className="dsr fr switch">
                            <span className="fir" onClick={() => this.getData(1)}>数据实时动态</span>
                            <span className="sec on" onClick={() => this.getData(2)}>回款实时动态</span>
                        </div>
                    </div>
                    <div id="state-show" style={btn?{width: '100%',minHeight: 400,margin: '10px auto 0',display:'block'}:{width: 100,height:300,backgroundColor: '#fff',display:'none'}}>
                        <div className="shuju" style={{display: 'none'}}>
                            <Tabs defaultActiveKey="1" size="small">
                                <TabPane tab="正常" key="1"></TabPane>
                                <TabPane tab="可疑" key="2"></TabPane>
                                <TabPane tab="高危" key="3"></TabPane>
                            </Tabs>
                            <table className="label-tab-top">
                                <tbody>
                                    <tr>
                                        <td width="10%">排名</td>
                                        <td width="55%">所属组织</td>
                                        <td width="15%">数量</td>
                                        <td width="20%">比例</td>
                                    </tr>
                                </tbody>
						    </table>
                            <div className="wrappers">
                                
                            </div>
                            <table className="label-tab-bottom w" id="tb21">
                                <tbody>
                                    <tr>
                                        <td colSpan="4">
                                            <hr className="lines" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="65%" colSpan="2">全公司</td>
                                        <td id="t21" width="15%"></td>
                                        <td id="p21" width="20%"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="huikuan">
                            <Tabs defaultActiveKey="1" size="small">
                                <TabPane tab="正常" key="1"></TabPane>
                                <TabPane tab="逾期" key="2"></TabPane>
                                <TabPane tab="不良" key="3"></TabPane>
                                <TabPane tab="拖车" key="4"></TabPane>
                                <TabPane tab="结清" key="5"></TabPane>
                            </Tabs>
                            <table className="label-tab-top">
                                <tbody>
                                    <tr>
                                        <td width="10%">排名</td>
                                        <td width="55%">所属组织</td>
                                        <td width="15%">数量</td>
                                        <td width="20%">比例</td>
                                    </tr>
                                </tbody>
						    </table>
                            <div className="wrappers">
                                
                            </div>
                            <table className="label-tab-bottom w" id="tb21">
                                <tbody>
                                    <tr>
                                        <td colSpan="4">
                                            <hr className="lines" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="65%" colSpan="2">全公司</td>
                                        <td id="t21" width="15%"></td>
                                        <td id="p21" width="20%"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
			</div>	
		)
	}
}

