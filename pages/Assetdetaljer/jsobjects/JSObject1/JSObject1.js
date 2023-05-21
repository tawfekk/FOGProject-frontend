export default {
	selectType: () => {
		if(assetTypeSelect.selectedOptionValue.length==0){
			return getAssets.data
		}
		else{
			return(getAssets.data.filter(word => word.type.toLowerCase().includes(assetTypeSelect.selectedOptionValue)))
		}
	},
	generateID: () => {
		const lastID= getAssets.data[0].id
		const newID= (lastID+1)
		return (newID)
	}
}