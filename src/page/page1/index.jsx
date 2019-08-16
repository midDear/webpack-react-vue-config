import React from 'react'
import {FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {Button} from '@material-ui/core'
import {types} from '../appActions'

function Page1({dispatch,lang}) {
	return <div>
		hello page1
		<FormattedMessage id="title"
		                  tagName='p'
		                  values={{name: 'shaokun'}}/>
		<Button onClick={() => {
			dispatch({
				type: types.action_change_lang,
				lang: lang === 'zh' ? 'en' : 'zh'
			})
		}}>
			<FormattedMessage id="btn_change_language" />
		</Button>
	</div>
}


export default connect(state=>state.app)(Page1)
