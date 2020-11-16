import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputField from './components/InputField';
import PlanList from './components/PlanList';

export default function App() {
	const [storePlans, setStorePlans] = useState([]);

	return (
		<View style={styles.wrapper}>
			<InputField setStorePlans={setStorePlans} />

			<PlanList storePlans={storePlans} setStorePlans={setStorePlans} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 30,
	},
});
