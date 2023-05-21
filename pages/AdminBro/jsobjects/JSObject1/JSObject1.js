export default {
	table: () => {
		var hostlist = {}
		hostlist = hosts.data.hosts.map((host) => ({
			label: host.name,
			value: host.id,
			user: host.inventory.primaryUser
		}));
		var table = []
		for (let h of hostlist) {
			var errors = "0"
			let validHostJobs = snapintask.data.snapintasks.filter(task => task.state.name !== "Cancelled" && task.snapinjob.hostID === h.value)

			for (let snapinid of [...new Set(validHostJobs.map(job => job.snapin.id).filter(id => id).sort())]) {
				let returnArr = validHostJobs.filter(job => job.snapin.id === snapinid).map(job => job.return);
				errors += returnArr[returnArr.length - 1];
			}

			const containsNonZero = /[1-9]/.test(errors);
			var compliant = "" 
			if (containsNonZero) {
			 compliant = false
			} else {
			 compliant = true
			}
			var obj = {}
			obj["PC"] = h.label
			obj["Compliant"] = compliant
			obj["Detaljer"] = `http://10.20.10.51/fog/management/index.php?node=host&sub=edit&id=${h.value}#host-snapin-history`
			obj["PC_id"] = h.value
			obj["Bruger"] = h.user
			table.push(obj) 
		}
		return table
	},
	compliant: (value) => {
		if (value){return "endorsed"}
		else {return "error"}
	},
	compliantcolor: (value) => {
		if (value){return "#4ade80"}
		else {return "#ef4444"}
	},
		snapintasktable: (value) => {
		return snapintask.data.snapintasks.filter(task => task.state.name !== "Cancelled" && task.snapinjob.hostID === value)
	}
}