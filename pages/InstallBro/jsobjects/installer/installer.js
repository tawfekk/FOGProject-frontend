export default {
  status() {
    if (status.data.count == 0) {
			clearInterval('timer');
			clearInterval('timer2');
	    closeModal('Modal2');
			}
	  status.data.count = 1
    }
  }
