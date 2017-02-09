import React, { Component } from 'react'
import ReactDom from 'react-dom'



export default class AreaOne extends React.Component{
	 constructor(props){
        super(props);
		this.mapinit = this.mapinit.bind(this)
	 }

    componentDidMount() {
		if(typeof WMap!='undefined'&&WMap.ready){//已经加载好
            this.mapinit();
        }else{
            window.addEventListener('W.mapready',this.mapinit);
        }              
    }
	componentWillReceiveProps   (){
        this.mapinit(); 
    }
	mapinit(){
       	var map = new BMap.Map("allmap");            // 创建Map实例
		map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
		map.addControl(new BMap.NavigationControl());
		map.centerAndZoom("福州",0);      // 初始化地图,用城市名设置地图中心点                
		map.enableScrollWheelZoom();    
    }
   
	render(){
		return (
			<div>
				<div id="allmap" className="main-box1"></div>
			</div>
		)
	}
}