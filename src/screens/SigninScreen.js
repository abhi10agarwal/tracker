import React, { useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SigninScreen = ({ navigation }) => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext)

	return (
		<ImageBackground
			source={{
				uri:
					'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
			}}
			style={styles.backgroundImage}
		>
			<View style={styles.container}>
				<NavigationEvents onWillFocus={clearErrorMessage} />
				<AuthForm
					headerText='Sign In to Track'
					errorMessage={state.errorMessage}
					sumbitButtonText='Sign In'
					onSubmit={signin}
				/>
				<NavLink routeName='Signup' text='No account? Sign Up!' />
			</View>
		</ImageBackground>
	)
}

SigninScreen.navigationOptions = () => {
	return {
		header: () => false
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 20
	},
	backgroundImage: {
		flex: 1,
		width: null,
		height: null
	}
})

export default SigninScreen
