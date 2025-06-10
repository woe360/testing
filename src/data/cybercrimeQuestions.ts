export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  chapter: string;
}

// export const cybercrimeQuestions: Question[] = [
//   // I SKYRIUS: NEE TYRIMŲ PRINCIPAI IR TYRIMO EIGA (Klausimai 1-8)
//   {
//     id: 1,
//     question: "Kiek bendrųjų NEE tyrimo etapų yra išskiriama?",
//     options: ["5 etapai", "6 etapai", "7 etapai", "8 etapai"],
//     correctAnswer: "C) 7 etapai",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 2,
//     question: "Kas yra pirmasis veiksmas, kai įvykis perkvalifikuojamas į incidentą?",
//     options: [
//       "Tyrėjas surenka įkalčius įvykio vietoje",
//       "Vadovybė kreipiasi į teisininką konsultacijos",
//       "Tyrėjas parengia pirminio atsako procedūras",
//       "Daromos surinktų duomenų laikmenų atvaizdo kopijos"
//     ],
//     correctAnswer: "B) Vadovybė kreipiasi į teisininką konsultacijos",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 3,
//     question: "Pagal Middleton (2001), kuris klausimas NĖRA užduodamas užsakovui pirmojo kontakto metu?",
//     options: [
//       "Apie kokį nusikaltimo tipą kalbama?",
//       "Ar įmonėje naudojama IDS?",
//       "Kokia yra taikoma įvykių registracijos įrašų saugojimo politika?",
//       "Kokia yra tyrėjo kvalifikacija?"
//     ],
//     correctAnswer: "D) Kokia yra tyrėjo kvalifikacija?",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 4,
//     question: "Kuris principas NĖRA tarp bendrųjų NEE tyrimo principų?",
//     options: [
//       "Originalius įkalčius analizuoti kiek įmanoma mažiau",
//       "Nemodifikuoti įkalčių",
//       "Naudoti tyrimo metu surinktus duomenis tik tyrimo tikslais",
//       "Visada naudoti tik naujausias technologijas"
//     ],
//     correctAnswer: "D) Visada naudoti tik naujausias technologijas",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 5,
//     question: "Kas yra \"teismo kompiuterija\" pagal Middelton (2001)?",
//     options: [
//       "Kompiuterių naudojimas teisme",
//       "Įkalčių rinkimo, išsaugojimo ir analizės procesas",
//       "Teisėjų mokymas kompiuterių naudojimo",
//       "Elektroninis teismo administravimas"
//     ],
//     correctAnswer: "B) Įkalčių rinkimo, išsaugojimo ir analizės procesas",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 6,
//     question: "Kokia yra pagrindinė \"bit-to-bit\" kopijos paskirtis?",
//     options: [
//       "Sistemos greičio didinimas",
//       "Duomenų saugojimo optimizavimas",
//       "Tiksli failinės sistemos kopija tyrimui",
//       "Sistemos atsarginė kopija"
//     ],
//     correctAnswer: "C) Tiksli failinės sistemos kopija tyrimui",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 7,
//     question: "Kokia yra peržiūros pasibaigus incidentui (post mortem review) paskirtis?",
//     options: [
//       "Darbuotojų nubaudimas",
//       "Finansinių nuostolių apskaičiavimas",
//       "Incidento atsako proceso gerinimas kitą kartą",
//       "Teisės aktų keitimas"
//     ],
//     correctAnswer: "C) Incidento atsako proceso gerinimas kitą kartą",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 8,
//     question: "Kiek procentų verslo organizacijų patiria saugos incidentus pagal ES Tarybos duomenis?",
//     options: ["75%", "80%", "85%", "90%"],
//     correctAnswer: "C) 85%",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },

//   // II SKYRIUS: NEE TYRIMŲ TIPAI (Klausimai 9-16)
//   {
//     id: 9,
//     question: "Į ką tradiciškai skirstomi NEE tyrimai?",
//     options: [
//       "Vidutinės trukmės ir ilgus",
//       "Formaliuosius ir neformaliuosius",
//       "Paprastus ir sudėtingus",
//       "Vidinius ir išorinius"
//     ],
//     correctAnswer: "B) Formaliuosius ir neformaliuosius",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 10,
//     question: "Kodėl geriau vadovautis formaliojo tyrimo metodais?",
//     options: [
//       "Jie yra pigesni",
//       "Jie trunka trumpiau",
//       "Sprendimas dėl bylos perdavimo teismui gali būti priimtas vėliau",
//       "Jie nereikalauja specialių įgūdžių"
//     ],
//     correctAnswer: "C) Sprendimas dėl bylos perdavimo teismui gali būti priimtas vėliau",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 11,
//     question: "Kaip vadinamos \"neišjungtos kompiuterinės sistemos\" pagal jų būseną tyrimo metu?",
//     options: ["Aktyvios sistemos", "\"Gyvos\" sistemos", "Veikiančios sistemos", "Dinamiškos sistemos"],
//     correctAnswer: "B) \"Gyvos\" sistemos",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 12,
//     question: "Kuri priežastis NĖRA tarp lemiančių \"gyvų\" sistemų veiksmingumą?",
//     options: [
//       "Globali ekonomika ir paskirstytos sistemos",
//       "Poreikis nepertraukiamai veikiančioms sistemoms",
//       "Auganti duomenų saugojimo laikmenų talpa",
//       "Mažesnė tyrimo kaina"
//     ],
//     correctAnswer: "D) Mažesnė tyrimo kaina",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 13,
//     question: "Kas yra SIM sistemos?",
//     options: [
//       "System Information Management",
//       "Security Incident Management",
//       "Server Installation Management",
//       "Software Integration Management"
//     ],
//     correctAnswer: "B) Security Incident Management",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 14,
//     question: "Kuris metodas naudojamas \"gyvų\" sistemų tyrimo atveju, kai sistema automatiškai dekoduoja kietojo disko turinį?",
//     options: ["Statinė analizė", "Dinaminė analizė", "Hibridinė analizė", "Automatinė analizė"],
//     correctAnswer: "B) Dinaminė analizė",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 15,
//     question: "Kuris standartas reglamentuoja veiksmus su bankinių kortelių numeriais?",
//     options: ["ISO 27001", "PCI DSS", "GDPR", "SOX"],
//     correctAnswer: "B) PCI DSS",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 16,
//     question: "Kas yra DDoS ataka?",
//     options: [
//       "Direct Database operating System ataka",
//       "Distributed Denial of Service ataka",
//       "Dynamic Data over System ataka",
//       "Dual Direction operating System ataka"
//     ],
//     correctAnswer: "B) Distributed Denial of Service ataka",
//     chapter: "NEE tyrimų tipai"
//   },

//   // III SKYRIUS: PIRMINĖ REAKCIJA Į ELEKTRONININIUS NUSIKALTIMUS (Klausimai 17-29)
//   {
//     id: 17,
//     question: "Kas yra incidentas pagal ITIL?",
//     options: [
//       "Tik kompiuterių gedimas",
//       "Bet koks įvykis, kuris nėra standartinio paslaugos funkcionavimo dalis",
//       "Tik saugumo pažeidimai",
//       "Tik duomenų praradimas"
//     ],
//     correctAnswer: "B) Bet koks įvykis, kuris nėra standartinio paslaugos funkcionavimo dalis",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 18,
//     question: "Kas yra CSIRT?",
//     options: [
//       "Computer Security Incident Response Team",
//       "Computer System Information Recovery Team",
//       "Central Security Intelligence Research Team",
//       "Cyber Security Internal Review Team"
//     ],
//     correctAnswer: "A) Computer Security Incident Response Team",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 19,
//     question: "Kiek rizikos kategorijų išskiriama rizikos analizėje?",
//     options: ["2 kategorijos", "3 kategorijos", "4 kategorijos", "5 kategorijos"],
//     correctAnswer: "B) 3 kategorijos (žema, vidutinė, didelė)",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 20,
//     question: "Kas NĖRA tarp CSIRT grupės narių pareigų?",
//     options: [
//       "Vadovaujantysis tyrėjas",
//       "Informacijos saugos specialistas",
//       "Teisininkas",
//       "Marketingo specialistas"
//     ],
//     correctAnswer: "D) Marketingo specialistas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 21,
//     question: "Kas yra \"scenos užšaldymas\" (freezing the scene)?",
//     options: [
//       "Sistemos išjungimas",
//       "Visų įmanomų atsargos priemonių ėmimasis įkalčių išsaugojimui",
//       "Darbuotojų atleidimas",
//       "Komunikacijos sustabdymas"
//     ],
//     correctAnswer: "B) Visų įmanomų atsargos priemonių ėmimasis įkalčių išsaugojimui",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 22,
//     question: "Kuo skiriasi incidentų sulaikymas (handling) nuo incidentų valdymo (incident management)?",
//     options: [
//       "Jie yra tas pats procesas",
//       "Incidentų sulaikymas yra platesnis terminas",
//       "Incidentų sulaikyme pagrindinis dėmesys yra skiriamas priemonėms, leidžiančioms nepasireikšti incidento pasekmėms pilna jėga, o incidentų valdymas apima visus žingsnius nuo incidento paskelbimo iki dokumentavimo ir analizės fazės",
//       "Incidentų valdymas yra trumpesnis procesas"
//     ],
//     correctAnswer: "C) Incidentų sulaikyme pagrindinis dėmesys yra skiriamas priemonėms, leidžiančioms nepasireikšti incidento pasekmėms pilna jėga, o incidentų valdymas apima visus žingsnius nuo incidento paskelbimo iki dokumentavimo ir analizės fazės",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 23,
//     question: "Kokios yra dvi pagrindinės reagavimo į incidentus politikos?",
//     options: [
//       "Greita ir lėta reakcija",
//       "Vidinė ir išorinė reakcija",
//       "Atiduoti reagavimo funkciją kitoms specializuotoms organizacijoms (outsource) arba turėti savo vidines CSIRT komandas",
//       "Automatinė ir rankinė reakcija"
//     ],
//     correctAnswer: "C) Atiduoti reagavimo funkciją kitoms specializuotoms organizacijoms (outsource) arba turėti savo vidines CSIRT komandas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 24,
//     question: "Kokie yra pagrindiniai CSIRT grupės narių vaidmenys?",
//     options: [
//       "Tik techniniai specialistai",
//       "Vadovaujantysis tyrėjas, informacijos saugos specialistas, verslo/vadovybės atstovas, teisininkas, techniniai specialistai, personalo skyriaus atstovai",
//       "Tik vadovybės atstovai",
//       "Programuotojai ir sistemų administratoriai"
//     ],
//     correctAnswer: "B) Vadovaujantysis tyrėjas, informacijos saugos specialistas, verslo/vadovybės atstovas, teisininkas, techniniai specialistai, personalo skyriaus atstovai",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 25,
//     question: "Kokie yra pagrindiniai mokymų tikslai reagavimo į incidentus procese?",
//     options: [
//       "Tik techninio personalo švietimas",
//       "Plano patikrinimas, komunikacijos kanalų patikrinimas, grupės narių reakcijos patikrinimas",
//       "Finansinių išteklių planavimas",
//       "Naujų programinės įrangos versijų mokymais"
//     ],
//     correctAnswer: "B) Plano patikrinimas, komunikacijos kanalų patikrinimas, grupės narių reakcijos patikrinimas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 26,
//     question: "Kas yra SIM sistemos (Security Incident Management)?",
//     options: [
//       "Paprastas duomenų bazės",
//       "Sistemos, kurios agreguoja įvykių registracijos įrašus iš skirtingų šaltinių ir ieško juose neatitikimo ar įsiskverbimo šablonų",
//       "Antivirusinės programos",
//       "Ugniasienės"
//     ],
//     correctAnswer: "B) Sistemos, kurios agreguoja įvykių registracijos įrašus iš skirtingų šaltinių ir ieško juose neatitikimo ar įsiskverbimo šablonų",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 27,
//     question: "Kodėl organizacijos vengia pranešti apie incidentus teisėsaugos institucijoms?",
//     options: [
//       "Nes nežino procedūrų",
//       "Dėl nuostolių, kuriuos organizacija patirs: baudų už netinkamą informacijos saugos organizavimą, reputacijos praradimo, klientų nepasitikėjimo",
//       "Nes tai užtrunka per ilgai",
//       "Nes nėra įpareigoti"
//     ],
//     correctAnswer: "B) Dėl nuostolių, kuriuos organizacija patirs: baudų už netinkamą informacijos saugos organizavimą, reputacijos praradimo, klientų nepasitikėjimo",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 28,
//     question: "Kokie yra NEE tyrimo metodai analizės fazėje?",
//     options: [
//       "Tik programinės įrangos analizė",
//       "Rinkmenų analizė, ištrintos ar užkoduotos informacijos atkūrimas, vizuali įrangos apžiūra ar įtariamųjų ir liudininkų apklausos, asmeninių atakuotojo savybių įvertinimas ir tikslų nustatymas",
//       "Tik duomenų bazių tikrinimas",
//       "Fizinė įrangos analizė"
//     ],
//     correctAnswer: "B) Rinkmenų analizė, ištrintos ar užkoduotos informacijos atkūrimas, vizuali įrangos apžiūra ar įtariamųjų ir liudininkų apklausos, asmeninių atakuotojo savybių įvertinimas ir tikslų nustatymas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 29,
//     question: "Kas yra \"post mortem review\"?",
//     options: [
//       "Medicinos ekspertizė",
//       "Peržiūra pasibaigus incidentui, atliekama tam, kad pasibaigus tyrimui ir gavus tyrimo išvadas būtų imtasi veiksmų incidento atsako procesui gerinti kitą kartą",
//       "Finansinė ataskaita",
//       "Personalo vertinimas"
//     ],
//     correctAnswer: "B) Peržiūra pasibaigus incidentui, atliekama tam, kad pasibaigus tyrimui ir gavus tyrimo išvadas būtų imtasi veiksmų incidento atsako procesui gerinti kitą kartą",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },

//   // IV SKYRIUS: INCIDENTŲ TIPAI (Klausimai 30-37)
//   {
//     id: 30,
//     question: "Kiek pagrindinių incidentų tipų išskiriama?",
//     options: ["3 tipai", "4 tipai", "5 tipai", "6 tipai"],
//     correctAnswer: "B) 4 tipai",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 31,
//     question: "Kas yra DoS ataka?",
//     options: [
//       "Data over System ataka",
//       "Denial-of-service ataka",
//       "Destruction of System ataka",
//       "Direct operational System ataka"
//     ],
//     correctAnswer: "B) Denial-of-service ataka",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 32,
//     question: "Koks yra pagrindinis tikslas kovojant su DoS atakomis?",
//     options: [
//       "Nusikaltėlio identifikavimas",
//       "Verslo procesų optimizavimas",
//       "Verslui kritinių paslaugų funkcionalumo atstatymas",
//       "Sistemos atnaujinimas"
//     ],
//     correctAnswer: "C) Verslui kritinių paslaugų funkcionalumo atstatymas",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 33,
//     question: "Kas yra KPK?",
//     options: [
//       "Kompiuterinis pranešimų kodas",
//       "Kenksmingas programinis kodas",
//       "Kompiuterinio pašto kodas",
//       "Komandinio procesų kodas"
//     ],
//     correctAnswer: "B) Kenksmingas programinis kodas",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 34,
//     question: "Kuo skiriasi neteisėtas naudojimas nuo netinkamo naudojimo?",
//     options: [
//       "Neteisėtas - be leidimo, netinkamas - pažeidžiant reikalavimus",
//       "Neteisėtas - dieną, netinkamas - naktį",
//       "Neteisėtas - darbuotojai, netinkamas - svečiai",
//       "Nėra skirtumo"
//     ],
//     correctAnswer: "A) Neteisėtas - be leidimo, netinkamas - pažeidžiant reikalavimus",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 35,
//     question: "Kokie yra keturi pagrindiniai incidentų tipai?",
//     options: [
//       "Vidiniai, išoriniai, techniniai, socialiniai",
//       "Atsisakymo aptarnauti ataka (DoS), kenksmingas programinis kodas (Malware), neteisėtas naudojimas, netinkamas naudojimas",
//       "Fiziniai, virtualūs, hibridiniai, debesų",
//       "Automatiniai, rankiniai, pusiau automatiniai, mišrūs"
//     ],
//     correctAnswer: "B) Atsisakymo aptarnauti ataka (DoS), kenksmingas programinis kodas (Malware), neteisėtas naudojimas, netinkamas naudojimas",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 36,
//     question: "Kuo skiriasi neteisėtas naudojimas nuo netinkamo naudojimo (detalus paaiškinimas)?",
//     options: [
//       "Neteisėtas naudojimas yra, kai gauna prieigą prie resurso, kuriam prieigos teisių neturėtų turėti; netinkamas naudojimas - kai kompiuterį naudoja neteisėtai veiklai ar pažeidžia teisės aktus/organizacijos reikalavimus",
//       "Tai yra tas pats dalykas",
//       "Neteisėtas naudojimas yra sunkesnis",
//       "Netinkamas naudojimas yra greitesnis"
//     ],
//     correctAnswer: "A) Neteisėtas naudojimas yra, kai gauna prieigą prie resurso, kuriam prieigos teisių neturėtų turėti; netinkamas naudojimas - kai kompiuterį naudoja neteisėtai veiklai ar pažeidžia teisės aktus/organizacijos reikalavimus",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 37,
//     question: "Koks yra pagrindinis tikslas kovojant su DoS atakomis (detalesnis)?",
//     options: [
//       "Nustatyti atakuojančio IP adresą",
//       "Verslui kritinių paslaugų funkcionalumo atstatymas",
//       "Duomenų atsarginių kopijų kūrimas",
//       "Sistemų patikrinimas"
//     ],
//     correctAnswer: "B) Verslui kritinių paslaugų funkcionalumo atstatymas",
//     chapter: "Incidentų tipai"
//   },

