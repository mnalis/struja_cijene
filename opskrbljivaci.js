//
// lista opskrbljivaca sa cijenama i popustima
//

var last_updated='2022-11-03';	// autoupdated by Makefile

var op_defaults = {
	'ima_mj_trosak_uplate': 1,	// odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html

	'naknada_omm': 11.60,			// poskupljenje od 1.4.2022.
	'naknada_opskrba': 7.40,
	'oieik_cijena': 0.105,
	'solidarna_cijena': 0.03,
	'pdv': 0.13,

	'kwh_ods_prijenos_jt_cijena': 0.09,
	'kwh_ods_prijenos_vt_cijena': 0.13,	// poskupljenje od 1.4.2022.
	'kwh_ods_prijenos_nt_cijena': 0.05,

	'kwh_ods_distribucija_jt_cijena': 0.22,
	'kwh_ods_distribucija_vt_cijena': 0.26,	// poskupljenje od 1.4.2022.
	'kwh_ods_distribucija_nt_cijena': 0.12,

	'HEP_univerzalna_jt_cijena': 0.5295,
	'HEP_univerzalna_vt_cijena': 0.5635,
	'HEP_univerzalna_nt_cijena': 0.2765,
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
	'da li je jos uvijek dostupan?',
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
	'kwh_jt_cijena': 0.5520,
	'kwh_vt_cijena': 0.5950,
	'kwh_nt_cijena': 0.2950,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 22.40,	/* poskupljenje sa 7.40 na 22.40kn od 1.9.2021. */
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
	'kwh_jt_cijena': 0.5295,
	'kwh_vt_cijena': 0.5635,
	'kwh_nt_cijena': 0.2765,
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
	'kwh_jt_cijena': 0.5295,
	'kwh_vt_cijena': 0.5635,
	'kwh_nt_cijena': 0.2765,
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
	'kwh_jt_cijena': 0.5295,
	'kwh_vt_cijena': 0.5635,
	'kwh_nt_cijena': 0.2765,
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
		// 19980 bodova - Umanjenje za ops. naknadu 36mj
		// 13320 bodova - Umanjenje za ops. naknadu 24mj
		// 6600 bodova - Umanjenje za ops. naknadu 12mj
		// 6000 bodova - Umanjenje racuna 80kn
		// 4500 bodova - Umanjenje racuna 60kn
		// 3300 bodova - Umanjenje za ops. naknadu 6 mj
		// 3000 bodova - Umanjenje racuna 40kn
		// 1500 bodova - Umanjenje racuna 20kn

		// FIXME: trenutno ignoriramo popust umanjenja za opskrbnu naknadu, 
		// FIXME: trenutno umanjujemo i preko 6000 bodova (jer gledamo da je za velike iznose izracun vjerojatno za cijelu godinu, pa da mozemo teoretski *svaki mjesec* odbiti do 6000kn ako su toliki racuni!)
		const hepi_inc = Number(decimal(20 * (1 + op_defaults.pdv)));
		var hepi_klub_popust = 0;
		var sum_racun = this.calc_allTotal;
		while (sum_racun >= 1500) {
			hepi_klub_popust += hepi_inc;
			sum_racun -= 1500;
		}
		return hepi_klub_popust;
	},
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://hepi.hep.hr/',
	'web_cjenik': 'https://hepi.hep.hr/sto-je-hepi/hepi-cjenik-74/74',
	'notes': 'Promjena cijene od 1.4.2022. Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti i kreditnim karticama putem m-hepi aplikacije. HEPI club: svakih 1500 bodova = 20kn manji račun',
	'dostupnost': 1,
},

