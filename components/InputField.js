import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function InputField({ setStorePlans }) {
	const [plan, setPlan] = useState('');

	const handlePlan = (enteredText) => {
		setPlan(enteredText);
	};

	const addPlanHandler = () => {
		setStorePlans((currentPlan) => [
			...currentPlan,
			{ id: Math.random().toString(), value: plan },
		]);
		setPlan('');
	};

	return (
		<View style={styles.inputConatiner}>
			<TextInput
				placeholder='Your plan'
				style={styles.input}
				onChangeText={handlePlan}
				value={plan}
			/>
			<Button title='ADD' onPress={addPlanHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputConatiner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	input: {
		width: '80%',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		padding: 10,
	},
});
