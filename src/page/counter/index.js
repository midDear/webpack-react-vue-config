import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { actions } from './actions'
import {Button} from '@material-ui/core'
class Add extends Component {
	render() {
		const { addNumber, subNumber, randNumber,number } = this.props
		return (
			<div>
				<div>
					{number}
				</div>
				<Button onClick={() => {
					addNumber(2)
				}}>
					add
				</Button>
				<Button onClick={() => {
					subNumber(1)
				}}>
					sub
				</Button>

				<Button onClick={() => {
					randNumber(Math.floor(Math.random() * 100))
				}}>
					rand
				</Button>
			</div>
		)
	}
}
// 将 state转换进来
//
const mapStateToPros = state => {
	return state.counter
}
// 将 action转换进去
const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
}
// 如果要在组建中使用 redux的方法,必须connect
export default connect(mapStateToPros, mapDispatchToProps)(Add)