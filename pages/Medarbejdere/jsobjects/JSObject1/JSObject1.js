export default {
	searchByName: () => {
		if(searchName.text.length==0){
			return getEmployees.data
		}
		else{
			return(getEmployees.data.filter(word => word.first_name.toLowerCase().includes(searchName.text.toLowerCase())))
		}
	},
	getDate: () => {
		return(moment().format('DD/MM/YYYY'))
	}
}