//   // V SKYRIUS: ELEKTRONINIŲ NUSIKALTIMŲ SAMPRATA (Klausimai 38-54)
//   {
//     id: 38,
//     question: "Kas pirmasis apibrėžė \"piktnaudžiavimą kompiuteriu\" 1976 metais?",
//     options: ["Majid Yar", "Donn Parker", "Robert Taylor", "Marjorie Britz"],
//     correctAnswer: "B) Donn Parker",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 39,
//     question: "Kiek piktnaudžiavimo kompiuteriu kategorijų išskyrė Donn Parker?",
//     options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
//     correctAnswer: "B) 4 kategorijas",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 40,
//     question: "Kurios konvencijos priėmimas pakeitė terminą \"kompiuteriniai nusikaltimai\"?",
//     options: [
//       "1999 m. Konvencija dėl kibernetinio saugumo",
//       "2001 m. Konvencija dėl elektroninių nusikaltimų",
//       "2000 m. Konvencija dėl duomenų apsaugos",
//       "2002 m. Konvencija dėl informacijos saugumo"
//     ],
//     correctAnswer: "B) 2001 m. Konvencija dėl elektroninių nusikaltimų",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 41,
//     question: "Kiek elektroninių nusikaltimų kategorijų išskyrė Majid Yar?",
//     options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
//     correctAnswer: "B) 4 kategorijas",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 42,
//     question: "Kas NĖRA tarp Majid Yar elektroninių nusikaltimų kategorijų?",
//     options: [
//       "Kibernetinis peržengimas",
//       "Kibernetinė apgaulė ir vagystė",
//       "Kibernetinė pornografija",
//       "Kibernetinis bankininkystė"
//     ],
//     correctAnswer: "D) Kibernetinis bankininkystė",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 43,
//     question: "Kokias sritis dauguma pasaulio valstybių prilygina elektroniniams nusikaltimams pagal jų pavojingumą ir pelningumą?",
//     options: [
//       "Korupciją ir pinigų plovimą",
//       "Terorizmą ir prekybą narkotikais",
//       "Kontrabandą ir mokesčių vengimą",
//       "Žmogžudystes ir plėšimus"
//     ],
//     correctAnswer: "B) Terorizmą ir prekybą narkotikais",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 44,
//     question: "Kaip apibrėžiama elektroninių nusikaltimų sąvoka siaurąja prasme?",
//     options: [
//       "Bet kokie nusikaltimai, kuriems įvykdyti buvo panaudotos kompiuterinės technologijos",
//       "Nusikaltimai tiesiogiai darantys įtaką kompiuterinei sistemai arba joje esantiems duomenims",
//       "Tik internetiniai sukčiavimai",
//       "Programinės įrangos piratavimas"
//     ],
//     correctAnswer: "B) Nusikaltimai tiesiogiai darantys įtaką kompiuterinei sistemai arba joje esantiems duomenims",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 45,
//     question: "Kas yra Donn Parker piktnaudžiavimo kompiuteriu (Computer abuse) apibrėžimas?",
//     options: [
//       "Tik kenksmingo programinio kodo platinimas",
//       "Bet kokį incidentą, apimantį tyčinį veiksmą susijusį su kompiuteriais, kuriuo metu auka patyrė/galėjo patirti nuostolių arba nusikaltėlis gavo naudos",
//       "Duomenų apsaugos pažeidimus",
//       "Interneto svetainių blokinimą"
//     ],
//     correctAnswer: "B) Bet kokį incidentą, apimantį tyčinį veiksmą susijusį su kompiuteriais, kuriuo metu auka patyrė/galėjo patirti nuostolių arba nusikaltėlis gavo naudos",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 46,
//     question: "Pagal Majid Yar požiūrį, kokie yra du pagrindiniai elektroninių nusikaltimų tipai?",
//     options: [
//       "Vidiniai ir išoriniai nusikaltimai",
//       "Kompiuteris naudojamas kaip pagalbinė priemonė ir į kompiuterius orientuoti nusikaltimai",
//       "Fiziniai ir virtualūs nusikaltimai",
//       "Profesionalūs ir mėgėjiški nusikaltimai"
//     ],
//     correctAnswer: "B) Kompiuteris naudojamas kaip pagalbinė priemonė ir į kompiuterius orientuoti nusikaltimai",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 47,
//     question: "Kurios kategorijos priklauso Majid Yar elektroninių nusikaltimų klasifikacijai?",
//     options: [
//       "Kibernetinis peržengimas, kibernetinė apgaulė ir vagystė, kibernetinė pornografija, kibernetinis smurtas",
//       "Programišių atakos, duomenų vagystės, sistemų paralyžius",
//       "Finansiniai, socialiniai, politiniai nusikaltimai",
//       "Lokalūs, nacionaliniai, tarptautiniai nusikaltimai"
//     ],
//     correctAnswer: "A) Kibernetinis peržengimas, kibernetinė apgaulė ir vagystė, kibernetinė pornografija, kibernetinis smurtas",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 48,
//     question: "Kokiais metais buvo priimta Konvencija dėl elektroninių nusikaltimų?",
//     options: ["1999 m.", "2000 m.", "2001 m.", "2002 m."],
//     correctAnswer: "C) 2001 m.",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 49,
//     question: "Kaip Konvencija dėl elektroninių nusikaltimų apibrėžia elektroninių nusikaltimų sąvoką?",
//     options: [
//       "Tik kompiuterių virusų platinimas",
//       "Plataus spektro nusikalstamos veikos, kai kompiuteriai ar IS naudojamos kaip įrankis ar kaip taikinys",
//       "Duomenų bazių kopijavimas",
//       "Interneto svetainių kūrimas neteisėtiems tikslams"
//     ],
//     correctAnswer: "B) Plataus spektro nusikalstamos veikos, kai kompiuteriai ar IS naudojamos kaip įrankis ar kaip taikinys",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 50,
//     question: "Kodėl kai kurios tarptautinės organizacijos sąmoningai neapibrėžia kompiuterinio nusikaltimo?",
//     options: [
//       "Nes tai per sudėtinga",
//       "Mano, kad nuolat keičiantis technologijoms, toks apibrėžimas greitai taptų nebeaktualus",
//       "Neturi pakankamai ekspertų",
//       "Laukia teismų sprendimų"
//     ],
//     correctAnswer: "B) Mano, kad nuolat keičiantis technologijoms, toks apibrėžimas greitai taptų nebeaktualus",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 51,
//     question: "Kuo skiriasi terminas \"cybercrime\" nuo elektronikos srities terminų?",
//     options: [
//       "Nieko nesiskiria",
//       "Cybercrime skiriamasis požymis yra nusikaltimų dalykas – duomenys, informacija kompiuterine forma, įskaitmeninta (digital), elektronine forma",
//       "Cybercrime yra platesnis terminas",
//       "Cybercrime yra siauresnis terminas"
//     ],
//     correctAnswer: "B) Cybercrime skiriamasis požymis yra nusikaltimų dalykas – duomenys, informacija kompiuterine forma, įskaitmeninta (digital), elektronine forma",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },

//   // VI SKYRIUS: INFORMACINIS KARAS (Klausimai 52-61)
//   {
//     id: 52,
//     question: "Kiek procentų karinių komunikacijų perduodamos komercinėmis linijomis?",
//     options: ["80-85%", "85-90%", "90-95%", "95-100%"],
//     correctAnswer: "C) 90-95%",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 53,
//     question: "Kuri savybė NĖRA būdinga informaciniam karui?",
//     options: [
//       "Mažos išlaidos",
//       "Atstumas nereikšmingas",
//       "Anonimiškumas",
//       "Didelės fizinės jėgos poreikis"
//     ],
//     correctAnswer: "D) Didelės fizinės jėgos poreikis",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 54,
//     question: "Kas yra C2 karas?",
//     options: [
//       "Computer and Communication warfare",
//       "Command and Control warfare",
//       "Cyber and Criminal warfare",
//       "Central and Coordinated warfare"
//     ],
//     correctAnswer: "B) Command and Control warfare",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 55,
//     question: "Kodėl informacinis karas yra patrauklesnis už tradicinius metodus?",
//     options: [
//       "Jis yra paprastesnis, pigesnis ir mažiau rizikingas",
//       "Jis nereikalauja specialių žinių",
//       "Jis visada sėkmingas",
//       "Jis legalus"
//     ],
//     correctAnswer: "A) Jis yra paprastesnis, pigesnis ir mažiau rizikingas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 56,
//     question: "Kaip apibrėžiamas informacinis karas?",
//     options: [
//       "Tik kibernetinės atakos",
//       "Veiksmų visuma, siekiant apsaugoti savas informacines sistemas nuo neteisėto panaudojimo, duomenų iškraipymo ar sunaikinimo, ir tuo pačiu siekiant informacinio pranašumo",
//       "Propagandos sklaidimas internete",
//       "Kompiuterių sistemų blokavimas"
//     ],
//     correctAnswer: "B) Veiksmų visuma, siekiant apsaugoti savas informacines sistemas nuo neteisėto panaudojimo, duomenų iškraipymo ar sunaikinimo, ir tuo pačiu siekiant informacinio pranašumo",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 57,
//     question: "Kurios yra pagrindinės informacinio karo savybės?",
//     options: [
//       "Didelės išlaidos ir sudėtingumas",
//       "Mažos išlaidos, atstumas nebereikšmingas, anonimiškumas, informacinių sistemų pažeidžiamumas",
//       "Reikia didelių žmogiškųjų išteklių",
//       "Veikia tik vietiniame lygmenyje"
//     ],
//     correctAnswer: "B) Mažos išlaidos, atstumas nebereikšmingas, anonimiškumas, informacinių sistemų pažeidžiamumas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 58,
//     question: "Kokios strategijos priklauso informacinio karo strategijoms?",
//     options: [
//       "C2 karas, elektroninis karas, psichologinis karas, programišių karas, kibernetinis karas",
//       "Tik fiziniai sprogmenys",
//       "Diplomatinės derybos",
//       "Ekonominės sankcijos"
//     ],
//     correctAnswer: "A) C2 karas, elektroninis karas, psichologinis karas, programišių karas, kibernetinis karas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 59,
//     question: "Kodėl informacinis karas dažniau naudojamas nei tradiciniai kariniai metodai?",
//     options: [
//       "Nes yra paprastesnis, lengvesnis, pigesnis ir mažiau rizikingas",
//       "Nes reikalauja mažiau technologijų",
//       "Nes yra labiau paveikus",
//       "Nes yra teisiškai leistinas"
//     ],
//     correctAnswer: "A) Nes yra paprastesnis, lengvesnis, pigesnis ir mažiau rizikingas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 60,
//     question: "Kiek procentų karinių komunikacijų perduodamos komercinėmis linijomis (pakartotinis)?",
//     options: ["50-60%", "70-80%", "80-85%", "90-95%"],
//     correctAnswer: "D) 90-95%",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 61,
//     question: "Kokia yra viena iš problemų, susijusių su mikroschemos, naudojamomis valstybės sistemose?",
//     options: [
//       "Jos per brangios",
//       "Valstybės jas perka iš kitų šalių įmonių, su kuriomis ateity įmanomas karinis konfliktas",
//       "Jos per lėtos",
//       "Jos per sudėtingos"
//     ],
//     correctAnswer: "B) Valstybės jas perka iš kitų šalių įmonių, su kuriomis ateity įmanomas karinis konfliktas",
//     chapter: "Informacinis karas"
//   }
// ];


// export const cybercrimeQuestions: Question[] = [
//   // I SKYRIUS: NEE TYRIMŲ PRINCIPAI IR TYRIMO EIGA (Klausimai 1-8)
//   {
//     id: 1,
//     question: "Kiek bendrųjų NEE tyrimo etapų yra išskiriama?",
//     options: ["5 etapai", "6 etapai", "7 etapai", "8 etapai"],
//     correctAnswer: "C) 7 etapai",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 2,
//     question: "Kas yra pirmasis veiksmas, kai įvykis perkvalifikuojamas į incidentą?",
//     options: [
//       "Tyrėjas surenka įkalčius įvykio vietoje",
//       "Vadovybė kreipiasi į teisininką konsultacijos",
//       "Tyrėjas parengia pirminio atsako procedūras",
//       "Daromos surinktų duomenų laikmenų atvaizdo kopijos"
//     ],
//     correctAnswer: "B) Vadovybė kreipiasi į teisininką konsultacijos",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 3,
//     question: "Pagal Middleton (2001), kuris klausimas NĖRA užduodamas užsakovui pirmojo kontakto metu?",
//     options: [
//       "Apie kokį nusikaltimo tipą kalbama?",
//       "Ar įmonėje naudojama IDS?",
//       "Kokia yra taikoma įvykių registracijos įrašų saugojimo politika?",
//       "Kokia yra tyrėjo kvalifikacija?"
//     ],
//     correctAnswer: "D) Kokia yra tyrėjo kvalifikacija?",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 4,
//     question: "Kuris principas NĖRA tarp bendrųjų NEE tyrimo principų?",
//     options: [
//       "Originalius įkalčius analizuoti kiek įmanoma mažiau",
//       "Nemodifikuoti įkalčių",
//       "Naudoti tyrimo metu surinktus duomenis tik tyrimo tikslais",
//       "Visada naudoti tik naujausias technologijas"
//     ],
//     correctAnswer: "D) Visada naudoti tik naujausias technologijas",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 5,
//     question: "Kas yra \"teismo kompiuterija\" pagal Middelton (2001)?",
//     options: [
//       "Kompiuterių naudojimas teisme",
//       "Įkalčių rinkimo, išsaugojimo ir analizės procesas",
//       "Teisėjų mokymas kompiuterių naudojimo",
//       "Elektroninis teismo administravimas"
//     ],
//     correctAnswer: "B) Įkalčių rinkimo, išsaugojimo ir analizės procesas",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 6,
//     question: "Kokia yra pagrindinė \"bit-to-bit\" kopijos paskirtis?",
//     options: [
//       "Sistemos greičio didinimas",
//       "Duomenų saugojimo optimizavimas",
//       "Tiksli failinės sistemos kopija tyrimui",
//       "Sistemos atsarginė kopija"
//     ],
//     correctAnswer: "C) Tiksli failinės sistemos kopija tyrimui",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 7,
//     question: "Kokia yra peržiūros pasibaigus incidentui (post mortem review) paskirtis?",
//     options: [
//       "Darbuotojų nubaudimas",
//       "Finansinių nuostolių apskaičiavimas",
//       "Incidento atsako proceso gerinimas kitą kartą",
//       "Teisės aktų keitimas"
//     ],
//     correctAnswer: "C) Incidento atsako proceso gerinimas kitą kartą",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },
//   {
//     id: 8,
//     question: "Kiek procentų verslo organizacijų patiria saugos incidentus pagal ES Tarybos duomenis?",
//     options: ["75%", "80%", "85%", "90%"],
//     correctAnswer: "C) 85%",
//     chapter: "NEE tyrimų principai ir tyrimo eiga"
//   },

//   // II SKYRIUS: NEE TYRIMŲ TIPAI (Klausimai 9-16)
//   {
//     id: 9,
//     question: "Į ką tradiciškai skirstomi NEE tyrimai?",
//     options: [
//       "Vidutinės trukmės ir ilgus",
//       "Formaliuosius ir neformaliuosius",
//       "Paprastus ir sudėtingus",
//       "Vidinius ir išorinius"
//     ],
//     correctAnswer: "B) Formaliuosius ir neformaliuosius",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 10,
//     question: "Kodėl geriau vadovautis formaliojo tyrimo metodais?",
//     options: [
//       "Jie yra pigesni",
//       "Jie trunka trumpiau",
//       "Sprendimas dėl bylos perdavimo teismui gali būti priimtas vėliau",
//       "Jie nereikalauja specialių įgūdžių"
//     ],
//     correctAnswer: "C) Sprendimas dėl bylos perdavimo teismui gali būti priimtas vėliau",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 11,
//     question: "Kaip vadinamos \"neišjungtos kompiuterinės sistemos\" pagal jų būseną tyrimo metu?",
//     options: [
//       "Aktyvios sistemos",
//       "\"Gyvos\" sistemos",
//       "Veikiančios sistemos",
//       "Dinamiškos sistemos"
//     ],
//     correctAnswer: "B) \"Gyvos\" sistemos",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 12,
//     question: "Kuri priežastis NĖRA tarp lemiančių \"gyvų\" sistemų veiksmingumą?",
//     options: [
//       "Globali ekonomika ir paskirstytos sistemos",
//       "Poreikis nepertraukiamai veikiančioms sistemoms",
//       "Auganti duomenų saugojimo laikmenų talpa",
//       "Mažesnė tyrimo kaina"
//     ],
//     correctAnswer: "D) Mažesnė tyrimo kaina",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 13,
//     question: "Kas yra SIM sistemos?",
//     options: [
//       "System Information Management",
//       "Security Incident Management",
//       "Server Installation Management",
//       "Software Integration Management"
//     ],
//     correctAnswer: "B) Security Incident Management",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 14,
//     question: "Kuris metodas naudojamas \"gyvų\" sistemų tyrimo atveju, kai sistema automatiškai dekoduoja kietojo disko turinį?",
//     options: [
//       "Statinė analizė",
//       "Dinaminė analizė",
//       "Hibridinė analizė",
//       "Automatinė analizė"
//     ],
//     correctAnswer: "B) Dinaminė analizė",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 15,
//     question: "Kuris standartas reglamentuoja veiksmus su bankinių kortelių numeriais?",
//     options: ["ISO 27001", "PCI DSS", "GDPR", "SOX"],
//     correctAnswer: "B) PCI DSS",
//     chapter: "NEE tyrimų tipai"
//   },
//   {
//     id: 16,
//     question: "Kas yra DDoS ataka?",
//     options: [
//       "Direct Database operating System ataka",
//       "Distributed Denial of Service ataka",
//       "Dynamic Data over System ataka",
//       "Dual Direction operating System ataka"
//     ],
//     correctAnswer: "B) Distributed Denial of Service ataka",
//     chapter: "NEE tyrimų tipai"
//   },

//   // III SKYRIUS: PIRMINĖ REAKCIJA Į ELEKTRONININIUS NUSIKALTIMUS (Klausimai 17-29)
//   {
//     id: 17,
//     question: "Kas yra incidentas pagal ITIL?",
//     options: [
//       "Tik kompiuterių gedimas",
//       "Bet koks įvykis, kuris nėra standartinio paslaugos funkcionavimo dalis",
//       "Tik saugumo pažeidimai",
//       "Tik duomenų praradimas"
//     ],
//     correctAnswer: "B) Bet koks įvykis, kuris nėra standartinio paslaugos funkcionavimo dalis",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 18,
//     question: "Kas yra CSIRT?",
//     options: [
//       "Computer Security Incident Response Team",
//       "Computer System Information Recovery Team",
//       "Central Security Intelligence Research Team",
//       "Cyber Security Internal Review Team"
//     ],
//     correctAnswer: "A) Computer Security Incident Response Team",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 19,
//     question: "Kiek rizikos kategorijų išskiriama rizikos analizėje?",
//     options: ["2 kategorijos", "3 kategorijos", "4 kategorijos", "5 kategorijos"],
//     correctAnswer: "B) 3 kategorijos (žema, vidutinė, didelė)",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 20,
//     question: "Kas NĖRA tarp CSIRT grupės narių pareigų?",
//     options: [
//       "Vadovaujantysis tyrėjas",
//       "Informacijos saugos specialistas",
//       "Teisininkas",
//       "Marketingo specialistas"
//     ],
//     correctAnswer: "D) Marketingo specialistas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 21,
//     question: "Kas yra \"scenos užšaldymas\" (freezing the scene)?",
//     options: [
//       "Sistemos išjungimas",
//       "Visų įmanomų atsargos priemonių ėmimasis įkalčių išsaugojimui",
//       "Darbuotojų atleidimas",
//       "Komunikacijos sustabdymas"
//     ],
//     correctAnswer: "B) Visų įmanomų atsargos priemonių ėmimasis įkalčių išsaugojimui",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 22,
//     question: "Kuo skiriasi incidentų sulaikymas (handling) nuo incidentų valdymo (incident management)?",
//     options: [
//       "Jie yra tas pats procesas",
//       "Incidentų sulaikymas yra platesnis terminas",
//       "Incidentų sulaikyme pagrindinis dėmesys yra skiriamas priemonėms, leidžiančioms nepasireikšti incidento pasekmėms pilna jėga, o incidentų valdymas apima visus žingsnius nuo incidento paskelbimo iki dokumentavimo ir analizės fazės",
//       "Incidentų valdymas yra trumpesnis procesas"
//     ],
//     correctAnswer: "C) Incidentų sulaikyme pagrindinis dėmesys yra skiriamas priemonėms, leidžiančioms nepasireikšti incidento pasekmėms pilna jėga, o incidentų valdymas apima visus žingsnius nuo incidento paskelbimo iki dokumentavimo ir analizės fazės",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 23,
//     question: "Kokios yra dvi pagrindinės reagavimo į incidentus politikos?",
//     options: [
//       "Greita ir lėta reakcija",
//       "Vidinė ir išorinė reakcija",
//       "Atiduoti reagavimo funkciją kitoms specializuotoms organizacijoms (outsource) arba turėti savo vidines CSIRT komandas",
//       "Automatinė ir rankinė reakcija"
//     ],
//     correctAnswer: "C) Atiduoti reagavimo funkciją kitoms specializuotoms organizacijoms (outsource) arba turėti savo vidines CSIRT komandas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 24,
//     question: "Kokie yra pagrindiniai CSIRT grupės narių vaidmenys?",
//     options: [
//       "Tik techniniai specialistai",
//       "Vadovaujantysis tyrėjas, informacijos saugos specialistas, verslo/vadovybės atstovas, teisininkas, techniniai specialistai, personalo skyriaus atstovai",
//       "Tik vadovybės atstovai",
//       "Programuotojai ir sistemų administratoriai"
//     ],
//     correctAnswer: "B) Vadovaujantysis tyrėjas, informacijos saugos specialistas, verslo/vadovybės atstovas, teisininkas, techniniai specialistai, personalo skyriaus atstovai",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 25,
//     question: "Kokie yra pagrindiniai mokymų tikslai reagavimo į incidentus procese?",
//     options: [
//       "Tik techninio personalo švietimas",
//       "Plano patikrinimas, komunikacijos kanalų patikrinimas, grupės narių reakcijos patikrinimas",
//       "Finansinių išteklių planavimas",
//       "Naujų programinės įrangos versijų mokymais"
//     ],
//     correctAnswer: "B) Plano patikrinimas, komunikacijos kanalų patikrinimas, grupės narių reakcijos patikrinimas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 26,
//     question: "Kas yra SIM sistemos (Security Incident Management)?",
//     options: [
//       "Paprastos duomenų bazės",
//       "Sistemos, kurios agreguoja įvykių registracijos įrašus iš skirtingų šaltinių ir ieško juose neatitikimo ar įsiskverbimo šablonų",
//       "Antivirusinės programos",
//       "Ugniasienės"
//     ],
//     correctAnswer: "B) Sistemos, kurios agreguoja įvykių registracijos įrašus iš skirtingų šaltinių ir ieško juose neatitikimo ar įsiskverbimo šablonų",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 27,
//     question: "Kodėl organizacijos vengia pranešti apie incidentus teisėsaugos institucijoms?",
//     options: [
//       "Nes nežino procedūrų",
//       "Dėl nuostolių, kuriuos organizacija patirs: baudų už netinkamą informacijos saugos organizavimą, reputacijos praradimo, klientų nepasitikėjimo",
//       "Nes tai užtrunka per ilgai",
//       "Nes nėra įpareigoti"
//     ],
//     correctAnswer: "B) Dėl nuostolių, kuriuos organizacija patirs: baudų už netinkamą informacijos saugos organizavimą, reputacijos praradimo, klientų nepasitikėjimo",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 28,
//     question: "Kokie yra NEE tyrimo metodai analizės fazėje?",
//     options: [
//       "Tik programinės įrangos analizė",
//       "Rinkmenų analizė, ištrintos ar užkoduotos informacijos atkūrimas, vizuali įrangos apžiūra ar įtariamųjų ir liudininkų apklausos, asmeninių atakuotojo savybių įvertinimas ir tikslų nustatymas",
//       "Tik duomenų bazių tikrinimas",
//       "Fizinė įrangos analizė"
//     ],
//     correctAnswer: "B) Rinkmenų analizė, ištrintos ar užkoduotos informacijos atkūrimas, vizuali įrangos apžiūra ar įtariamųjų ir liudininkų apklausos, asmeninių atakuotojo savybių įvertinimas ir tikslų nustatymas",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },
//   {
//     id: 29,
//     question: "Kas yra \"post mortem review\"?",
//     options: [
//       "Medicinos ekspertizė",
//       "Peržiūra pasibaigus incidentui, atliekama tam, kad pasibaigus tyrimui ir gavus tyrimo išvadas būtų imtasi veiksmų incidento atsako procesui gerinti kitą kartą",
//       "Finansinė ataskaita",
//       "Personalo vertinimas"
//     ],
//     correctAnswer: "B) Peržiūra pasibaigus incidentui, atliekama tam, kad pasibaigus tyrimui ir gavus tyrimo išvadas būtų imtasi veiksmų incidento atsako procesui gerinti kitą kartą",
//     chapter: "Pirminė reakcija į elektronininius nusikaltimus"
//   },

