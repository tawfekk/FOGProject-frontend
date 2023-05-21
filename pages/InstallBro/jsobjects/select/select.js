export default {
   snapin: () => {
    var workingvar = snapins.data.snapins;
    return workingvar.map((snapin) => ({
      label: snapin.name,
      value: snapin.id,
    }));
  },
	  host: () => {
    var workingvar = hosts.data.hosts;
    return workingvar.map((host) => ({
      label: host.name,
      value: host.id,
    }));
  }
}
