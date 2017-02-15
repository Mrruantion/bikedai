import React, { Component } from 'react'
import ReactDom from 'react-dom'




export default class AreaTwo extends React.Component{
	 constructor(props){
        super(props);
        this.state = {
			collapse: false,
			updown: false,
		}
		this.mapinit = this.mapinit.bind(this);
        this.onCollapseChange = this.onCollapseChange.bind(this);
		this.onUpdown = this.onUpdown.bind(this);
	 }

    componentDidMount() {
		if(typeof WMap!='undefined'&&WMap.ready){//已经加载好
            this.mapinit();
        }else{
            window.addEventListener('W.mapready',this.mapinit);
        }              //启用滚轮放大缩小
    }
	componentWillReceiveProps   (){
        this.mapinit(); 
    }
	mapinit(){
       	var map = new BMap.Map("allmap");            // 创建Map实例
		map.addControl(new BMap.NavigationControl());
		map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
		map.centerAndZoom("福州",0);      // 初始化地图,用城市名设置地图中心点                
		map.enableScrollWheelZoom();       
    }
    onCollapseChange() {
		this.setState({
			collapse: !this.state.collapse
		})
	}
	onUpdown() {
		this.setState({
			updown: !this.state.updown
		})
	}
    render(){
        const collapse = this.state.collapse;
        const updown = this.state.updown
        return(
            <div className="area">
                <div id="allmap" className="main-box1"></div>
                <div className={ !collapse? "left-direct" : "left-direct lf" } >
					<div className="direct-top">
						<div className="direct-top-tit">
							<span className="icon icon-refresh fl ml5" onClick={() => {location.reload()}}></span>
							<span id="treeTitle" className="fl ht">全国行政区域</span>
							<span id="updown" className={updown ? "icon icon-upblack fr rotate180":"icon icon-upblack fr rotate0"} onClick={this.onUpdown}></span>
						</div>
						<div className={updown ? "wrapper1 hide wrapper-common":"show wrapper1 wrapper-common"} >
						</div>
					</div>
					<div className="direct-bottom">
                        <div className="direct-head">
                            <ul className="noname clearfix">
                                <li className="on" style={{width:260,borderRight:'none'}}>所有类型</li>
                            </ul>
                            <div className="noname-text">
                                <div>
                                    <ul className="direct-tit sec switch fives">
                                        <li className="on"><i>全部</i></li>
                                        <li><i>二手车</i></li>
                                        <li><i>车管所</i></li>
                                        <li><i>二抵场</i></li>
                                        <li className="last"><i>娱乐场所</i></li>
                                    </ul>								
                                </div>	
                            </div>
                            <div className="gp-tit">
                                <span className="qxChk ml15 crp">全选</span>
                                <span className="ml15">名称</span>
                                <i className="fr mr10">状态</i>
                            </div>
                        </div>
                        <div className="wrapper-wrap">
                            <div className="addzuname none">
                                <input id="groupName" type="text" className="text" value="" placeholder="设备名称" />
                                <span className="addyes">确定</span>
                                <span>取消</span>
                            </div>
                            <div id="wrapper" className="wrapper2 wrapper-common">
                                <div  className="direct-table-wrap direct-fir">	
                                    <div id="area_in_tree" >
                                    </div>					
                                </div>	
                            </div>
                        </div>		
                    </div>
					<div className={ !collapse ? "row-btn" : "row-btn on"} onClick={this.onCollapseChange}></div>  
				</div>
            </div>
        )
    }
} 