//   // IV SKYRIUS: INCIDENTŲ TIPAI (Klausimai 30-37)
//   {
//     id: 30,
//     question: "Kiek pagrindinių incidentų tipų išskiriama?",
//     options: ["3 tipai", "4 tipai", "5 tipai", "6 tipai"],
//     correctAnswer: "B) 4 tipai",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 31,
//     question: "Kas yra DoS ataka?",
//     options: [
//       "Data over System ataka",
//       "Denial-of-service ataka",
//       "Destruction of System ataka",
//       "Direct operational System ataka"
//     ],
//     correctAnswer: "B) Denial-of-service ataka",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 32,
//     question: "Koks yra pagrindinis tikslas kovojant su DoS atakomis?",
//     options: [
//       "Nusikaltėlio identifikavimas",
//       "Verslo procesų optimizavimas",
//       "Verslui kritinių paslaugų funkcionalumo atstatymas",
//       "Sistemos atnaujinimas"
//     ],
//     correctAnswer: "C) Verslui kritinių paslaugų funkcionalumo atstatymas",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 33,
//     question: "Kas yra KPK?",
//     options: [
//       "Kompiuterinis pranešimų kodas",
//       "Kenksmingas programinis kodas",
//       "Kompiuterinio pašto kodas",
//       "Komandinio procesų kodas"
//     ],
//     correctAnswer: "B) Kenksmingas programinis kodas",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 34,
//     question: "Kuo skiriasi neteisėtas naudojimas nuo netinkamo naudojimo?",
//     options: [
//       "Neteisėtas - be leidimo, netinkamas - pažeidžiant reikalavimus",
//       "Neteisėtas - dieną, netinkamas - naktį",
//       "Neteisėtas - darbuotojai, netinkamas - svečiai",
//       "Nėra skirtumo"
//     ],
//     correctAnswer: "A) Neteisėtas - be leidimo, netinkamas - pažeidžiant reikalavimus",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 35,
//     question: "Kokie yra keturi pagrindiniai incidentų tipai?",
//     options: [
//       "Vidiniai, išoriniai, techniniai, socialiniai",
//       "Atsisakymo aptarnauti ataka (DoS), kenksmingas programinis kodas (Malware), neteisėtas naudojimas, netinkamas naudojimas",
//       "Fiziniai, virtualūs, hibridiniai, debesų",
//       "Automatiniai, rankiniai, pusiau automatiniai, mišrūs"
//     ],
//     correctAnswer: "B) Atsisakymo aptarnauti ataka (DoS), kenksmingas programinis kodas (Malware), neteisėtas naudojimas, netinkamas naudojimas",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 36,
//     question: "Kuo skiriasi neteisėtas naudojimas nuo netinkamo naudojimo (detalus paaiškinimas)?",
//     options: [
//       "Neteisėtas naudojimas yra, kai gauna prieigą prie resurso, kuriam prieigos teisių neturėtų turėti; netinkamas naudojimas - kai kompiuterį naudoja neteisėtai veiklai ar pažeidžia teisės aktus/organizacijos reikalavimus",
//       "Tai yra tas pats dalykas",
//       "Neteisėtas naudojimas yra sunkesnis",
//       "Netinkamas naudojimas yra greitesnis"
//     ],
//     correctAnswer: "A) Neteisėtas naudojimas yra, kai gauna prieigą prie resurso, kuriam prieigos teisių neturėtų turėti; netinkamas naudojimas - kai kompiuterį naudoja neteisėtai veiklai ar pažeidžia teisės aktus/organizacijos reikalavimus",
//     chapter: "Incidentų tipai"
//   },
//   {
//     id: 37,
//     question: "Koks yra pagrindinis tikslas kovojant su DoS atakomis (detalesnis)?",
//     options: [
//       "Nustatyti atakuojančio IP adresą",
//       "Verslui kritinių paslaugų funkcionalumo atstatymas",
//       "Duomenų atsarginių kopijų kūrimas",
//       "Sistemų patikrinimas"
//     ],
//     correctAnswer: "B) Verslui kritinių paslaugų funkcionalumo atstatymas",
//     chapter: "Incidentų tipai"
//   },

//   // V SKYRIUS: ELEKTRONINIŲ NUSIKALTIMŲ SAMPRATA (Klausimai 38-51)
//   {
//     id: 38,
//     question: "Kas pirmasis apibrėžė \"piktnaudžiavimą kompiuteriu\" 1976 metais?",
//     options: ["Majid Yar", "Donn Parker", "Robert Taylor", "Marjorie Britz"],
//     correctAnswer: "B) Donn Parker",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 39,
//     question: "Kiek piktnaudžiavimo kompiuteriu kategorijų išskyrė Donn Parker?",
//     options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
//     correctAnswer: "B) 4 kategorijas",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 40,
//     question: "Kurios konvencijos priėmimas pakeitė terminą \"kompiuteriniai nusikaltimai\"?",
//     options: [
//       "1999 m. Konvencija dėl kibernetinio saugumo",
//       "2001 m. Konvencija dėl elektroninių nusikaltimų",
//       "2000 m. Konvencija dėl duomenų apsaugos",
//       "2002 m. Konvencija dėl informacijos saugumo"
//     ],
//     correctAnswer: "B) 2001 m. Konvencija dėl elektroninių nusikaltimų",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 41,
//     question: "Kiek elektroninių nusikaltimų kategorijų išskyrė Majid Yar?",
//     options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
//     correctAnswer: "B) 4 kategorijas",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 42,
//     question: "Kas NĖRA tarp Majid Yar elektroninių nusikaltimų kategorijų?",
//     options: [
//       "Kibernetinis peržengimas",
//       "Kibernetinė apgaulė ir vagystė",
//       "Kibernetinė pornografija",
//       "Kibernetinis bankininkystė"
//     ],
//     correctAnswer: "D) Kibernetinis bankininkystė",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 43,
//     question: "Kokias sritis dauguma pasaulio valstybių prilygina elektroniniams nusikaltimams pagal jų pavojingumą ir pelningumą?",
//     options: [
//       "Korupciją ir pinigų plovimą",
//       "Terorizmą ir prekybą narkotikais",
//       "Kontrabandą ir mokesčių vengimą",
//       "Žmogžudystes ir plėšimus"
//     ],
//     correctAnswer: "B) Terorizmą ir prekybą narkotikais",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 44,
//     question: "Kaip apibrėžiama elektroninių nusikaltimų sąvoka siaurąja prasme?",
//     options: [
//       "Bet kokie nusikaltimai, kuriems įvykdyti buvo panaudotos kompiuterinės technologijos",
//       "Nusikaltimai tiesiogiai darantys įtaką kompiuterinei sistemai arba joje esantiems duomenims",
//       "Tik internetiniai sukčiavimai",
//       "Programinės įrangos piratavimas"
//     ],
//     correctAnswer: "B) Nusikaltimai tiesiogiai darantys įtaką kompiuterinei sistemai arba joje esantiems duomenims",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 45,
//     question: "Kas yra Donn Parker piktnaudžiavimo kompiuteriu (Computer abuse) apibrėžimas?",
//     options: [
//       "Tik kenksmingo programinio kodo platinimas",
//       "Bet kokį incidentą, apimantį tyčinį veiksmą susijusį su kompiuteriais, kuriuo metu auka patyrė/galėjo patirti nuostolių arba nusikaltėlis gavo naudos",
//       "Duomenų apsaugos pažeidimus",
//       "Interneto svetainių blokinimą"
//     ],
//     correctAnswer: "B) Bet kokį incidentą, apimantį tyčinį veiksmą susijusį su kompiuteriais, kuriuo metu auka patyrė/galėjo patirti nuostolių arba nusikaltėlis gavo naudos",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 46,
//     question: "Pagal Majid Yar požiūrį, kokie yra du pagrindiniai elektroninių nusikaltimų tipai?",
//     options: [
//       "Vidiniai ir išoriniai nusikaltimai",
//       "Kompiuteris naudojamas kaip pagalbinė priemonė ir į kompiuterius orientuoti nusikaltimai",
//       "Fiziniai ir virtualūs nusikaltimai",
//       "Profesionalūs ir mėgėjiški nusikaltimai"
//     ],
//     correctAnswer: "B) Kompiuteris naudojamas kaip pagalbinė priemonė ir į kompiuterius orientuoti nusikaltimai",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 47,
//     question: "Kurios kategorijos priklauso Majid Yar elektroninių nusikaltimų klasifikacijai?",
//     options: [
//       "Kibernetinis peržengimas, kibernetinė apgaulė ir vagystė, kibernetinė pornografija, kibernetinis smurtas",
//       "Programišių atakos, duomenų vagystės, sistemų paralyžius",
//       "Finansiniai, socialiniai, politiniai nusikaltimai",
//       "Lokalūs, nacionaliniai, tarptautiniai nusikaltimai"
//     ],
//     correctAnswer: "A) Kibernetinis peržengimas, kibernetinė apgaulė ir vagystė, kibernetinė pornografija, kibernetinis smurtas",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 48,
//     question: "Kokiais metais buvo priimta Konvencija dėl elektroninių nusikaltimų?",
//     options: ["1999 m.", "2000 m.", "2001 m.", "2002 m."],
//     correctAnswer: "C) 2001 m.",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 49,
//     question: "Kaip Konvencija dėl elektroninių nusikaltimų apibrėžia elektroninių nusikaltimų sąvoką?",
//     options: [
//       "Tik kompiuterių virusų platinimas",
//       "Plataus spektro nusikalstamos veikos, kai kompiuteriai ar IS naudojamos kaip įrankis ar kaip taikinys",
//       "Duomenų bazių kopijavimas",
//       "Interneto svetainių kūrimas neteisėtiems tikslams"
//     ],
//     correctAnswer: "B) Plataus spektro nusikalstamos veikos, kai kompiuteriai ar IS naudojamos kaip įrankis ar kaip taikinys",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 50,
//     question: "Kodėl kai kurios tarptautinės organizacijos sąmoningai neapibrėžia kompiuterinio nusikaltimo?",
//     options: [
//       "Nes tai per sudėtinga",
//       "Mano, kad nuolat keičiantis technologijoms, toks apibrėžimas greitai taptų nebeaktualus",
//       "Neturi pakankamai ekspertų",
//       "Laukia teismų sprendimų"
//     ],
//     correctAnswer: "B) Mano, kad nuolat keičiantis technologijoms, toks apibrėžimas greitai taptų nebeaktualus",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },
//   {
//     id: 51,
//     question: "Kuo skiriasi terminas \"cybercrime\" nuo elektronikos srities terminų?",
//     options: [
//       "Nieko nesiskiria",
//       "Cybercrime skiriamasis požymis yra nusikaltimų dalykas – duomenys, informacija kompiuterine forma, įskaitmeninta (digital), elektronine forma",
//       "Cybercrime yra platesnis terminas",
//       "Cybercrime yra siauresnis terminas"
//     ],
//     correctAnswer: "B) Cybercrime skiriamasis požymis yra nusikaltimų dalykas – duomenys, informacija kompiuterine forma, įskaitmeninta (digital), elektronine forma",
//     chapter: "Elektroninių nusikaltimų samprata"
//   },

//   // VI SKYRIUS: INFORMACINIS KARAS (Klausimai 52-61)
//   {
//     id: 52,
//     question: "Kiek procentų karinių komunikacijų perduodamos komercinėmis linijomis?",
//     options: ["80-85%", "85-90%", "90-95%", "95-100%"],
//     correctAnswer: "C) 90-95%",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 53,
//     question: "Kuri savybė NĖRA būdinga informaciniam karui?",
//     options: [
//       "Mažos išlaidos",
//       "Atstumas nereikšmingas",
//       "Anonimiškumas",
//       "Didelės fizinės jėgos poreikis"
//     ],
//     correctAnswer: "D) Didelės fizinės jėgos poreikis",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 54,
//     question: "Kas yra C2 karas?",
//     options: [
//       "Computer and Communication warfare",
//       "Command and Control warfare",
//       "Cyber and Criminal warfare",
//       "Central and Coordinated warfare"
//     ],
//     correctAnswer: "B) Command and Control warfare",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 55,
//     question: "Kodėl informacinis karas yra patrauklesnis už tradicinius metodus?",
//     options: [
//       "Jis yra paprastesnis, pigesnis ir mažiau rizikingas",
//       "Jis nereikalauja specialių žinių",
//       "Jis visada sėkmingas",
//       "Jis legalus"
//     ],
//     correctAnswer: "A) Jis yra paprastesnis, pigesnis ir mažiau rizikingas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 56,
//     question: "Kaip apibrėžiamas informacinis karas?",
//     options: [
//       "Tik kibernetinės atakos",
//       "Veiksmų visuma, siekiant apsaugoti savas informacines sistemas nuo neteisėto panaudojimo, duomenų iškraipymo ar sunaikinimo, ir tuo pačiu siekiant informacinio pranašumo",
//       "Propagandos sklaidimas internete",
//       "Kompiuterių sistemų blokavimas"
//     ],
//     correctAnswer: "B) Veiksmų visuma, siekiant apsaugoti savas informacines sistemas nuo neteisėto panaudojimo, duomenų iškraipymo ar sunaikinimo, ir tuo pačiu siekiant informacinio pranašumo",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 57,
//     question: "Kurios yra pagrindinės informacinio karo savybės?",
//     options: [
//       "Didelės išlaidos ir sudėtingumas",
//       "Mažos išlaidos, atstumas nebereikšmingas, anonimiškumas, informacinių sistemų pažeidžiamumas",
//       "Reikia didelių žmogiškųjų išteklių",
//       "Veikia tik vietiniame lygmenyje"
//     ],
//     correctAnswer: "B) Mažos išlaidos, atstumas nebereikšmingas, anonimiškumas, informacinių sistemų pažeidžiamumas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 58,
//     question: "Kokios strategijos priklauso informacinio karo strategijoms?",
//     options: [
//       "C2 karas, elektroninis karas, psichologinis karas, programišių karas, kibernetinis karas",
//       "Tik fiziniai sprogmenys",
//       "Diplomatinės derybos",
//       "Ekonominės sankcijos"
//     ],
//     correctAnswer: "A) C2 karas, elektroninis karas, psichologinis karas, programišių karas, kibernetinis karas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 59,
//     question: "Kodėl informacinis karas dažniau naudojamas nei tradiciniai kariniai metodai?",
//     options: [
//       "Nes yra paprastesnis, lengvesnis, pigesnis ir mažiau rizikingas",
//       "Nes reikalauja mažiau technologijų",
//       "Nes yra labiau paveikus",
//       "Nes yra teisiškai leistinas"
//     ],
//     correctAnswer: "A) Nes yra paprastesnis, lengvesnis, pigesnis ir mažiau rizikingas",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 60,
//     question: "Kiek procentų karinių komunikacijų perduodamos komercinėmis linijomis (pakartotinis)?",
//     options: ["50-60%", "70-80%", "80-85%", "90-95%"],
//     correctAnswer: "D) 90-95%",
//     chapter: "Informacinis karas"
//   },
//   {
//     id: 61,
//     question: "Kokia yra viena iš problemų, susijusių su mikroschemos, naudojamomis valstybės sistemose?",
//     options: [
//       "Jos per brangios",
//       "Valstybės jas perka iš kitų šalių įmonių, su kuriomis ateity įmanomas karinis konfliktas",
//       "Jos per lėtos",
//       "Jos per sudėtingos"
//     ],
//     correctAnswer: "B) Valstybės jas perka iš kitų šalių įmonių, su kuriomis ateity įmanomas karinis konfliktas",
//     chapter: "Informacinis karas"
//   }

// ,

