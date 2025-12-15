export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  chapter: string;
  category?: string;
  explanation?: string;
}

export const duomenuGavybaQuestions: Question[] = [
          {
            "id": 1,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kiek žingsnių turi KDD (Knowledge Discovery in Databases) procesas?",
            "options": ["5", "6", "7", "8"],
            "correctAnswer": "7",
            "explanation": "KDD turi 7 žingsnius: problemos supratimas, duomenų pasirinkimas, apvalymas, transformacija, duomenų gavyba, vertinimas, panaudojimas"
          },
          {
            "id": 2,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kurioje CRISP-DM fazėje sugaištama DAUGIAUSIAI laiko (50-70%)?",
            "options": ["Business Understanding", "Data Understanding", "Data Preparation", "Modeling"],
            "correctAnswer": "Data Preparation",
            "explanation": "Data Preparation fazė užima 50-70% viso projekto laiko"
          },
          {
            "id": 3,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "SEMMA procesas yra sukurtas:",
            "options": ["IBM", "SAS", "Microsoft", "Google"],
            "correctAnswer": "SAS",
            "explanation": "SEMMA (Sample, Explore, Modify, Model, Assess) yra SAS sukurtas metodas"
          },
          {
            "id": 4,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kuris iš šių NĖRA CRISP-DM fazė?",
            "options": ["Deployment", "Implementation", "Evaluation", "Modeling"],
            "correctAnswer": "Implementation",
            "explanation": "CRISP-DM fazės: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment. Implementation nėra atskira fazė"
          },
          {
            "id": 5,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "CRISP-DM procesas yra:",
            "options": ["Tiesinis", "Iteratyvus", "Ciklinis tik tarp 2 fazių", "Vienakryptis"],
            "correctAnswer": "Iteratyvus",
            "explanation": "CRISP-DM yra iteratyvus procesas - galima grįžti į ankstesnes fazes"
          },
          {
            "id": 6,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "DIEK hierarchijoje, kas yra tarp Data ir Knowledge?",
            "options": ["Evidence ir Information", "Information ir Evidence", "Wisdom", "Analysis"],
            "correctAnswer": "Information ir Evidence",
            "explanation": "DIEK: Data → Information → Evidence → Knowledge"
          },
          {
            "id": 7,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kuris KDD žingsnis eina PO duomenų transformacijos?",
            "options": ["Duomenų apvalymas", "Duomenų gavyba", "Duomenų pasirinkimas", "Problemos supratimas"],
            "correctAnswer": "Duomenų gavyba",
            "explanation": "KDD tvarka: problemos supratimas → pasirinkimas → apvalymas → transformacija → GAVYBA → vertinimas → panaudojimas"
          },
          {
            "id": 8,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kiek fazių turi CRISP-DM?",
            "options": ["4", "5", "6", "7"],
            "correctAnswer": "6",
            "explanation": "CRISP-DM turi 6 fazes"
          },
          {
            "id": 9,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Big Data Value Chain NEPRIKLAUSO:",
            "options": ["Data Acquisition", "Data Analysis", "Data Deployment", "Data Integration"],
            "correctAnswer": "Data Deployment",
            "explanation": "BDVC: Acquisition → Extraction & Cleaning → Integration → Analysis → Interpretation. Deployment nėra BDVC dalis"
          },
          {
            "id": 10,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kuris šiuolaikinis duomenų šaltinis NĖRA minimas 2025 m. kontekste?",
            "options": ["IoT įrenginiai", "Blockchain", "Floppy diskai", "AI sistemos"],
            "correctAnswer": "Floppy diskai",
            "explanation": "Šiuolaikiniai šaltiniai: IoT, socialiniai tinklai, blockchain, AI sistemos, mobilieji įrenginiai"
          },
          {
            "id": 11,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kuris iš šių NĖRA SEMMA žingsnis?",
            "options": ["Sample", "Explore", "Deploy", "Modify"],
            "correctAnswer": "Deploy",
            "explanation": "SEMMA: Sample, Explore, Modify, Model, Assess (Deploy nėra SEMMA dalis)"
          },
          {
            "id": 12,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Pagal 2020 m. statistiką, kiek % naudojo CRISP-DM?",
            "options": ["23%", "33%", "43%", "53%"],
            "correctAnswer": "43%",
            "explanation": "2020 m. 43% naudojo CRISP-DM - populiariausias metodas"
          },
          {
            "id": 13,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Duomenų gavybos tikslas yra:",
            "options": ["Rinkti duomenis", "Transformuoti duomenis į žinias", "Ištrinti duomenis", "Suspausti duomenis"],
            "correctAnswer": "Transformuoti duomenis į žinias",
            "explanation": "Pagrindinis tikslas - iš duomenų gauti naudingą žinią sprendimams priimti"
          },
          {
            "id": 14,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kuris metodas yra plačiausiai taikomas įvairioms pramonės šakoms?",
            "options": ["SEMMA", "CRISP-DM", "Waterfall", "Agile"],
            "correctAnswer": "CRISP-DM",
            "explanation": "CRISP-DM yra cross-industry - tinka įvairioms pramonės šakoms"
          },
          {
            "id": 15,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kada buvo pristatyta Transformer architektūra?",
            "options": ["2015", "2017", "2019", "2021"],
            "correctAnswer": "2017",
            "explanation": "2017 m. straipsnyje 'Attention Is All You Need' pristatyta Transformer architektūra"
          },
          {
            "id": 16,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "BERT modelis buvo pristatytas:",
            "options": ["2016", "2017", "2018", "2019"],
            "correctAnswer": "2018",
            "explanation": "Google BERT buvo pristatytas 2018 m."
          },
          {
            "id": 17,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "ChatGPT buvo paleistas:",
            "options": ["2020", "2021", "2022", "2023"],
            "correctAnswer": "2022",
            "explanation": "ChatGPT buvo paleistas 2022 m. lapkritį"
          },
          {
            "id": 18,
            "chapter": "Paskaita 1: Įvadas",
            "category": "Įvadas",
            "question": "Kuris NE yra KDD žingsnis?",
            "options": ["Problemos supratimas", "Duomenų monetizavimas", "Duomenų transformacija", "Rezultatų vertinimas"],
            "correctAnswer": "Duomenų monetizavimas",
            "explanation": "Monetizavimas nėra KDD proceso dalis"
          },
          {
            "id": 19,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Data Understanding fazėje, kuris iš šių NĖRA pagrindinis veiksmas?",
            "options": ["Collect Initial Data", "Describe Data", "Clean Data", "Verify Data Quality"],
            "correctAnswer": "Clean Data",
            "explanation": "Clean Data yra Data Preparation fazės užduotis, ne Data Understanding"
          },
          {
            "id": 20,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Kurioje fazėje sukuriamas projekto planas?",
            "options": ["Data Understanding", "Business Understanding", "Data Preparation", "Deployment"],
            "correctAnswer": "Business Understanding",
            "explanation": "Projekto planas sukuriamas Business Understanding fazėje"
          },
          {
            "id": 21,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Trūkstamų reikšmių tvarkymo metodas, kai trūkstama reikšmė pakeičiama vidurkiu, vadinamas:",
            "options": ["Deletion", "Imputacija", "Prognozavimas", "Interpoliacija"],
            "correctAnswer": "Imputacija",
            "explanation": "Imputacija - tai procesas, kai trūkstamos reikšmės užpildomos (pvz., vidurkiu, mediana, moda)"
          },
          {
            "id": 22,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Kurioje fazėje atliekamas Train/Test split?",
            "options": ["Data Preparation", "Modeling", "Evaluation", "Business Understanding"],
            "correctAnswer": "Modeling",
            "explanation": "Train/Test split atliekamas Modeling fazėje, kuriant testų planą"
          },
          {
            "id": 23,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Derived attributes yra kuriami kurioje Data Preparation užduotyje?",
            "options": ["Select Data", "Clean Data", "Construct Data", "Integrate Data"],
            "correctAnswer": "Construct Data",
            "explanation": "Derived attributes (išvestiniai atributai) kuriami Construct Data užduotyje"
          },
          {
            "id": 24,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Business Understanding fazėje NEREIKIA:",
            "options": ["Nustatyti verslo tikslų", "Įvertinti situacijos", "Statyti modelio", "Sukurti projekto plano"],
            "correctAnswer": "Statyti modelio",
            "explanation": "Modelis statomas Modeling fazėje, ne Business Understanding"
          },
          {
            "id": 25,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Data Preparation fazėje, duomenų valymas apima:",
            "options": ["Tik outlier šalinimą", "Tik trūkstamų reikšmių tvarkymą", "Trūkstamų reikšmių, triukšmo ir outlier tvarkymą", "Tik normalizavimą"],
            "correctAnswer": "Trūkstamų reikšmių, triukšmo ir outlier tvarkymą",
            "explanation": "Data Cleaning apima visų šių problemų tvarkymą"
          },
          {
            "id": 26,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Kurioje fazėje atliekama Confusion Matrix analizė?",
            "options": ["Data Preparation", "Modeling", "Evaluation", "Business Understanding"],
            "correctAnswer": "Modeling",
            "explanation": "Confusion Matrix yra modelio vertinimo metrika Modeling fazėje"
          },
          {
            "id": 27,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Deployment fazėje NEREIKIA:",
            "options": ["Planuoti diegimo", "Planuoti monitoring", "Statyti naujo modelio", "Peržiūrėti projekto"],
            "correctAnswer": "Statyti naujo modelio",
            "explanation": "Deployment fazėje modelis jau pastatytas ir vertintas"
          },
          {
            "id": 28,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Data Understanding fazėje tyrinėjama:",
            "options": ["Tik duomenų kiekis", "Tik duomenų kokybė", "Duomenų kiekis, kokybė, tipai ir ryšiai", "Tik koreliacijos"],
            "correctAnswer": "Duomenų kiekis, kokybė, tipai ir ryšiai",
            "explanation": "Data Understanding apima išsamų duomenų tyrimą"
          },
          {
            "id": 29,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Kuris NE yra triukšmo tvarkymo metodas?",
            "options": ["Smoothing", "Binning", "Regression", "Deletion"],
            "correctAnswer": "Deletion",
            "explanation": "Deletion naudojamas trūkstamoms reikšmėms, ne triukšmui"
          },
          {
            "id": 30,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Evaluation fazėje vertinama:",
            "options": ["Tik modelio tikslumas", "Ar modelis atitinka verslo tikslus", "Tik loss funkcija", "Tik training error"],
            "correctAnswer": "Ar modelis atitinka verslo tikslus",
            "explanation": "Evaluation fazėje svarbu įvertinti, ar modelis sprendžia verslo problemą"
          },
          {
            "id": 31,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Agregavimas atliekamas kurioje Data Preparation užduotyje?",
            "options": ["Select", "Clean", "Construct", "Integrate"],
            "correctAnswer": "Integrate",
            "explanation": "Agregavimas dažnai atliekamas integruojant duomenis iš kelių šaltinių"
          },
          {
            "id": 32,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Modeling fazėje pasirenkama:",
            "options": ["Tik vienas algoritmas", "Keletas algoritmų ir lyginami rezultatai", "Atsitiktinis algoritmas", "Visuomet Neural Network"],
            "correctAnswer": "Keletas algoritmų ir lyginami rezultatai",
            "explanation": "Modeling fazėje dažnai išbandomi keli algoritmai ir palyginami jų rezultatai"
          },
          {
            "id": 33,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Koks yra pirmasis Business Understanding žingsnis?",
            "options": ["Projekto planas", "Determine Business Objectives", "DM tikslai", "Situacijos įvertinimas"],
            "correctAnswer": "Determine Business Objectives",
            "explanation": "Pirmiausia nustatomi verslo tikslai"
          },
          {
            "id": 34,
            "chapter": "Paskaita 2: CRISP-DM procesas",
            "category": "CRISP-DM",
            "question": "Cross-validation strategija kuriama:",
            "options": ["Business Understanding", "Data Preparation", "Modeling (Generate Test Design)", "Evaluation"],
            "correctAnswer": "Modeling (Generate Test Design)",
            "explanation": "Test design, įskaitant cross-validation, kuriamas Modeling fazėje"
          },
          {
            "id": 35,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Jei entropija lygi 0, tai reiškia:",
            "options": ["Visi pavyzdžiai priklauso skirtingoms klasėms", "Visi pavyzdžiai priklauso tai pačiai klasei", "Duomenys yra maksimaliai netvarkūs", "Reikia daugiau duomenų"],
            "correctAnswer": "Visi pavyzdžiai priklauso tai pačiai klasei",
            "explanation": "Entropija = 0 reiškia, kad visi pavyzdžiai priklauso vienai klasei (idealus atvejis)"
          },
          {
            "id": 36,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Information Gain (IG) matuoja:",
            "options": ["Duomenų kiekį", "Entropijos padidėjimą", "Entropijos sumažėjimą", "Modelio tikslumą"],
            "correctAnswer": "Entropijos sumažėjimą",
            "explanation": "Information Gain matuoja entropijos sumažėjimą po duomenų padalijimo pagal atributą"
          },
          {
            "id": 37,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Sprendimų medžio statymo metu, atributas su _____ Information Gain pasirenkamas pirmasis:",
            "options": ["Mažiausiu", "Didžiausiu", "Vidutiniu", "Neigiamu"],
            "correctAnswer": "Didžiausiu",
            "explanation": "Pasirenkamas atributas su DIDŽIAUSIU Information Gain, nes jis labiausiai sumažina entropiją"
          },
          {
            "id": 38,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Pruning yra naudojamas:",
            "options": ["Padidinti modelio tikslumą training duomenyse", "Išvengti overfitting", "Padidinti entropiją", "Sumažinti duomenų kiekį"],
            "correctAnswer": "Išvengti overfitting",
            "explanation": "Pruning (apkarpymas) naudojamas išvengti overfitting ir pagerinti generalizaciją"
          },
          {
            "id": 39,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "ID3 algoritmas naudoja:",
            "options": ["Gini Impurity", "Information Gain", "Chi-square", "MSE"],
            "correctAnswer": "Information Gain",
            "explanation": "ID3 algoritmas naudoja Information Gain atributams pasirinkti"
          },
          {
            "id": 40,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Sprendimų medis yra:",
            "options": ["Parametrinis metodas", "Neneparametrinis metodas", "Tik regresijai", "Tik klasifikacijai"],
            "correctAnswer": "Neneparametrinis metodas",
            "explanation": "Sprendimų medis yra neneparametrinis - neprisiima specifinės duomenų pasiskirstymo"
          },
          {
            "id": 41,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Leaf node (lapas) sprendimų medyje reprezentuoja:",
            "options": ["Sprendimo tašką", "Pradžią", "Galutinį rezultatą/klasę", "Atributą"],
            "correctAnswer": "Galutinį rezultatą/klasę",
            "explanation": "Leaf nodes yra galutiniai sprendimai/rezultatai"
          },
          {
            "id": 42,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "CART algoritmas naudoja:",
            "options": ["Information Gain", "Gini Impurity", "Chi-square", "Entropy"],
            "correctAnswer": "Gini Impurity",
            "explanation": "CART (Classification and Regression Trees) naudoja Gini Impurity"
          },
          {
            "id": 43,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Gini Impurity = 0 reiškia:",
            "options": ["Maksimali netvarka", "Visi pavyzdžiai vienoje klasėje", "Reikia pruning", "Blogai pastatytas medis"],
            "correctAnswer": "Visi pavyzdžiai vienoje klasėje",
            "explanation": "Gini = 0 kai visi pavyzdžiai priklauso tai pačiai klasei"
          },
          {
            "id": 44,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "C4.5 algoritmas yra:",
            "options": ["Prastesnis nei ID3", "ID3 patobulinimas", "Nenaudoja Information Gain", "Tik kategoriniams atributams"],
            "correctAnswer": "ID3 patobulinimas",
            "explanation": "C4.5 yra ID3 patobulinimas, galintis dirbti su continuous atributais"
          },
          {
            "id": 45,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Pre-pruning reiškia:",
            "options": ["Apkarpyti po medžio statymo", "Sustabdyti medžio augimą anksčiau", "Visiškai pašalinti medį", "Padidinti medžio gylį"],
            "correctAnswer": "Sustabdyti medžio augimą anksčiau",
            "explanation": "Pre-pruning (early stopping) sustabdo medžio augimą prieš jis taps per didelis"
          },
          {
            "id": 46,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Sprendimų medis NEREIKALAUJA:",
            "options": ["Duomenų normalizavimo", "Atributų", "Training duomenų", "Test duomenų"],
            "correctAnswer": "Duomenų normalizavimo",
            "explanation": "Sprendimų medžiai nereikalauja požymių normalizavimo ar standartizavimo"
          },
          {
            "id": 47,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Internal node (vidinis mazgas) atlieka:",
            "options": ["Galutinį sprendimą", "Sąlygos tikrinimą", "Duomenų rinkimą", "Rezultato išvedimą"],
            "correctAnswer": "Sąlygos tikrinimą",
            "explanation": "Internal nodes tikrina sąlygas ir nusprendžia, kuria šaka eiti"
          },
          {
            "id": 48,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Maksimali entropija dvejetinei klasifikacijai yra:",
            "options": ["0", "0.5", "1", "2"],
            "correctAnswer": "1",
            "explanation": "Maksimali entropija = 1, kai klasės pasiskirstę tolygiai (50%-50%)"
          },
          {
            "id": 49,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Root node (šakninis mazgas) reprezentuoja:",
            "options": ["Galutinį rezultatą", "Visą populiaciją/duomenų rinkinį", "Tik vieną klasę", "Klaidą"],
            "correctAnswer": "Visą populiaciją/duomenų rinkinį",
            "explanation": "Root node yra viršutinis mazgas, reprezentuojantis visus duomenis"
          },
          {
            "id": 50,
            "chapter": "Paskaita 2: Sprendimų medžiai",
            "category": "Sprendimų medžiai",
            "question": "Splitting sprendimų medyje reiškia:",
            "options": ["Medžio šalinimą", "Mazgo padalijimą į vaikinius mazgus", "Duomenų valymas", "Rezultato skaičiavimą"],
            "correctAnswer": "Mazgo padalijimą į vaikinius mazgus",
            "explanation": "Splitting - tai proceso, kai mazgas padalijamas į 2+ vaikinius mazgus"
          },
          {
            "id": 51,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest naudoja keletą:",
            "options": ["Logistinių regresijų", "Sprendimų medžių", "Neuronų tinklų", "Klasterių"],
            "correctAnswer": "Sprendimų medžių",
            "explanation": "Random Forest yra ansamblis kelių sprendimų medžių"
          },
          {
            "id": 52,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest klasifikacijai naudoja:",
            "options": ["Vidurkį", "Medianą", "Majority Voting", "Weighted Average"],
            "correctAnswer": "Majority Voting",
            "explanation": "Klasifikacijai Random Forest naudoja Majority Voting - laimi klasė su daugiausiai balsų"
          },
          {
            "id": 53,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Bootstrap Aggregating (Bagging) reiškia:",
            "options": ["Naudoti visus duomenis kiekvienam medžiui", "Atrinkti atsitiktinę duomenų poaibę SU grąžinimu", "Atrinkti atsitiktinę duomenų poaibę BE grąžinimo", "Naudoti tik 10% duomenų"],
            "correctAnswer": "Atrinkti atsitiktinę duomenų poaibę SU grąžinimu",
            "explanation": "Bagging reiškia bootstrap sampling - atsitiktinė imtis SU grąžinimu"
          },
          {
            "id": 54,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest regresijai galutinė prognozė yra:",
            "options": ["Majority vote", "Maksimumas", "Vidurkis", "Mediana"],
            "correctAnswer": "Vidurkis",
            "explanation": "Regresijai Random Forest naudoja visų medžių prognozių vidurkį"
          },
          {
            "id": 55,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Feature Randomness Random Forest reiškia:",
            "options": ["Atsitiktiniai duomenys", "Atsitiktinis požymių poaibis kiekviename mazge", "Atsitiktinė output reikšmė", "Atsitiktinis medžių skaičius"],
            "correctAnswer": "Atsitiktinis požymių poaibis kiekviename mazge",
            "explanation": "Feature Randomness - kiekviename mazge naudojamas atsitiktinis požymių poaibis (√n klasifikacijai)"
          },
          {
            "id": 56,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest yra:",
            "options": ["Base classifier", "Ensemble metodas", "Single tree", "Linear model"],
            "correctAnswer": "Ensemble metodas",
            "explanation": "Random Forest yra ensemble learning metodas - jungia kelis modelius"
          },
          {
            "id": 57,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Klasifikacijai, kiek požymių paprastai naudojama kiekviename mazge?",
            "options": ["Visi požymiai", "√n požymių", "n/3 požymių", "1 požymis"],
            "correctAnswer": "√n požymių",
            "explanation": "Klasifikacijai naudojama √n požymių, kur n = bendras požymių skaičius"
          },
          {
            "id": 58,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Regresijai, kiek požymių paprastai naudojama kiekviename mazge?",
            "options": ["√n", "n/2", "n/3", "Visi n"],
            "correctAnswer": "n/3",
            "explanation": "Regresijai naudojama n/3 požymių"
          },
          {
            "id": 59,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest, palyginti su vienu sprendimų medžiu:",
            "options": ["Linkęs labiau overfit'inti", "Mažiau linkęs overfit'inti", "Vienodas overfitting", "Niekada neoverfit'ina"],
            "correctAnswer": "Mažiau linkęs overfit'inti",
            "explanation": "Random Forest ansamblis mažina overfitting riziką"
          },
          {
            "id": 60,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest gali įvertinti:",
            "options": ["Tik accuracy", "Tik loss", "Feature importance (požymių svarbą)", "Tik confusion matrix"],
            "correctAnswer": "Feature importance (požymių svarbą)",
            "explanation": "Random Forest gali įvertinti, kurie požymiai yra svarbiausi prognozei"
          },
          {
            "id": 61,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest naudojamas:",
            "options": ["Tik klasifikacijai", "Tik regresijai", "Klasifikacijai IR regresijai", "Tik klasterizavimui"],
            "correctAnswer": "Klasifikacijai IR regresijai",
            "explanation": "Random Forest versatile - tinka abiem užduotims"
          },
          {
            "id": 62,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Kiekvienas medis Random Forest mato:",
            "options": ["Visus duomenis", "Šiek tiek skirtingus duomenis", "Tik vieną duomenų tašką", "Nė vieno duomenų taško"],
            "correctAnswer": "Šiek tiek skirtingus duomenis",
            "explanation": "Dėl bootstrap sampling, kiekvienas medis mato skirtingą duomenų poaibę"
          },
          {
            "id": 63,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest trūkumas:",
            "options": ["Lengvai interpretuojamas", "Black box - sunku interpretuoti", "Visada greitesnis nei vienas medis", "Reikia mažai atminties"],
            "correctAnswer": "Black box - sunku interpretuoti",
            "explanation": "Random Forest sunkiau interpretuoti nei vieną sprendimų medį"
          },
          {
            "id": 64,
            "chapter": "Paskaita 2: Random Forest",
            "category": "Random Forest",
            "question": "Random Forest prognozavimo greitis, palyginti su vienu medžiu:",
            "options": ["Greitesnis", "Vienodas", "Lėtesnis", "Priklauso nuo duomenų"],
            "correctAnswer": "Lėtesnis",
            "explanation": "Random Forest turi prognozuoti su keliais medžiais, todėl lėtesnis"
          },
          {
            "id": 65,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Support(Beer) = 0.4 reiškia:",
            "options": ["40% klientų mėgsta alų", "40% transakcijų turi alų", "Alaus kaina yra 0.4", "40% transakcijų neturi alaus"],
            "correctAnswer": "40% transakcijų turi alų",
            "explanation": "Support = 0.4 reiškia, kad 40% transakcijų turi šią prekę"
          },
          {
            "id": 66,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Jei Support({Bread, Butter}) = 0.3 ir Support({Bread}) = 0.6, tai Confidence(Bread → Butter) = ?",
            "options": ["0.18", "0.3", "0.5", "0.9"],
            "correctAnswer": "0.5",
            "explanation": "Confidence = Support(X∪Y) / Support(X) = 0.3 / 0.6 = 0.5"
          },
          {
            "id": 67,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Lift > 1 reiškia:",
            "options": ["X ir Y nepriklausomi", "X ir Y pozityviai koreliuoti", "X ir Y negatyviai koreliuoti", "Taisyklė nevalidi"],
            "correctAnswer": "X ir Y pozityviai koreliuoti",
            "explanation": "Lift > 1 reiškia pozityvią koreliaciją - X ir Y dažniau pasirodo kartu nei atsitiktinai"
          },
          {
            "id": 68,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Apriori algoritmo pagrindinė savybė (Apriori Property):",
            "options": ["Jei itemset frequent, tai ir visi jo superaibiai frequent", "Jei itemset frequent, tai ir visi jo poaibiai frequent", "Visi itemsets yra frequent", "Niekas nėra frequent"],
            "correctAnswer": "Jei itemset frequent, tai ir visi jo poaibiai frequent",
            "explanation": "Apriori Property: jei itemset yra frequent, tai visi jo poaibiai taip pat yra frequent"
          },
          {
            "id": 69,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Apriori algoritmas atlieka:",
            "options": ["Vieną duomenų bazės skenavimą", "Du duomenų bazės skenavimus", "Kelis duomenų bazės skenavimus", "Neskenuoja duomenų bazės"],
            "correctAnswer": "Kelis duomenų bazės skenavimus",
            "explanation": "Apriori algoritmas atlieka kelis duomenų bazės skenavimus - po vieną kiekvienam k-itemset lygiui"
          },
          {
            "id": 70,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "FP-Growth algoritmas, palyginti su Apriori:",
            "options": ["Lėtesnis", "Paprastai greitesnis", "Visada vienodas", "Negalima palyginti"],
            "correctAnswer": "Paprastai greitesnis",
            "explanation": "FP-Growth paprastai greitesnis, nes nenaudoja kandidatų generavimo ir stato FP-tree struktūrą"
          },
          {
            "id": 71,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Minimum Support Threshold yra naudojamas:",
            "options": ["Filtruoti frequent itemsets", "Filtruoti stiprias taisykles", "Skaičiuoti Lift", "Generuoti kandidatus"],
            "correctAnswer": "Filtruoti frequent itemsets",
            "explanation": "Minimum Support Threshold naudojamas filtruoti frequent itemsets"
          },
          {
            "id": 72,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Kuris metrikos rodo nepriklausomybę: Lift = ?",
            "options": ["0", "0.5", "1", "2"],
            "correctAnswer": "1",
            "explanation": "Lift = 1 rodo, kad X ir Y yra nepriklausomi"
          },
          {
            "id": 73,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Market Basket Analysis pagrinde naudoja:",
            "options": ["Sprendimų medžius", "Asociacijos taisykles", "Neuronų tinklus", "PCA"],
            "correctAnswer": "Asociacijos taisykles",
            "explanation": "Market Basket Analysis naudoja asociacijos taisykles atrasti prekių, kurios perkamos kartu"
          },
          {
            "id": 74,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Jei turime 10 unikalių prekių, kiek maksimaliai galimų itemsets (teoriškai)?",
            "options": ["10", "100", "1024 (2¹⁰)", "10!"],
            "correctAnswer": "1024 (2¹⁰)",
            "explanation": "Su n prekių, galimų itemsets yra 2ⁿ (įskaitant tuščią aibę). 2¹⁰ = 1024"
          },
          {
            "id": 75,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Itemset {Bread, Milk, Eggs} yra:",
            "options": ["1-itemset", "2-itemset", "3-itemset", "4-itemset"],
            "correctAnswer": "3-itemset",
            "explanation": "k-itemset turi k elementų. Čia 3 elementai → 3-itemset"
          },
          {
            "id": 76,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Minimum Confidence Threshold naudojamas:",
            "options": ["Filtruoti frequent itemsets", "Filtruoti stiprias taisykles", "Skaičiuoti Support", "Generuoti itemsets"],
            "correctAnswer": "Filtruoti stiprias taisykles",
            "explanation": "Minimum Confidence naudojamas filtruoti stiprias asociacijos taisykles"
          },
          {
            "id": 77,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Lift < 1 reiškia:",
            "options": ["Pozityvi koreliacija", "Nepriklausomi", "Negatyvi koreliacija", "Nėra ryšio"],
            "correctAnswer": "Negatyvi koreliacija",
            "explanation": "Lift < 1 reiškia, kad X ir Y rečiau pasirodo kartu nei atsitiktinai"
          },
          {
            "id": 78,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Apriori Join step:",
            "options": ["Šalina kandidatus", "Generuoja kandidatus iš ankstesnio lygio", "Skaičiuoja support", "Filtruoja taisykles"],
            "correctAnswer": "Generuoja kandidatus iš ankstesnio lygio",
            "explanation": "Join step generuoja kandidatus Cₖ iš Lₖ₋₁"
          },
          {
            "id": 79,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Apriori Prune step:",
            "options": ["Generuoja kandidatus", "Pašalina kandidatus su non-frequent poaibiais", "Skaičiuoja confidence", "Sukuria taisykles"],
            "correctAnswer": "Pašalina kandidatus su non-frequent poaibiais",
            "explanation": "Prune step pašalina kandidatus, kurių poaibiai nėra frequent"
          },
          {
            "id": 80,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "FP-Growth stato:",
            "options": ["Decision Tree", "Neural Network", "FP-tree (Frequent Pattern tree)", "Graph"],
            "correctAnswer": "FP-tree (Frequent Pattern tree)",
            "explanation": "FP-Growth stato kompaktinę FP-tree struktūrą"
          },
          {
            "id": 81,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Asociacijos taisyklė yra:",
            "options": ["X = Y", "X + Y", "X → Y (If-Then)", "X < Y"],
            "correctAnswer": "X → Y (If-Then)",
            "explanation": "Asociacijos taisyklė yra If-Then formato: jei X, tai Y"
          },
          {
            "id": 82,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Confidence matuoja:",
            "options": ["Dažnumą", "Sąlyginę tikimybę", "Koreliaciją", "Klaidą"],
            "correctAnswer": "Sąlyginę tikimybę",
            "explanation": "Confidence matuoja tikimybę, kad Y atsiras transakcijoje, kai joje jau yra X"
          },
          {
            "id": 83,
            "chapter": "Paskaita 3: Asociacijos taisyklės",
            "category": "Asociacijos taisyklės",
            "question": "Apriori problema su žemais support threshold:",
            "options": ["Per mažai itemsets", "Per daug frequent itemsets generuojama", "Greitesnis algoritmas", "Mažiau atminties"],
            "correctAnswer": "Per daug frequent itemsets generuojama",
            "explanation": "Su žemu threshold, per daug itemsets tampa frequent, lėtina algoritmą"
          },
          {
            "id": 84,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Tokenization yra:",
            "options": ["Duomenų šifravimas", "Teksto padalijimas į žodžius/sakinius", "Teksto vertimas", "Teksto suspaudimas"],
            "correctAnswer": "Teksto padalijimas į žodžius/sakinius",
            "explanation": "Tokenization - teksto padalijimas į atskirus žodžius arba sakinius"
          },
          {
            "id": 85,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Stop words yra:",
            "options": ["Svarbiausi žodžiai", "Nereikšmingi žodžiai (and, the, is)", "Nauji žodžiai", "Klaidos"],
            "correctAnswer": "Nereikšmingi žodžiai (and, the, is)",
            "explanation": "Stop words - dažni, bet nereikšmingi žodžiai kaip 'and', 'the', 'is'"
          },
          {
            "id": 86,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Stemming procesas 'running' → 'run' yra:",
            "options": ["Klaidingas", "Redukcija į šaknį", "Vertimas", "Koregavimas"],
            "correctAnswer": "Redukcija į šaknį",
            "explanation": "Stemming - žodžio redukcija į šaknį (pvz., 'running' → 'run')"
          },
          {
            "id": 87,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "TF-IDF skaičiuoja:",
            "options": ["Tik žodžio dažnumą", "Žodžio svarbą dokumente", "Žodžio ilgį", "Žodžio poziciją"],
            "correctAnswer": "Žodžio svarbą dokumente",
            "explanation": "TF-IDF matuoja žodžio svarbą dokumente, atsižvelgiant į jo dažnumą ir retumą"
          },
          {
            "id": 88,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "IDF (Inverse Document Frequency) aukštas, kai žodis:",
            "options": ["Labai dažnas visuose dokumentuose", "Retas dokumentuose", "Labai ilgas", "Trumpas"],
            "correctAnswer": "Retas dokumentuose",
            "explanation": "IDF aukštas retiem žodžiam - tokie žodžiai yra informatyvesni"
          },
          {
            "id": 89,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Sentiment Analysis tikslas:",
            "options": ["Išversti tekstą", "Nustatyti emocinį toną", "Skaičiuoti žodžius", "Suspausti tekstą"],
            "correctAnswer": "Nustatyti emocinį toną",
            "explanation": "Sentiment Analysis (nuomonės analizė) nustato teksto emocinį toną (pozityvus/negatyvus/neutralus)"
          },
          {
            "id": 90,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "BERT reiškia:",
            "options": ["Basic Encoder Representation Transformer", "Bidirectional Encoder Representations from Transformers", "Binary Encoder with Recurrent Transformers", "Balanced Embedding for Recursive Training"],
            "correctAnswer": "Bidirectional Encoder Representations from Transformers",
            "explanation": "BERT = Bidirectional Encoder Representations from Transformers"
          },
          {
            "id": 91,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "BERT yra:",
            "options": ["Unidirectional", "Bidirectional", "Tik forward", "Neturi krypties"],
            "correctAnswer": "Bidirectional",
            "explanation": "BERT yra bidirectional - žiūri į žodį iš abiejų pusių konteksto"
          },
          {
            "id": 92,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "MLM (Masked Language Model) BERT pre-training užduotis yra:",
            "options": ["Išversti tekstą", "Spėti paslėptus žodžius", "Generuoti naują tekstą", "Klasifikuoti tekstą"],
            "correctAnswer": "Spėti paslėptus žodžius",
            "explanation": "MLM - BERT mokosi spėti paslėptus (masked) žodžius sakinyje"
          },
          {
            "id": 93,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Bag of Words (BoW) modelis:",
            "options": ["Išsaugo žodžių tvarką", "Neišsaugo žodžių tvarkos", "Išsaugo tik pirmus žodžius", "Išsaugo tik paskutinius žodžius"],
            "correctAnswer": "Neišsaugo žodžių tvarkos",
            "explanation": "BoW neišsaugo žodžių tvarkos - skaičiuoja tik žodžių dažnius"
          },
          {
            "id": 94,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Lemmatization vs Stemming:",
            "options": ["Lemmatization tikslesnė", "Stemming tikslesnė", "Vienoda", "Nepalyginami"],
            "correctAnswer": "Lemmatization tikslesnė",
            "explanation": "Lemmatization tikslesnė - 'better' → 'good', o stemming tiesiog nukerta galūnes"
          },
          {
            "id": 95,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "TF (Term Frequency) matuoja:",
            "options": ["Žodžio retumą", "Žodžio dažnumą dokumente", "Žodžio ilgį", "Žodžių skaičių"],
            "correctAnswer": "Žodžio dažnumą dokumente",
            "explanation": "TF matuoja, kaip dažnai žodis pasirodo dokumente"
          },
          {
            "id": 96,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Lowercasing teksto preprocessing reiškia:",
            "options": ["Ištrinti tekstą", "Konvertuoti į mažąsias raides", "Išversti tekstą", "Suspausti tekstą"],
            "correctAnswer": "Konvertuoti į mažąsias raides",
            "explanation": "Lowercasing konvertuoja visas raides į mažąsias ('The' → 'the')"
          },
          {
            "id": 97,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Word embeddings (Word2Vec, GloVe) yra:",
            "options": ["Sparse vektoriai", "Dense vektoriai", "Tekstas", "Skaičiai"],
            "correctAnswer": "Dense vektoriai",
            "explanation": "Word embeddings yra dense vector reprezentacijos žodžių"
          },
          {
            "id": 98,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "BERT NSP (Next Sentence Prediction) užduotis:",
            "options": ["Spėti paslėptus žodžius", "Ar sakinys B eina po sakinio A", "Generuoti naują tekstą", "Versti tekstą"],
            "correctAnswer": "Ar sakinys B eina po sakinio A",
            "explanation": "NSP - BERT mokosi prognozuoti, ar vienas sakinys eina po kito"
          },
          {
            "id": 99,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "Sentiment Analysis lygiai gali būti:",
            "options": ["Tik positive/negative", "Document, sentence, aspect level", "Tik document level", "Nėra lygių"],
            "correctAnswer": "Document, sentence, aspect level",
            "explanation": "Sentiment Analysis gali būti atliekama skirtingais lygiais"
          },
          {
            "id": 100,
            "chapter": "Paskaita 4: Teksto gavyba",
            "category": "Teksto gavyba",
            "question": "BERT contextualized embeddings reiškia:",
            "options": ["Tas pats žodis visuomet turi tą pačią reprezentaciją", "Žodžio reprezentacija priklauso nuo konteksto", "Nėra embeddings", "Tik sparse vektoriai"],
            "correctAnswer": "Žodžio reprezentacija priklauso nuo konteksto",
            "explanation": "BERT embeddings contextualized - žodis 'bank' turi skirtingas reikšmes priklausomai nuo konteksto"
          },
          {
            "id": 101,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Perceptrono formulė: y = f(Σ(wᵢ × xᵢ) + b). Kas yra 'b'?",
            "options": ["Svoris (weight)", "Bias", "Batch size", "Beta"],
            "correctAnswer": "Bias",
            "explanation": "b = bias (poslinkis), leidžia modeliui būti lankstesniam"
          },
          {
            "id": 102,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "ReLU aktyvavimo funkcija yra:",
            "options": ["max(0, x)", "1/(1 + e⁻ˣ)", "tanh(x)", "x²"],
            "correctAnswer": "max(0, x)",
            "explanation": "ReLU (Rectified Linear Unit) = max(0, x) - populiariausia deep learning"
          },
          {
            "id": 103,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Sigmoid funkcijos išėjimo intervalas:",
            "options": ["[-1, 1]", "[0, 1]", "[0, ∞)", "(-∞, ∞)"],
            "correctAnswer": "[0, 1]",
            "explanation": "Sigmoid σ(x) = 1/(1 + e⁻ˣ) grąžina reikšmes intervale [0, 1]"
          },
          {
            "id": 104,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Backpropagation naudoja:",
            "options": ["Tik forward pass", "Gradientus (išvestines)", "Random search", "Grid search"],
            "correctAnswer": "Gradientus (išvestines)",
            "explanation": "Backpropagation naudoja gradientus (išvestines) svoriam atnaujinti"
          },
          {
            "id": 105,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Learning rate (α) per didelis gali sukelti:",
            "options": ["Per greitą konvergavimą", "Nestabilų treniravimą", "Per lėtą treniravimą", "Nėra jokio efekto"],
            "correctAnswer": "Nestabilų treniravimą",
            "explanation": "Per didelis learning rate gali sukelti nestabilų treniravimą - modelis 'šokinėja'"
          },
          {
            "id": 106,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "MSE (Mean Squared Error) naudojamas:",
            "options": ["Tik klasifikacijai", "Tik regresijai", "Abiems", "Nei vienam"],
            "correctAnswer": "Tik regresijai",
            "explanation": "MSE naudojamas regresijai - matuoja kvadratinę klaidą"
          },
          {
            "id": 107,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Cross-Entropy loss naudojamas:",
            "options": ["Tik regresijai", "Tik klasifikacijai", "Abiems", "Nei vienam"],
            "correctAnswer": "Tik klasifikacijai",
            "explanation": "Cross-Entropy naudojamas klasifikacijai"
          },
          {
            "id": 108,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Dropout prevencija naudojama:",
            "options": ["Padidinti accuracy", "Išvengti overfitting", "Pagreitinti treniravimą", "Sumažinti loss"],
            "correctAnswer": "Išvengti overfitting",
            "explanation": "Dropout atsitiktinai 'išjungia' neuronų dalį, kad išvengti overfitting"
          },
          {
            "id": 109,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Adam optimizer yra:",
            "options": ["Aktyvavimo funkcija", "Loss funkcija", "Optimization algoritmas", "Regularizacijos metodas"],
            "correctAnswer": "Optimization algoritmas",
            "explanation": "Adam - populiariausias optimization algoritmas su adaptive learning rate"
          },
          {
            "id": 110,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Epochas (epoch) yra:",
            "options": ["Vienas batch", "Vienas pilnas duomenų rinkinio perėjimas", "Vienas gradient update", "Vienas layer"],
            "correctAnswer": "Vienas pilnas duomenų rinkinio perėjimas",
            "explanation": "Epochas = vienas pilnas perėjimas per visą training duomenų rinkinį"
          },
          {
            "id": 111,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Tanh aktyvavimo funkcijos išėjimo intervalas:",
            "options": ["[-1, 1]", "[0, 1]", "[0, ∞)", "(-∞, ∞)"],
            "correctAnswer": "[-1, 1]",
            "explanation": "Tanh grąžina reikšmes intervale [-1, 1]"
          },
          {
            "id": 112,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Forward Propagation yra:",
            "options": ["Svorių atnaujinimas", "Skaičiavimas nuo input iki output", "Klaidos skaičiavimas", "Duomenų valymas"],
            "correctAnswer": "Skaičiavimas nuo input iki output",
            "explanation": "Forward Propagation - duomenys keliauja pirmyn per tinklą"
          },
          {
            "id": 113,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Batch size nurodo:",
            "options": ["Epochų skaičių", "Pavyzdžių skaičių vienam gradient update", "Sluoksnių skaičių", "Neuronų skaičių"],
            "correctAnswer": "Pavyzdžių skaičių vienam gradient update",
            "explanation": "Batch size - kiek pavyzdžių naudoti vienam gradient update"
          },
          {
            "id": 114,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Softmax aktyvavimo funkcija naudojama:",
            "options": ["Binary klasifikacijai", "Multi-class klasifikacijai", "Regresijai", "Klasterizavimui"],
            "correctAnswer": "Multi-class klasifikacijai",
            "explanation": "Softmax naudojamas daugelio klasių klasifikacijai - grąžina tikimybes"
          },
          {
            "id": 115,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Early Stopping yra:",
            "options": ["Sustabdyti treniravimą kai validation error pradeda augti", "Sustabdyti po 10 epochų", "Niekada nesustabdyti", "Sustabdyti kai loss = 0"],
            "correctAnswer": "Sustabdyti treniravimą kai validation error pradeda augti",
            "explanation": "Early Stopping prevencija nuo overfitting - sustabdoma kai validation error pradeda blogėti"
          },
          {
            "id": 116,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "L2 regularizacija (Ridge) prideda į loss funkciją:",
            "options": ["|w|", "w²", "w", "log(w)"],
            "correctAnswer": "w²",
            "explanation": "L2 regularizacija prideda w² (kvadratinį svorį) į loss funkciją"
          },
          {
            "id": 117,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "SGD reiškia:",
            "options": ["Standard Gradient Descent", "Stochastic Gradient Descent", "Simple Gradient Descent", "Strong Gradient Descent"],
            "correctAnswer": "Stochastic Gradient Descent",
            "explanation": "SGD = Stochastic Gradient Descent"
          },
          {
            "id": 118,
            "chapter": "Paskaita 5: Neuronų tinklai",
            "category": "Neuronų tinklai",
            "question": "Hidden layer yra:",
            "options": ["Input layer", "Output layer", "Sluoksnis tarp input ir output", "Nėra tokio sluoksnio"],
            "correctAnswer": "Sluoksnis tarp input ir output",
            "explanation": "Hidden layers yra paslėpti sluoksniai tarp input ir output"
          },
          {
            "id": 119,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "RNN pagrindinė savybė:",
            "options": ["Nemoka laiko sekų", "Turi vidinę atmintį (hidden state)", "Naudoja tik convolutional layers", "Neturi svorių"],
            "correctAnswer": "Turi vidinę atmintį (hidden state)",
            "explanation": "RNN turi hidden state - vidinę atmintį, kuri 'prisimena' ankstesnius žingsnius"
          },
          {
            "id": 120,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "RNN Vanishing Gradient problema reiškia:",
            "options": ["Gradientai per dideli", "Gradientai per maži", "Gradientai stabilūs", "Nėra gradientų"],
            "correctAnswer": "Gradientai per maži",
            "explanation": "Vanishing Gradient - gradientai tampa per maži, sunku išmokti ilgų priklausomybių"
          },
          {
            "id": 121,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "LSTM turi:",
            "options": ["1 vartą (gate)", "2 vartus", "3 vartus", "4 vartus"],
            "correctAnswer": "3 vartus",
            "explanation": "LSTM turi 3 vartus: Forget Gate, Input Gate, Output Gate"
          },
          {
            "id": 122,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Kuris NĖRA LSTM vartas?",
            "options": ["Forget Gate", "Input Gate", "Memory Gate", "Output Gate"],
            "correctAnswer": "Memory Gate",
            "explanation": "Memory Gate nėra - LSTM turi Forget, Input ir Output vartus"
          },
          {
            "id": 123,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "LSTM Forget Gate sprendžia:",
            "options": ["Ką pridėti", "Ką pamiršti", "Ką išvesti", "Ką transformuoti"],
            "correctAnswer": "Ką pamiršti",
            "explanation": "Forget Gate sprendžia, kokią informaciją pamiršti iš cell state"
          },
          {
            "id": 124,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "GRU, palyginti su LSTM:",
            "options": ["Sudėtingesnis", "Paprastesnis", "Vienodas", "Neegzistuoja"],
            "correctAnswer": "Paprastesnis",
            "explanation": "GRU paprastesnis - turi tik 2 vartus (reset ir update) vietoj 3"
          },
          {
            "id": 125,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Autoencoder tikslas:",
            "options": ["Klasifikuoti duomenis", "Suspausti ir rekonstruoti duomenis", "Generuoti tekstą", "Išversti tekstą"],
            "correctAnswer": "Suspausti ir rekonstruoti duomenis",
            "explanation": "Autoencoder mokosi suspausti duomenis į latent space ir juos rekonstruoti"
          },
          {
            "id": 126,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Autoencoder struktūra:",
            "options": ["Input → Encoder → Latent Space → Decoder → Output", "Input → Output", "Input → Hidden → Output", "Input → Softmax → Output"],
            "correctAnswer": "Input → Encoder → Latent Space → Decoder → Output",
            "explanation": "Autoencoder: Input → Encoder → Latent Space (Code) → Decoder → Output"
          },
          {
            "id": 127,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Denoising Autoencoder treniravimo metu:",
            "options": ["Naudoja švarų signalą", "Prideda triukšmą prie įėjimo", "Šalina duomenis", "Normalizuoja išėjimą"],
            "correctAnswer": "Prideda triukšmą prie įėjimo",
            "explanation": "Denoising Autoencoder mokosi atkurti švarų signalą iš triukšmingo įėjimo"
          },
          {
            "id": 128,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "VAE (Variational Autoencoder) gali:",
            "options": ["Tik suspausti duomenis", "Generuoti naujus duomenis", "Tik klasifikuoti", "Tik rekonstruoti"],
            "correctAnswer": "Generuoti naujus duomenis",
            "explanation": "VAE latent space yra probabilistic - gali generuoti naujus duomenis"
          },
          {
            "id": 129,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "LSTM Input Gate sprendžia:",
            "options": ["Ką pamiršti", "Kokią naują informaciją pridėti", "Ką išvesti", "Ką transformuoti"],
            "correctAnswer": "Kokią naują informaciją pridėti",
            "explanation": "Input Gate sprendžia, kokią naują informaciją pridėti į cell state"
          },
          {
            "id": 130,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "LSTM Output Gate sprendžia:",
            "options": ["Ką pamiršti", "Ką pridėti", "Ką išvesti", "Viską"],
            "correctAnswer": "Ką išvesti",
            "explanation": "Output Gate sprendžia, kokią informaciją išvesti iš cell state"
          },
          {
            "id": 131,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "RNN naudojamas:",
            "options": ["Tik vaizdams", "Sekų duomenims (tekstas, laikas, garsas)", "Tik statiniams duomenims", "Tik klasifikacijai"],
            "correctAnswer": "Sekų duomenims (tekstas, laikas, garsas)",
            "explanation": "RNN skirtas sekų duomenims - tekstui, laiko eilutėms, garsui"
          },
          {
            "id": 132,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Latent Space autoencoder yra:",
            "options": ["Įėjimo duomenys", "Suspausta duomenų reprezentacija", "Išėjimo duomenys", "Klaida"],
            "correctAnswer": "Suspausta duomenų reprezentacija",
            "explanation": "Latent Space - suspausta duomenų reprezentacija mažesnės dimensijos"
          },
          {
            "id": 133,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Sparse Autoencoder:",
            "options": ["Neturi sparsity constraint", "Prideda sparsity constraint", "Naudoja tik sparse duomenis", "Neegzistuoja"],
            "correctAnswer": "Prideda sparsity constraint",
            "explanation": "Sparse Autoencoder prideda sparsity constraint - skatina tik keletą neuronų būti aktyvius"
          },
          {
            "id": 134,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Convolutional Autoencoder skirtas:",
            "options": ["Tekstui", "Vaizdo duomenims", "Laiko eilutėms", "Audio"],
            "correctAnswer": "Vaizdo duomenims",
            "explanation": "Convolutional Autoencoder naudoja convolution sluoksnius vaizdo duomenims"
          },
          {
            "id": 135,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "VAE encoder išveda:",
            "options": ["Tik vieną reikšmę", "Mean (μ) ir Variance (σ²)", "Tik mean", "Tik variance"],
            "correctAnswer": "Mean (μ) ir Variance (σ²)",
            "explanation": "VAE encoder išveda mean ir variance, iš kurių samplinama latent code"
          },
          {
            "id": 136,
            "chapter": "Paskaita 6: Deep Learning architektūros",
            "category": "Deep Learning",
            "question": "Autoencoder anomaly detection principas:",
            "options": ["Normalūs duomenys - didelis rekonstruction error", "Normalūs duomenys - mažas rekonstruction error", "Visi duomenys vienodi", "Negalima naudoti"],
            "correctAnswer": "Normalūs duomenys - mažas rekonstruction error",
            "explanation": "Normalūs duomenys rekonstruojami gerai (mažas error), anomalijos - blogai (didelis error)"
          },
          {
            "id": 137,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Attention mechanizmas naudoja:",
            "options": ["Q, K, V (Query, Key, Value)", "X, Y, Z", "A, B, C", "Tik Q ir K"],
            "correctAnswer": "Q, K, V (Query, Key, Value)",
            "explanation": "Attention naudoja 3 vektorius: Query (ką ieškau), Key (ką turiu), Value (ką grąžinti)"
          },
          {
            "id": 138,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Self-Attention formulė: Attention(Q, K, V) = softmax(Q×K^T / √d_k) × V. Kodėl dalijama iš √d_k?",
            "options": ["Pagreitinti skaičiavimus", "Stabilizuoti gradientus", "Padidinti tikslumą", "Nėra priežasties"],
            "correctAnswer": "Stabilizuoti gradientus",
            "explanation": "Dalijama iš √d_k, kad stabilizuoti gradientus ir išvengti per didelių attention score'ų"
          },
          {
            "id": 139,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Multi-Head Attention naudoja:",
            "options": ["Vieną attention 'galvą'", "Kelias attention 'galvas'", "Nėra attention", "Tik dvi galvas"],
            "correctAnswer": "Kelias attention 'galvas'",
            "explanation": "Multi-Head Attention naudoja kelias lygiagrečias attention galvas - kiekviena mokosi skirtingų ryšių"
          },
          {
            "id": 140,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "BERT yra:",
            "options": ["Encoder-only", "Decoder-only", "Encoder-Decoder", "Neturi nei encoder, nei decoder"],
            "correctAnswer": "Encoder-only",
            "explanation": "BERT yra Encoder-only modelis (bidirectional)"
          },
          {
            "id": 141,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "GPT yra:",
            "options": ["Encoder-only", "Decoder-only", "Encoder-Decoder", "Bidirectional"],
            "correctAnswer": "Decoder-only",
            "explanation": "GPT yra Decoder-only modelis (autoregressive)"
          },
          {
            "id": 142,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "T5 yra:",
            "options": ["Encoder-only", "Decoder-only", "Encoder-Decoder", "Nėra transformer"],
            "correctAnswer": "Encoder-Decoder",
            "explanation": "T5 (Text-to-Text Transfer Transformer) yra Encoder-Decoder modelis"
          },
          {
            "id": 143,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "GPT generuoja tekstą:",
            "options": ["Bidirectionally", "Autoregressive (žodis po žodžio)", "Parallel", "Backwards"],
            "correctAnswer": "Autoregressive (žodis po žodžio)",
            "explanation": "GPT generuoja tekstą autoregressive - žodis po žodžio, žiūrint tik į kairę"
          },
          {
            "id": 144,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Positional Encoding reikalingas, nes:",
            "options": ["Transformer neturi recurrence", "Transformer per lėtas", "Transformer neturi attention", "Nėra reikalingas"],
            "correctAnswer": "Transformer neturi recurrence",
            "explanation": "Transformer neturi recurrence, todėl reikia Positional Encoding žodžių tvarkai įkoduoti"
          },
          {
            "id": 145,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Transformer attention sudėtingumas:",
            "options": ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
            "correctAnswer": "O(n²)",
            "explanation": "Vanilla Transformer attention turi kvadratinį sudėtingumą O(n²)"
          },
          {
            "id": 146,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "CLIP jungia:",
            "options": ["Tekstą ir tekstą", "Vaizdą ir tekstą", "Tik vaizdus", "Garsą ir vaizdą"],
            "correctAnswer": "Vaizdą ir tekstą",
            "explanation": "CLIP (OpenAI) yra multimodal modelis, jungiantis vaizdą ir tekstą"
          },
          {
            "id": 147,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Query (Q) attention mechanizme reprezentuoja:",
            "options": ["Ką turiu", "Ką ieškau", "Ką grąžinti", "Viską"],
            "correctAnswer": "Ką ieškau",
            "explanation": "Query - 'ką ieškau' - naudojama palyginti su Keys"
          },
          {
            "id": 148,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Key (K) attention mechanizme reprezentuoja:",
            "options": ["Ką ieškau", "Ką turiu", "Ką grąžinti", "Viską"],
            "correctAnswer": "Ką turiu",
            "explanation": "Key - 'ką turiu' - lyginamas su Query"
          },
          {
            "id": 149,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Value (V) attention mechanizme reprezentuoja:",
            "options": ["Ką ieškau", "Ką turiu", "Kokią informaciją grąžinti", "Viską"],
            "correctAnswer": "Kokią informaciją grąžinti",
            "explanation": "Value - 'kokią informaciją grąžinti' pagal attention weights"
          },
          {
            "id": 150,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Causal attention (GPT) reiškia:",
            "options": ["Žiūri į kairę ir dešinę", "Žiūri tik į kairę (nesivaizduoja ateities)", "Žiūri tik į dešinę", "Neturi attention"],
            "correctAnswer": "Žiūri tik į kairę (nesivaizduoja ateities)",
            "explanation": "Causal attention žiūri tik į ankstesnius žodžius, ne į būsimus"
          },
          {
            "id": 151,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "BERT taikymai:",
            "options": ["Tik teksto generavimas", "Klasifikacija, NER, Q&A", "Tik vertimas", "Tik summarization"],
            "correctAnswer": "Klasifikacija, NER, Q&A",
            "explanation": "BERT (encoder-only) tinka klasifikacijai, named entity recognition, question answering"
          },
          {
            "id": 152,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "T5 taikymai:",
            "options": ["Tik klasifikacija", "Translation, summarization, Q&A", "Tik generavimas", "Nieko"],
            "correctAnswer": "Translation, summarization, Q&A",
            "explanation": "T5 (encoder-decoder) tinka vertimui, sumarizavimui, Q&A"
          },
          {
            "id": 153,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Transformer Layer Normalization naudojama:",
            "options": ["Padidinti gradientus", "Stabilizuoti treniravimą", "Sumažinti modelį", "Generuoti tekstą"],
            "correctAnswer": "Stabilizuoti treniravimą",
            "explanation": "Layer Normalization stabilizuoja treniravimą ir pagreitina konvergavimą"
          },
          {
            "id": 154,
            "chapter": "Paskaita 7: Transformers",
            "category": "Transformers",
            "question": "Residual Connections (skip connections) Transformer:",
            "options": ["Šalina sluoksnius", "Leidžia gradientams tekėti geriau", "Didina modelį", "Nėra naudojamos"],
            "correctAnswer": "Leidžia gradientams tekėti geriau",
            "explanation": "Residual connections padeda gradientams tekėti per gilų tinklą"
          },
          {
            "id": 155,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Genetiniai algoritmai yra inspiruoti:",
            "options": ["Kompiuterių", "Natūralios atrankos", "Matematikos", "Fizikos"],
            "correctAnswer": "Natūralios atrankos",
            "explanation": "Genetiniai algoritmai inspiruoti evoliucijos ir natūralios atrankos principų"
          },
          {
            "id": 156,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Genetiniuose algoritmuose, chromosoma yra:",
            "options": ["Loss funkcija", "Galimas sprendinys", "Duomenų rinkinys", "Aktyvavimo funkcija"],
            "correctAnswer": "Galimas sprendinys",
            "explanation": "Chromosoma - tai galimas sprendinys (kodavimas parametrų)"
          },
          {
            "id": 157,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Crossover genetiniuose algoritmuose yra:",
            "options": ["Atsitiktinis keitimas", "Dviejų sprendinių sujungimas", "Sprendinio šalinimas", "Sprendinio vertinimas"],
            "correctAnswer": "Dviejų sprendinių sujungimas",
            "explanation": "Crossover (kryžminimas) - naujo sprendinio kūrimas iš dviejų tėvų"
          },
          {
            "id": 158,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Mutation genetiniuose algoritmuose padeda:",
            "options": ["Pagreitinti konvergavimą", "Išvengti local minima", "Sumažinti populiaciją", "Padidinti fitness"],
            "correctAnswer": "Išvengti local minima",
            "explanation": "Mutation (mutacija) prideda įvairovę ir padeda išvengti local minima"
          },
          {
            "id": 159,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "K-means yra:",
            "options": ["Prižiūrimo mokymosi algoritmas", "Neprižiūrimo mokymosi algoritmas", "Reinforcement learning", "Semi-supervised"],
            "correctAnswer": "Neprižiūrimo mokymosi algoritmas",
            "explanation": "K-means yra unsupervised learning (klasterizavimo) algoritmas"
          },
          {
            "id": 160,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "K-means reikalauja iš anksto nurodyti:",
            "options": ["Learning rate", "Klasterių skaičių K", "Epoch skaičių", "Batch size"],
            "correctAnswer": "Klasterių skaičių K",
            "explanation": "K-means reikalauja iš anksto nurodyti klasterių skaičių K"
          },
          {
            "id": 161,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "K-means naudoja atstumą:",
            "options": ["Manhattan", "Euclidean (paprastai)", "Cosine", "Hamming"],
            "correctAnswer": "Euclidean (paprastai)",
            "explanation": "K-means paprastai naudoja Euclidean atstumą"
          },
          {
            "id": 162,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Elbow Method naudojamas:",
            "options": ["Rasti optimal learning rate", "Rasti optimal K klasterių skaičių", "Rasti optimal epoch skaičių", "Rasti optimal batch size"],
            "correctAnswer": "Rasti optimal K klasterių skaičių",
            "explanation": "Elbow Method padeda rasti optimalų K klasterių skaičių"
          },
          {
            "id": 163,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "PCA tikslas:",
            "options": ["Padidinti dimensionalumą", "Sumažinti dimensionalumą", "Klasifikuoti duomenis", "Generuoti duomenis"],
            "correctAnswer": "Sumažinti dimensionalumą",
            "explanation": "PCA (Principal Component Analysis) mažina požymių skaičių"
          },
          {
            "id": 164,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "PCA naudoja:",
            "options": ["Entropiją", "Eigenvektorius ir eigenvertes", "Gradientus", "Attention"],
            "correctAnswer": "Eigenvektorius ir eigenvertes",
            "explanation": "PCA naudoja eigenvektorius (principal components) ir eigenvertes (explained variance)"
          },
          {
            "id": 165,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "PCA principal components yra:",
            "options": ["Originalūs požymiai", "Nauji požymiai (originalių kombinacijos)", "Duomenų rinkiniai", "Modeliai"],
            "correctAnswer": "Nauji požymiai (originalių kombinacijos)",
            "explanation": "Principal components - nauji požymiai, kurie yra originalių tiesinės kombinacijos"
          },
          {
            "id": 166,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "PCA reikalauja:",
            "options": ["Duomenų standartizavimo", "Duomenų normalizavimo", "A arba B (paprastai A)", "Nieko"],
            "correctAnswer": "A arba B (paprastai A)",
            "explanation": "PCA paprastai reikalauja standartizavimo (z-score), kad visi požymiai būtų vienodoje skalėje"
          },
          {
            "id": 167,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Autoencoders vs PCA:",
            "options": ["Autoencoders tiesiniai, PCA netiesiniai", "PCA tiesiniai, Autoencoders netiesiniai", "Abu tiesiniai", "Abu netiesiniai"],
            "correctAnswer": "PCA tiesiniai, Autoencoders netiesiniai",
            "explanation": "PCA atlieka tik tiesines transformacijas, Autoencoders gali netiesines"
          },
          {
            "id": 168,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Genetiniuose algoritmuose, Fitness Function:",
            "options": ["Generuoja naujus sprendinius", "Vertina sprendinio kokybę", "Šalina sprendinius", "Nieko nedaro"],
            "correctAnswer": "Vertina sprendinio kokybę",
            "explanation": "Fitness Function įvertina, kiek geras yra sprendinys"
          },
          {
            "id": 169,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Selection genetiniuose algoritmuose:",
            "options": ["Generuoja naujus sprendinius", "Pasirenka tinkamus sprendinius reprodukcijai", "Šalina visus sprendinius", "Moko modelį"],
            "correctAnswer": "Pasirenka tinkamus sprendinius reprodukcijai",
            "explanation": "Selection pasirenka geresnius sprendinius (aukštesnis fitness) reprodukcijai"
          },
          {
            "id": 170,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Tournament selection reiškia:",
            "options": ["Visi rungtyniauja", "Atsitiktinė grupė rungtyniauja", "Geriausi rungtyniauja", "Niekas nerungtyniauja"],
            "correctAnswer": "Atsitiktinė grupė rungtyniauja",
            "explanation": "Tournament selection - atsitiktinė grupė rungtyniauja, laimi su aukščiausiu fitness"
          },
          {
            "id": 171,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "K-means Assignment step:",
            "options": ["Skaičiuoja centroidus", "Priskiria taškus artimiausiam centroidui", "Šalina taškus", "Generuoja naujus taškus"],
            "correctAnswer": "Priskiria taškus artimiausiam centroidui",
            "explanation": "Assignment step - kiekvienas taškas priskiriamas artimiausiam centroidui"
          },
          {
            "id": 172,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "K-means Update step:",
            "options": ["Priskiria taškus", "Perskaičiuoja centroidus", "Šalina klasterius", "Nieko nedaro"],
            "correctAnswer": "Perskaičiuoja centroidus",
            "explanation": "Update step - perskaičiuojami centroidai kaip klasterio taškų vidurkis"
          },
          {
            "id": 173,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "Silhouette Score matuoja:",
            "options": ["Tik klasterių skaičių", "Klasterizavimo kokybę", "Tik atstumą", "Tašką skaičių"],
            "correctAnswer": "Klasterizavimo kokybę",
            "explanation": "Silhouette Score matuoja, kaip gerai taškai priskirti klasteriams"
          },
          {
            "id": 174,
            "chapter": "Paskaita 8: Kiti metodai",
            "category": "Kiti metodai",
            "question": "PCA explained variance rodo:",
            "options": ["Kiek informacijos prarasta", "Kiek informacijos išsaugota", "Požymių skaičių", "Duomenų kiekį"],
            "correctAnswer": "Kiek informacijos išsaugota",
            "explanation": "Explained variance rodo, kokia dalis informacijos (varianso) išsaugota"
          },
          {
            "id": 175,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "K-fold Cross-Validation, kai K=5, reiškia:",
            "options": ["5 kartus treniruoti modelį", "Naudoti 5% duomenų", "5 epochas", "5 batch'us"],
            "correctAnswer": "5 kartus treniruoti modelį",
            "explanation": "K=5 reiškia 5 kartus treniruoti modelį, kiekvieną kartą naudojant skirtingą fold validation"
          },
          {
            "id": 176,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Overfitting reiškia:",
            "options": ["Žemas training error, žemas test error", "Aukštas training error, aukštas test error", "Žemas training error, aukštas test error", "Aukštas training error, žemas test error"],
            "correctAnswer": "Žemas training error, aukštas test error",
            "explanation": "Overfitting: modelis per gerai įsimena training duomenis, bet blogai generalizuoja į test duomenis"
          },
          {
            "id": 177,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Underfitting reiškia:",
            "options": ["Modelis per paprastas", "Modelis per sudėtingas", "Modelis idealus", "Modelis neegzistuoja"],
            "correctAnswer": "Modelis per paprastas",
            "explanation": "Underfitting: modelis per paprastas - aukštas error ir training, ir test duomenyse"
          },
          {
            "id": 178,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Precision = TP / (TP + FP) matuoja:",
            "options": ["Iš visų positive prognozių, kiek tikrai positive", "Iš visų positive pavyzdžių, kiek aptikome", "Bendrą tikslumą", "Klaidų skaičių"],
            "correctAnswer": "Iš visų positive prognozių, kiek tikrai positive",
            "explanation": "Precision: iš visų prognozuotų positive, kiek tikrai buvo positive"
          },
          {
            "id": 179,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Recall = TP / (TP + FN) matuoja:",
            "options": ["Iš visų positive prognozių, kiek tikrai positive", "Iš visų tikrų positive, kiek aptikome", "Bendrą tikslumą", "Precision ir accuracy vidurkį"],
            "correctAnswer": "Iš visų tikrų positive, kiek aptikome",
            "explanation": "Recall: iš visų tikrų positive atvejų, kiek aptikome"
          },
          {
            "id": 180,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "F1-Score yra:",
            "options": ["Precision ir Recall suma", "Precision ir Recall harmonic mean", "Precision ir Recall skirtumas", "Tik Precision"],
            "correctAnswer": "Precision ir Recall harmonic mean",
            "explanation": "F1 = 2 × (Precision × Recall) / (Precision + Recall) - harmonic mean"
          },
          {
            "id": 181,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Confusion Matrix True Positive (TP) reiškia:",
            "options": ["Prognozavome Positive, buvo Positive", "Prognozavome Negative, buvo Positive", "Prognozavome Positive, buvo Negative", "Prognozavome Negative, buvo Negative"],
            "correctAnswer": "Prognozavome Positive, buvo Positive",
            "explanation": "True Positive: teisingai prognozavome positive klasę"
          },
          {
            "id": 182,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "False Positive (FP) reiškia:",
            "options": ["Prognozavome Positive, buvo Positive", "Prognozavome Negative, buvo Positive", "Prognozavome Positive, buvo Negative", "Prognozavome Negative, buvo Negative"],
            "correctAnswer": "Prognozavome Positive, buvo Negative",
            "explanation": "False Positive (Type I error): prognozavome positive, bet iš tikrųjų buvo negative"
          },
          {
            "id": 183,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "False Negative (FN) reiškia:",
            "options": ["Prognozavome Positive, buvo Positive", "Prognozavome Negative, buvo Positive", "Prognozavome Positive, buvo Negative", "Prognozavome Negative, buvo Negative"],
            "correctAnswer": "Prognozavome Negative, buvo Positive",
            "explanation": "False Negative (Type II error): prognozavome negative, bet iš tikrųjų buvo positive"
          },
          {
            "id": 184,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Accuracy = ?",
            "options": ["TP / (TP + FP)", "(TP + TN) / (TP + TN + FP + FN)", "TP / (TP + FN)", "2 × (Precision × Recall) / (Precision + Recall)"],
            "correctAnswer": "(TP + TN) / (TP + TN + FP + FN)",
            "explanation": "Accuracy = teisingų prognozių dalis iš visų prognozių"
          },
          {
            "id": 185,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Imbalanced dataset geriau naudoti:",
            "options": ["Accuracy", "F1-Score", "Tik training error", "Nieko"],
            "correctAnswer": "F1-Score",
            "explanation": "Imbalanced dataset accuracy gali būti klaidingas, geriau naudoti F1-Score"
          },
          {
            "id": 186,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Bias-Variance Tradeoff: aukštas bias reiškia:",
            "options": ["Overfitting", "Underfitting", "Idealus modelis", "Nėra problemos"],
            "correctAnswer": "Underfitting",
            "explanation": "Aukštas bias → underfitting (modelis per paprastas)"
          },
          {
            "id": 187,
            "chapter": "Papildomos temos",
            "category": "Papildomos temos",
            "question": "Bias-Variance Tradeoff: aukšta variance reiškia:",
            "options": ["Overfitting", "Underfitting", "Idealus modelis", "Nėra problemos"],
            "correctAnswer": "Overfitting",
            "explanation": "Aukšta variance → overfitting (modelis per sudėtingas)"
          }
        ]