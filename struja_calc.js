function loadTable() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
	'use strict';

	document.getElementById('tablica').innerHTML = '<tr><td colspan=5>Initializing...</td></tr>';

	// svaka izmjena podataka neka radi novi izracun
	document.getElementById('vt_kwh').onchange = recalc_table();
	document.getElementById('nt_kwh').onchange = recalc_table();
	recalc_table();

	// popunjavanje tablice
	function recalc_table() {
		// dodaj jedan red za jednog opskrbljivaca
		function addRow(op) {
			var row='<tr>' + 
				'<td>' + op.naziv +  '</td>' +
				'<td>' + '123' +  '</td>' +
				'<td>' + '234' +  '</td>' +
				'<td>' + '567' +  '</td>' +
				'<td>' + '88' +  '</td>' +
				'</tr>';
			return row;
		}

		document.getElementById('h_energija').innerHTML  = 'Godišnje energija [kn]';
		document.getElementById('h_mrezarina').innerHTML = 'Godišnje korištenje mreže [kn]';
		document.getElementById('h_total').innerHTML = 'Ukupno godišnje [kn]';
		document.getElementById('h_usteda').innerHTML = 'Godišnja ušteda u odnosu na HEP-Univerzalnu [kn]';

		var tablica = '';
		var i = 0;
		while (i < opskrbljivaci.cfg.length) {
			tablica = tablica + addRow(opskrbljivaci.cfg[i++]);
		};

		document.getElementById('tablica').innerHTML = tablica;
		document.getElementById('zadnji_update').innerHTML = last_updated;
	}

}

loadTable();
