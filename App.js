import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import InputField from './components/InputField';
import PlanList from './components/PlanList';

export default function App() {
	const [storePlans, setStorePlans] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const addPlanHandler = (plan) => {
		setStorePlans((currentPlan) => [
			...currentPlan,
			{ id: Math.random().toString(), value: plan },
		]);
		setShowModal(false);
	};

	const cancelShowModal = () => {
		setShowModal(false);
	};

	return (
		<View style={styles.wrapper}>
			<Button title='Add New Plan' onPress={() => setShowModal(true)} />

			<InputField
				visible={showModal}
				addPlanHandler={addPlanHandler}
				cancelShowModal={cancelShowModal}
			/>

			<PlanList
				storePlans={storePlans}
				setStorePlans={setStorePlans}
				setShowModal={setShowModal}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 30,
	},
});
