// Matija Nalis <mnalis-git@voyager.hr> started 20181123 under GPLv3+
// on https://github.com/mnalis/struja_cijene
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
		var period='godišnje';
		var mjeseci=12;
		if (document.getElementById('period').value == 'month') {
			period='mjesečno';
			mjeseci=1;
		}

		document.getElementById('h_energija').innerHTML  = 'Energija ' + period + ' [kn]';
		document.getElementById('h_mrezarina').innerHTML = 'Mrežarina ' + period + ' [kn]';
		document.getElementById('h_total').innerHTML = 'Ukupno ' + period + ' [kn]';
		document.getElementById('h_usteda').innerHTML = 'Ušteda ' + period + ' [kn]';;

		document.getElementById('l_vt').childNodes[0].nodeValue='Potrošnja ' + period + ' VT:';	// modifying .innerText also nukes <input> field in FF60 :(
		document.getElementById('l_nt').childNodes[0].nodeValue='Potrošnja ' + period + ' NT:';

		var vt_kwh = +document.getElementById('vt_kwh').value;		// convert string to number, otherwise vt_kwh+nt_kwh becomes a huge number!
		var nt_kwh = +document.getElementById('nt_kwh').value;

		var total_univerzalna = 'UNDEF';
		// dodaj jedan red za jednog opskrbljivaca
		function addBigRow(op) {
			var calc_energija  = vt_kwh * op.kwh_vt_cijena     + nt_kwh * op.kwh_nt_cijena;
			var calc_mrezarina = vt_kwh * op.kwh_ods_vt_cijena + nt_kwh * op.kwh_ods_nt_cijena + mjeseci * op.mj_naknada_omm;
			var calc_razno     = (vt_kwh + nt_kwh) * (op.kwh_solidarna + op.kwh_oieik) - op.mj_popust + mjeseci * op.mj_naknada_opskrba;
			var calc_osnovica  = calc_energija + calc_mrezarina + calc_razno;
			var calc_porez	   = calc_osnovica * op.pct_pdv;
			var calc_total	   = calc_osnovica + calc_porez;
			if (total_univerzalna == 'UNDEF') { total_univerzalna = calc_total; }
			var calc_usteda    = total_univerzalna - calc_total;
			var class_usteda   = calc_usteda > 0 ? 'plus' : 'minus';

			var allTotal = 0;	// total so far
			var subTotal = 0;	// reset after every subtotal print

			// first arguments is <tr> class if nonempty; all others are <td> values
			function addSmallRow_html() {
				var klasa=arguments[0];
				var htmlRow='<tr>';
				if (klasa) { htmlRow = '<tr class="' + klasa + '">' }
				for (var i=1, numArgs = arguments.length; i<numArgs; i++){
					htmlRow = htmlRow + '<td>' + arguments[i] + '</td>';
				}
				return htmlRow + '</tr>';
			}

			// shows current Total (without changing allTotal or subTotal)
			function addSmallRow_total(desc) {
				var oldTotal = allTotal;
				var oldsubTotal = subTotal;
				var htmlRow = addSmallRow_html ('total', desc, '', '', allTotal.toFixed(2));
				allTotal = oldTotal;
				subTotal = oldsubTotal;
				return htmlRow;
			}

			// shows current subTotal (and reset it to zero), without changing allTotal
			function addSmallRow_subtotal(desc) {
				var oldTotal = allTotal;
				var htmlRow = addSmallRow_html ('total', desc, '', '', subTotal.toFixed(2));
				allTotal = oldTotal;
				subTotal = 0;
				return htmlRow;
			}

			// returns op["key_name"] multiplied by "mul"
			function addSmallRow_mul(key_name, mul) {
				var jed_cijena = op[key_name];
				var iznos = (mul * jed_cijena).toFixed(2);
				subTotal += +iznos;
				allTotal += +iznos;
				return addSmallRow_html ('', key_name, mul, jed_cijena, iznos);
			}

			var row='<tr title="' + op.notes  + '">' + 
				'<td class="naziv">' + op.naziv					+ '</td>' +
				'<td>' + calc_energija.toFixed(2)				+ '</td>' +
				'<td>' + calc_mrezarina.toFixed(2)				+ '</td>' +
				'<td>' + calc_total.toFixed(2)					+ '</td>' +
				'<td class="' + class_usteda + '">' + calc_usteda.toFixed(2)	+ '</td>' +
				'</tr>' +
				'<tr><td></td>' +
				'<td colspan=4>' +
				'<table style="width: 98%;">' +
				addSmallRow_mul ('kwh_vt_cijena', vt_kwh) +
				addSmallRow_mul ('kwh_nt_cijena', nt_kwh) +
				addSmallRow_subtotal ('Opskrbljivač cijena električne energije') +
				addSmallRow_mul ('kwh_ods_vt_cijena', vt_kwh) +
				addSmallRow_mul ('kwh_ods_nt_cijena', nt_kwh) +
				addSmallRow_mul ('mj_naknada_omm', mjeseci) +
				addSmallRow_subtotal ('HEP ODS korištenje mreže') +
				addSmallRow_mul ('kwh_oieik', vt_kwh+nt_kwh) +
				addSmallRow_mul ('kwh_solidarna', vt_kwh+nt_kwh) +
				addSmallRow_mul ('mj_naknada_opskrba', mjeseci) +
				addSmallRow_mul ('mj_popust', -mjeseci) +
				addSmallRow_total ('Osnovica') +
				addSmallRow_mul ('pct_pdv', allTotal.toFixed(2)) +
				addSmallRow_total ('Total') +
				'</table>' +
				'</td>' +
				'</tr>'
			return row;
		}

		var tablica = '';
		var i = 0;
		while (i < opskrbljivaci.cfg.length) {
			tablica = tablica + addBigRow(opskrbljivaci.cfg[i++]);
		};

		document.getElementById('tablica').innerHTML = tablica;
		document.getElementById('zadnji_update').innerHTML = last_updated;
	}

}

loadTable();
