import React, { useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
		AuthContext
	)

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
					headerText='Sign Up to Track'
					errorMessage={state.errorMessage}
					sumbitButtonText='Sign Up'
					onSubmit={signup}
				/>
				<NavLink routeName='Signin' text='Already account? Sign In!' />
			</View>
		</ImageBackground>
	)
}

SignupScreen.navigationOptions = () => {
	return {
		header: () => false
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		//alignItems: 'center',
		//backgroundColor: '#F5FCFF',
		flexDirection: 'column'
		//borderWidth: 10,
		//borderColor: 'red'
	},
	backgroundImage: {
		flex: 1,
		width: null,
		height: null
	}
})

export default SignupScreen
