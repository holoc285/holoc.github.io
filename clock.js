function clock(){
	var d = new Date(),
	 	h = d.getHours(),
	 	m = d.getMinutes(),
	 	s = d.getSeconds(),
	 	y = d.getYear(),
	 	mon = d.getMonth(),
	 	day = d.getDay(),
	 	ngay = d.getDate(),
		thu = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"),
    	thang = new Array("Tháng 01", "Tháng 02", "Tháng 03", "Tháng 04", "Tháng 05", "Tháng 06", "Tháng 07", "Tháng 08", "Tháng 09", "Tháng 10", "Tháng 11", "Tháng 12");
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}
	if (h < 10) {
		h = "0" + h;
	}
	if (y < 1000) {
		y += 1900;
	}
	document.getElementById('hms').innerHTML = h + ":" + m + ":" + s + "<br/>" + thu[day] + "," + " " + ngay + " " + thang[mon] + " " + y;
	setTimeout("clock()",1000);
}
//clock();