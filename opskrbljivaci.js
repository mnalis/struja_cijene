//
// lista opskrbljivaca sa cijenama i popustima
//

var last_updated='2018-11-25';	// autoupdated by Makefile

var ima_default_mj_trosak_uplate = 1;	// odabir samog iznosa npr. PBZ naknada internet bankarstvo 2018/11 = 2.25kn/mj) u index.html

var default_naknada_omm = 10;
var default_naknada_opskrba = 7.40;
var default_oieik_cijena = 0.105;
var default_solidarna_cijena = 0.03;
var default_pdv = 0.13;

var default_kwh_ods_prijenos_jt_cijena = 0.09;
var default_kwh_ods_prijenos_vt_cijena = 0.11;
var default_kwh_ods_prijenos_nt_cijena = 0.05;

var default_kwh_ods_distribucija_jt_cijena = 0.22;
var default_kwh_ods_distribucija_vt_cijena = 0.24;
var default_kwh_ods_distribucija_nt_cijena = 0.12;

var HEP_univerzalna_jt_cijena = 0.4600;
var HEP_univerzalna_vt_cijena = 0.4900;
var HEP_univerzalna_nt_cijena = 0.2400;

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
	'porez na dodanu vrijednost',
	'trošak plaćanja računa (npr. najpovoljnija provizija u banci, pošti i sl. ako nema mogućnosti besplatne uplate negdje)',
	'web stranice',
	'web cjenik',
	'opaska',
],

