var odds = "";
		var x = 1;
		while (x <= 51) {
			if (x % 2 === 1) {
				odds += x + ", ";
			}
			x++;
		}
		document.getElementById("odds").textContent = odds;

		var evens = "";
		var y = 1;
		do {
			if (y % 2 === 0) {
				evens += y + ", ";
			}
			y++;
		} while (y <= 50);
		document.getElementById("evens").textContent = evens;

		var sums = "";
		var z = 1;
		for (z = 1; z <= 4096; z += z) {
			sums += z + ", ";
		}
		document.getElementById("sums").textContent = sums;