//   // VII SKYRIUS: ELEKTRONINIAI ĮKALČIAI - SAMPRATA IR TIPAI (Klausimai 62-81)
//   {
//     id: 62,
//     question: "Kaip apibrėžiami elektroniniai įkalčiai?",
//     options: [
//       "Tik kompiuterių sistemose saugoma informacija",
//       "Bet kokia kompiuterių sistemomis perduodama arba saugoma informacija, kuri patvirtina tyrimo metu suformuluotą hipotezę",
//       "Tik skaitmeninės nuotraukos ir vaizdo įrašai",
//       "Fiziniai kompiuterių komponentai"
//     ],
//     correctAnswer: "B) Bet kokia kompiuterių sistemomis perduodama arba saugoma informacija, kuri patvirtina tyrimo metu suformuluotą hipotezę",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 63,
//     question: "Kokie du pagrindiniai įkalčių tinkamumo kriterijai turi būti vertinami NEE tyrimo metu?",
//     options: [
//       "Dydis ir formatas",
//       "Autentiškumas ir patikimumas",
//       "Kaina ir prieinamumas",
//       "Greitis ir kokybė"
//     ],
//     correctAnswer: "B) Autentiškumas ir patikimumas",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 64,
//     question: "Pagal JAV Federalinį tyrimų biurą, į kiek kategorijų skirstomi įkalčiai?",
//     options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
//     correctAnswer: "C) 5 kategorijas",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 65,
//     question: "Kas yra įkalčių dinamika?",
//     options: [
//       "Įkalčių saugojimo greitis",
//       "Bet koks veiksnys, kuris keičia įkalčio turinį, dislokaciją arba jį sunaikina",
//       "Įkalčių analizės metodas",
//       "Duomenų šifravimo procesas"
//     ],
//     correctAnswer: "B) Bet koks veiksnys, kuris keičia įkalčio turinį, dislokaciją arba jį sunaikina",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 66,
//     question: "Kuris iš šių veiksnių NĖRA įkalčių dinamikos priežastis?",
//     options: [
//       "Sistemų administratorius",
//       "NEE tyrėjas",
//       "Įtariamasis",
//       "Teismo sprendimas"
//     ],
//     correctAnswer: "D) Teismo sprendimas",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 67,
//     question: "Kiek pagrindinių etapų turi įkalčių išėmimo procesas?",
//     options: ["5 etapus", "6 etapus", "7 etapus", "8 etapus"],
//     correctAnswer: "C) 7 etapus",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 68,
//     question: "Kas yra pirmasis įkalčių išėmimo proceso etapas?",
//     options: [
//       "Duomenų analizė laboratorijoje",
//       "Fizinės įvykio vietos apsaugos užtikrinimas",
//       "Įrangos pakavimas",
//       "Fotografavimas"
//     ],
//     correctAnswer: "B) Fizinės įvykio vietos apsaugos užtikrinimas",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 69,
//     question: "Kokia yra viena iš didžiausių specializuotų NEE tyrimo įrankių problemų?",
//     options: [
//       "Aukšta kaina",
//       "Lėtas veikimas",
//       "Netinkamas failinių sistemų interpretavimas",
//       "Sudėtingas naudojimas"
//     ],
//     correctAnswer: "C) Netinkamas failinių sistemų interpretavimas",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 70,
//     question: "Į kiek kategorijų duomenų objektai gali būti suskirstyti pagal Ashcroft ir General (2001)?",
//     options: ["2 kategorijas", "3 kategorijas", "4 kategorijas", "5 kategorijas"],
//     correctAnswer: "C) 4 kategorijas",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 71,
//     question: "Kokia yra pirma kategorija duomenų objektų klasifikacijoje?",
//     options: [
//       "Kompiuterių sistemų sukurti objektai",
//       "Vartotojų sukurti objektai",
//       "Apsaugoti objektai",
//       "Sisteminiai objektai"
//     ],
//     correctAnswer: "B) Vartotojų sukurti objektai",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 72,
//     question: "Kas priklauso prie fizinių įkalčių kategorijos?",
//     options: [
//       "Tik programinė įranga",
//       "Unikalus identifikatorius",
//       "Duomenų bazės",
//       "Tik failai"
//     ],
//     correctAnswer: "B) Unikalus identifikatorius",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 73,
//     question: "Koks yra pagrindinis elektroninių įkalčių skirtumas nuo realaus pasaulio objektų?",
//     options: [
//       "Jie yra brangesni",
//       "Jie yra nesunkiai kopijuojami",
//       "Jie užima daugiau vietos",
//       "Jie yra sunkiau randami"
//     ],
//     correctAnswer: "B) Jie yra nesunkiai kopijuojami",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 74,
//     question: "Kas yra esminio skirtumo sąvoka elektroniniuose įkalčiuose?",
//     options: [
//       "Duomenų dydžio skirtumas",
//       "Parametrai, kurie leidžia duomenis vienareikšmiškai atskirti",
//       "Failų formato skirtumas",
//       "Saugojimo vietos skirtumas"
//     ],
//     correctAnswer: "B) Parametrai, kurie leidžia duomenis vienareikšmiškai atskirti",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 75,
//     question: "Kokius ryšius gali turėti įkalčiai su jų šaltiniais?",
//     options: [
//       "Tik gamybinį ryšį",
//       "Gamybinį, segmentavimo, keitimo ir vietos ryšius",
//       "Tik vietos ryšį",
//       "Tik keitimo ryšį"
//     ],
//     correctAnswer: "B) Gamybinį, segmentavimo, keitimo ir vietos ryšius",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 76,
//     question: "Kas yra optimizuotos įkalčių išėmimo schemos privalumas?",
//     options: [
//       "Sumažina tyrimo laiką",
//       "Sumažina išlaidų apimtį naudojant įkalčių prioretizavimą",
//       "Padidina tikslumą",
//       "Supaprastina dokumentavimą"
//     ],
//     correctAnswer: "B) Sumažina išlaidų apimtį naudojant įkalčių prioretizavimą",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 77,
//     question: "Koks yra pagrindinis principas, taikomas asmens privatumo aspekte?",
//     options: [
//       "Visi duomenys turi būti viešinami",
//       "Duomenys, neturintys tiesioginio ryšio su tiriamu nusikaltimu, turi būti saugomi pagal asmens duomenų apsaugos reikalavimus",
//       "Privatūs duomenys turi būti ištrinti",
//       "Asmens duomenys negali būti naudojami"
//     ],
//     correctAnswer: "B) Duomenys, neturintys tiesioginio ryšio su tiriamu nusikaltimu, turi būti saugomi pagal asmens duomenų apsaugos reikalavimus",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 78,
//     question: "Kodėl atsiranda alternatyvūs įkalčių išėmimo metodai?",
//     options: [
//       "Dėl technologijų pažangos",
//       "Tradicinis metodas yra brangus ir reikalauja daug laiko",
//       "Dėl teisės aktų pokyčių",
//       "Dėl personalo trūkumo"
//     ],
//     correctAnswer: "B) Tradicinis metodas yra brangus ir reikalauja daug laiko",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 79,
//     question: "Kada ypač tinka alternatyvūs įkalčių išėmimo metodai?",
//     options: [
//       "Kai trūksta specialistų",
//       "Kai tyrimą užsako kompanija, nukentėjusi nuo išorinio įsilaužimo",
//       "Kai įranga yra per sena",
//       "Kai reikia greitai užbaigti tyrimą"
//     ],
//     correctAnswer: "B) Kai tyrimą užsako kompanija, nukentėjusi nuo išorinio įsilaužimo",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 80,
//     question: "Kokius įrankius rekomenduojama naudoti renkant įkalčius teismo procesui?",
//     options: [
//       "Bet kokius prieinamus įrankius",
//       "Tik naujausius įrankius",
//       "Patikimus ir patvirtintus įrankius",
//       "Tik nemokamus įrankius"
//     ],
//     correctAnswer: "C) Patikimus ir patvirtintus įrankius",
//     chapter: "Elektroniniai įkalčiai"
//   },
//   {
//     id: 81,
//     question: "Kas turėtų stengtis įgyti minimalių NEE tyrimo srities žinių?",
//     options: [
//       "Tik IT specialistai",
//       "Visi detektyvo darbą atliekantys darbuotojai",
//       "Tik laboratorijos darbuotojai",
//       "Tik vadovai"
//     ],
//     correctAnswer: "B) Visi detektyvo darbą atliekantys darbuotojai",
//     chapter: "Elektroniniai įkalčiai"
//   },

//   // VIII SKYRIUS: ĮKALČIŲ ANALIZĖS METODAI (Klausimai 82-106)
//   {
//     id: 82,
//     question: "Kiek įkalčių analizės būdų išskirta dokumente?",
//     options: ["8 būdai", "9 būdai", "10 būdų", "11 būdų"],
//     correctAnswer: "C) 10 būdų",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 83,
//     question: "Kas yra pagrindinė įkalčių analizės etapo užduotis?",
//     options: [
//       "Įkalčių rinkimas",
//       "Surasti duomenis, kurie gali patvirtinti arba paneigti tyrimo hipotezę",
//       "Ataskaitų rašymas",
//       "Technikos tikrinimas"
//     ],
//     correctAnswer: "B) Surasti duomenis, kurie gali patvirtinti arba paneigti tyrimo hipotezę",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 84,
//     question: "Kuris metodas yra vienas iš plačiausiai taikomų analizės metodų?",
//     options: [
//       "Tinklo srauto analizė",
//       "Atminties analizė",
//       "Įkalčių paieška pagal reikšminius žodžius",
//       "Kontaktų analizė"
//     ],
//     correctAnswer: "C) Įkalčių paieška pagal reikšminius žodžius",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 85,
//     question: "Kodėl pasitelkiama specializuota programinė įranga reikšminių žodžių paieškai?",
//     options: [
//       "Dėl teisės aktų reikalavimų",
//       "Informacijos apimtys yra labai didelės ir vizualinė analizė nebeįmanoma",
//       "Taip greičiau",
//       "Taip tiksliau"
//     ],
//     correctAnswer: "B) Informacijos apimtys yra labai didelės ir vizualinė analizė nebeįmanoma",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 86,
//     question: "Koks yra pagrindinis įvykių registracijos įrašų analizės privalumas?",
//     options: [
//       "Lengva atlikti",
//       "Įrašai yra griežtai struktūrizuoti",
//       "Nebrangu",
//       "Nereikia specializuotos įrangos"
//     ],
//     correctAnswer: "B) Įrašai yra griežtai struktūrizuoti",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 87,
//     question: "Kas naudojama įvykių registracijos įrašuose prioritetų nustatymui?",
//     options: [
//       "Spalvų kodavimas",
//       "Įvykių rangavimo sistema",
//       "Abėcėlinė tvarka",
//       "Laiko žymos"
//     ],
//     correctAnswer: "B) Įvykių rangavimo sistema",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 88,
//     question: "Kada operacinė sistema naudoja sukeitimų failą?",
//     options: [
//       "Perkraunant kompiuterį",
//       "Kai pritrūksta operatyviosios atminties",
//       "Įrašant failus",
//       "Paleidžiant programas"
//     ],
//     correctAnswer: "B) Kai pritrūksta operatyviosios atminties",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 89,
//     question: "Koks yra didžiausias sukeitimų failo analizės iššūkis?",
//     options: [
//       "Failo dydis",
//       "Informacija yra nestruktūrizuota ir prieinama binariniu formatu",
//       "Failas yra šifruotas",
//       "Reikia specialių teisių"
//     ],
//     correctAnswer: "B) Informacija yra nestruktūrizuota ir prieinama binariniu formatu",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 90,
//     question: "Ką būtina atsižvelgti atliekant kontaktų analizę?",
//     options: [
//       "Laiko sąnaudas",
//       "Privatumo įstatymus",
//       "Technines galimybes",
//       "Biudžetą"
//     ],
//     correctAnswer: "B) Privatumo įstatymus",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 91,
//     question: "Kas tiriama kontaktų analizės metu?",
//     options: [
//       "Tik elektroniniai laiškai",
//       "Elektroniniai laiškai, pokalbių žurnalai, skambučių išklotinė",
//       "Tik telefono skambučiai",
//       "Tik socialiniai tinklai"
//     ],
//     correctAnswer: "B) Elektroniniai laiškai, pokalbių žurnalai, skambučių išklotinė",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 92,
//     question: "Kokią informaciją galima gauti iš atminties atvaizdo analizės?",
//     options: [
//       "Tik failų sąrašą",
//       "Veikiančius procesus, slaptažodžius, kviečiamas bibliotekas",
//       "Tik sistemos konfigūraciją",
//       "Tik tinklo parametrus"
//     ],
//     correctAnswer: "B) Veikiančius procesus, slaptažodžius, kviečiamas bibliotekas",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 93,
//     question: "Kiek laiko įrašai saugomi operatyviojoje atmintyje (RAM)?",
//     options: [
//       "Visada",
//       "Vieną valandą",
//       "Tik tol, kol kompiuteris įjungtas",
//       "Vieną dieną"
//     ],
//     correctAnswer: "C) Tik tol, kol kompiuteris įjungtas",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 94,
//     question: "Kokios informacijos galima gauti iš naršyklės podėlio (cache) analizės?",
//     options: [
//       "Tik slaptažodžius",
//       "Informaciją apie renkamus duomenis, tikslus, naršymo įpročius",
//       "Tik IP adresus",
//       "Tik failus"
//     ],
//     correctAnswer: "B) Informaciją apie renkamus duomenis, tikslus, naršymo įpročius",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 95,
//     question: "Kur saugoma spausdintuvo kaupiklio informacija?",
//     options: [
//       "Tik spausdintuve",
//       "Spausdintuvo kaupiklyje arba eilės faile (spooler)",
//       "Tik sistemos registruose",
//       "Tik laikiniuose failuose"
//     ],
//     correctAnswer: "B) Spausdintuvo kaupiklyje arba eilės faile (spooler)",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 96,
//     question: "Ką galima sužinoti vykdant tinklo srauto analizę?",
//     options: [
//       "Tik IP adresus",
//       "Atidarytus sujungimus, protokolus, nešifruotus slaptažodžius",
//       "Tik domeno vardus",
//       "Tik failo dydžius"
//     ],
//     correctAnswer: "B) Atidarytus sujungimus, protokolus, nešifruotus slaptažodžius",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 97,
//     question: "Kuris įrankis yra labiausiai žinomas tinklo paketų analizei?",
//     options: ["EnCase", "FTK", "Wireshark", "Autopsy"],
//     correctAnswer: "C) Wireshark",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 98,
//     question: "Ant ko pagrįsta failų keitimo istorijos analizė?",
//     options: [
//       "Failų pavadinimų analizėje",
//       "Maišos (hash) reikšmių arba laiko žymių analizėje",
//       "Failų dydžių palyginime",
//       "Failų tipų analizėje"
//     ],
//     correctAnswer: "B) Maišos (hash) reikšmių arba laiko žymių analizėje",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 99,
//     question: "Kurie protokolai gali būti analizuojami tinklo srautų analizės metu?",
//     options: [
//       "Tik HTTP",
//       "HTTP/HTTPS, DNS, SMTP, FTP, SSL/TLS",
//       "Tik HTTPS",
//       "Tik DNS"
//     ],
//     correctAnswer: "B) HTTP/HTTPS, DNS, SMTP, FTP, SSL/TLS",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 100,
//     question: "Kas yra ELA metodas?",
//     options: [
//       "Duomenų šifravimo metodas",
//       "Error Level Analysis - klastojimų aptikimo metodas vaizdams",
//       "Elektroninio pašto analizės metodas",
//       "Einamųjų logų analizės metodas"
//     ],
//     correctAnswer: "B) Error Level Analysis - klastojimų aptikimo metodas vaizdams",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 101,
//     question: "Kurios programinės įrangos pavyzdžiai paminėti reikšminių žodžių paieškai?",
//     options: [
//       "Tik EnCase ir FTK",
//       "EnCase, Autopsy, FTK, X-Ways, AXIOM",
//       "Tik Windows paieška",
//       "Tik Google paieška"
//     ],
//     correctAnswer: "B) EnCase, Autopsy, FTK, X-Ways, AXIOM",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 102,
//     question: "Ką reiškia informacinis „triukšmas” įvykių registracijos analizėje?",
//     options: [
//       "Garso įrašai sistemoje",
//       "Nereikšmingi įrašai, kurie trukdo analizei",
//       "Sistemos klaidos",
//       "Tinklo trukdžiai"
//     ],
//     correctAnswer: "B) Nereikšmingi įrašai, kurie trukdo analizei",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 103,
//     question: "Kurios bylos analizuojamos naršyklės cache analizės metu?",
//     options: [
//       "Tik .txt failai",
//       "Cache failai, istorija, slapukai, parsisiuntimai",
//       "Tik vaizdo failai",
//       "Tik garso failai"
//     ],
//     correctAnswer: "B) Cache failai, istorija, slapukai, parsisiuntimai",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 104,
//     question: "Kiek laiko dažniausiai saugomi sistemos žurnalai (event logs)?",
//     options: [
//       "Visada",
//       "Vieną dieną",
//       "Nuo kelių dienų iki kelių mėnesių",
//       "Vienerius metus"
//     ],
//     correctAnswer: "C) Nuo kelių dienų iki kelių mėnesių",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 105,
//     question: "Kas yra EXIF duomenys?",
//     options: [
//       "Šifravimo raktas",
//       "Nuotraukų metaduomenys",
//       "Sistemos klaidos kodas",
//       "Tinklo protokolas"
//     ],
//     correctAnswer: "B) Nuotraukų metaduomenys",
//     chapter: "Įkalčių analizės metodai"
//   },
//   {
//     id: 106,
//     question: "Kurie duomenų šaltiniai gali būti naudojami laiko linijų (timeline) kūrimui?",
//     options: [
//       "Tik sistemos laikrodis",
//       "Failų sistemos, žurnalų, naršyklės duomenys",
//       "Tik interneto istorija",
//       "Tik elektroninis paštas"
//     ],
//     correctAnswer: "B) Failų sistemos, žurnalų, naršyklės duomenys",
//     chapter: "Įkalčių analizės metodai"
//   }
// ];


