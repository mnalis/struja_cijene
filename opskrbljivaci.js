//
// lista opskrbljivaca sa cijenama i popustima
//

var last_updated='2023-12-04';	// autoupdated by Makefile

var op_defaults = {
	'naknada_omm': 1.540,			// poskupljenje od 1.4.2022.
	'naknada_opskrba': 0.982,
	'oieik_cijena': 0.013936,       // obnovljivi izvori energije i kogeneracija
	'solidarna_cijena': 0.003982,
	'pdv': 0.13,

	'kwh_ods_prijenos_jt_cijena': 0.011945,
	'kwh_ods_prijenos_vt_cijena': 0.017254,	// poskupljenje od 1.4.2022.
	'kwh_ods_prijenos_nt_cijena': 0.006636,

	'kwh_ods_distribucija_jt_cijena': 0.029199,
	'kwh_ods_distribucija_vt_cijena': 0.034508,	// poskupljenje od 1.4.2022.
	'kwh_ods_distribucija_nt_cijena': 0.015927,

	'HEP_univerzalna_jt_cijena': 0.070276,
	'HEP_univerzalna_vt_cijena': 0.074789,
	'HEP_univerzalna_nt_cijena': 0.036697,
};

// E.ON common part of the notes
var extranotes_eon = '5kn popusta je kako bi korisnik mogao sam odabrati gdje će platiti račun. Usluga omogućava i korištenje dodatnih pogodnosti Pomoći u kući i Doktor u kući. Još su mogući dodatni mjeseci popusta za dovedene korisnike. https://www.eon.hr/hr/o-nama/dokumenti-i-obrasci.html';