'cfg': [
{       'naziv': 'HEP Elektra - Univerzalna usluga (default)',
	'kwh_jt_cijena': HEP_univerzalna_jt_cijena,
	'kwh_vt_cijena': HEP_univerzalna_vt_cijena,
	'kwh_nt_cijena': HEP_univerzalna_nt_cijena,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.hep.hr/elektra/',
	'web_cjenik': 'http://www.hep.hr/elektra/kucanstvo/tarifne-stavke-cijene/1547',
	'notes': 'Defaultni opskrbljivač za sva kućanstva koja nisu mijenjala opskrbljivača.',
},

{       'naziv': 'GEN-I - Jeftina struja',
	'kwh_jt_cijena': 0.4230,
	'kwh_vt_cijena': 0.4500,
	'kwh_nt_cijena': 0.2250,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.jeftinastruja.hr/',
	'web_cjenik': 'http://www.jeftinastruja.hr/za-ku%C4%87anstva/cijene-i-tarife/cjenik/',
	'notes': 'FIXME - nema više prvi mjesec besplatno? bilo je do 31. listopada 2018, možda će opet biti',
},

{       'naziv': 'HEP Opskrba - HEPI',
	'kwh_jt_cijena': 0.4370,
	'kwh_vt_cijena': 0.4655,
	'kwh_nt_cijena': 0.2280,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://hepi.hep.hr/',
	'web_cjenik': 'http://hepi.hep.hr/UserDocsImages/Cjenici/Hepi-cjenik-9_17.pdf',
	'notes': 'Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti i kreditnim karticama putem m-hepi aplikacije. FIXME - dodatni popusti za HEPI club?',
},

{       'naziv': 'HEP Opskrba - HEPI+samoočitanje',
	'kwh_jt_cijena': 0.4370,
	'kwh_vt_cijena': 0.4655,
	'kwh_nt_cijena': 0.2280,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': 0,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'http://hepi.hep.hr/',
	'web_cjenik': 'http://hepi.hep.hr/UserDocsImages/Cjenici/Hepi-cjenik-9_17.pdf',
	'notes': 'Račune bez naknade možete plaćati u FINA-i, Hrvatskoj pošti i kreditnim karticama putem m-hepi aplikacije. FIXME - dodatni popusti za HEPI club?',
},

{       'naziv': 'Hrvatski telekom - bez obveze',
	'kwh_jt_cijena': 0.4465,
	'kwh_vt_cijena': 0.4750,
	'kwh_nt_cijena': 0.2375,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'https://www.hrvatskitelekom.hr/energija/struja',
	'web_cjenik': 'https://www.hrvatskitelekom.hr/ResourceManager/FileDownload.aspx?rId=8309&rType=2',
	'notes': 'Račune bez naknade možete plaćati na HT Platomatima. Gasi se; od 11/2018 korisnici prebačeni na RWE',
},

{       'naziv': 'Hrvatski telekom - 2 godine',
	'kwh_jt_cijena': 0.4465,
	'kwh_vt_cijena': 0.4750,
	'kwh_nt_cijena': 0.2375,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': 0,
	'mj_popust': 12,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': 0,
	'web_site': 'https://www.hrvatskitelekom.hr/energija/struja',
	'web_cjenik': 'https://www.hrvatskitelekom.hr/ResourceManager/FileDownload.aspx?rId=8309&rType=2',
	'notes': 'Račune bez naknade možete plaćati na HT Platomatima. Gasi se; od 11/2018 korisnici prebačeni na RWE',
},

{       'naziv': 'RWE - IDEAL+online 1.godina (A-12%)',
	'kwh_jt_cijena': (HEP_univerzalna_jt_cijena * (1-0.12)).toFixed(4),
	'kwh_vt_cijena': (HEP_univerzalna_vt_cijena * (1-0.12)).toFixed(4),
	'kwh_nt_cijena': (HEP_univerzalna_nt_cijena * (1-0.12)).toFixed(4),
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /* do 1.1.2019. je 0.01kn/kWh? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.rwe.hr/',
	'web_cjenik': 'http://www.rwe.hr/Elektricna_energija/Kucanstva/Cijene_i_proizvodi.aspx',
	'notes': 'Ugovor na 3 godine. Dodatnih 2% za online prijave na http://rwe.hr/Elektricna_energija/Kucanstva/On-line_ugovor.aspx . Ova cijena je samo za prvu godinu, nakon toga se koristi cjenik B! Od 1.1.2019. korisnik placa solidarnu naknadu u punom iznosu 0.03kn/kWh, do onda je 0.01kn/kWh. Navodno su jos moguci dodatni mjeseci popusta za dovedene korisnike: http://rwe.hr/Elektricna_energija/Posebne_ponude.aspx',
},
{       'naziv': 'RWE - IDEAL 1.godina (A-10%)',
	'kwh_jt_cijena': (HEP_univerzalna_jt_cijena * (1-0.10)).toFixed(4),
	'kwh_vt_cijena': (HEP_univerzalna_vt_cijena * (1-0.10)).toFixed(4),
	'kwh_nt_cijena': (HEP_univerzalna_nt_cijena * (1-0.10)).toFixed(4),
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /* do 1.1.2019. je 0.01kn/kWh? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.rwe.hr/',
	'web_cjenik': 'http://www.rwe.hr/Elektricna_energija/Kucanstva/Cijene_i_proizvodi.aspx',
	'notes': 'Ugovor na 3 godine. Ova cijena je samo za prvu godinu, nakon toga se koristi cjenik B! Od 1.1.2019. korisnik placa solidarnu naknadu u punom iznosu 0.03kn/kWh, do onda je 0.01kn/kWh. Navodno su jos moguci dodatni mjeseci popusta za dovedene korisnike: http://rwe.hr/Elektricna_energija/Posebne_ponude.aspx',
},

{       'naziv': 'RWE - BONUS 1. godina (A-7%)',
	'kwh_jt_cijena': (HEP_univerzalna_jt_cijena * (1-0.07)).toFixed(4),
	'kwh_vt_cijena': (HEP_univerzalna_vt_cijena * (1-0.07)).toFixed(4),
	'kwh_nt_cijena': (HEP_univerzalna_nt_cijena * (1-0.07)).toFixed(4),
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /* do 1.1.2019. je 0.01kn/kWh? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.rwe.hr/',
	'web_cjenik': 'http://www.rwe.hr/Elektricna_energija/Kucanstva/Cijene_i_proizvodi.aspx',
	'notes': 'Ugovor na 2 godine. Ova cijena je samo za prvu godinu, nakon toga se navodno cjenik B! Od 1.1.2019. korisnik placa solidarnu naknadu u punom iznosu 0.03kn/kWh, do onda je 0.01kn/kWh. Navodno su jos moguci dodatni mjeseci popusta za dovedene korisnike: http://rwe.hr/Elektricna_energija/Posebne_ponude.aspx',
},

{       'naziv': 'RWE - KLASIK (B cjenik)',
	'kwh_jt_cijena': 0.4465,
	'kwh_vt_cijena': 0.4750,
	'kwh_nt_cijena': 0.2375,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /* do 1.1.2019. je 0.01kn/kWh? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.rwe.hr/',
	'web_cjenik': 'http://www.rwe.hr/Elektricna_energija/Kucanstva/Cijene_i_proizvodi.aspx',
	'notes': 'Bez ugovorne obveze. Ova tarifa se po defaultu koristi za korisnike preuzete od HT-a, kao i za 2. i ostale godine IDEAL i BONUS tarifa. Od 1.1.2019. korisnik placa solidarnu naknadu u punom iznosu 0.03kn/kWh, do onda je 0.01kn/kWh. Navodno su jos moguci dodatni mjeseci popusta za dovedene korisnike: http://rwe.hr/Elektricna_energija/Posebne_ponude.aspx',
},

{       'naziv': '220v - RACIO (8%)',
	'kwh_jt_cijena': (HEP_univerzalna_jt_cijena * (1-0.08)).toFixed(4),
	'kwh_vt_cijena': (HEP_univerzalna_vt_cijena * (1-0.08)).toFixed(4),
	'kwh_nt_cijena': (HEP_univerzalna_nt_cijena * (1-0.08)).toFixed(4),
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /*, FIXME ima li solidarnu? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'http://www.220v.hr/',
	'web_cjenik': 'http://220v.hr/#!/kucanstva',
	'notes': 'FIXME da li ga isto kupuje RWE 11/2018+?',
},

{       'naziv': 'Proenergy - GREEN',
	'kwh_jt_cijena': 0.4350,
	'kwh_vt_cijena': 0.4350,
	'kwh_nt_cijena': 0.2950,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /*, FIXME ima li solidarnu? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'https://www.proenergy.eu/hr/elektricna-energija/',
	'web_cjenik': 'https://www.proenergy.eu/assets/pdf/struja/hr/Cijene%20elektri%C4%8Dne%20energije%20-%20ku%C4%87anstvo%20-%20green.pdf',
	'notes': '100% energije iz obnovljivih izvora (sa certifikatom)',
},

{       'naziv': 'Proenergy - GREEN Flat',
	'kwh_jt_cijena': 0.4150,
	'kwh_vt_cijena': 0.4150,
	'kwh_nt_cijena': 0.4150,
	'kwh_ods_distribucija_jt_cijena': default_kwh_ods_distribucija_jt_cijena,
	'kwh_ods_distribucija_vt_cijena': default_kwh_ods_distribucija_vt_cijena,
	'kwh_ods_distribucija_nt_cijena': default_kwh_ods_distribucija_nt_cijena,
	'kwh_ods_prijenos_jt_cijena': default_kwh_ods_prijenos_jt_cijena,
	'kwh_ods_prijenos_vt_cijena': default_kwh_ods_prijenos_vt_cijena,
	'kwh_ods_prijenos_nt_cijena': default_kwh_ods_prijenos_nt_cijena,
	'mj_naknada_omm': default_naknada_omm,
	'mj_naknada_opskrba': default_naknada_opskrba,
	'kwh_oieik': default_oieik_cijena,
	'kwh_solidarna': default_solidarna_cijena, /* FIXME ima li solidarnu? */
	'mj_popust': 0,
	'pct_pdv': default_pdv,
	'ima_mj_trosak_uplate': ima_default_mj_trosak_uplate, /* FIXME moze li bez troska uplate? */
	'web_site': 'https://www.proenergy.eu/hr/elektricna-energija/',
	'web_cjenik': 'https://www.proenergy.eu/assets/pdf/struja/hr/Cijene%20elektri%C4%8Dne%20energije%20-%20ku%C4%87anstvo%20-%20green.pdf',
	'notes': '100% energije iz obnovljivih izvora (sa certifikatom) - JT',
},

] };
