function loadTable() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
	'use strict';

	document.getElementById('tablica').innerHTML = '<tr><td colspan=5>Initializing...</td></tr>';

	// svaka izmjena podataka neka radi novi izracun
	document.getElementById('vt_kwh').onchange = recalc_table;
	document.getElementById('nt_kwh').onchange = recalc_table;
	document.getElementById('period').onchange = recalc_table;
	recalc_table();

	// popunjavanje tablice
	function recalc_table() {
		// dodaj jedan red za jednog opskrbljivaca
		function addRow(op) {
			var calc_energija = 123;	// FIXME all hadcoded for test
			var calc_mrezarina = 456;
			var calc_total = 789;
			var calc_usteda = 90;

			var row='<tr>' + 
				'<td>' + op.naziv +	  '</td>' +
				'<td>' + calc_energija +  '</td>' +
				'<td>' + calc_mrezarina + '</td>' +
				'<td>' + calc_total +	  '</td>' +
				'<td>' + calc_usteda +	  '</td>' +
				'</tr>';
			return row;
		}

		var period='godišnje';
		if (document.getElementById('period').value == 'month') {
			period='mjesečno';
		}
		document.getElementById('h_energija').innerHTML  = 'Energija ' + period + ' [kn]';
		document.getElementById('h_mrezarina').innerHTML = 'Mrežarina ' + period + ' [kn]';
		document.getElementById('h_total').innerHTML = 'Ukupno ' + period + ' [kn]';
		document.getElementById('h_usteda').innerHTML = 'Ušteda ' + period + ' [kn]';;


		document.getElementById('l_vt').childNodes[0].nodeValue='Potrošnja ' + period + ' VT [kWh]';	// modifying .innerText also nukes <input> field in FF60 :(
		document.getElementById('l_nt').childNodes[0].nodeValue='Potrošnja ' + period + ' NT [kWh]';

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