var opskrbljivaci = {

'opis': [
	'naziv opskrbljivača električnom energijom i njegov tarifni model',
	'jednotarifno brojilo - cijena energije 1 kWh (JT: 0-24h)',
	'dvotarifno brojilo - cijena energije 1 kWh u višoj tarifi (VT: od 7-21h zimi, 8-22h ljeti)',
	'dvotarifno brojilo - cijena energije 1 kWh u nižoj tarifi (NT: od 21-7h zimi, 22-8h ljeti)',
	'HEP ODS - jednotarifno brojilo - cijena za distribuciju 1 kWh (JT: 0-24h)',
	'HEP ODS - dvotarifno brojilo - cijena za distribuciju 1 kWh u višoj tarifi (VT: od 7-21h zimi, 8-22h ljeti)',
	'HEP ODS - dvotarifno brojilo - cijena za distribuciju 1 kWh u nižoj tarifi (NT: od 21-7h zimi, 22-8h ljeti)',
	'HEP ODS - jednotarifno brojilo - cijena za distribuciju 1 kWh (JT: 0-24h)',
	'HEP ODS - dvotarifno brojilo - cijena za distribuciju 1 kWh u višoj tarifi (VT: od 7-21h zimi, 8-22h ljeti)',
	'HEP ODS - dvotarifno brojilo - cijena za distribuciju 1 kWh u nižoj tarifi (NT: od 21-7h zimi, 22-8h ljeti)',
	'naknada za mjernu uslugu (OMM) - mjesečni iznos',
	'naknada za opskrbu električnom energijom - mjesečni iznos',
	'naknada za poticanje proizvodnje iz obnovljivih izvora i kogeneracije (cijena 1 kWh)',
	'solidarna naknada (cijena 1 kWh)',
	'iznos mjesečnog popusta',
	'iznos dodatnog  popusta',
	'porez na dodanu vrijednost',
	'trošak plaćanja računa (npr. najpovoljnija provizija u banci, pošti i sl. ako nema mogućnosti besplatne uplate negdje)',
	'web stranice',
	'web cjenik',
	'opaska',
	'da li je još uvijek dostupan?',
],

'cfg': [
{       'naziv': 'HEP Elektra - Univerzalna usluga (default)',
	'kwh_jt_cijena': op_defaults.HEP_univerzalna_jt_cijena,
	'kwh_vt_cijena': op_defaults.HEP_univerzalna_vt_cijena,
	'kwh_nt_cijena': op_defaults.HEP_univerzalna_nt_cijena,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': op_defaults.naknada_opskrba,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://www.hep.hr/elektra/',
	'web_cjenik': 'http://www.hep.hr/elektra/kucanstvo/tarifne-stavke-cijene/1547',
	'notes': 'Promjena cijene od 1.4.2022. Pretpostavljeni opskrbljivač za sva kućanstva koja nisu mijenjala opskrbljivača. Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti',
	'dostupnost': 1,
},

{       'naziv': 'GEN-I - Jeftina struja',
	'kwh_jt_cijena': 0.073,
	'kwh_vt_cijena': 0.079,
	'kwh_nt_cijena': 0.039,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 2.97,	/* poskupljenje sa 7.40kn na 22.40kn od 1.9.2021. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena, /* od 1.1.2019. - http://www.jeftinastruja.hr/za-ku%c4%87anstva/jeftina-struja/obavijesti/solidarna-naknada/ */
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://www.jeftinastruja.hr/',
	'web_cjenik': 'http://www.jeftinastruja.hr/za-ku%C4%87anstva/cijene-i-tarife/cjenik/',
	'notes': 'Prestaje sa radom 1.12.2022. Promjena cijene od 1.4.2022. Plaćanje bez provizije na prodajnim mjestima Tiska, iNovina i Konzuma (super, maxi). Prošle akcije na https://www.jeftinastruja.hr/za-ku%C4%87anstva/cijene-i-tarife/akcije',
	'dostupnost': 0,
},

{       'naziv': 'HEP Opskrba - HEPI',
	'kwh_jt_cijena': op_defaults.HEP_univerzalna_jt_cijena,
	'kwh_vt_cijena': op_defaults.HEP_univerzalna_vt_cijena,
	'kwh_nt_cijena': op_defaults.HEP_univerzalna_nt_cijena,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': op_defaults.naknada_opskrba,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://hepi.hep.hr/',
	'web_cjenik': 'https://hepi.hep.hr/sto-je-hepi/hepi-cjenik-74/74',
	'notes': 'Promjena cijene od 1.4.2022. Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti i kreditnim karticama putem m-hepi aplikacije.',
	'dostupnost': 1,
},

{       'naziv': 'HEP Opskrba - HEPI + samoočitanje',
	'kwh_jt_cijena': op_defaults.HEP_univerzalna_jt_cijena,
	'kwh_vt_cijena': op_defaults.HEP_univerzalna_vt_cijena,
	'kwh_nt_cijena': op_defaults.HEP_univerzalna_nt_cijena,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 0,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://hepi.hep.hr/',
	'web_cjenik': 'https://hepi.hep.hr/sto-je-hepi/hepi-cjenik-74/74',
	'notes': 'Promjena cijene od 1.4.2022. Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti i kreditnim karticama putem m-hepi aplikacije.',
	'dostupnost': 1,
},

{       'naziv': 'HEP Opskrba - HEPI + samoočitanje + klub',
	'kwh_jt_cijena': op_defaults.HEP_univerzalna_jt_cijena,
	'kwh_vt_cijena': op_defaults.HEP_univerzalna_vt_cijena,
	'kwh_nt_cijena': op_defaults.HEP_univerzalna_nt_cijena,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 0,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'extra_popust': function() {
		// Note: novi iznosi BODOVA od 1.1.2023. - ranije su bili prakticki isti stalno (i za najmanje umanjenje 1.3333%) - sada su losiji osim ako se ne ceka potrosenih 2600 EUR kada su malo bolji!

		// 2600 bodova - Umanjenje računa 35 € (1.3462%)
		// 1800 bodova - Umanjenje računa 22 € (1.2222%)
		// 900 bodova - Umanjenje računa 10 €  (1.1111%)
		// 600 bodova - Umanjenje računa 7 €   (1.1667%)
		// 400 bodova - Umanjenje računa 4 €   (1.0000%)
		// 200 bodova - Umanjenje računa 2 €   (1.0000%)

		// FIXME: trenutno umanjujemo i preko 2600 bodova (jer gledamo da je za velike iznose izracun vjerojatno za cijelu godinu, pa da mozemo teoretski *svaki mjesec* odbiti do 2600€ ako su toliki racuni!)
		var hepi_klub_popust = 0;
		var sum_racun = this.calc_allTotal;
		while (sum_racun >= 2600) { hepi_klub_popust += Number(decimal(35 * (1 + op_defaults.pdv))); sum_racun -= 2600; }
		while (sum_racun >= 1800) { hepi_klub_popust += Number(decimal(22 * (1 + op_defaults.pdv))); sum_racun -= 1800; }
		while (sum_racun >= 600)  { hepi_klub_popust += Number(decimal(7  * (1 + op_defaults.pdv))); sum_racun -= 600; }
		while (sum_racun >= 200)  { hepi_klub_popust += Number(decimal(2  * (1 + op_defaults.pdv))); sum_racun -= 200; }
		return hepi_klub_popust;
	},
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://hepi.hep.hr/',
	'web_cjenik': 'https://hepi.hep.hr/sto-je-hepi/hepi-cjenik-74/74',
	'notes': 'Promjena cijene od 1.4.2022. Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti i kreditnim karticama putem m-hepi aplikacije. HEPI club: svakih 200 bodova = 2€ manji račun',
	'dostupnost': 1,
},

{       'naziv': 'E.ON - IDEAL - samo 1.godina (A-10%)',
	'kwh_jt_cijena': (0.1605 * (1-0.10)).toFixed(4),	/* poskupljenje od 1.5.2023. */
	'kwh_vt_cijena': (0.1708 * (1-0.10)).toFixed(4),	/* poskupljenje od 1.5.2023. */
	'kwh_nt_cijena': (0.0838 * (1-0.10)).toFixed(4),	/* poskupljenje od 1.5.2023. */
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 3.57,	/* od 31.12.2019. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0.59,  /* FIXME 18.1.2023. rucno preracunato u EUR, nisam nasao u cjeniku? */
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 1,  // odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html
	'web_site': 'https://www.eon.hr/hr/kucanstva/struja-i-plin.html',
	'web_cjenik': 'https://www.eon.hr/content/dam/eon/eon-hr/documents/cjenicieuri/cijena_EE_HH_1.5.2023.pdf',
	'notes': 'Promjena cijene od 1.5.2023. Ugovor na 3 godine. Ova cijena je samo za prvu godinu, nakon toga se koristi cjenik B! ' + extranotes_eon,
	'dostupnost': 1,
},

{       'naziv': 'E.ON - BONUS - samo 1. godina (A-7%)',
	'kwh_jt_cijena': (0.1605 * (1-0.07)).toFixed(4),	/* poskupljenje od 1.5.2023. */
	'kwh_vt_cijena': (0.1708 * (1-0.07)).toFixed(4),	/* poskupljenje od 1.5.2023. */
	'kwh_nt_cijena': (0.0838 * (1-0.07)).toFixed(4),	/* poskupljenje od 1.5.2023. */
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 3.57,	/* od 31.12.2019. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0.59,  /* FIXME 18.1.2023. rucno preracunato u EUR, nisam nasao u cjeniku? */
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 1,  // odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html
	'web_site': 'https://www.eon.hr/hr/kucanstva/struja-i-plin.html',
	'web_cjenik': 'https://www.eon.hr/content/dam/eon/eon-hr/documents/cjenicieuri/cijena_EE_HH_1.5.2023.pdf',
	'notes': 'Promjena cijene od 1.5.2023. Ugovor na 2 godine. Ova cijena je samo za prvu godinu, nakon toga se koristi cjenik B! ' + extranotes_eon,
	'dostupnost': 1,
},

{       'naziv': 'E.ON - KLASIK (B cjenik)',
	'kwh_jt_cijena': 0.1514,	/* poskupljenje od 1.5.2023. */
	'kwh_vt_cijena': 0.1612,	/* poskupljenje od 1.5.2023. */
	'kwh_nt_cijena': 0.0791,	/* poskupljenje od 1.5.2023. */
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 3.57,	/* od 31.12.2019. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0.59,  /* FIXME 18.1.2023. rucno preracunato u EUR, nisam nasao u cjeniku? */
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 1,  // odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html
	'web_site': 'https://www.eon.hr/hr/kucanstva/struja-i-plin.html',
	'web_cjenik': 'https://www.eon.hr/content/dam/eon/eon-hr/documents/cjenicieuri/cijena_EE_HH_1.5.2023.pdf',
	'notes': 'Promjena cijene od 1.5.2023. Bez ugovorne obveze. Ova tarifa se koristi i za 2. i ostale godine IDEAL i BONUS tarifa, kao i za korisnike preuzete od drugih opskrbljivača. ' + extranotes_eon,
	'dostupnost': 1,
},

{       'naziv': 'ENNA Opskrba',
	'kwh_jt_cijena': 0.1314,
	'kwh_vt_cijena': 0.1407,
	'kwh_nt_cijena': 0.0743,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 2.6545,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 1,  // odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html
	'web_site': 'https://www.enna.hr/enna-opskrba-t8',
	'web_cjenik': 'https://www.enna.hr/storage/userfiles/files/enna-opskrba/2023/Cjenik-el-energije-za-kupce-kategorije-kucanstvo_115048.pdf',
	'notes': 'Promjena cijene od 1.12.2022. Pitano 9/2022+, trenutno ne rade opskrbu za kategoriju kućanstvo',
	'dostupnost': 0,
},

{       'naziv': 'Petrol',
	'kwh_jt_cijena': 0.134,
	'kwh_vt_cijena': 0.144,
	'kwh_nt_cijena': 0.103,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 2.708,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 1,  // odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html
	'web_site': 'https://www.petrol.hr/za-dom',
	'web_cjenik': 'https://www.petrol.hr/binaries/content/assets/www-hr/2023/pages/za-dom/redovni-cjenik-za-krajnje-kupce-kategorije-kucanstvo_01_23.pdf',
	'notes': 'Promjena cijene od 1.9.2022. 9/2022+ ne primaju nove korisnike zbog volatilnosti cijena - 0800 1055',
	'dostupnost': 0,
},


] };
