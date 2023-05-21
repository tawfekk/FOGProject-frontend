export default {
	updateChart: async () => {
		await storeValue('type',typePieChart.selectedDataPoint);
		assetsByMake.run()
		return(assetsByMake.data)}
}