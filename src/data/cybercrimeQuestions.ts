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
  }
];