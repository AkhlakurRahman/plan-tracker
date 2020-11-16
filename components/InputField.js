import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

export default function InputField({
	visible,
	addPlanHandler,
	cancelShowModal,
}) {
	const [plan, setPlan] = useState('');

	const handlePlan = (enteredText) => {
		setPlan(enteredText);
	};

	const handleAddPlan = () => {
		addPlanHandler(plan);
		setPlan('');
	};

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputConatiner}>
				<TextInput
					placeholder='Your plan'
					style={styles.input}
					onChangeText={handlePlan}
					value={plan}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='CANCEL' color='red' onPress={cancelShowModal} />
					</View>
					<View style={styles.button}>
						<Button title='ADD' onPress={handleAddPlan} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputConatiner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	input: {
		width: '80%',
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 10,
	},

	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
	},

	button: {
		width: '40%',
	},
});