export const cybercrimeQuestions: Question[] = [
  // I SKYRIUS: NEE TYRIMŲ PRINCIPAI IR TYRIMO EIGA (Klausimai 1-8)
  {
    id: 1,
    question: "Kiek bendrųjų NEE tyrimo etapų yra išskiriama?",
    options: ["5 etapai", "6 etapai", "7 etapai", "8 etapai"],
    correctAnswer: "C) 7 etapai",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 2,
    question: "Kas yra pirmasis veiksmas, kai įvykis perkvalifikuojamas į incidentą?",
    options: [
      "Tyrėjas surenka įkalčius įvykio vietoje",
      "Vadovybė kreipiasi į teisininką konsultacijos",
      "Tyrėjas parengia pirminio atsako procedūras",
      "Daromos surinktų duomenų laikmenų atvaizdo kopijos"
    ],
    correctAnswer: "B) Vadovybė kreipiasi į teisininką konsultacijos",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 3,
    question: "Pagal Middleton (2001), kuris klausimas NĖRA užduodamas užsakovui pirmojo kontakto metu?",
    options: [
      "Apie kokį nusikaltimo tipą kalbama?",
      "Ar įmonėje naudojama IDS?",
      "Kokia yra taikoma įvykių registracijos įrašų saugojimo politika?",
      "Kokia yra tyrėjo kvalifikacija?"
    ],
    correctAnswer: "D) Kokia yra tyrėjo kvalifikacija?",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 4,
    question: "Kuris principas NĖRA tarp bendrųjų NEE tyrimo principų?",
    options: [
      "Originalius įkalčius analizuoti kiek įmanoma mažiau",
      "Nemodifikuoti įkalčių",
      "Naudoti tyrimo metu surinktus duomenis tik tyrimo tikslais",
      "Visada naudoti tik naujausias technologijas"
    ],
    correctAnswer: "D) Visada naudoti tik naujausias technologijas",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 5,
    question: "Kas yra \"teismo kompiuterija\" pagal Middelton (2001)?",
    options: [
      "Kompiuterių naudojimas teisme",
      "Įkalčių rinkimo, išsaugojimo ir analizės procesas",
      "Teisėjų mokymas kompiuterių naudojimo",
      "Elektroninis teismo administravimas"
    ],
    correctAnswer: "B) Įkalčių rinkimo, išsaugojimo ir analizės procesas",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 6,
    question: "Kokia yra pagrindinė \"bit-to-bit\" kopijos paskirtis?",
    options: [
      "Sistemos greičio didinimas",
      "Duomenų saugojimo optimizavimas",
      "Tiksli failinės sistemos kopija tyrimui",
      "Sistemos atsarginė kopija"
    ],
    correctAnswer: "C) Tiksli failinės sistemos kopija tyrimui",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 7,
    question: "Kokia yra peržiūros pasibaigus incidentui (post mortem review) paskirtis?",
    options: [
      "Darbuotojų nubaudimas",
      "Finansinių nuostolių apskaičiavimas",
      "Incidento atsako proceso gerinimas kitą kartą",
      "Teisės aktų keitimas"
    ],
    correctAnswer: "C) Incidento atsako proceso gerinimas kitą kartą",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },
  {
    id: 8,
    question: "Kiek procentų verslo organizacijų patiria saugos incidentus pagal ES Tarybos duomenis?",
    options: ["75%", "80%", "85%", "90%"],
    correctAnswer: "C) 85%",
    chapter: "NEE tyrimų principai ir tyrimo eiga"
  },

  // II SKYRIUS: NEE TYRIMŲ TIPAI (Klausimai 9-16)
  {
    id: 9,
    question: "Į ką tradiciškai skirstomi NEE tyrimai?",
    options: [
      "Vidutinės trukmės ir ilgus",
      "Formaliuosius ir neformaliuosius",
      "Paprastus ir sudėtingus",
      "Vidinius ir išorinius"
    ],
    correctAnswer: "B) Formaliuosius ir neformaliuosius",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 10,
    question: "Kodėl geriau vadovautis formaliojo tyrimo metodais?",
    options: [
      "Jie yra pigesni",
      "Jie trunka trumpiau",
      "Sprendimas dėl bylos perdavimo teismui gali būti priimtas vėliau",
      "Jie nereikalauja specialių įgūdžių"
    ],
    correctAnswer: "C) Sprendimas dėl bylos perdavimo teismui gali būti priimtas vėliau",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 11,
    question: "Kaip vadinamos \"neišjungtos kompiuterinės sistemos\" pagal jų būseną tyrimo metu?",
    options: [
      "Aktyvios sistemos",
      "\"Gyvos\" sistemos",
      "Veikiančios sistemos",
      "Dinamiškos sistemos"
    ],
    correctAnswer: "B) \"Gyvos\" sistemos",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 12,
    question: "Kuri priežastis NĖRA tarp lemiančių \"gyvų\" sistemų veiksmingumą?",
    options: [
      "Globali ekonomika ir paskirstytos sistemos",
      "Poreikis nepertraukiamai veikiančioms sistemoms",
      "Auganti duomenų saugojimo laikmenų talpa",
      "Mažesnė tyrimo kaina"
    ],
    correctAnswer: "D) Mažesnė tyrimo kaina",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 13,
    question: "Kas yra SIM sistemos?",
    options: [
      "System Information Management",
      "Security Incident Management",
      "Server Installation Management",
      "Software Integration Management"
    ],
    correctAnswer: "B) Security Incident Management",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 14,
    question: "Kuris metodas naudojamas \"gyvų\" sistemų tyrimo atveju, kai sistema automatiškai dekoduoja kietojo disko turinį?",
    options: [
      "Statinė analizė",
      "Dinaminė analizė",
      "Hibridinė analizė",
      "Automatinė analizė"
    ],
    correctAnswer: "B) Dinaminė analizė",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 15,
    question: "Kuris standartas reglamentuoja veiksmus su bankinių kortelių numeriais?",
    options: ["ISO 27001", "PCI DSS", "GDPR", "SOX"],
    correctAnswer: "B) PCI DSS",
    chapter: "NEE tyrimų tipai"
  },
  {
    id: 16,
    question: "Kas yra DDoS ataka?",
    options: [
      "Direct Database operating System ataka",
      "Distributed Denial of Service ataka",
      "Dynamic Data over System ataka",
      "Dual Direction operating System ataka"
    ],
    correctAnswer: "B) Distributed Denial of Service ataka",
    chapter: "NEE tyrimų tipai"
  },

  // III SKYRIUS: PIRMINĖ REAKCIJA Į ELEKTRONININIUS NUSIKALTIMUS (Klausimai 17-29)
  {
    id: 17,
    question: "Kas yra incidentas pagal ITIL?",
    options: [
      "Tik kompiuterių gedimas",
      "Bet koks įvykis, kuris nėra standartinio paslaugos funkcionavimo dalis",
      "Tik saugumo pažeidimai",
      "Tik duomenų praradimas"
    ],
    correctAnswer: "B) Bet koks įvykis, kuris nėra standartinio paslaugos funkcionavimo dalis",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 18,
    question: "Kas yra CSIRT?",
    options: [
      "Computer Security Incident Response Team",
      "Computer System Information Recovery Team",
      "Central Security Intelligence Research Team",
      "Cyber Security Internal Review Team"
    ],
    correctAnswer: "A) Computer Security Incident Response Team",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 19,
    question: "Kiek rizikos kategorijų išskiriama rizikos analizėje?",
    options: ["2 kategorijos", "3 kategorijos", "4 kategorijos", "5 kategorijos"],
    correctAnswer: "B) 3 kategorijos (žema, vidutinė, didelė)",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 20,
    question: "Kas NĖRA tarp CSIRT grupės narių pareigų?",
    options: [
      "Vadovaujantysis tyrėjas",
      "Informacijos saugos specialistas",
      "Teisininkas",
      "Marketingo specialistas"
    ],
    correctAnswer: "D) Marketingo specialistas",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 21,
    question: "Kas yra \"scenos užšaldymas\" (freezing the scene)?",
    options: [
      "Sistemos išjungimas",
      "Visų įmanomų atsargos priemonių ėmimasis įkalčių išsaugojimui",
      "Darbuotojų atleidimas",
      "Komunikacijos sustabdymas"
    ],
    correctAnswer: "B) Visų įmanomų atsargos priemonių ėmimasis įkalčių išsaugojimui",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 22,
    question: "Kuo skiriasi incidentų sulaikymas (handling) nuo incidentų valdymo (incident management)?",
    options: [
      "Jie yra tas pats procesas",
      "Incidentų sulaikymas yra platesnis terminas",
      "Incidentų sulaikyme pagrindinis dėmesys yra skiriamas priemonėms, leidžiančioms nepasireikšti incidento pasekmėms pilna jėga, o incidentų valdymas apima visus žingsnius nuo incidento paskelbimo iki dokumentavimo ir analizės fazės",
      "Incidentų valdymas yra trumpesnis procesas"
    ],
    correctAnswer: "C) Incidentų sulaikyme pagrindinis dėmesys yra skiriamas priemonėms, leidžiančioms nepasireikšti incidento pasekmėms pilna jėga, o incidentų valdymas apima visus žingsnius nuo incidento paskelbimo iki dokumentavimo ir analizės fazės",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 23,
    question: "Kokios yra dvi pagrindinės reagavimo į incidentus politikos?",
    options: [
      "Greita ir lėta reakcija",
      "Vidinė ir išorinė reakcija",
      "Atiduoti reagavimo funkciją kitoms specializuotoms organizacijoms (outsource) arba turėti savo vidines CSIRT komandas",
      "Automatinė ir rankinė reakcija"
    ],
    correctAnswer: "C) Atiduoti reagavimo funkciją kitoms specializuotoms organizacijoms (outsource) arba turėti savo vidines CSIRT komandas",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 24,
    question: "Kokie yra pagrindiniai CSIRT grupės narių vaidmenys?",
    options: [
      "Tik techniniai specialistai",
      "Vadovaujantysis tyrėjas, informacijos saugos specialistas, verslo/vadovybės atstovas, teisininkas, techniniai specialistai, personalo skyriaus atstovai",
      "Tik vadovybės atstovai",
      "Programuotojai ir sistemų administratoriai"
    ],
    correctAnswer: "B) Vadovaujantysis tyrėjas, informacijos saugos specialistas, verslo/vadovybės atstovas, teisininkas, techniniai specialistai, personalo skyriaus atstovai",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 25,
    question: "Kokie yra pagrindiniai mokymų tikslai reagavimo į incidentus procese?",
    options: [
      "Tik techninio personalo švietimas",
      "Plano patikrinimas, komunikacijos kanalų patikrinimas, grupės narių reakcijos patikrinimas",
      "Finansinių išteklių planavimas",
      "Naujų programinės įrangos versijų mokymais"
    ],
    correctAnswer: "B) Plano patikrinimas, komunikacijos kanalų patikrinimas, grupės narių reakcijos patikrinimas",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 26,
    question: "Kas yra SIM sistemos (Security Incident Management)?",
    options: [
      "Paprastos duomenų bazės",
      "Sistemos, kurios agreguoja įvykių registracijos įrašus iš skirtingų šaltinių ir ieško juose neatitikimo ar įsiskverbimo šablonų",
      "Antivirusinės programos",
      "Ugniasienės"
    ],
    correctAnswer: "B) Sistemos, kurios agreguoja įvykių registracijos įrašus iš skirtingų šaltinių ir ieško juose neatitikimo ar įsiskverbimo šablonų",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 27,
    question: "Kodėl organizacijos vengia pranešti apie incidentus teisėsaugos institucijoms?",
    options: [
      "Nes nežino procedūrų",
      "Dėl nuostolių, kuriuos organizacija patirs: baudų už netinkamą informacijos saugos organizavimą, reputacijos praradimo, klientų nepasitikėjimo",
      "Nes tai užtrunka per ilgai",
      "Nes nėra įpareigoti"
    ],
    correctAnswer: "B) Dėl nuostolių, kuriuos organizacija patirs: baudų už netinkamą informacijos saugos organizavimą, reputacijos praradimo, klientų nepasitikėjimo",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 28,
    question: "Kokie yra NEE tyrimo metodai analizės fazėje?",
    options: [
      "Tik programinės įrangos analizė",
      "Rinkmenų analizė, ištrintos ar užkoduotos informacijos atkūrimas, vizuali įrangos apžiūra ar įtariamųjų ir liudininkų apklausos, asmeninių atakuotojo savybių įvertinimas ir tikslų nustatymas",
      "Tik duomenų bazių tikrinimas",
      "Fizinė įrangos analizė"
    ],
    correctAnswer: "B) Rinkmenų analizė, ištrintos ar užkoduotos informacijos atkūrimas, vizuali įrangos apžiūra ar įtariamųjų ir liudininkų apklausos, asmeninių atakuotojo savybių įvertinimas ir tikslų nustatymas",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },
  {
    id: 29,
    question: "Kas yra \"post mortem review\"?",
    options: [
      "Medicinos ekspertizė",
      "Peržiūra pasibaigus incidentui, atliekama tam, kad pasibaigus tyrimui ir gavus tyrimo išvadas būtų imtasi veiksmų incidento atsako procesui gerinti kitą kartą",
      "Finansinė ataskaita",
      "Personalo vertinimas"
    ],
    correctAnswer: "B) Peržiūra pasibaigus incidentui, atliekama tam, kad pasibaigus tyrimui ir gavus tyrimo išvadas būtų imtasi veiksmų incidento atsako procesui gerinti kitą kartą",
    chapter: "Pirminė reakcija į elektronininius nusikaltimus"
  },

  // IV SKYRIUS: INCIDENTŲ TIPAI (Klausimai 30-37)
  {
    id: 30,
    question: "Kiek pagrindinių incidentų tipų išskiriama?",
    options: ["3 tipai", "4 tipai", "5 tipai", "6 tipai"],
    correctAnswer: "B) 4 tipai",
    chapter: "Incidentų tipai"
  },
  {
    id: 31,
    question: "Kas yra DoS ataka?",
    options: [
      "Data over System ataka",
      "Denial-of-service ataka",
      "Destruction of System ataka",
      "Direct operational System ataka"
    ],
    correctAnswer: "B) Denial-of-service ataka",
    chapter: "Incidentų tipai"
  },
  {
    id: 32,
    question: "Koks yra pagrindinis tikslas kovojant su DoS atakomis?",
    options: [
      "Nusikaltėlio identifikavimas",
      "Verslo procesų optimizavimas",
      "Verslui kritinių paslaugų funkcionalumo atstatymas",
      "Sistemos atnaujinimas"
    ],
    correctAnswer: "C) Verslui kritinių paslaugų funkcionalumo atstatymas",
    chapter: "Incidentų tipai"
  },
  {
    id: 33,
    question: "Kas yra KPK?",
    options: [
      "Kompiuterinis pranešimų kodas",
      "Kenksmingas programinis kodas",
      "Kompiuterinio pašto kodas",
      "Komandinio procesų kodas"
    ],
    correctAnswer: "B) Kenksmingas programinis kodas",
    chapter: "Incidentų tipai"
  },
  {
    id: 34,
    question: "Kuo skiriasi neteisėtas naudojimas nuo netinkamo naudojimo?",
    options: [
      "Neteisėtas - be leidimo, netinkamas - pažeidžiant reikalavimus",
      "Neteisėtas - dieną, netinkamas - naktį",
      "Neteisėtas - darbuotojai, netinkamas - svečiai",
      "Nėra skirtumo"
    ],
    correctAnswer: "A) Neteisėtas - be leidimo, netinkamas - pažeidžiant reikalavimus",
    chapter: "Incidentų tipai"
  },
  {
    id: 35,
    question: "Kokie yra keturi pagrindiniai incidentų tipai?",
    options: [
      "Vidiniai, išoriniai, techniniai, socialiniai",
      "Atsisakymo aptarnauti ataka (DoS), kenksmingas programinis kodas (Malware), neteisėtas naudojimas, netinkamas naudojimas",
      "Fiziniai, virtualūs, hibridiniai, debesų",
      "Automatiniai, rankiniai, pusiau automatiniai, mišrūs"
    ],
    correctAnswer: "B) Atsisakymo aptarnauti ataka (DoS), kenksmingas programinis kodas (Malware), neteisėtas naudojimas, netinkamas naudojimas",
    chapter: "Incidentų tipai"
  },
  {
    id: 36,
    question: "Kuo skiriasi neteisėtas naudojimas nuo netinkamo naudojimo (detalus paaiškinimas)?",
    options: [
      "Neteisėtas naudojimas yra, kai gauna prieigą prie resurso, kuriam prieigos teisių neturėtų turėti; netinkamas naudojimas - kai kompiuterį naudoja neteisėtai veiklai ar pažeidžia teisės aktus/organizacijos reikalavimus",
      "Tai yra tas pats dalykas",
      "Neteisėtas naudojimas yra sunkesnis",
      "Netinkamas naudojimas yra greitesnis"
    ],
    correctAnswer: "A) Neteisėtas naudojimas yra, kai gauna prieigą prie resurso, kuriam prieigos teisių neturėtų turėti; netinkamas naudojimas - kai kompiuterį naudoja neteisėtai veiklai ar pažeidžia teisės aktus/organizacijos reikalavimus",
    chapter: "Incidentų tipai"
  },
  {
    id: 37,
    question: "Koks yra pagrindinis tikslas kovojant su DoS atakomis (detalesnis)?",
    options: [
      "Nustatyti atakuojančio IP adresą",
      "Verslui kritinių paslaugų funkcionalumo atstatymas",
      "Duomenų atsarginių kopijų kūrimas",
      "Sistemų patikrinimas"
    ],
    correctAnswer: "B) Verslui kritinių paslaugų funkcionalumo atstatymas",
    chapter: "Incidentų tipai"
  },

  // V SKYRIUS: ELEKTRONINIŲ NUSIKALTIMŲ SAMPRATA (Klausimai 38-51)
  {
    id: 38,
    question: "Kas pirmasis apibrėžė \"piktnaudžiavimą kompiuteriu\" 1976 metais?",
    options: ["Majid Yar", "Donn Parker", "Robert Taylor", "Marjorie Britz"],
    correctAnswer: "B) Donn Parker",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 39,
    question: "Kiek piktnaudžiavimo kompiuteriu kategorijų išskyrė Donn Parker?",
    options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
    correctAnswer: "B) 4 kategorijas",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 40,
    question: "Kurios konvencijos priėmimas pakeitė terminą \"kompiuteriniai nusikaltimai\"?",
    options: [
      "1999 m. Konvencija dėl kibernetinio saugumo",
      "2001 m. Konvencija dėl elektroninių nusikaltimų",
      "2000 m. Konvencija dėl duomenų apsaugos",
      "2002 m. Konvencija dėl informacijos saugumo"
    ],
    correctAnswer: "B) 2001 m. Konvencija dėl elektroninių nusikaltimų",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 41,
    question: "Kiek elektroninių nusikaltimų kategorijų išskyrė Majid Yar?",
    options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
    correctAnswer: "B) 4 kategorijas",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 42,
    question: "Kas NĖRA tarp Majid Yar elektroninių nusikaltimų kategorijų?",
    options: [
      "Kibernetinis peržengimas",
      "Kibernetinė apgaulė ir vagystė",
      "Kibernetinė pornografija",
      "Kibernetinis bankininkystė"
    ],
    correctAnswer: "D) Kibernetinis bankininkystė",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 43,
    question: "Kokias sritis dauguma pasaulio valstybių prilygina elektroniniams nusikaltimams pagal jų pavojingumą ir pelningumą?",
    options: [
      "Korupciją ir pinigų plovimą",
      "Terorizmą ir prekybą narkotikais",
      "Kontrabandą ir mokesčių vengimą",
      "Žmogžudystes ir plėšimus"
    ],
    correctAnswer: "B) Terorizmą ir prekybą narkotikais",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 44,
    question: "Kaip apibrėžiama elektroninių nusikaltimų sąvoka siaurąja prasme?",
    options: [
      "Bet kokie nusikaltimai, kuriems įvykdyti buvo panaudotos kompiuterinės technologijos",
      "Nusikaltimai tiesiogiai darantys įtaką kompiuterinei sistemai arba joje esantiems duomenims",
      "Tik internetiniai sukčiavimai",
      "Programinės įrangos piratavimas"
    ],
    correctAnswer: "B) Nusikaltimai tiesiogiai darantys įtaką kompiuterinei sistemai arba joje esantiems duomenims",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 45,
    question: "Kas yra Donn Parker piktnaudžiavimo kompiuteriu (Computer abuse) apibrėžimas?",
    options: [
      "Tik kenksmingo programinio kodo platinimas",
      "Bet kokį incidentą, apimantį tyčinį veiksmą susijusį su kompiuteriais, kuriuo metu auka patyrė/galėjo patirti nuostolių arba nusikaltėlis gavo naudos",
      "Duomenų apsaugos pažeidimus",
      "Interneto svetainių blokinimą"
    ],
    correctAnswer: "B) Bet kokį incidentą, apimantį tyčinį veiksmą susijusį su kompiuteriais, kuriuo metu auka patyrė/galėjo patirti nuostolių arba nusikaltėlis gavo naudos",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 46,
    question: "Pagal Majid Yar požiūrį, kokie yra du pagrindiniai elektroninių nusikaltimų tipai?",
    options: [
      "Vidiniai ir išoriniai nusikaltimai",
      "Kompiuteris naudojamas kaip pagalbinė priemonė ir į kompiuterius orientuoti nusikaltimai",
      "Fiziniai ir virtualūs nusikaltimai",
      "Profesionalūs ir mėgėjiški nusikaltimai"
    ],
    correctAnswer: "B) Kompiuteris naudojamas kaip pagalbinė priemonė ir į kompiuterius orientuoti nusikaltimai",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 47,
    question: "Kurios kategorijos priklauso Majid Yar elektroninių nusikaltimų klasifikacijai?",
    options: [
      "Kibernetinis peržengimas, kibernetinė apgaulė ir vagystė, kibernetinė pornografija, kibernetinis smurtas",
      "Programišių atakos, duomenų vagystės, sistemų paralyžius",
      "Finansiniai, socialiniai, politiniai nusikaltimai",
      "Lokalūs, nacionaliniai, tarptautiniai nusikaltimai"
    ],
    correctAnswer: "A) Kibernetinis peržengimas, kibernetinė apgaulė ir vagystė, kibernetinė pornografija, kibernetinis smurtas",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 48,
    question: "Kokiais metais buvo priimta Konvencija dėl elektroninių nusikaltimų?",
    options: ["1999 m.", "2000 m.", "2001 m.", "2002 m."],
    correctAnswer: "C) 2001 m.",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 49,
    question: "Kaip Konvencija dėl elektroninių nusikaltimų apibrėžia elektroninių nusikaltimų sąvoką?",
    options: [
      "Tik kompiuterių virusų platinimas",
      "Plataus spektro nusikalstamos veikos, kai kompiuteriai ar IS naudojamos kaip įrankis ar kaip taikinys",
      "Duomenų bazių kopijavimas",
      "Interneto svetainių kūrimas neteisėtiems tikslams"
    ],
    correctAnswer: "B) Plataus spektro nusikalstamos veikos, kai kompiuteriai ar IS naudojamos kaip įrankis ar kaip taikinys",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 50,
    question: "Kodėl kai kurios tarptautinės organizacijos sąmoningai neapibrėžia kompiuterinio nusikaltimo?",
    options: [
      "Nes tai per sudėtinga",
      "Mano, kad nuolat keičiantis technologijoms, toks apibrėžimas greitai taptų nebeaktualus",
      "Neturi pakankamai ekspertų",
      "Laukia teismų sprendimų"
    ],
    correctAnswer: "B) Mano, kad nuolat keičiantis technologijoms, toks apibrėžimas greitai taptų nebeaktualus",
    chapter: "Elektroninių nusikaltimų samprata"
  },
  {
    id: 51,
    question: "Kuo skiriasi terminas \"cybercrime\" nuo elektronikos srities terminų?",
    options: [
      "Nieko nesiskiria",
      "Cybercrime skiriamasis požymis yra nusikaltimų dalykas – duomenys, informacija kompiuterine forma, įskaitmeninta (digital), elektronine forma",
      "Cybercrime yra platesnis terminas",
      "Cybercrime yra siauresnis terminas"
    ],
    correctAnswer: "B) Cybercrime skiriamasis požymis yra nusikaltimų dalykas – duomenys, informacija kompiuterine forma, įskaitmeninta (digital), elektronine forma",
    chapter: "Elektroninių nusikaltimų samprata"
  },

  // VI SKYRIUS: INFORMACINIS KARAS (Klausimai 52-61)
  {
    id: 52,
    question: "Kiek procentų karinių komunikacijų perduodamos komercinėmis linijomis?",
    options: ["80-85%", "85-90%", "90-95%", "95-100%"],
    correctAnswer: "C) 90-95%",
    chapter: "Informacinis karas"
  },
  {
    id: 53,
    question: "Kuri savybė NĖRA būdinga informaciniam karui?",
    options: [
      "Mažos išlaidos",
      "Atstumas nereikšmingas",
      "Anonimiškumas",
      "Didelės fizinės jėgos poreikis"
    ],
    correctAnswer: "D) Didelės fizinės jėgos poreikis",
    chapter: "Informacinis karas"
  },
  {
    id: 54,
    question: "Kas yra C2 karas?",
    options: [
      "Computer and Communication warfare",
      "Command and Control warfare",
      "Cyber and Criminal warfare",
      "Central and Coordinated warfare"
    ],
    correctAnswer: "B) Command and Control warfare",
    chapter: "Informacinis karas"
  },
  {
    id: 55,
    question: "Kodėl informacinis karas yra patrauklesnis už tradicinius metodus?",
    options: [
      "Jis yra paprastesnis, pigesnis ir mažiau rizikingas",
      "Jis nereikalauja specialių žinių",
      "Jis visada sėkmingas",
      "Jis legalus"
    ],
    correctAnswer: "A) Jis yra paprastesnis, pigesnis ir mažiau rizikingas",
    chapter: "Informacinis karas"
  },
  {
    id: 56,
    question: "Kaip apibrėžiamas informacinis karas?",
    options: [
      "Tik kibernetinės atakos",
      "Veiksmų visuma, siekiant apsaugoti savas informacines sistemas nuo neteisėto panaudojimo, duomenų iškraipymo ar sunaikinimo, ir tuo pačiu siekiant informacinio pranašumo",
      "Propagandos sklaidimas internete",
      "Kompiuterių sistemų blokavimas"
    ],
    correctAnswer: "B) Veiksmų visuma, siekiant apsaugoti savas informacines sistemas nuo neteisėto panaudojimo, duomenų iškraipymo ar sunaikinimo, ir tuo pačiu siekiant informacinio pranašumo",
    chapter: "Informacinis karas"
  },
  {
    id: 57,
    question: "Kurios yra pagrindinės informacinio karo savybės?",
    options: [
      "Didelės išlaidos ir sudėtingumas",
      "Mažos išlaidos, atstumas nebereikšmingas, anonimiškumas, informacinių sistemų pažeidžiamumas",
      "Reikia didelių žmogiškųjų išteklių",
      "Veikia tik vietiniame lygmenyje"
    ],
    correctAnswer: "B) Mažos išlaidos, atstumas nebereikšmingas, anonimiškumas, informacinių sistemų pažeidžiamumas",
    chapter: "Informacinis karas"
  },
  {
    id: 58,
    question: "Kokios strategijos priklauso informacinio karo strategijoms?",
    options: [
      "C2 karas, elektroninis karas, psichologinis karas, programišių karas, kibernetinis karas",
      "Tik fiziniai sprogmenys",
      "Diplomatinės derybos",
      "Ekonominės sankcijos"
    ],
    correctAnswer: "A) C2 karas, elektroninis karas, psichologinis karas, programišių karas, kibernetinis karas",
    chapter: "Informacinis karas"
  },
  {
    id: 59,
    question: "Kodėl informacinis karas dažniau naudojamas nei tradiciniai kariniai metodai?",
    options: [
      "Nes yra paprastesnis, lengvesnis, pigesnis ir mažiau rizikingas",
      "Nes reikalauja mažiau technologijų",
      "Nes yra labiau paveikus",
      "Nes yra teisiškai leistinas"
    ],
    correctAnswer: "A) Nes yra paprastesnis, lengvesnis, pigesnis ir mažiau rizikingas",
    chapter: "Informacinis karas"
  },
  {
    id: 60,
    question: "Kiek procentų karinių komunikacijų perduodamos komercinėmis linijomis (pakartotinis)?",
    options: ["50-60%", "70-80%", "80-85%", "90-95%"],
    correctAnswer: "D) 90-95%",
    chapter: "Informacinis karas"
  },
  {
    id: 61,
    question: "Kokia yra viena iš problemų, susijusių su mikroschemos, naudojamomis valstybės sistemose?",
    options: [
      "Jos per brangios",
      "Valstybės jas perka iš kitų šalių įmonių, su kuriomis ateity įmanomas karinis konfliktas",
      "Jos per lėtos",
      "Jos per sudėtingos"
    ],
    correctAnswer: "B) Valstybės jas perka iš kitų šalių įmonių, su kuriomis ateity įmanomas karinis konfliktas",
    chapter: "Informacinis karas"
  }

,

  // VII SKYRIUS: ELEKTRONINIAI ĮKALČIAI - SAMPRATA IR TIPAI (Klausimai 62-81)
  {
    id: 62,
    question: "Kaip apibrėžiami elektroniniai įkalčiai?",
    options: [
      "Tik kompiuterių sistemose saugoma informacija",
      "Bet kokia kompiuterių sistemomis perduodama arba saugoma informacija, kuri patvirtina tyrimo metu suformuluotą hipotezę",
      "Tik skaitmeninės nuotraukos ir vaizdo įrašai",
      "Fiziniai kompiuterių komponentai"
    ],
    correctAnswer: "B) Bet kokia kompiuterių sistemomis perduodama arba saugoma informacija, kuri patvirtina tyrimo metu suformuluotą hipotezę",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 63,
    question: "Kokie du pagrindiniai įkalčių tinkamumo kriterijai turi būti vertinami NEE tyrimo metu?",
    options: [
      "Dydis ir formatas",
      "Autentiškumas ir patikimumas",
      "Kaina ir prieinamumas",
      "Greitis ir kokybė"
    ],
    correctAnswer: "B) Autentiškumas ir patikimumas",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 64,
    question: "Pagal JAV Federalinį tyrimų biurą, į kiek kategorijų skirstomi įkalčiai?",
    options: ["3 kategorijas", "4 kategorijas", "5 kategorijas", "6 kategorijas"],
    correctAnswer: "C) 5 kategorijas",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 65,
    question: "Kas yra įkalčių dinamika?",
    options: [
      "Įkalčių saugojimo greitis",
      "Bet koks veiksnys, kuris keičia įkalčio turinį, dislokaciją arba jį sunaikina",
      "Įkalčių analizės metodas",
      "Duomenų šifravimo procesas"
    ],
    correctAnswer: "B) Bet koks veiksnys, kuris keičia įkalčio turinį, dislokaciją arba jį sunaikina",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 66,
    question: "Kuris iš šių veiksnių NĖRA įkalčių dinamikos priežastis?",
    options: [
      "Sistemų administratorius",
      "NEE tyrėjas",
      "Įtariamasis",
      "Teismo sprendimas"
    ],
    correctAnswer: "D) Teismo sprendimas",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 67,
    question: "Kiek pagrindinių etapų turi įkalčių išėmimo procesas?",
    options: ["5 etapus", "6 etapus", "7 etapus", "8 etapus"],
    correctAnswer: "C) 7 etapus",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 68,
    question: "Kas yra pirmasis įkalčių išėmimo proceso etapas?",
    options: [
      "Duomenų analizė laboratorijoje",
      "Fizinės įvykio vietos apsaugos užtikrinimas",
      "Įrangos pakavimas",
      "Fotografavimas"
    ],
    correctAnswer: "B) Fizinės įvykio vietos apsaugos užtikrinimas",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 69,
    question: "Kokia yra viena iš didžiausių specializuotų NEE tyrimo įrankių problemų?",
    options: [
      "Aukšta kaina",
      "Lėtas veikimas",
      "Netinkamas failinių sistemų interpretavimas",
      "Sudėtingas naudojimas"
    ],
    correctAnswer: "C) Netinkamas failinių sistemų interpretavimas",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 70,
    question: "Į kiek kategorijų duomenų objektai gali būti suskirstyti pagal Ashcroft ir General (2001)?",
    options: ["2 kategorijas", "3 kategorijas", "4 kategorijas", "5 kategorijas"],
    correctAnswer: "C) 4 kategorijas",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 71,
    question: "Kokia yra pirma kategorija duomenų objektų klasifikacijoje?",
    options: [
      "Kompiuterių sistemų sukurti objektai",
      "Vartotojų sukurti objektai",
      "Apsaugoti objektai",
      "Sisteminiai objektai"
    ],
    correctAnswer: "B) Vartotojų sukurti objektai",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 72,
    question: "Kas priklauso prie fizinių įkalčių kategorijos?",
    options: [
      "Tik programinė įranga",
      "Unikalus identifikatorius",
      "Duomenų bazės",
      "Tik failai"
    ],
    correctAnswer: "B) Unikalus identifikatorius",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 73,
    question: "Koks yra pagrindinis elektroninių įkalčių skirtumas nuo realaus pasaulio objektų?",
    options: [
      "Jie yra brangesni",
      "Jie yra nesunkiai kopijuojami",
      "Jie užima daugiau vietos",
      "Jie yra sunkiau randami"
    ],
    correctAnswer: "B) Jie yra nesunkiai kopijuojami",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 74,
    question: "Kas yra esminio skirtumo sąvoka elektroniniuose įkalčiuose?",
    options: [
      "Duomenų dydžio skirtumas",
      "Parametrai, kurie leidžia duomenis vienareikšmiškai atskirti",
      "Failų formato skirtumas",
      "Saugojimo vietos skirtumas"
    ],
    correctAnswer: "B) Parametrai, kurie leidžia duomenis vienareikšmiškai atskirti",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 75,
    question: "Kokius ryšius gali turėti įkalčiai su jų šaltiniais?",
    options: [
      "Tik gamybinį ryšį",
      "Gamybinį, segmentavimo, keitimo ir vietos ryšius",
      "Tik vietos ryšį",
      "Tik keitimo ryšį"
    ],
    correctAnswer: "B) Gamybinį, segmentavimo, keitimo ir vietos ryšius",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 76,
    question: "Kas yra optimizuotos įkalčių išėmimo schemos privalumas?",
    options: [
      "Sumažina tyrimo laiką",
      "Sumažina išlaidų apimtį naudojant įkalčių prioretizavimą",
      "Padidina tikslumą",
      "Supaprastina dokumentavimą"
    ],
    correctAnswer: "B) Sumažina išlaidų apimtį naudojant įkalčių prioretizavimą",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 77,
    question: "Koks yra pagrindinis principas, taikomas asmens privatumo aspekte?",
    options: [
      "Visi duomenys turi būti viešinami",
      "Duomenys, neturintys tiesioginio ryšio su tiriamu nusikaltimu, turi būti saugomi pagal asmens duomenų apsaugos reikalavimus",
      "Privatūs duomenys turi būti ištrinti",
      "Asmens duomenys negali būti naudojami"
    ],
    correctAnswer: "B) Duomenys, neturintys tiesioginio ryšio su tiriamu nusikaltimu, turi būti saugomi pagal asmens duomenų apsaugos reikalavimus",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 78,
    question: "Kodėl atsiranda alternatyvūs įkalčių išėmimo metodai?",
    options: [
      "Dėl technologijų pažangos",
      "Tradicinis metodas yra brangus ir reikalauja daug laiko",
      "Dėl teisės aktų pokyčių",
      "Dėl personalo trūkumo"
    ],
    correctAnswer: "B) Tradicinis metodas yra brangus ir reikalauja daug laiko",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 79,
    question: "Kada ypač tinka alternatyvūs įkalčių išėmimo metodai?",
    options: [
      "Kai trūksta specialistų",
      "Kai tyrimą užsako kompanija, nukentėjusi nuo išorinio įsilaužimo",
      "Kai įranga yra per sena",
      "Kai reikia greitai užbaigti tyrimą"
    ],
    correctAnswer: "B) Kai tyrimą užsako kompanija, nukentėjusi nuo išorinio įsilaužimo",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 80,
    question: "Kokius įrankius rekomenduojama naudoti renkant įkalčius teismo procesui?",
    options: [
      "Bet kokius prieinamus įrankius",
      "Tik naujausius įrankius",
      "Patikimus ir patvirtintus įrankius",
      "Tik nemokamus įrankius"
    ],
    correctAnswer: "C) Patikimus ir patvirtintus įrankius",
    chapter: "Elektroniniai įkalčiai"
  },
  {
    id: 81,
    question: "Kas turėtų stengtis įgyti minimalių NEE tyrimo srities žinių?",
    options: [
      "Tik IT specialistai",
      "Visi detektyvo darbą atliekantys darbuotojai",
      "Tik laboratorijos darbuotojai",
      "Tik vadovai"
    ],
    correctAnswer: "B) Visi detektyvo darbą atliekantys darbuotojai",
    chapter: "Elektroniniai įkalčiai"
  },

  // VIII SKYRIUS: ĮKALČIŲ ANALIZĖS METODAI (Klausimai 82-106)
  {
    id: 82,
    question: "Kiek įkalčių analizės būdų išskirta dokumente?",
    options: ["8 būdai", "9 būdai", "10 būdų", "11 būdų"],
    correctAnswer: "C) 10 būdų",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 83,
    question: "Kas yra pagrindinė įkalčių analizės etapo užduotis?",
    options: [
      "Įkalčių rinkimas",
      "Surasti duomenis, kurie gali patvirtinti arba paneigti tyrimo hipotezę",
      "Ataskaitų rašymas",
      "Technikos tikrinimas"
    ],
    correctAnswer: "B) Surasti duomenis, kurie gali patvirtinti arba paneigti tyrimo hipotezę",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 84,
    question: "Kuris metodas yra vienas iš plačiausiai taikomų analizės metodų?",
    options: [
      "Tinklo srauto analizė",
      "Atminties analizė",
      "Įkalčių paieška pagal reikšminius žodžius",
      "Kontaktų analizė"
    ],
    correctAnswer: "C) Įkalčių paieška pagal reikšminius žodžius",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 85,
    question: "Kodėl pasitelkiama specializuota programinė įranga reikšminių žodžių paieškai?",
    options: [
      "Dėl teisės aktų reikalavimų",
      "Informacijos apimtys yra labai didelės ir vizualinė analizė nebeįmanoma",
      "Taip greičiau",
      "Taip tiksliau"
    ],
    correctAnswer: "B) Informacijos apimtys yra labai didelės ir vizualinė analizė nebeįmanoma",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 86,
    question: "Koks yra pagrindinis įvykių registracijos įrašų analizės privalumas?",
    options: [
      "Lengva atlikti",
      "Įrašai yra griežtai struktūrizuoti",
      "Nebrangu",
      "Nereikia specializuotos įrangos"
    ],
    correctAnswer: "B) Įrašai yra griežtai struktūrizuoti",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 87,
    question: "Kas naudojama įvykių registracijos įrašuose prioritetų nustatymui?",
    options: [
      "Spalvų kodavimas",
      "Įvykių rangavimo sistema",
      "Abėcėlinė tvarka",
      "Laiko žymos"
    ],
    correctAnswer: "B) Įvykių rangavimo sistema",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 88,
    question: "Kada operacinė sistema naudoja sukeitimų failą?",
    options: [
      "Perkraunant kompiuterį",
      "Kai pritrūksta operatyviosios atminties",
      "Įrašant failus",
      "Paleidžiant programas"
    ],
    correctAnswer: "B) Kai pritrūksta operatyviosios atminties",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 89,
    question: "Koks yra didžiausias sukeitimų failo analizės iššūkis?",
    options: [
      "Failo dydis",
      "Informacija yra nestruktūrizuota ir prieinama binariniu formatu",
      "Failas yra šifruotas",
      "Reikia specialių teisių"
    ],
    correctAnswer: "B) Informacija yra nestruktūrizuota ir prieinama binariniu formatu",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 90,
    question: "Ką būtina atsižvelgti atliekant kontaktų analizę?",
    options: [
      "Laiko sąnaudas",
      "Privatumo įstatymus",
      "Technines galimybes",
      "Biudžetą"
    ],
    correctAnswer: "B) Privatumo įstatymus",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 91,
    question: "Kas tiriama kontaktų analizės metu?",
    options: [
      "Tik elektroniniai laiškai",
      "Elektroniniai laiškai, pokalbių žurnalai, skambučių išklotinė",
      "Tik telefono skambučiai",
      "Tik socialiniai tinklai"
    ],
    correctAnswer: "B) Elektroniniai laiškai, pokalbių žurnalai, skambučių išklotinė",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 92,
    question: "Kokią informaciją galima gauti iš atminties atvaizdo analizės?",
    options: [
      "Tik failų sąrašą",
      "Veikiančius procesus, slaptažodžius, kviečiamas bibliotekas",
      "Tik sistemos konfigūraciją",
      "Tik tinklo parametrus"
    ],
    correctAnswer: "B) Veikiančius procesus, slaptažodžius, kviečiamas bibliotekas",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 93,
    question: "Kiek laiko įrašai saugomi operatyviojoje atmintyje (RAM)?",
    options: [
      "Visada",
      "Vieną valandą",
      "Tik tol, kol kompiuteris įjungtas",
      "Vieną dieną"
    ],
    correctAnswer: "C) Tik tol, kol kompiuteris įjungtas",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 94,
    question: "Kokios informacijos galima gauti iš naršyklės podėlio (cache) analizės?",
    options: [
      "Tik slaptažodžius",
      "Informaciją apie renkamus duomenis, tikslus, naršymo įpročius",
      "Tik IP adresus",
      "Tik failus"
    ],
    correctAnswer: "B) Informaciją apie renkamus duomenis, tikslus, naršymo įpročius",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 95,
    question: "Kur saugoma spausdintuvo kaupiklio informacija?",
    options: [
      "Tik spausdintuve",
      "Spausdintuvo kaupiklyje arba eilės faile (spooler)",
      "Tik sistemos registruose",
      "Tik laikiniuose failuose"
    ],
    correctAnswer: "B) Spausdintuvo kaupiklyje arba eilės faile (spooler)",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 96,
    question: "Ką galima sužinoti vykdant tinklo srauto analizę?",
    options: [
      "Tik IP adresus",
      "Atidarytus sujungimus, protokolus, nešifruotus slaptažodžius",
      "Tik domeno vardus",
      "Tik failo dydžius"
    ],
    correctAnswer: "B) Atidarytus sujungimus, protokolus, nešifruotus slaptažodžius",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 97,
    question: "Kuris įrankis yra labiausiai žinomas tinklo paketų analizei?",
    options: ["EnCase", "FTK", "Wireshark", "Autopsy"],
    correctAnswer: "C) Wireshark",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 98,
    question: "Ant ko pagrįsta failų keitimo istorijos analizė?",
    options: [
      "Failų pavadinimų analizėje",
      "Maišos (hash) reikšmių arba laiko žymių analizėje",
      "Failų dydžių palyginime",
      "Failų tipų analizėje"
    ],
    correctAnswer: "B) Maišos (hash) reikšmių arba laiko žymių analizėje",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 99,
    question: "Kurie protokolai gali būti analizuojami tinklo srautų analizės metu?",
    options: [
      "Tik HTTP",
      "HTTP/HTTPS, DNS, SMTP, FTP, SSL/TLS",
      "Tik HTTPS",
      "Tik DNS"
    ],
    correctAnswer: "B) HTTP/HTTPS, DNS, SMTP, FTP, SSL/TLS",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 100,
    question: "Kas yra ELA metodas?",
    options: [
      "Duomenų šifravimo metodas",
      "Error Level Analysis - klastojimų aptikimo metodas vaizdams",
      "Elektroninio pašto analizės metodas",
      "Einamųjų logų analizės metodas"
    ],
    correctAnswer: "B) Error Level Analysis - klastojimų aptikimo metodas vaizdams",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 101,
    question: "Kurios programinės įrangos pavyzdžiai paminėti reikšminių žodžių paieškai?",
    options: [
      "Tik EnCase ir FTK",
      "EnCase, Autopsy, FTK, X-Ways, AXIOM",
      "Tik Windows paieška",
      "Tik Google paieška"
    ],
    correctAnswer: "B) EnCase, Autopsy, FTK, X-Ways, AXIOM",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 102,
    question: "Ką reiškia informacinis „triukšmas” įvykių registracijos analizėje?",
    options: [
      "Garso įrašai sistemoje",
      "Nereikšmingi įrašai, kurie trukdo analizei",
      "Sistemos klaidos",
      "Tinklo trukdžiai"
    ],
    correctAnswer: "B) Nereikšmingi įrašai, kurie trukdo analizei",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 103,
    question: "Kurios bylos analizuojamos naršyklės cache analizės metu?",
    options: [
      "Tik .txt failai",
      "Cache failai, istorija, slapukai, parsisiuntimai",
      "Tik vaizdo failai",
      "Tik garso failai"
    ],
    correctAnswer: "B) Cache failai, istorija, slapukai, parsisiuntimai",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 104,
    question: "Kiek laiko dažniausiai saugomi sistemos žurnalai (event logs)?",
    options: [
      "Visada",
      "Vieną dieną",
      "Nuo kelių dienų iki kelių mėnesių",
      "Vienerius metus"
    ],
    correctAnswer: "C) Nuo kelių dienų iki kelių mėnesių",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 105,
    question: "Kas yra EXIF duomenys?",
    options: [
      "Šifravimo raktas",
      "Nuotraukų metaduomenys",
      "Sistemos klaidos kodas",
      "Tinklo protokolas"
    ],
    correctAnswer: "B) Nuotraukų metaduomenys",
    chapter: "Įkalčių analizės metodai"
  },
  {
    id: 106,
    question: "Kurie duomenų šaltiniai gali būti naudojami laiko linijų (timeline) kūrimui?",
    options: [
      "Tik sistemos laikrodis",
      "Failų sistemos, žurnalų, naršyklės duomenys",
      "Tik interneto istorija",
      "Tik elektroninis paštas"
    ],
    correctAnswer: "B) Failų sistemos, žurnalų, naršyklės duomenys",
    chapter: "Įkalčių analizės metodai"
  },
  

  // IX SKYRIUS: TYRIMO ATASKAITOS (Klausimai 107-126)
  {
    id: 107,
    question: "Kas yra pagrindinė tyrimo užduotis rengiant ataskaitą?",
    options: [
      "Hipotezių kūrimas",
      "Faktų ir įkalčių dokumentavimas",
      "Teorijų vystymas",
      "Metodų tobulinimas"
    ],
    correctAnswer: "B) Faktų ir įkalčių dokumentavimas",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 108,
    question: "Į kiek kategorijų skirstomos tyrimo ataskaitos pagal pateikimo formą?",
    options: [
      "2 kategorijas (rašytinė ir žodinė)",
      "3 kategorijas",
      "4 kategorijas",
      "5 kategorijas"
    ],
    correctAnswer: "A) 2 kategorijas (rašytinė ir žodinė)",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 109,
    question: "Kokia yra pagrindinė neformalios žodinės ataskaitos rizika?",
    options: [
      "Lėtas pateikimas",
      "Informacijos nutekėjimas trečiosioms šalims",
      "Sudėtingas supratimas",
      "Techninės klaidos"
    ],
    correctAnswer: "B) Informacijos nutekėjimas trečiosioms šalims",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 110,
    question: "Kaip pateikiama formali rašytinė ataskaita?",
    options: [
      "Su liudytojų parašais",
      "Su užsakovo patvirtinimu",
      "Su priesaika",
      "Su notaro patvirtinimu"
    ],
    correctAnswer: "C) Su priesaika",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 111,
    question: "Kiek pagrindinių tyrimo ataskaitų reikalavimų išskirta dokumente?",
    options: ["5 reikalavimai", "6 reikalavimai", "7 reikalavimai", "8 reikalavimai"],
    correctAnswer: "C) 7 reikalavimai",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 112,
    question: "Į kokius klausimus turi pateikti atsakymus ataskaita?",
    options: [
      "Kas?, Kaip?, Kada?, Kur?, Kodėl?",
      "Tik Kas? ir Kada?",
      "Tik Kaip? ir Kodėl?",
      "Kas?, Kur?, Kiek?"
    ],
    correctAnswer: "A) Kas?, Kaip?, Kada?, Kur?, Kodėl?",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 113,
    question: "Kiek dalių turi aiški ataskaitos struktūra?",
    options: ["6 dalis", "7 dalis", "8 dalis", "9 dalis"],
    correctAnswer: "C) 8 dalis",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 114,
    question: "Kokia yra pirmoji ataskaitos struktūros dalis?",
    options: [
      "Turinys",
      "Santrauka",
      "Pagrindinė ataskaitos dalis",
      "Išvados"
    ],
    correctAnswer: "B) Santrauka",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 115,
    question: "Ką turi aprašyti tyrimo medžiagos pilnumas ataskaitoje?",
    options: [
      "Tik rezultatus",
      "Metodai, įranga, procedūros, surinkti duomenys, problemos",
      "Tik išvadas",
      "Tik rekomendacijas"
    ],
    correctAnswer: "B) Metodai, įranga, procedūros, surinkti duomenys, problemos",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 116,
    question: "Kuo turi būti pagrįstos ataskaitos išvados?",
    options: [
      "Prielaidomis ir spėjimais",
      "Gandais",
      "Nustatytais faktais ir įkalčiais",
      "Teorijomis"
    ],
    correctAnswer: "C) Nustatytais faktais ir įkalčiais",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 117,
    question: "Į kiek loginių dalių rekomenduojama suskirstyti ataskaitą?",
    options: ["3 dalis", "4 dalis", "5 dalis", "6 dalis"],
    correctAnswer: "B) 4 dalis",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 118,
    question: "Kas aprašoma I ataskaitos dalyje?",
    options: [
      "Išvados ir rekomendacijos",
      "Administracinė informacija",
      "Tyrimo procesas",
      "Įkalčių analizė"
    ],
    correctAnswer: "B) Administracinė informacija",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 119,
    question: "Kas aprašoma III ataskaitos dalyje?",
    options: [
      "Administracinė informacija",
      "Santrauka",
      "Tyrimo procesas, rasti įkalčiai, išvados",
      "Priedai"
    ],
    correctAnswer: "C) Tyrimo procesas, rasti įkalčiai, išvados",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 120,
    question: "Kokie du numeravimo formatai dominuoja NEE tyrimo ataskaitose?",
    options: [
      "Abėcėlinis ir skaitmeninis",
      "Dešimtainis ir nuoseklusis teisinis",
      "Chronologinis ir tematinis",
      "Aukštyn ir žemyn"
    ],
    correctAnswer: "B) Dešimtainis ir nuoseklusis teisinis",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 121,
    question: "Kokius NEE tyrimo įrankius dokumente paminėta kaip galimų automatiškai generuoti ataskaitas?",
    options: [
      "FTK, DriveSpy, Ilook, EnCase",
      "Tik FTK ir EnCase",
      "Tik DriveSpy",
      "Nė vienas nepaminėtas"
    ],
    correctAnswer: "A) FTK, DriveSpy, Ilook, EnCase",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 122,
    question: "Kokia yra pagrindinė neformalios rašytinės ataskaitos paskirtis?",
    options: [
      "Galutinių išvadų pateikimas",
      "Tarpinių ar preliminarių tyrimo išvadų pristatymas",
      "Tik administracinių duomenų dokumentavimas",
      "Teismo sprendimo pagrindimas"
    ],
    correctAnswer: "B) Tarpinių ar preliminarių tyrimo išvadų pristatymas",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 123,
    question: "Kaip neformali ataskaita traktuojama tyrimo dokumentų kontekste?",
    options: [
      "Kaip nereikšmingas dokumentas",
      "Kaip labai svarbus tyrimo dokumentas",
      "Kaip laikinas dokumentas",
      "Kaip papildomas dokumentas"
    ],
    correctAnswer: "B) Kaip labai svarbus tyrimo dokumentas",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 124,
    question: "Kodėl rekomenduojama sukurti ataskaitos šabloną?",
    options: [
      "Tik estetiniais sumetimais",
      "Kaip kontrolinis sąrašas ir laiko taupymui",
      "Dėl teisės aktų reikalavimų",
      "Dėl kliento prašymo"
    ],
    correctAnswer: "B) Kaip kontrolinis sąrašas ir laiko taupymui",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 125,
    question: "Ko turi būti vengiant ataskaitoje pagal nešališkumo principą?",
    options: [
      "Faktų pateikimo",
      "Vertinimų, epitetų ir emocijų",
      "Išvadų formulavimo",
      "Metodų aprašymo"
    ],
    correctAnswer: "B) Vertinimų, epitetų ir emocijų",
    chapter: "Tyrimo ataskaitos"
  },
  {
    id: 126,
    question: "Kas rekomenduojama prisegti prie ataskaitos tyrėjo kvalifikacijai patvirtinti?",
    options: [
      "Diplomo kopiją",
      "Gyvenimo aprašymą (CV) ir anksčiau vykdytų tyrimų sąrašą",
      "Darbo sutartį",
      "Rekomendacijas"
    ],
    correctAnswer: "B) Gyvenimo aprašymą (CV) ir anksčiau vykdytų tyrimų sąrašą",
    chapter: "Tyrimo ataskaitos"
  },

  // X SKYRIUS: ĮKALČIŲ ANALIZĖS ĮRANKIAI (Klausimai 127-146)
  {
    id: 127,
    question: "Kodėl šiuolaikiniai NEE tyrėjai retai tiesiogiai peržiūri įvykio vietoje surinktą informaciją?",
    options: [
      "Nes neturi tinkamų įgūdžių",
      "Nes tokia rankinė paieška truktų pernelyg ilgai",
      "Nes informacijos yra per mažai",
      "Nes tai yra pavojinga"
    ],
    correctAnswer: "B) Nes tokia rankinė paieška truktų pernelyg ilgai",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 128,
    question: "Kuris įrankis yra sukurtas remiantis The Sleuth Kit (TSK)?",
    options: ["Wireshark", "Volatility Framework", "Autopsy", "NetworkMiner"],
    correctAnswer: "C) Autopsy",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 129,
    question: "Kiek kriminalistinių ir tyrimų įrankių apima SANS SIFT Workstation?",
    options: ["Apie 50", "Daugiau nei 100", "Apie 75", "Mažiau nei 50"],
    correctAnswer: "B) Daugiau nei 100",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 130,
    question: "Kokiai analizei skirtas Volatility Framework?",
    options: [
      "Diskų atvaizdų analizei",
      "Tinklo paketų analizei",
      "RAM atminties analizei",
      "Metaduomenų analizei"
    ],
    correctAnswer: "C) RAM atminties analizei",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 131,
    question: "Kiek failų formatų palaiko Exiftool?",
    options: ["Apie 500", "Apie 800", "Daugiau nei 1300", "Apie 1000"],
    correctAnswer: "C) Daugiau nei 1300",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 132,
    question: "Kuris įrankis laikomas tinklo protokolų analizatorių \"standard de facto\"?",
    options: ["NetworkMiner", "Wireshark", "tcpdump", "Nfsen"],
    correctAnswer: "B) Wireshark",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 133,
    question: "Kam skirtas PTK Forensics įrankis?",
    options: [
      "Atminties analizei",
      "Tinklo srauto analizei",
      "Diskų atvaizdų analizei",
      "Metaduomenų ištraukimui"
    ],
    correctAnswer: "C) Diskų atvaizdų analizei",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 134,
    question: "Kuris iš šių yra komercinis įrankis?",
    options: ["Autopsy", "Wireshark", "EnCase", "Volatility Framework"],
    correctAnswer: "C) EnCase",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 135,
    question: "Kokį formatą naudoja ProDiscover Forensics disko atvaizdui sukurti?",
    options: [
      "Tik DD formatą",
      "E01 arba DD formatą",
      "Tik E01 formatą",
      "AFF formatą"
    ],
    correctAnswer: "B) E01 arba DD formatą",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 136,
    question: "Kas yra NetFlow srautas?",
    options: [
      "Dvikrypčių paketų aibė",
      "Vienkrypčių iš siuntėjo gavėjui siunčiamų paketų aibė",
      "Tinklo protokolų rinkinys",
      "Maršrutizatoriaus konfigūracijos failas"
    ],
    correctAnswer: "B) Vienkrypčių iš siuntėjo gavėjui siunčiamų paketų aibė",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 137,
    question: "Kiek laukų yra NetFlow pakete?",
    options: ["15", "25", "20", "30"],
    correctAnswer: "C) 20",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 138,
    question: "Kokia yra maksimali NetFlow įrašo trukmė?",
    options: ["15 minučių", "20 minučių", "30 minučių", "45 minučių"],
    correctAnswer: "C) 30 minučių",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 139,
    question: "Kuris įrankis yra pasyvus tinklo paketų analizatorius?",
    options: ["Wireshark", "NetworkMiner", "tcpdump", "Nfsen"],
    correctAnswer: "B) NetworkMiner",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 140,
    question: "Kuriai kompanijai šiuo metu priklauso AccessData FTK?",
    options: ["OpenText", "Exterro", "AccessData Group", "Microsoft"],
    correctAnswer: "B) Exterro",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 141,
    question: "Kuris iš šių įrankių yra skirtas OSINT ir ryšių vizualizacijai?",
    options: ["Autopsy", "EnCase", "Maltego", "Volatility Framework"],
    correctAnswer: "C) Maltego",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 142,
    question: "Kokios failų sistemos palaikomos ProDiscover Forensics?",
    options: [
      "Tik NTFS",
      "FAT12/16/32, NTFS, EXT2/3, UFS",
      "Tik FAT sistemos",
      "Tik Linux failų sistemos"
    ],
    correctAnswer: "B) FAT12/16/32, NTFS, EXT2/3, UFS",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 143,
    question: "Kuris hash algoritmas automatiškai kuriamas FTK Imager įrankyje?",
    options: ["Tik MD5", "Tik SHA1", "MD5, SHA1 arba SHA256", "SHA512"],
    correctAnswer: "C) MD5, SHA1 arba SHA256",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 144,
    question: "Nuo kurių metų vykdomas Wireshark projektas?",
    options: ["1995 m.", "1998 m.", "2000 m.", "2002 m."],
    correctAnswer: "B) 1998 m.",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 145,
    question: "Kas yra Nfsen?",
    options: [
      "Komercinis įrankis",
      "Atvirojo kodo paketas NetFlow analizei",
      "Tinklo protokolų analizatorius",
      "Atminties analizės įrankis"
    ],
    correctAnswer: "B) Atvirojo kodo paketas NetFlow analizei",
    chapter: "Įkalčių analizės įrankiai"
  },
  {
    id: 146,
    question: "Kokiu formatu NetworkMiner palaiko failus?",
    options: ["Tik pcap", "pcap/pcapng", "Tik txt", "Tik csv"],
    correctAnswer: "B) pcap/pcapng",
    chapter: "Įkalčių analizės įrankiai"
  },

  // XI SKYRIUS: OPERACINIŲ SISTEMŲ YPATUMAI (Klausimai 147-166)
  {
    id: 147,
    question: "Kuriame kataloge saugomi Windows įvykių žurnalai?",
    options: [
      "C:\\Windows\\Logs\\",
      "C:\\Windows\\System32\\winevt\\Logs\\",
      "C:\\Users\\Logs\\",
      "C:\\Program Files\\Logs\\"
    ],
    correctAnswer: "B) C:\\Windows\\System32\\winevt\\Logs\\",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 148,
    question: "Kokis įvykio ID žymi sėkmingą prisijungimą Windows sistemoje?",
    options: ["4623", "4624", "4625", "4634"],
    correctAnswer: "B) 4624",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 149,
    question: "Kur saugoma PowerShell komandų istorija?",
    options: [
      "C:\\Windows\\System32\\PowerShell\\",
      "C:\\Users\\<naudotojo_vardas>\\Documents\\",
      "C:\\Users\\<naudotojo_vardas>\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt",
      "C:\\Program Files\\PowerShell\\"
    ],
    correctAnswer: "C) C:\\Users\\<naudotojo_vardas>\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 150,
    question: "Kokį plėtinį turi Windows nuorodų (shortcut) failai?",
    options: [".url", ".lnk", ".link", ".shortcut"],
    correctAnswer: "B) .lnk",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 151,
    question: "Kas yra Thumbs.db failas?",
    options: [
      "Sistemos konfigūracijos failas",
      "Sistemos podėlio/talpyklos failas su miniatiūrinėmis peržiūromis",
      "Programų duomenų failas",
      "Saugumo žurnalas"
    ],
    correctAnswer: "B) Sistemos podėlio/talpyklos failas su miniatiūrinėmis peržiūromis",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 152,
    question: "Kokiu tikslumu NTFS failų sistemoje matuojamas laikas?",
    options: [
      "1 sekundės intervalais",
      "10 milisekundžių intervalais",
      "100 nanosekundžių intervalais",
      "1 milisekundės intervalais"
    ],
    correctAnswer: "C) 100 nanosekundžių intervalais",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 153,
    question: "Nuo kada prasideda NTFS laiko skaičiavimas?",
    options: [
      "1970 m. sausio 1 d.",
      "1980 m. sausio 1 d.",
      "1601 m. sausio 1 d.",
      "2000 m. sausio 1 d."
    ],
    correctAnswer: "C) 1601 m. sausio 1 d.",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 154,
    question: "Kuriame kataloge Unix/Linux sistemose saugomi pagrindiniai sistemos žurnalai?",
    options: ["/etc/log/", "/var/log/", "/usr/log/", "/home/log/"],
    correctAnswer: "B) /var/log/",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 155,
    question: "Kokia komanda naudojama Unix sistemose naudotojų prisijungimų žurnalams peržiūrėti?",
    options: ["login", "history", "last", "users"],
    correctAnswer: "C) last",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 156,
    question: "Kas yra LiME įrankis?",
    options: [
      "Linux failų sistemos analizės įrankis",
      "Linux Memory Extractor - atminties išgavimo įrankis",
      "Linux žurnalų analizės įrankis",
      "Linux tinklo analizės įrankis"
    ],
    correctAnswer: "B) Linux Memory Extractor - atminties išgavimo įrankis",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 157,
    question: "Kiek laiko žymų rūšių naudojama Unix operacinėse sistemose?",
    options: ["2", "3", "Iki 4", "5"],
    correctAnswer: "C) Iki 4",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 158,
    question: "Kas yra FSEvents macOS sistemoje?",
    options: [
      "Failų saugumo įvykiai",
      "Failų sistemos pokyčių stebėjimo sistema",
      "Programų paleidimo žurnalai",
      "Tinklo įvykių sistema"
    ],
    correctAnswer: "B) Failų sistemos pokyčių stebėjimo sistema",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 159,
    question: "Kokias dvi pagrindines failų sistemas naudoja macOS?",
    options: [
      "NTFS ir FAT32",
      "ext4 ir APFS",
      "HFS+ ir APFS",
      "FAT32 ir exFAT"
    ],
    correctAnswer: "C) HFS+ ir APFS",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 160,
    question: "Nuo kada prasideda Mac Absolute Time skaičiavimas HFS+ sistemoje?",
    options: [
      "1970 m. sausio 1 d.",
      "1980 m. sausio 1 d.",
      "1904 m. sausio 1 d.",
      "2001 m. sausio 1 d."
    ],
    correctAnswer: "C) 1904 m. sausio 1 d.",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 161,
    question: "Kokiu tikslumu APFS failų sistema palaiko laiko žymas?",
    options: ["Sekundžių", "Milisekundžių", "Mikrosekundžių", "Nanosekundžių"],
    correctAnswer: "D) Nanosekundžių",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 162,
    question: "Kas yra ADB Android sistemose?",
    options: [
      "Android Data Backup",
      "Android Debug Bridge",
      "Android Device Browser",
      "Android Data Base"
    ],
    correctAnswer: "B) Android Debug Bridge",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 163,
    question: "Kokia komanda naudojama Android sistemose detalių žurnalų peržiūrai?",
    options: ["androidlog", "syslog", "logcat", "debuglog"],
    correctAnswer: "C) logcat",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 164,
    question: "Kokią failų sistemą dažniausiai naudoja Android įrenginiai vidinėje atmintyje?",
    options: ["FAT32", "NTFS", "ext4", "exFAT"],
    correctAnswer: "C) ext4",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 165,
    question: "Kurį Windows registro šakninį raktą reikia analizuoti norint rasti vietinių naudotojų paskyrų informaciją?",
    options: ["SYSTEM", "SOFTWARE", "SAM", "SECURITY"],
    correctAnswer: "C) SAM",
    chapter: "Operacinių sistemų ypatumai"
  },
  {
    id: 166,
    question: "Kur saugomas NTUSER.DAT failas?",
    options: [
      "C:\\Windows\\System32\\Config\\",
      "C:\\Users\\<username>\\",
      "C:\\Program Files\\",
      "C:\\Windows\\"
    ],
    correctAnswer: "B) C:\\Users\\<username>\\",
    chapter: "Operacinių sistemų ypatumai"
  },

  // XII SKYRIUS: NESTABILIŲ ĮKALČIŲ SURINKIMAS (Klausimai 167-176)
  {
    id: 167,
    question: "Kokia informacija gali būti rasta kompiuterio operatyviojoje atmintyje?",
    options: [
      "Tik aktyvūs procesai",
      "Prisijungę vartotojai, aktyvūs procesai, IP adresai, slaptažodžiai, nekoduoti duomenys",
      "Tik tinklo sąjungos",
      "Tik sistemos failai"
    ],
    correctAnswer: "B) Prisijungę vartotojai, aktyvūs procesai, IP adresai, slaptažodžiai, nekoduoti duomenys",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 168,
    question: "Koks yra pagrindinis reikalavimas operatyviosios atminties atvaizdą darančiam įrankiui?",
    options: [
      "Gebėjimas keisti atminties turinį",
      "Gebėjimas nuskaityti visą informaciją iš atminties jos nepakeičiant",
      "Greitai ištrinti duomenis",
      "Sujungti su internetu"
    ],
    correctAnswer: "B) Gebėjimas nuskaityti visą informaciją iš atminties jos nepakeičiant",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 169,
    question: "Kokia komanda naudojama UNIX sistemose operatyviosios atminties atvaizdui sukurti su MD5 ir SHA256 kodavimu?",
    options: [
      "dd if=/dev/mem of=mem.bin",
      "dcfldd if=/dev/mem hash=md5,sha256 md5log=md5.txt sha256log=sha256.txt of=mem.bin",
      "cp /dev/mem mem.bin",
      "strings /dev/mem > mem.bin"
    ],
    correctAnswer: "B) dcfldd if=/dev/mem hash=md5,sha256 md5log=md5.txt sha256log=sha256.txt of=mem.bin",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 170,
    question: "Kokia problema atsiranda naujesnėse Linux branduolio versijose dėl /dev/kmem failo?",
    options: [
      "Failas per didelis",
      "Failas užkoduotas",
      "/dev/kmem failo jau nebėra, prieiga per /dev/mem ribojama",
      "Failas neprieinamas"
    ],
    correctAnswer: "C) /dev/kmem failo jau nebėra, prieiga per /dev/mem ribojama",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 171,
    question: "Koks yra LiveKd įrankio tikslas Windows sistemose?",
    options: [
      "Antivirusinė apsauga",
      "Veikiančio kompiuterio atminties atvaizdui sukurti crash dump formatu",
      "Failų archyvavimas",
      "Tinklo konfigūravimas"
    ],
    correctAnswer: "B) Veikiančio kompiuterio atminties atvaizdui sukurti crash dump formatu",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 172,
    question: "Kokia komanda naudojama LiveKd įrankyje atminties atvaizdui sukurti?",
    options: [
      "memory -f c:\\tmp\\memory.dmp",
      "create -f c:\\tmp\\memory.dmp",
      "dump -f c:\\tmp\\memory.dmp",
      "save -f c:\\tmp\\memory.dmp"
    ],
    correctAnswer: "C) dump -f c:\\tmp\\memory.dmp",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 173,
    question: "Kam skirtas Volatility Frameworks įrankis?",
    options: [
      "Skaitmeninius artefaktus surinkti iš operatyviosios atminties analizės",
      "Failų šifravimui",
      "Tinklo stebėjimui",
      "Disko defragmentavimui"
    ],
    correctAnswer: "A) Skaitmeninius artefaktus surinkti iš operatyviosios atminties analizės",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 174,
    question: "Kokį failą VMware sukuria virtualios mašinos atminties kopijai?",
    options: [".vmdk failą", ".vmem failą", ".vmx failą", ".vram failą"],
    correctAnswer: "B) .vmem failą",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 175,
    question: "Koks yra pagrindinių UNIX komandų (dd, strings) pranašumas?",
    options: [
      "Veikia tik su operatyviąja atmintimi",
      "Naudojamos ir reguliariems failams, katalogams ar failų sistemoms",
      "Dirba tik su tinklo įrenginiais",
      "Reikalauja administratoriaus teisių"
    ],
    correctAnswer: "B) Naudojamos ir reguliariems failams, katalogams ar failų sistemoms",
    chapter: "Nestabilių įkalčių surinkimas"
  },
  {
    id: 176,
    question: "Kokia informacija gali būti išgauta iš pagefile.sys failo?",
    options: [
      "Tik sistemos konfigūracija",
      "Nekoduoti slaptažodžiai, raktai, susirašinėjimo žinutės",
      "Tik programų sąrašas",
      "Tinklo nustatymai"
    ],
    correctAnswer: "B) Nekoduoti slaptažodžiai, raktai, susirašinėjimo žinutės",
    chapter: "Nestabilių įkalčių surinkimas"
  },

  // XIII SKYRIUS: SUNAIKINTŲ ĮKALČIŲ ATSTATYMAS (Klausimai 177-186)
  {
    id: 177,
    question: "Kas nutinka su failais, kai jie ištrinami standartiniais OS metodais?",
    options: [
      "Failai fiziškai pašalinami iš disko",
      "Trinami tik metaduomenys failų lentelėje, o duomenys lieka fiziškai",
      "Failai perkeliami į kitą katalogą",
      "Failai automatiškai užšifruojami"
    ],
    correctAnswer: "B) Trinami tik metaduomenys failų lentelėje, o duomenys lieka fiziškai",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 178,
    question: "Kokie yra keturi dokumentų ypatybių tipai?",
    options: [
      "Standartinės, automatiškai naujinamos, pasirinktinės, dokumentų bibliotekos ypatybės",
      "Tekstinės, grafinės, garsinės, vaizdo ypatybės",
      "Viešos, privatūs, slaptosios, konfidencialios ypatybės",
      "Vietinės, tinklo, debesų, išorinės ypatybės"
    ],
    correctAnswer: "A) Standartinės, automatiškai naujinamos, pasirinktinės, dokumentų bibliotekos ypatybės",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 179,
    question: "Kokios Windows komandos naudojamos failų trynimui komandinėje eilutėje?",
    options: [
      "delete ir remove",
      "del ir erase",
      "clear ir wipe",
      "trash ir bin"
    ],
    correctAnswer: "B) del ir erase",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 180,
    question: "Kas atsitinka su failais, ištrintais naudojant Shift + Del kombinaciją?",
    options: [
      "Failai patenka į šiukšliadėžę",
      "Failai į šiukšliadėžę nepatenka",
      "Failai automatiškai atkuriami",
      "Failai perkeliami į kitą vietą"
    ],
    correctAnswer: "B) Failai į šiukšliadėžę nepatenka",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 181,
    question: "Koks yra neatstatomo failų trynimo (wipe) principas?",
    options: [
      "Failai perkeliami į slaptą katalogą",
      "Į fizinę duomenų vietą įrašomi atsitiktiniai duomenys",
      "Failai tik pažymimi kaip ištrinti",
      "Failai suspaudžiami"
    ],
    correctAnswer: "B) Į fizinę duomenų vietą įrašomi atsitiktiniai duomenys",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 182,
    question: "Kiek kartų rekomenduojama kartoti duomenų trynimo procesą saugiam sunaikinimui?",
    options: ["3 kartus", "5 kartus", "Ne mažiau kaip 7 kartus", "1 kartą"],
    correctAnswer: "C) Ne mažiau kaip 7 kartus",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 183,
    question: "Kokia Linux komanda naudojama neatstatomam failų trynimui?",
    options: ["rm", "delete", "shred", "clear"],
    correctAnswer: "C) shred",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 184,
    question: "Kas atsitinka su failais formatuojant diską OS priemonėmis?",
    options: [
      "Duomenys fiziškai sunaikinami",
      "Modifikuojami įkrovos sektoriai ir perrašomos failų lentelės, bet duomenys lieka",
      "Diskas fiziškai sugadinamas",
      "Visi duomenys užšifruojami"
    ],
    correctAnswer: "B) Modifikuojami įkrovos sektoriai ir perrašomos failų lentelės, bet duomenys lieka",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 185,
    question: "Kuris formatavimo tipas vienareikšmiškai sunaikina visus duomenis diske?",
    options: [
      "Greitas formatavimas (quick format)",
      "Standartinis formatavimas",
      "Žemo lygio formatavimas (low level format)",
      "Loginis formatavimas"
    ],
    correctAnswer: "C) Žemo lygio formatavimas (low level format)",
    chapter: "Sunaikintų įkalčių atstatymas"
  },
  {
    id: 186,
    question: "Kokie yra populiariausi nemokamieji duomenų atstatymo įrankiai 2022 metais?",
    options: [
      "Norton Recovery, McAfee Undelete",
      "Disk Drill, EaseUS Data Recovery Wizard, Recuva, TestDisk",
      "Windows Defender, Avast Recovery",
      "VLC Player, WinRAR"
    ],
    correctAnswer: "B) Disk Drill, EaseUS Data Recovery Wizard, Recuva, TestDisk",
    chapter: "Sunaikintų įkalčių atstatymas"
  },

  // XIV SKYRIUS: ĮKALČIŲ RINKIMAS VIEŠOJOJE ERDVĖJE (Klausimai 187-201)
  {
    id: 187,
    question: "Kas yra \"viešoji erdvė\" įkalčių rinkimo kontekste?",
    options: [
      "Tik socialiniai tinklai ir viešai prieinamos svetainės",
      "Bet kokios kompiuterių sistemos ar duomenys, tiesiogiai nesantys įvykio vietoje ir kurių nėra galimybės išimti formaliam tyrimui",
      "Tik interneto paslaugų tiekėjų sistemos",
      "Viešos vietos, kur naudojami kompiuteriai"
    ],
    correctAnswer: "B) Bet kokios kompiuterių sistemos ar duomenys, tiesiogiai nesantys įvykio vietoje ir kurių nėra galimybės išimti formaliam tyrimui",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 188,
    question: "Į kiek kategorijų skaidomas įkalčių rinkimas viešoje erdvėje?",
    options: ["3 kategorijas", "4 kategorijas", "2 kategorijas", "5 kategorijas"],
    correctAnswer: "C) 2 kategorijas",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 189,
    question: "Kokios yra dvi pagrindinės įkalčių rinkimo viešoje erdvėje kategorijos?",
    options: [
      "Paieška socialiniuose tinkluose ir paieška el. pašto sistemose",
      "Paieška interneto svetainėse ir paieška kitose įtariamajam neprieinamose sistemose",
      "Paieška mobiliuose įrenginiuose ir paieška kompiuteriuose",
      "Paieška duomenų bazėse ir paieška archyvuose"
    ],
    correctAnswer: "B) Paieška interneto svetainėse ir paieška kitose įtariamajam neprieinamose sistemose",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 190,
    question: "Kodėl internetinės svetainės turinio fiksavimo metu būtina nurodyti laiko žymę?",
    options: [
      "Tai yra teisinė procedūra",
      "Kad būtų galima atsekti tyrėją",
      "Kadangi interneto svetainės pasižymi dinamika ir po kurio laiko jos gali atrodyti visai kitaip",
      "Tam, kad išvengti autorių teisių pažeidimo"
    ],
    correctAnswer: "C) Kadangi interneto svetainės pasižymi dinamika ir po kurio laiko jos gali atrodyti visai kitaip",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 191,
    question: "Kokį klaidingą jausmą sukelia internetas vartotojams?",
    options: [
      "Saugumo jausmą",
      "Anonimiškumo jausmą",
      "Kontrolės jausmą",
      "Privatumo jausmą"
    ],
    correctAnswer: "B) Anonimiškumo jausmą",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 192,
    question: "Kokius duomenis tyrėjas gali surinkti analizuodamas internete esančią informaciją?",
    options: [
      "Tik asmens vardą ir pavardę",
      "Tik nuotraukas",
      "Įtariamojo nuotrauką, draugų ratą, kontaktus, paskutinių apsilankymų tinkle datas, pažiūras ir pasakymus, pomėgius ir interesus",
      "Tik IP adresus"
    ],
    correctAnswer: "C) Įtariamojo nuotrauką, draugų ratą, kontaktus, paskutinių apsilankymų tinkle datas, pažiūras ir pasakymus, pomėgius ir interesus",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 193,
    question: "Kokios sistemos priklauso \"kitoms viešoms įtariamajam neprieinamoms sistemoms\"?",
    options: [
      "Tik socialiniai tinklai",
      "Ryšio veikimą užtikrinančios sistemos: ISP maršrutizatoriai, DNS serveriai, ugniasienės",
      "Tik paieškos sistemos",
      "Tik mobiliųjų telefonų sistemos"
    ],
    correctAnswer: "B) Ryšio veikimą užtikrinančios sistemos: ISP maršrutizatoriai, DNS serveriai, ugniasienės",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 194,
    question: "Ką ES šalyse ISP (interneto paslaugų tiekėjai) yra įpareigoti daryti?",
    options: [
      "Blokuoti įtartinus vartotojus",
      "Saugoti informaciją apie vartotojų inicijuotus susijungimus",
      "Stebėti visą vartotojų veiklą",
      "Pranešti apie bet kokią įtartiną veiklą"
    ],
    correctAnswer: "B) Saugoti informaciją apie vartotojų inicijuotus susijungimus",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 195,
    question: "Kas yra vienas iš pagrindinių bendradarbiavimą su trečiosiomis šalimis apsunkinančių veiksnių?",
    options: [
      "Kalbos barjeras",
      "Trečioji šalis yra nepavaldi NEE tyrėjo šalies teisinei sistemai",
      "Skirtingi laiko juostos",
      "Technologijų skirtumai"
    ],
    correctAnswer: "B) Trečioji šalis yra nepavaldi NEE tyrėjo šalies teisinei sistemai",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 196,
    question: "Kokiu būdu mobiliųjų tinklų operatoriai gali nustatyti abonento buvimo vietą?",
    options: [
      "Tik per GPS",
      "Tik per WiFi signalą",
      "Naudodami GSM pozicionavimo sistemas",
      "Tik per Bluetooth ryšį"
    ],
    correctAnswer: "C) Naudodami GSM pozicionavimo sistemas",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 197,
    question: "Kokie duomenys gali būti randami socialiniuose tinkluose kaip įkalčiai?",
    options: [
      "Tik nuotraukos",
      "Vartotojo vardas, darbo patirtis/CV, grupės/draugai, pasakymai, fotografuota ir vaizdo medžiaga",
      "Tik kontaktai",
      "Tik prisijungimo datos"
    ],
    correctAnswer: "B) Vartotojo vardas, darbo patirtis/CV, grupės/draugai, pasakymai, fotografuota ir vaizdo medžiaga",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 198,
    question: "Kam gali būti panaudoti viešai prieinami asmens duomenys?",
    options: [
      "Tik reklamos tikslams",
      "Žmogaus identiteto vagystei ir įsilaužimui į asmens valdomas sistemas",
      "Tik statistikos rinkimui",
      "Tik draugystės palaikymui"
    ],
    correctAnswer: "B) Žmogaus identiteto vagystei ir įsilaužimui į asmens valdomas sistemas",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 199,
    question: "Kas yra Internet Archive (archive.org) pagrindinė funkcija įkalčių rinkimo kontekste?",
    options: [
      "Dabartinių svetainių kopijavimas",
      "Senų svetainių versijų saugojimas ir galimybė atkurti informaciją, kuri buvo pašalinta iš kontroliuojamos svetainės",
      "Tik nuotraukų archyvavimas",
      "Tik teksto failų saugojimas"
    ],
    correctAnswer: "B) Senų svetainių versijų saugojimas ir galimybė atkurti informaciją, kuri buvo pašalinta iš kontroliuojamos svetainės",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 200,
    question: "Kokia yra paieškos sistemų podėlio (cache) informacijos svarba?",
    options: [
      "Ji leidžia pamatyti, kaip svetainė atrodė anksčiau",
      "Ji pagerina svetainės greitį",
      "Kitas būdas rasti pašalintas svetaines arba jų senas versijas",
      "Ji mažina duomenų srautą"
    ],
    correctAnswer: "C) Kitas būdas rasti pašalintas svetaines arba jų senas versijas",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },
  {
    id: 201,
    question: "Kodėl gali kilti problemų įrodant, kad sujungimai ar veiksmai tinkle buvo inicijuoti įtariamojo?",
    options: [
      "Dėl interneto lėtumo",
      "Dėl galimybės, kad veiksmai buvo inicijuoti jo kompiuteryje įdiegtu kenksmingu programiniu kodu",
      "Dėl IP adresų trūkumo",
      "Dėl laiko skirtumų"
    ],
    correctAnswer: "B) Dėl galimybės, kad veiksmai buvo inicijuoti jo kompiuteryje įdiegtu kenksmingu programiniu kodu",
    chapter: "Įkalčių rinkimas viešojoje erdvėje"
  },

  // XV SKYRIUS: ĮKALČIŲ VIENTISUMO IŠSAUGOJIMAS (Klausimai 202-211)
  {
    id: 202,
    question: "Kas yra duomenų vientisumas (Integrity) NEE tyrime?",
    options: [
      "Duomenų šifravimo procesas",
      "Griežtų procedūrų vykdymas, leidžiantis neužteršti tiriamų duomenų bei formuojantis teisinius reikalavimus vykdančią įkalčių grandinę",
      "Duomenų kopijų skaičius",
      "Įkalčių saugojimo vieta"
    ],
    correctAnswer: "B) Griežtų procedūrų vykdymas, leidžiantis neužteršti tiriamų duomenų bei formuojantis teisinius reikalavimus vykdančią įkalčių grandinę",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 203,
    question: "Kokia yra tinkama nestabilių įkalčių rinkimo tvarka pagal prioritetus?",
    options: [
      "Operatyvioji atmintis → Registrai → Laikinieji failai → Procesų sąrašas",
      "Registrai ir cache atmintis → Maršrutizavimo lentelės ir procesų sąrašas → Operatyvioji atmintis → Laikinieji failai",
      "Laikinieji failai → Operatyvioji atmintis → Cache atmintis → Registrai",
      "Procesų sąrašas → Laikinieji failai → Registrai → Operatyvioji atmintis"
    ],
    correctAnswer: "B) Registrai ir cache atmintis → Maršrutizavimo lentelės ir procesų sąrašas → Operatyvioji atmintis → Laikinieji failai",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 204,
    question: "Kas turi būti daroma su įvykio vieta iki tyrėjo atvykimo?",
    options: [
      "Leisti visiems prieiti prie kompiuterių",
      "Iš karto išjungti visus kompiuterius",
      "Apsaugoti įvykio vietą ir užtikrinti, kad žmonės negalėtų prieiti ir sugadinti įkalčių",
      "Perkelti visą įrangą į saugų vietą"
    ],
    correctAnswer: "C) Apsaugoti įvykio vietą ir užtikrinti, kad žmonės negalėtų prieiti ir sugadinti įkalčių",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 205,
    question: "Kuri komanda Windows sistemose naudojama tinklo sujungimų parodymui?",
    options: ["netstat", "ipconfig", "arp", "tasklist"],
    correctAnswer: "A) netstat",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 206,
    question: "Kokie yra du pagrindiniai stabilių įkalčių apdorojimo metodai, kai sistema yra įjungta?",
    options: [
      "Formatuoti diską ir daryti atsargines kopijas",
      "Daryti tikslią disko kopiją neišjungiant kompiuterio ARBA išjungti kompiuterį ir vėliau sukurti disko kopiją",
      "Ištrinti visus failus ir perinstaliuoti sistemą",
      "Perkelti duomenis į kitą kompiuterį"
    ],
    correctAnswer: "B) Daryti tikslią disko kopiją neišjungiant kompiuterio ARBA išjungti kompiuterį ir vėliau sukurti disko kopiją",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 207,
    question: "Kas yra \"forensically sterile\" laikmena?",
    options: [
      "Laikmena, užšifruota specialiu algoritmu",
      "Laikmena, kuri buvo nufotografuota",
      "Laikmena, joje nėra jokių kitų duomenų, KPK arba defektų",
      "Laikmena su antivirusinėmis programomis"
    ],
    correctAnswer: "C) Laikmena, joje nėra jokių kitų duomenų, KPK arba defektų",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 208,
    question: "Kokiu metodu patvirtinama, kad disko kopija visiškai atitinka originalą?",
    options: [
      "Vizualiu tikrinimo",
      "Failų skaičiaus palyginimu",
      "Kontrolinės sumos skaičiavimu naudojant CRC arba vienakrypčių funkcijų algoritmus",
      "Failo dydžio palyginimu"
    ],
    correctAnswer: "C) Kontrolinės sumos skaičiavimu naudojant CRC arba vienakrypčių funkcijų algoritmus",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 209,
    question: "Kas yra įkalčių grandinė (chain of custody)?",
    options: [
      "Fizinis įkalčių sujungimas",
      "Veiksmų seka, leidžianti kontroliuoti įkalčio buvimo vietą bet kuriuo momentu nuo išėmimo iki pateikimo teisme",
      "Kompiuterių tinklo konfigūracija",
      "Duomenų šifravimo procesas"
    ],
    correctAnswer: "B) Veiksmų seka, leidžianti kontroliuoti įkalčio buvimo vietą bet kuriuo momentu nuo išėmimo iki pateikimo teisme",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 210,
    question: "Kas turi būti naudojama įkalčiams pakuoti?",
    options: [
      "Paprasti maišeliai",
      "Specialūs maišeliai, kurių po užklijavimo negalima atidaryti nepažeidus pakuotės",
      "Plastikinės dėžutės",
      "Metaliniai konteineriai"
    ],
    correctAnswer: "B) Specialūs maišeliai, kurių po užklijavimo negalima atidaryti nepažeidus pakuotės",
    chapter: "Įkalčių vientisumo išsaugojimas"
  },
  {
    id: 211,
    question: "Koks yra pagrindinis principas dėl prieigos prie įkalčių?",
    options: [
      "Visi darbuotojai gali prieiti",
      "Tik vadovai gali prieiti",
      "Prieiga turi būti užtikrinta tik ribotam, motyvuotą ir teisėtą pagrindą turintiems asmenims",
      "Niekas negali prieiti prie įkalčių"
    ],
    correctAnswer: "C) Prieiga turi būti užtikrinta tik ribotam, motyvuotą ir teisėtą pagrindą turintiems asmenims",
    chapter: "Įkalčių vientisumo išsaugojimas"
  }
];
