// Matija Nalis <mnalis-git@voyager.hr> started 20181123 under GPLv3+
// on https://github.com/mnalis/struja_cijene
function loadTable() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
	'use strict';

	document.getElementById('table_opskrbljivaci').innerHTML = '<tr><td colspan=5>Initializing...</td></tr>';

	// svaka izmjena podataka neka radi novi izracun
	document.getElementById('vt_kwh').onchange = recalc_table;
	document.getElementById('nt_kwh').onchange = recalc_table;
	document.getElementById('period').onchange = recalc_table;
	document.getElementById('brojilo').onchange = recalc_table;
	document.getElementById('def_trosak_uplate').onchange = recalc_table;
	// i izracun defaultne tablice na pocetku
	recalc_table();

	// popunjavanje tablice
	function recalc_table() {
		var period='godišnje';
		var mjeseci=12;
		var def_trosak_uplate = document.getElementById('def_trosak_uplate').value;
		if (document.getElementById('period').value == 'month') {
			period='mjesečno';
			mjeseci=1;
		}

		document.getElementById('h_energija').innerHTML  = 'Energija ' + period + ' [kn]';
		document.getElementById('h_mrezarina').innerHTML = 'Mrežarina ' + period + ' [kn]';
		document.getElementById('h_total').innerHTML = 'Ukupno ' + period + ' [kn]';
		document.getElementById('h_usteda').innerHTML = 'Ušteda ' + period + ' [kn]';

		document.getElementById('l_vt').childNodes[0].nodeValue='Potrošnja ' + period + ' VT:';	// modifying .innerText also nukes <input> field in FF60 :(
		document.getElementById('l_nt').childNodes[0].nodeValue='Potrošnja ' + period + ' NT:';

		var vt_kwh = +document.getElementById('vt_kwh').value;		// convert string to number, otherwise vt_kwh+nt_kwh becomes a huge number!
		var nt_kwh = +document.getElementById('nt_kwh').value;

		var total_univerzalna = 'UNDEF';
		// dodaj jedan red za jednog opskrbljivaca
		function addBigRow(count, op) {
			var totals = [];	// list of (sub)totals

			var allTotal = 0;	// total so far
			var subTotal = 0;	// reset after every subtotal print
			var mj_trosak_uplate = op.ima_mj_trosak_uplate * def_trosak_uplate;

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
				var value = allTotal.toFixed(2);
				totals.push(value);
				var htmlRow = addSmallRow_html ('total', desc, '', '', value);
				allTotal = oldTotal;
				subTotal = oldsubTotal;
				return htmlRow;
			}

			// shows current subTotal (and reset it to zero), without changing allTotal
			function addSmallRow_subtotal(desc) {
				var oldTotal = allTotal;
				var value = subTotal.toFixed(2);
				totals.push(value);
				var htmlRow = addSmallRow_html ('total', desc, '', '', value);
				allTotal = oldTotal;
				subTotal = 0;
				return htmlRow;
			}

			// returns row with description  and jed_cijena*kolicina (and increse allTotal and subTotal accordingly)
			function addSmallRow_mul3 (desc, jed_cijena, kolicina) {
				var iznos = (kolicina * jed_cijena).toFixed(2);
				subTotal += +iznos;
				allTotal += +iznos;
				return addSmallRow_html ('', desc, kolicina, jed_cijena, iznos);
			}
			// returns op["key_name"] multiplied by "kolicina", and increse allTotal and subTotal accordingly
			function addSmallRow_mul(key_name, kolicina) {
				var jed_cijena = op[key_name];
				if (kolicina < 0) { kolicina = -kolicina; jed_cijena = -jed_cijena; }	// just for nicer output
				return addSmallRow_mul3 (key_name, jed_cijena, kolicina);
			}

			// returns row with some big description
			function addSmallRow_notes(desc,value) {
				return '<tr><td>' + desc + '</td><td colspan=3 class="notes">' + value + '</td></tr>';
			}
			// returns row with HREF
			function addSmallRow_href(desc,href) {
				return '<tr><td>' + desc + '</td><td colspan=3 class="notes"><A target="_blank" HREF="' + href + '">Otvori</A></td></tr>';
			}

			var row_details =
				'<tr class="detalji0" id="_detail_' + count + '">' +
				'<td colspan=5>' +
				'<table style="width: 98%;">' +
				'<tr><th>Naziv</th><th>Količina</th><th>Cijena</th><th>Iznos</th></tr>' +
				addSmallRow_mul ('kwh_vt_cijena', vt_kwh) +
				addSmallRow_mul ('kwh_nt_cijena', nt_kwh) +
				addSmallRow_subtotal ('Opskrbljivač - cijena električne energije') +
				addSmallRow_mul ('kwh_ods_distribucija_vt_cijena', vt_kwh) +
				addSmallRow_mul ('kwh_ods_distribucija_nt_cijena', nt_kwh) +
				addSmallRow_mul ('kwh_ods_prijenos_vt_cijena', vt_kwh) +
				addSmallRow_mul ('kwh_ods_prijenos_nt_cijena', nt_kwh) +
				addSmallRow_mul ('mj_naknada_omm', mjeseci) +
				addSmallRow_subtotal ('HEP ODS - korištenje mreže') +
				addSmallRow_mul ('kwh_oieik', vt_kwh+nt_kwh) +
				addSmallRow_mul ('kwh_solidarna', vt_kwh+nt_kwh) +
				addSmallRow_mul ('mj_naknada_opskrba', mjeseci) +
				addSmallRow_mul ('mj_popust', -mjeseci) +
				addSmallRow_subtotal ('Ostale naknade') +
				addSmallRow_total ('Porezna osnovica') +
				addSmallRow_mul ('pct_pdv', allTotal.toFixed(2)) +
				addSmallRow_total ('Total iznos računa') +
				addSmallRow_mul3 ('mj_trosak_uplate', mj_trosak_uplate, mjeseci) +
				addSmallRow_total ('Sveukupni trošak') +
				addSmallRow_notes ('Notes', op.notes) +
				addSmallRow_href  ('Homepage', op.web_site) +
				addSmallRow_href  ('Cjenik', op.web_cjenik) +
				'</table>' +
				'</td>' +
				'</tr>';

			var calc_energija  = +totals[0];
			var calc_mrezarina = +totals[1];
			var calc_total	   = +totals[totals.length - 1];	// last total is "sveukupni trosak"
			if (total_univerzalna == 'UNDEF') { total_univerzalna = calc_total; }
			var calc_usteda    = total_univerzalna - calc_total;
			var class_usteda   = calc_usteda > 0 ? 'plus' : 'minus';

			var row_summary =
				'<tr onClick="tr_toggle(' + count + ')" title="' + op.notes  + '">' +
				'<td class="naziv">' + op.naziv					+ '</td>' +
				'<td>' + calc_energija.toFixed(2)				+ '</td>' +
				'<td>' + calc_mrezarina.toFixed(2)				+ '</td>' +
				'<td>' + calc_total.toFixed(2)					+ '</td>' +
				'<td class="' + class_usteda + '">' + calc_usteda.toFixed(2)	+ '</td>' +
				'</tr>';
			return row_summary + row_details;
		}

		var table_opskrbljivaci = '';
		var i = 0;
		while (i < opskrbljivaci.cfg.length) {
			table_opskrbljivaci = table_opskrbljivaci + addBigRow(i, opskrbljivaci.cfg[i++]);
		};

		document.getElementById('table_opskrbljivaci').innerHTML = table_opskrbljivaci;
		document.getElementById('zadnji_update').innerHTML = last_updated;
	}

}

// toggle row details visibility
function tr_toggle(id) {
	'use strict';
	var detail_id = '_detail_' + id;
	var new_class = document.getElementById(detail_id).className == 'detalji0' ? 'detalji1' : 'detalji0';
	document.getElementById(detail_id).className = new_class;
}

loadTable();
