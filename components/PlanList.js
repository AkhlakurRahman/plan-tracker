import React from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function PlanList({ storePlans, setStorePlans }) {
	const handleDelete = (id) => {
		setStorePlans((currentPlans) => {
			return currentPlans.filter((plan) => plan.id !== id);
		});
	};

	return (
		<FlatList
			data={storePlans}
			renderItem={(plan) => (
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => handleDelete(plan.item.id)}
				>
					<View style={styles.listItems}>
						<Text>{plan.item.value}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	listItems: {
		padding: 10,
		backgroundColor: '#e3e3e3',
		marginVertical: 10,
		borderColor: '#ccc',
		borderWidth: 1,
	},
});
