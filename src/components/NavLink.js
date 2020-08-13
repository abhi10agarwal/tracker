import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'
import { Text } from 'react-native-elements'

const NavLink = ({ navigation, text, routeName }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
			<Spacer>
				<Text h4 style={styles.link}>
					{text}
				</Text>
			</Spacer>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	link: {
		marginLeft: 20
	}
})

export default withNavigation(NavLink)
