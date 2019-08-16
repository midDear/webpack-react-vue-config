import {createMuiTheme} from '@material-ui/core/styles'

const palette = {
	secondary: {
		light: '#757ce8',
		main: '#3f50b5',
		dark: '#002884',
		contrastText: '#fff'
	},
	primary: {
		light: '#ff7961',
		main: '#f44336',
		dark: '#ba000d',
		contrastText: '#000'
	},
	type: 'light'
}
const typography = {
	fontFamily: [
		'Gilbert',
		'Roboto'
	].join(','),
}
export default createMuiTheme({palette, typography})