{       'naziv': 'E.ON - IDEAL - samo 1.godina (A-10%)',
	'kwh_jt_cijena': (0.9710 * (1-0.10)).toFixed(4),	/* poskupljenje od 1.10.2022. */
	'kwh_vt_cijena': (1.0333 * (1-0.10)).toFixed(4),	/* poskupljenje od 1.10.2022. */
	'kwh_nt_cijena': (0.5070 * (1-0.10)).toFixed(4),	/* poskupljenje od 1.10.2022. */
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 26.90,	/* od 31.12.2019. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 4.425,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': op_defaults.ima_mj_trosak_uplate,
	'web_site': 'https://www.eon.hr/hr/kucanstva/struja-i-plin.html',
	'web_cjenik': 'https://www.eon.hr/content/dam/eon/eon-hr/documents/cjenici/16032022_EE_HH_Cjenik.pdf',
	'notes': 'Promjena cijene od 1.10.2022. Ugovor na 3 godine. Ova cijena je samo za prvu godinu, nakon toga se koristi cjenik B! ' + extranotes_eon,
	'dostupnost': 1,
},

{       'naziv': 'E.ON - BONUS - samo 1. godina (A-7%)',
	'kwh_jt_cijena': (0.9710 * (1-0.07)).toFixed(4),	/* poskupljenje od 1.10.2022. */
	'kwh_vt_cijena': (1.0333 * (1-0.07)).toFixed(4),	/* poskupljenje od 1.10.2022. */
	'kwh_nt_cijena': (0.5070 * (1-0.07)).toFixed(4),	/* poskupljenje od 1.10.2022. */
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 26.90,	/* od 31.12.2019. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 4.425,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': op_defaults.ima_mj_trosak_uplate,
	'web_site': 'https://www.eon.hr/hr/kucanstva/struja-i-plin.html',
	'web_cjenik': 'https://www.eon.hr/content/dam/eon/eon-hr/documents/cjenici/16032022_EE_HH_Cjenik.pdf',
	'notes': 'Promjena cijene od 1.10.2022. Ugovor na 2 godine. Ova cijena je samo za prvu godinu, nakon toga se koristi cjenik B! ' + extranotes_eon,
	'dostupnost': 1,
},

{       'naziv': 'E.ON - KLASIK (B cjenik)',
	'kwh_jt_cijena': 0.9160,	/* poskupljenje od 1.10.2022. */
	'kwh_vt_cijena': 0.9749,	/* poskupljenje od 1.10.2022. */
	'kwh_nt_cijena': 0.4783,	/* poskupljenje od 1.10.2022. */
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 26.90,	/* od 31.12.2019. */
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 4.425,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': op_defaults.ima_mj_trosak_uplate,
	'web_site': 'https://www.eon.hr/hr/kucanstva/struja-i-plin.html',
	'web_cjenik': 'https://www.eon.hr/content/dam/eon/eon-hr/documents/cjenicieuri/cjenik_hh_ee_vrijediod110.pdf',
	'notes': 'Promjena cijene od 1.10.2022. Bez ugovorne obveze. Ova tarifa se koristi i za 2. i ostale godine IDEAL i BONUS tarifa, kao i za korisnike preuzete od drugih opskrbljivača. ' + extranotes_eon,
	'dostupnost': 1,
},

{       'naziv': 'ENNA Opskrba',
	'kwh_jt_cijena': 0.4600,
	'kwh_vt_cijena': 0.4900,
	'kwh_nt_cijena': 0.2400,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 20.00,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': op_defaults.ima_mj_trosak_uplate,
	'web_site': 'https://www.enna.hr/enna-opskrba-t8',
	'web_cjenik': 'https://www.enna.hr/storage/userfiles/files/Tarifne-stavke-cijena-elektricne-energije-kategorije-kucanstvo-09-2022.pdf',
	'notes': 'Promjena cijene od 1.8.2021. Pitano 9/2022+, trenutno ne rade opskrbu za kategoriju kućanstvo',
	'dostupnost': 0,
},

{       'naziv': 'Petrol',
	'kwh_jt_cijena': 1.0059,
	'kwh_vt_cijena': 1.0833,
	'kwh_nt_cijena': 0.7724,
	'kwh_ods_distribucija_jt_cijena': op_defaults.kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': op_defaults.kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': op_defaults.kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': op_defaults.kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': op_defaults.kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': op_defaults.kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': op_defaults.naknada_omm,
	'mj_naknada_opskrba': 20.40,
	'kwh_oieik': op_defaults.oieik_cijena,
	'kwh_solidarna': op_defaults.solidarna_cijena,
	'mj_popust': 0,
	'extra_popust': function() { return 0; },
	'pct_pdv': op_defaults.pdv,
	'ima_mj_trosak_uplate': op_defaults.ima_mj_trosak_uplate,
	'web_site': 'https://www.petrol.hr/za-dom',
	'web_cjenik': 'https://www.petrol.hr/binaries/content/assets/www-hr/2022/08/redovni-cjenik-za-krajnje-kupce-kategorije-kucanstvo_01_09.pdf',
	'notes': 'Promjena cijene od 1.9.2022. 9/2022+ ne primaju nove korisnike zbog volatilnosti cijena - 0800 1055',
	'dostupnost': 0,
},


] };
