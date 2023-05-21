export default {
	assignedhosts () {
	hosts.run()
	return hosts.data.hosts.filter(item => item.inventory.primaryUser).length;
	},
	checkedout () {
	hosts.run()
	return hosts.data.hosts.filter(item => item.inventory.other1 == "checkedout").length;
	}
}