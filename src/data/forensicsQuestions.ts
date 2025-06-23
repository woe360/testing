export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  chapter: string;
}

export const forensicsQuestions: Question[] = [
  // I SKYRIUS: IT EKSPERTAI IR SPECIALISTAI (Klausimai 1-3)
  {
    id: 1,
    question: "Pagal Lietuvos Respublikos BPK 84 straipsnį, kas yra ekspertas?",
    options: [
      "Bet kuris IT specialistas",
      "Asmuo, turintis reikiamų specialių žinių ir įrašytas į Lietuvos Respublikos ekspertų sąrašą",
      "Tik universiteto dėstytojas",
      "Policijos darbuotojas"
    ],
    correctAnswer: "Asmuo, turintis reikiamų specialių žinių ir įrašytas į Lietuvos Respublikos ekspertų sąrašą",
    chapter: "IT ekspertai ir specialistai"
  },
  {
    id: 2,
    question: "Kuri iš šių sričių NĖRA paminėta kaip IT ekspertų specializacija?",
    options: [
      "Tinklų saugos specialistai",
      "Mobiliųjų įrenginių specialistai",
      "Automobilinių sistemų specialistai",
      "Maisto saugos specialistai"
    ],
    correctAnswer: "Maisto saugos specialistai",
    chapter: "IT ekspertai ir specialistai"
  },
  {
    id: 3,
    question: "Pagal Lietuvos Respublikos BPK 89 straipsnį, specialistas yra:",
    options: [
      "Tik sertifikuotas ekspertas",
      "Reikiamų specialių žinių ir įgūdžių turintis asmuo",
      "Universiteto absolventas",
      "Teismo darbuotojas"
    ],
    correctAnswer: "Reikiamų specialių žinių ir įgūdžių turintis asmuo",
    chapter: "IT ekspertai ir specialistai"
  },
  // Pabaiga I skyriaus

  // II SKYRIUS: EKSPERTŲ TEISĖS IR PAREIGOS (Klausimai 4-6)
  {
    id: 4,
    question: "Ar teismo ekspertas turi teisę savarankiškai pasirinkti atliekamų tyrimų būdus?",
    options: [
      "Ne, privalo naudoti tik nurodytus metodus",
      "Taip, turi tokią teisę",
      "Tik su teismo leidimu",
      "Tik konsultuodamasis su kolegomis"
    ],
    correctAnswer: "Taip, turi tokią teisę",
    chapter: "Ekspertų teisės ir pareigos"
  },
  {
    id: 5,
    question: "Už ką teismo ekspertas atsako pagal Lietuvos Respublikos baudžiamojo kodekso 235 straipsnį?",
    options: [
      "Už tyrimų kokybę",
      "Už melagingos išvados pateikimą",
      "Už objektų praradimą",
      "Už vėlavimą"
    ],
    correctAnswer: "Už melagingos išvados pateikimą",
    chapter: "Ekspertų teisės ir pareigos"
  },
  {
    id: 6,
    question: "Ar teismo ekspertizės įstaigos ekspertas gali verstis privačia teismo eksperto veikla?",
    options: [
      "Taip, be apribojimų",
      "Ne, neturi tokios teisės",
      "Tik teismo leidimu",
      "Tik savaitgaliais"
    ],
    correctAnswer: "Ne, neturi tokios teisės",
    chapter: "Ekspertų teisės ir pareigos"
  },
  // Pabaiga II skyriaus

  // III SKYRIUS: IT TYRIMŲ OBJEKTAI IR TIPAI (Klausimai 7-10)
  {
    id: 7,
    question: "Koks yra mobiliųjų įrenginių tyrimų santykis 2024 metais?",
    options: [
      "21%",
      "45%",
      "68%",
      "79%"
    ],
    correctAnswer: "79%",
    chapter: "IT tyrimų objektai ir tipai"
  },
  {
    id: 8,
    question: "Kurie objektai priskiriami klasikiniams objektams?",
    options: [
      "Tik mobilieji telefonai",
      "Kompiuteriai, USB atmintinės, CD/DVD diskai",
      "Tik navigacijos įrenginiai",
      "Tik dronai"
    ],
    correctAnswer: "Kompiuteriai, USB atmintinės, CD/DVD diskai",
    chapter: "IT tyrimų objektai ir tipai"
  },
  {
    id: 9,
    question: "Kiek mobiliųjų įrenginių nuskaitymo tipų egzistuoja?",
    options: [
      "2 (loginis, fizinis)",
      "3 (loginis, failų sistemos nuskaitymas, fizinis)",
      "4 (loginis, fizinis, hibridinis, virtualus)",
      "5 (loginis, fizinis, hibridinis, virtualus, automatinis)"
    ],
    correctAnswer: "3 (loginis, failų sistemos nuskaitymas, fizinis)",
    chapter: "IT tyrimų objektai ir tipai"
  },
  {
    id: 10,
    question: "Kas yra netipinis tyrimo objektas?",
    options: [
      "Paprastas kompiuteris",
      "Sugadintas, pažeistas, šifruotas arba specialios paskirties įrenginys",
      "USB atmintinė",
      "CD diskas"
    ],
    correctAnswer: "Sugadintas, pažeistas, šifruotas arba specialios paskirties įrenginys",
    chapter: "IT tyrimų objektai ir tipai"
  },
  // Pabaiga III skyriaus

  // IV SKYRIUS: TYRIMO PROCEDŪROS (Klausimai 11-15)
  {
    id: 11,
    question: "Kokie yra keturi pagrindiniai IT tyrimo etapai?",
    options: [
      "Planavimas, vykdymas, kontrolė, ataskaita",
      "IT tyrimo objektų apžiūra ir identifikavimas, informacijos nuskaitymas, nuskaitytų duomenų analizė, duomenų pateikimas užsakovui",
      "Gavimas, registracija, tyrimas, grąžinimas",
      "Fotografavimas, kopijavimas, analizė, archyvavimas"
    ],
    correctAnswer: "IT tyrimo objektų apžiūra ir identifikavimas, informacijos nuskaitymas, nuskaitytų duomenų analizė, duomenų pateikimas užsakovui",
    chapter: "Tyrimo procedūros"
  },
  {
    id: 12,
    question: "Kiek žingsnių yra detalios apžiūros procese?",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correctAnswer: "7",
    chapter: "Tyrimo procedūros"
  },
  {
    id: 13,
    question: "Kas NĖRA būtina objektų apžiūros metu?",
    options: [
      "Objektų fotografavimas",
      "Serijinių numerių fiksavimas",
      "Objektų ardymas",
      "Duomenų iškart analizavimas"
    ],
    correctAnswer: "Duomenų iškart analizavimas",
    chapter: "Tyrimo procedūros"
  },
  {
    id: 14,
    question: "Kiek metodų naudojama informacijos pakeitimo blokavimui?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "3",
    chapter: "Tyrimo procedūros"
  },
  {
    id: 15,
    question: "Kas vykdoma automatinės duomenų analizės metu?",
    options: [
      "Tik failų skaičiavimas",
      "Automatinis ištrintų failų atstatymas, duomenų indeksavimas, maišos funkcijų skaičiavimas",
      "Tik fotografijų peržiūra",
      "Tik tekstinių failų analizė"
    ],
    correctAnswer: "Automatinis ištrintų failų atstatymas, duomenų indeksavimas, maišos funkcijų skaičiavimas",
    chapter: "Tyrimo procedūros"
  },
  // Pabaiga IV skyriaus

  // V SKYRIUS: DUOMENŲ NUSKAITYMAS IR KOPIJAVIMAS (Klausimai 16-20)
  {
    id: 16,
    question: "Koks yra DD (RAW) kopijos formatas?",
    options: [
      "Suspausti duomenys su metaduomenimis",
      "Neskaidyta identiška informacija be kompresijos",
      "Šifruoti duomenys",
      "Tik aktyvūs failai"
    ],
    correctAnswer: "Neskaidyta identiška informacija be kompresijos",
    chapter: "Duomenų nuskaitymas ir kopijavimas"
  },
  {
    id: 17,
    question: "Kas yra E01 kopijos formatas?",
    options: [
      "Tik nesuspausti duomenys",
      "Kopija, kuri gali būti skaidoma, spaudžiama ir koduojama",
      "Tik aktyvūs failai",
      "Virtualios mašinos failas"
    ],
    correctAnswer: "Kopija, kuri gali būti skaidoma, spaudžiama ir koduojama",
    chapter: "Duomenų nuskaitymas ir kopijavimas"
  },
  {
    id: 18,
    question: "Kokios maišos funkcijos naudojamos duomenų patikrai?",
    options: [
      "Tik MD5",
      "MD5, SHA-1, SHA-256",
      "Tik SHA-256",
      "CRC32, MD4"
    ],
    correctAnswer: "MD5, SHA-1, SHA-256",
    chapter: "Duomenų nuskaitymas ir kopijavimas"
  },
  {
    id: 19,
    question: "Kokie duomenų kopijavimo metodai egzistuoja klasikiniams diskams?",
    options: [
      "Tik loginis",
      "Loginis ir fizinis",
      "Tik fizinis",
      "Virtualus ir realus"
    ],
    correctAnswer: "Loginis ir fizinis",
    chapter: "Duomenų nuskaitymas ir kopijavimas"
  },
  {
    id: 20,
    question: "Kokia yra tinkama procedūra pradedant skaitmeninės informacijos tyrimą?",
    options: [
      "Iš karto analizuoti originalų diską",
      "Ištrinti nereikalingus failus",
      "Sukurti duomenų kopiją (image) ir tikrinti jos vientisumą",
      "Formatuoti diską"
    ],
    correctAnswer: "Sukurti duomenų kopiją (image) ir tikrinti jos vientisumą",
    chapter: "Duomenų nuskaitymas ir kopijavimas"
  },
  // Pabaiga V skyriaus

  // VI SKYRIUS: TECHNIKINIAI ASPEKTAI (Klausimai 21-30)
  {
    id: 21,
    question: "Koks yra standartinis sektoriaus dydis tradiciniuose standuosiuose diskuose?",
    options: [
      "256 baitai",
      "1024 baitai",
      "512 baitų",
      "2048 baitai"
    ],
    correctAnswer: "512 baitų",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 22,
    question: "Ką reiškia BIOS \"Secure Boot\" funkcija?",
    options: [
      "Slaptažodžio nustatymą",
      "Duomenų šifravimą",
      "Tinklo apsaugą",
      "Sistemos krovos saugumą"
    ],
    correctAnswer: "Sistemos krovos saugumą",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 23,
    question: "Ką reiškia \"Little Endian\" duomenų eiliškumas?",
    options: [
      "Baitai saugomi iš kairės į dešinę",
      "Baitai saugomi atsitiktine tvarka",
      "Baitai saugomi pagal didumą",
      "Baitai saugomi iš dešinės į kairę (mažiausiai reikšmingas baitas pirmas)"
    ],
    correctAnswer: "Baitai saugomi iš dešinės į kairę (mažiausiai reikšmingas baitas pirmas)",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 24,
    question: "Koks šešioliktainis skaičius atitinka dešimtainį skaičių 15?",
    options: [
      "E",
      "G",
      "F",
      "10"
    ],
    correctAnswer: "F",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 25,
    question: "Koks yra JPEG failų antraštės (header) pradžios žymuo?",
    options: [
      "\\x89\\x50\\x4E\\x47",
      "\\xFF\\xD8\\xFF",
      "\\x25\\x50\\x44\\x46",
      "\\x50\\x4B\\x03\\x04"
    ],
    correctAnswer: "\\xFF\\xD8\\xFF",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 26,
    question: "Ką reiškia metaduomenys?",
    options: [
      "Šifruoti duomenys",
      "Ištrinti duomenys",
      "Sistemos duomenys",
      "Duomenys apie duomenis"
    ],
    correctAnswer: "Duomenys apie duomenis",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 27,
    question: "Kuris iš šių yra Unix laiko formatas?",
    options: [
      "32 bitų skaičius, rodantis sekundes nuo 1970-01-01",
      "16 bitų skaičius",
      "64 bitų skaičius",
      "ASCII tekstas"
    ],
    correctAnswer: "32 bitų skaičius, rodantis sekundes nuo 1970-01-01",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 28,
    question: "Kokia yra pagrindinė FTK Imager programos funkcija?",
    options: [
      "Duomenų šifravimas",
      "Failų suspaudimas",
      "Duomenų kopijavimas ir analizė",
      "Tinklo stebėjimas"
    ],
    correctAnswer: "Duomenų kopijavimas ir analizė",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 29,
    question: "Kas yra sektorius standžiajame diske?",
    options: [
      "Mechaninis komponentas",
      "Duomenų šifravimo metodas",
      "Failų sistemos tipas",
      "Mažiausias fizinio disko adresuojamas vienetas"
    ],
    correctAnswer: "Mažiausias fizinio disko adresuojamas vienetas",
    chapter: "Technikiniai aspektai"
  },
  {
    id: 30,
    question: "Kuo skiriasi CHS ir LBA adresavimo metodai?",
    options: [
      "CHS greitesnis už LBA",
      "CHS naudoja fizininius parametrus, LBA - loginius blokus",
      "LBA senesnė technologija",
      "Jie yra identiški"
    ],
    correctAnswer: "CHS naudoja fizininius parametrus, LBA - loginius blokus",
    chapter: "Technikiniai aspektai"
  },
  // Pabaiga VI skyriaus

  // VII SKYRIUS: PARTICIJOS IR SKAIDINIAI (Klausimai 31-50)
  {
    id: 31,
    question: "Koks yra standartinis skaidinio klasterio dydis?",
    options: [
      "4 sektoriai (2048 baitų)",
      "8 sektoriai (4096 baitų)",
      "16 sektorių (8192 baitų)",
      "32 sektoriai (16384 baitų)"
    ],
    correctAnswer: "8 sektoriai (4096 baitų)",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 32,
    question: "Kas yra \"slack space\"?",
    options: [
      "Visas skaidinio dydis",
      "Naudojama disko vieta",
      "Laisva sritis klasteryje, kuri lieka po failo įrašymo",
      "Ištrinta informacija"
    ],
    correctAnswer: "Laisva sritis klasteryje, kuri lieka po failo įrašymo",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 33,
    question: "Kur yra saugomas MBR (Master Boot Record)?",
    options: [
      "Pirmame fizinio disko sektoriuje (PS 0)",
      "Antroje disko sektoriuje (PS 1)",
      "Paskutiniame disko sektoriuje",
      "Bet kuriame disko sektoriuje"
    ],
    correctAnswer: "Pirmame fizinio disko sektoriuje (PS 0)",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 34,
    question: "Kiek pirminių particijų galima sukurti naudojant MBR sistemą?",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    correctAnswer: "4",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 35,
    question: "Koks yra NTFS skaidinio tipo kodas MBR lentelėje?",
    options: [
      "0x05",
      "0x06",
      "0x07",
      "0x0B"
    ],
    correctAnswer: "0x07",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 36,
    question: "Kokia yra MBR poraštė (pabaigos parašas)?",
    options: [
      "0x55 0xAA",
      "0xAA 0x55",
      "0xFF 0xFF",
      "0x00 0x00"
    ],
    correctAnswer: "0x55 0xAA",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 37,
    question: "Kiek skaidinių palaiko GPT sistema?",
    options: [
      "4",
      "24",
      "128",
      "256"
    ],
    correctAnswer: "128",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 38,
    question: "Koks yra GPT antraštės parašas?",
    options: [
      "\"GPT PART\"",
      "\"EFI PART\"",
      "\"GUID PART\"",
      "\"UEFI PART\""
    ],
    correctAnswer: "\"EFI PART\"",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 39,
    question: "Kiek baitų užima vienas GPT skaidinio įrašas?",
    options: [
      "64 baitai",
      "96 baitai",
      "128 baitai",
      "256 baitai"
    ],
    correctAnswer: "128 baitai",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 40,
    question: "Volume Boot Record (VBR) yra:",
    options: [
      "Paskutinis sektorius suformatuotos particijos",
      "Pirmas sektorius suformatuotos particijos",
      "Antras sektorius standaus disko",
      "Paskutinis standaus disko sektorius"
    ],
    correctAnswer: "Pirmas sektorius suformatuotos particijos",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 41,
    question: "FAT VBR informacijoje \"Bytes per Sector\" standartinė reikšmė yra:",
    options: [
      "256",
      "512",
      "1024",
      "2048"
    ],
    correctAnswer: "512",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 42,
    question: "Kas yra \"Advanced Format Drives\" ypatybė?",
    options: [
      "Greitesnis duomenų skaitymas",
      "Mažesnis energijos suvartojimas",
      "Sektoriaus dydis 4096 baitų vietoj 512",
      "Didesnis patikimumas"
    ],
    correctAnswer: "Sektoriaus dydis 4096 baitų vietoj 512",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 43,
    question: "Kokia yra pagrindinė UEFI saugumo technologija?",
    options: [
      "BitLocker",
      "Secure Boot",
      "TPM",
      "Windows Defender"
    ],
    correctAnswer: "Secure Boot",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 44,
    question: "Kur GPT sistemoje saugomos atsarginės kopijos svarbių duomenų struktūrų?",
    options: [
      "Disko pradžioje",
      "Disko viduryje",
      "Disko gale",
      "Atskirame faile"
    ],
    correctAnswer: "Disko gale",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 45,
    question: "Kokia Autopsy programos paskirtis?",
    options: [
      "Duomenų šifravimas",
      "Sistemos atkūrimas",
      "Skaitmeninė kriminalistinė analizė",
      "Antivirusinė apsauga"
    ],
    correctAnswer: "Skaitmeninė kriminalistinė analizė",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 46,
    question: "Kas yra duomenų sterilizacija?",
    options: [
      "Duomenų apsauga nuo virusų",
      "Duomenų perrašymas nuliais ir vienetais",
      "Duomenų šifravimas",
      "Duomenų atsarginė kopija"
    ],
    correctAnswer: "Duomenų perrašymas nuliais ir vienetais",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 47,
    question: "Kokia biblioteka naudojama Autopsy programoje failų tipų identifikavimui?",
    options: [
      "OpenCV",
      "ImageMagick",
      "Tika",
      "FFmpeg"
    ],
    correctAnswer: "Tika",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 48,
    question: "Kas yra \"bootkit\" virusai?",
    options: [
      "Virusai, kurie paveiks tik UEFI sistemą",
      "Kenkėjiška programinė įranga MBR srityje",
      "Antivirus programa",
      "Windows atnaujinimas"
    ],
    correctAnswer: "Kenkėjiška programinė įranga MBR srityje",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 49,
    question: "Kuo skiriasi greitas (Quick) formatavimas nuo pilno formatavimo?",
    options: [
      "Greitas formatavimas ištryna duomenis, pilnas - ne",
      "Greitas formatavimas neištryna duomenų, pilnas ištryna",
      "Jokio skirtumo nėra",
      "Greitas formatavimas greitesnis tik dėl algoritmo"
    ],
    correctAnswer: "Greitas formatavimas neištryna duomenų, pilnas ištryna",
    chapter: "Particijos ir skaidiniai"
  },
  {
    id: 50,
    question: "Ką nurodo pagrindinė particijų lentelė?",
    options: [
      "Tik skaidinio dydį",
      "Tik skaidinio vietą",
      "Skaidinio dydį, vietą, tipą ir kuriame skaidinyje yra operacinė sistema",
      "Tik failo sistemos tipą"
    ],
    correctAnswer: "Skaidinio dydį, vietą, tipą ir kuriame skaidinyje yra operacinė sistema",
    chapter: "Particijos ir skaidiniai"
  },
  // Pabaiga VII skyriaus

  // VIII SKYRIUS: FAT FAILŲ SISTEMA (Klausimai 51-70)
  {
    id: 51,
    question: "FAT reiškia:",
    options: [
      "File Access Table",
      "File Allocation Table",
      "Fast Access Table",
      "File Archive Table"
    ],
    correctAnswer: "File Allocation Table",
    chapter: "FAT failų sistema"
  },
  {
    id: 52,
    question: "FAT failų sistemą sudaro:",
    options: [
      "VBR, FAT1, duomenų sritis",
      "VBR, FAT1, FAT2, Root Directory, duomenų sritis",
      "Tik FAT1 ir FAT2",
      "Tik duomenų sritis"
    ],
    correctAnswer: "VBR, FAT1, FAT2, Root Directory, duomenų sritis",
    chapter: "FAT failų sistema"
  },
  {
    id: 53,
    question: "FAT 32 sistemoje šakninis katalogas yra:",
    options: [
      "Atskiroje srityje po FAT lentelių",
      "Duomenų srityje",
      "VBR sektoriuje",
      "FAT lentelėse"
    ],
    correctAnswer: "Duomenų srityje",
    chapter: "FAT failų sistema"
  },
  {
    id: 54,
    question: "Klasteris yra:",
    options: [
      "Didžiausias adresatų vienetas",
      "Mažiausias adresatų vienetas",
      "Vidutinis adresatų vienetas",
      "Nėra adresatų vienetas"
    ],
    correctAnswer: "Mažiausias adresatų vienetas",
    chapter: "FAT failų sistema"
  },
  {
    id: 55,
    question: "Katalogų įrašai yra:",
    options: [
      "16 baitų ilgio",
      "32 baitų ilgio",
      "64 baitų ilgio",
      "128 baitų ilgio"
    ],
    correctAnswer: "32 baitų ilgio",
    chapter: "FAT failų sistema"
  },
  {
    id: 56,
    question: "Ištrintas failas FAT sistemoje žymimas:",
    options: [
      "0x00",
      "0xE5",
      "0xFF",
      "0x01"
    ],
    correctAnswer: "0xE5",
    chapter: "FAT failų sistema"
  },
  {
    id: 57,
    question: "Failo pavadinimui FAT sistemoje leidžiama naudoti:",
    options: [
      "Nuo vieno iki 11 simbolių",
      "Nuo vieno iki aštuonių simbolių",
      "Nuo vieno iki 16 simbolių",
      "Neribotą simbolių skaičių"
    ],
    correctAnswer: "Nuo vieno iki aštuonių simbolių",
    chapter: "FAT failų sistema"
  },
  {
    id: 58,
    question: "FAT failo plėtiniui priskiriami:",
    options: [
      "Du simboliai",
      "Trys simboliai",
      "Keturi simboliai",
      "Penki simboliai"
    ],
    correctAnswer: "Trys simboliai",
    chapter: "FAT failų sistema"
  },
  {
    id: 59,
    question: "LFN įrašas visada turi atributo reikšmę:",
    options: [
      "0x0E",
      "0x0F",
      "0x10",
      "0x20"
    ],
    correctAnswer: "0x0F",
    chapter: "FAT failų sistema"
  },
  {
    id: 60,
    question: "FAT atributo baitas \"Archive ON\" reikšmė yra:",
    options: [
      "0x10",
      "0x20",
      "0x01",
      "0x02"
    ],
    correctAnswer: "0x20",
    chapter: "FAT failų sistema"
  },
  {
    id: 61,
    question: "FAT 16 sistemoje \"End of File\" žymimas:",
    options: [
      "0xFFF7",
      "0xFFF8 arba 0xFFFF",
      "0x0000",
      "0xFFFE"
    ],
    correctAnswer: "0xFFF8 arba 0xFFFF",
    chapter: "FAT failų sistema"
  },
  {
    id: 62,
    question: "FAT 32 sistemoje \"Bad Cluster\" žymimas:",
    options: [
      "0xFFFFFFF8",
      "0xFFFFFFF7",
      "0x00000000",
      "0xFFFFFFEF"
    ],
    correctAnswer: "0xFFFFFFF7",
    chapter: "FAT failų sistema"
  },
  {
    id: 63,
    question: "Operacinė sistema sustoja skaityti katalogo įrašus, kai pasiekia įrašą prasidedantį:",
    options: [
      "0xFF",
      "0x00",
      "0xE5",
      "0x01"
    ],
    correctAnswer: "0x00",
    chapter: "FAT failų sistema"
  },
  {
    id: 64,
    question: "FAT duomenų srityje gali būti:",
    options: [
      "Tik failai",
      "Tik direktorijos",
      "Failai ir direktorijos",
      "Tik metaduomenys"
    ],
    correctAnswer: "Failai ir direktorijos",
    chapter: "FAT failų sistema"
  },
  {
    id: 65,
    question: "Tuščias katalogo įrašas žymimas:",
    options: [
      "0xE5",
      "0x00",
      "0xFF",
      "0x01"
    ],
    correctAnswer: "0x00",
    chapter: "FAT failų sistema"
  },
  {
    id: 66,
    question: "Dažnai klasteris yra:",
    options: [
      "2048 baitų dydžio",
      "4096 baitų dydžio",
      "8192 baitų dydžio",
      "1024 baitų dydžio"
    ],
    correctAnswer: "4096 baitų dydžio",
    chapter: "FAT failų sistema"
  },
  {
    id: 67,
    question: "Ką reiškia \"GrayKey\" įranga?",
    options: [
      "Duomenų naikinimo įrankis",
      "Speciąlą aparatinę ir programinę įrangą mobiliųjų telefonų slaptažodžių spargdinimui",
      "Tinklų analizės įrankis",
      "Failų atkūrimo programa"
    ],
    correctAnswer: "Speciąlą aparatinę ir programinę įrangą mobiliųjų telefonų slaptažodžių spargdinimui",
    chapter: "FAT failų sistema"
  },
  {
    id: 68,
    question: "Koks buvo neišspręstų klausimų skaičius 2023 metais?",
    options: [
      "116",
      "152",
      "226",
      "403"
    ],
    correctAnswer: "226",
    chapter: "FAT failų sistema"
  },
  {
    id: 69,
    question: "Kas NĖRA duomenų blokavimo metodas?",
    options: [
      "Fizinis blokavimas",
      "Blokavimas naudojant programinę įrangą",
      "Blokavimas naudojant specialius įrenginius",
      "Virtualus blokavimas"
    ],
    correctAnswer: "Virtualus blokavimas",
    chapter: "FAT failų sistema"
  },
  {
    id: 70,
    question: "Kurie gamintojai yra paminėti kaip blokatorių gamintojai?",
    options: [
      "Samsung, Apple, Google",
      "Digital Intelligence, LogiCube, WiebeTech (CRU)",
      "Microsoft, Intel, AMD",
      "Cisco, IBM, Oracle"
    ],
    correctAnswer: "Digital Intelligence, LogiCube, WiebeTech (CRU)",
    chapter: "FAT failų sistema"
  },
  // Pabaiga VIII skyriaus

  // IX SKYRIUS: NTFS FAILŲ SISTEMA (Klausimai 71-100)
  {
    id: 71,
    question: "NTFS reiškia:",
    options: [
      "New Technology File System",
      "Network Technology File System",
      "Next Technology File System",
      "Native Technology File System"
    ],
    correctAnswer: "New Technology File System",
    chapter: "NTFS failų sistema"
  },
  {
    id: 72,
    question: "NTFS sistemoje visi duomenys saugomi:",
    options: [
      "Katalogų įrašuose",
      "Failuose",
      "Atributuose",
      "Klasteriuose"
    ],
    correctAnswer: "Failuose",
    chapter: "NTFS failų sistema"
  },
  {
    id: 73,
    question: "MFT reiškia:",
    options: [
      "Master File Table",
      "Main File Table",
      "Multiple File Table",
      "Memory File Table"
    ],
    correctAnswer: "Master File Table",
    chapter: "NTFS failų sistema"
  },
  {
    id: 74,
    question: "Kiekvienas failo įrašas NTFS sistemoje yra:",
    options: [
      "512 baitų ilgio",
      "1024 baitų ilgio",
      "2048 baitų ilgio",
      "4096 baitų ilgio"
    ],
    correctAnswer: "1024 baitų ilgio",
    chapter: "NTFS failų sistema"
  },
  {
    id: 75,
    question: "Kiekviena failo įrašo antraštė prasideda:",
    options: [
      "\"NTFS\"",
      "\"FILE\"",
      "\"DATA\"",
      "\"ATTR\""
    ],
    correctAnswer: "\"FILE\"",
    chapter: "NTFS failų sistema"
  },
  {
    id: 76,
    question: "NTFS v1.x antraštės ilgis yra:",
    options: [
      "48 baitai",
      "56 baitai",
      "64 baitai",
      "32 baitai"
    ],
    correctAnswer: "48 baitai",
    chapter: "NTFS failų sistema"
  },
  {
    id: 77,
    question: "NTFS v3.x antraštės ilgis yra:",
    options: [
      "48 baitai",
      "56 baitai",
      "64 baitai",
      "32 baitai"
    ],
    correctAnswer: "56 baitai",
    chapter: "NTFS failų sistema"
  },
  {
    id: 78,
    question: "Kiekvienas failo atributas prasideda:",
    options: [
      "8 baitų ilgio antrašte",
      "16 baitų ilgio antrašte",
      "32 baitų ilgio antrašte",
      "64 baitų ilgio antrašte"
    ],
    correctAnswer: "16 baitų ilgio antrašte",
    chapter: "NTFS failų sistema"
  },
  {
    id: 79,
    question: "\"Resident Flag\" reikšmė 0x00 reiškia:",
    options: [
      "Atributo turinys yra kitoje vietoje",
      "Atributo turinys yra pačiame atribute",
      "Atributas yra sugadintas",
      "Atributas yra šifruotas"
    ],
    correctAnswer: "Atributo turinys yra pačiame atribute",
    chapter: "NTFS failų sistema"
  },
  {
    id: 80,
    question: "$Standard_Information atributo identifikatorius yra:",
    options: [
      "0x10 00 00 00",
      "0x30 00 00 00",
      "0x80 00 00 00",
      "0x90 00 00 00"
    ],
    correctAnswer: "0x10 00 00 00",
    chapter: "NTFS failų sistema"
  },
  {
    id: 81,
    question: "$File_Name atributo identifikatorius yra:",
    options: [
      "0x10 00 00 00",
      "0x30 00 00 00",
      "0x80 00 00 00",
      "0x90 00 00 00"
    ],
    correctAnswer: "0x30 00 00 00",
    chapter: "NTFS failų sistema"
  },
  {
    id: 82,
    question: "$Data atributo identifikatorius yra:",
    options: [
      "0x10 00 00 00",
      "0x30 00 00 00",
      "0x80 00 00 00",
      "0x90 00 00 00"
    ],
    correctAnswer: "0x80 00 00 00",
    chapter: "NTFS failų sistema"
  },
  {
    id: 83,
    question: "NTFS TimeStamps saugoми:",
    options: [
      "Unix formatu",
      "FILETIME formatu",
      "ISO formatu",
      "ASCII formatu"
    ],
    correctAnswer: "FILETIME formatu",
    chapter: "NTFS failų sistema"
  },
  {
    id: 84,
    question: "NTFS ne-rezidento atributo antraštėje \"Starting VCN\" reiškia:",
    options: [
      "Virtual Cluster Number",
      "Volume Cluster Number",
      "Variable Cluster Number",
      "Valid Cluster Number"
    ],
    correctAnswer: "Virtual Cluster Number",
    chapter: "NTFS failų sistema"
  },
  {
    id: 85,
    question: "Run List aprašo:",
    options: [
      "Failo pavadinimų sąrašą",
      "Duomenų fragmentų vietą",
      "Atributų sąrašą",
      "Katalogų struktūrą"
    ],
    correctAnswer: "Duomenų fragmentų vietą",
    chapter: "NTFS failų sistema"
  },
  {
    id: 86,
    question: "Pirmieji 26 MFT lentelės įrašai yra:",
    options: [
      "Vartotojų failai",
      "Metaduomenų failai",
      "Sistemos katalogai",
      "Laikini failai"
    ],
    correctAnswer: "Metaduomenų failai",
    chapter: "NTFS failų sistema"
  },
  {
    id: 87,
    question: "$MFT failo įrašo indeksas MFT lentelėje yra:",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: "0",
    chapter: "NTFS failų sistema"
  },
  {
    id: 88,
    question: "$LogFile failo įrašo indeksas MFT lentelėje yra:",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: "2",
    chapter: "NTFS failų sistema"
  },
  {
    id: 89,
    question: "NTFS failo tipo \"Read Only\" hex reikšmė yra:",
    options: [
      "0x0001",
      "0x0002",
      "0x0004",
      "0x0020"
    ],
    correctAnswer: "0x0001",
    chapter: "NTFS failų sistema"
  },
  {
    id: 90,
    question: "NTFS failo tipo \"Hidden\" hex reikšmė yra:",
    options: [
      "0x0001",
      "0x0002",
      "0x0004",
      "0x0020"
    ],
    correctAnswer: "0x0002",
    chapter: "NTFS failų sistema"
  },
  {
    id: 91,
    question: "Kas yra entropijos skaičiavimas?",
    options: [
      "Failų dydžio matavimas",
      "Duomenų sudėtingumo ir galimo šifravimo vertinimas",
      "Failų kiekio skaičiavimas",
      "Tik vaizdo failų analizė"
    ],
    correctAnswer: "Duomenų sudėtingumo ir galimo šifravimo vertinimas",
    chapter: "NTFS failų sistema"
  },
  {
    id: 92,
    question: "Koks procentas IT tyrimų užsakovų 2024 metais buvo ikiteisminio tyrimo įstaigos?",
    options: [
      "79%",
      "87%",
      "98%",
      "95%"
    ],
    correctAnswer: "98%",
    chapter: "NTFS failų sistema"
  },
  {
    id: 93,
    question: "Kada buvo įkurtas Skaitmeninės informacijos ekspertizių skyrius?",
    options: [
      "1958 metais",
      "1995 metais",
      "2005 metais",
      "2021 metais"
    ],
    correctAnswer: "1995 metais",
    chapter: "NTFS failų sistema"
  },
  {
    id: 94,
    question: "Kiek ekspertų dirba SIES (Skaitmeninės informacijos ekspertizių skyriuje)?",
    options: [
      "5",
      "8",
      "12",
      "15"
    ],
    correctAnswer: "12",
    chapter: "NTFS failų sistema"
  },
  {
    id: 95,
    question: "Sudegęs MRT buvo identifikuotas kaip:",
    options: [
      "iPhone 12",
      "Samsung Galaxy S21",
      "Samsung GT-S8500 Wave",
      "Nokia 3310"
    ],
    correctAnswer: "Samsung GT-S8500 Wave",
    chapter: "NTFS failų sistema"
  },
  {
    id: 96,
    question: "Koks PDF failų pabaigos žymuo (footer)?",
    options: [
      "%PDF",
      "END",
      "%EOF",
      "\\xFF\\xD9"
    ],
    correctAnswer: "%EOF",
    chapter: "NTFS failų sistema"
  },
  {
    id: 97,
    question: "Ką parodo EXIF duomenys nuotraukose?",
    options: [
      "Kameros nustatymus, datą, GPS koordinates",
      "Tik failo dydį",
      "Tik datos informaciją",
      "Failų sistemos duomenis"
    ],
    correctAnswer: "Kameros nustatymus, datą, GPS koordinates",
    chapter: "NTFS failų sistema"
  },
  {
    id: 98,
    question: "Koks yra pagrindinis USB su integruotu šifravimu privalumas?",
    options: [
      "Greitesnė duomenų perdava",
      "Didesnis dydis",
      "Mažesnė kaina",
      "Aparatinis 256-bit AES šifravimas"
    ],
    correctAnswer: "Aparatinis 256-bit AES šifravimas",
    chapter: "NTFS failų sistema"
  },
  {
    id: 99,
    question: "Kokia informacija saugoma sektoriaus antraštėje?",
    options: [
      "Sinchronizavimo bitai, adreso identifikavimas, klaidų žymos",
      "Tik duomenys",
      "Tik klaidų taisymo kodas",
      "Failų sistemos informacija"
    ],
    correctAnswer: "Sinchronizavimo bitai, adreso identifikavimas, klaidų žymos",
    chapter: "NTFS failų sistema"
  },
  {
    id: 100,
    question: "Koks yra ASCII lentelės simbolio \"A\" šešioliktainis kodas?",
    options: [
      "0x40",
      "0x42",
      "0x65",
      "0x41"
    ],
    correctAnswer: "0x41",
    chapter: "NTFS failų sistema"
  },
  // Pabaiga IX skyriaus

  // X SKYRIUS: WINDOWS OPERACINĖ SISTEMA (Klausimai 101-150)
  {
    id: 101,
    question: "Pagal 2024-2025 m. statistiką, kuri operacinė sistema dominuoja visame pasaulyje visuose įrenginiuose?",
    options: [
      "Windows",
      "Android",
      "iOS",
      "Linux"
    ],
    correctAnswer: "Android",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 102,
    question: "Kiek procentų sudaro Windows dalis desktop kompiuteriuose visame pasaulyje?",
    options: [
      "45,8%",
      "62,4%",
      "72,64%",
      "84,2%"
    ],
    correctAnswer: "72,64%",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 103,
    question: "Lietuvoje desktop kompiuteriuose Windows užima:",
    options: [
      "85,2%",
      "91,44%",
      "96,8%",
      "98,1%"
    ],
    correctAnswer: "91,44%",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 104,
    question: "Windows 11 dalis Lietuvos rinkoje sudaro:",
    options: [
      "24,29%",
      "34,29%",
      "44,29%",
      "54,29%"
    ],
    correctAnswer: "34,29%",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 105,
    question: "Kada buvo pristatyta pirmoji Windows operacinė sistema?",
    options: [
      "1983 metais",
      "1985 metais",
      "1987 metais",
      "1990 metais"
    ],
    correctAnswer: "1985 metais",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 106,
    question: "Kada buvo išleista Windows 11?",
    options: [
      "2020-10-05",
      "2021-10-05",
      "2022-10-05",
      "2023-10-05"
    ],
    correctAnswer: "2021-10-05",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 107,
    question: "Windows 10 buvo išleista:",
    options: [
      "2014 m. liepos 29 d.",
      "2015 m. liepos 29 d.",
      "2016 m. liepos 29 d.",
      "2017 m. liepos 29 d."
    ],
    correctAnswer: "2015 m. liepos 29 d.",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 108,
    question: "BitLocker naudoja šį šifravimo algoritmą:",
    options: [
      "RSA",
      "DES",
      "AES",
      "Blowfish"
    ],
    correctAnswer: "AES",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 109,
    question: "Numatytasis BitLocker šifravimo raktų ilgis yra:",
    options: [
      "64 bitai",
      "128 bitai",
      "256 bitai",
      "512 bitai"
    ],
    correctAnswer: "128 bitai",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 110,
    question: "TPM reiškia:",
    options: [
      "Trusted Platform Module",
      "Total Protection Management",
      "Technical Platform Monitor",
      "Trusted Protection Module"
    ],
    correctAnswer: "Trusted Platform Module",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 111,
    question: "Windows Hello palaiko šiuos biometrinius autentifikavimo būdus:",
    options: [
      "Veidą, rainelę, pirštų atspaudus",
      "Tik veidą ir pirštų atspaudus",
      "Tik pirštų atspaudus",
      "Tik veido atpažinimą"
    ],
    correctAnswer: "Veidą, rainelę, pirštų atspaudus",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 112,
    question: "Windows Hello veido atpažinimui reikalinga:",
    options: [
      "Bet kokia kamera",
      "HD kamera",
      "IR (infraraudonųjų spindulių) kamera",
      "4K kamera"
    ],
    correctAnswer: "IR (infraraudonųjų spindulių) kamera",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 113,
    question: "Windows XP vartotojo katalogas yra:",
    options: [
      "C:\\Users\\%UserName%",
      "C:\\Documents and Settings\\%UserName%",
      "C:\\Profiles\\%UserName%",
      "C:\\Home\\%UserName%"
    ],
    correctAnswer: "C:\\Documents and Settings\\%UserName%",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 114,
    question: "Windows 7/8/10 vartotojo katalogas yra:",
    options: [
      "C:\\Documents and Settings\\%UserName%",
      "C:\\Users\\%UserName%",
      "C:\\Profiles\\%UserName%",
      "C:\\Home\\%UserName%"
    ],
    correctAnswer: "C:\\Users\\%UserName%",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 115,
    question: "AppData kataloge yra šie pakatalogiai:",
    options: [
      "Local, Roaming",
      "Local, LocalLow, Roaming",
      "Temp, Local, Roaming",
      "Cache, Local, Roaming"
    ],
    correctAnswer: "Local, LocalLow, Roaming",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 116,
    question: "Windows registras yra:",
    options: [
      "Tekstinė duomenų bazė",
      "Hierarchinė duomenų bazė",
      "Reliacinė duomenų bazė",
      "NoSQL duomenų bazė"
    ],
    correctAnswer: "Hierarchinė duomenų bazė",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 117,
    question: "Registro hierarchijoje yra:",
    options: [
      "Failai ir katalogai",
      "Raktai ir vertės",
      "Lentelės ir stulpeliai",
      "Dokumentai ir laukai"
    ],
    correctAnswer: "Raktai ir vertės",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 118,
    question: "REG_DWORD yra:",
    options: [
      "16-bit skaičius",
      "32-bit skaičius",
      "64-bit skaičius",
      "128-bit skaičius"
    ],
    correctAnswer: "32-bit skaičius",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 119,
    question: "SAM registras saugo:",
    options: [
      "Programų informaciją",
      "Vartotojų informaciją",
      "Aparatūros informaciją",
      "Tinklo informaciją"
    ],
    correctAnswer: "Vartotojų informaciją",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 120,
    question: "RID (Relative Identifier) automatiškai sukurtų vartotojų yra:",
    options: [
      "Mažesnis nei 500",
      "Mažesnis nei 1000",
      "Didesnis nei 1000",
      "Lygus 1000"
    ],
    correctAnswer: "Didesnis nei 1000",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 121,
    question: "SYSTEM registre TimeZoneInformation saugo:",
    options: [
      "Sistemos laiką",
      "Laiko juostos informaciją",
      "Kalendorių",
      "Sinchronizavimo nustatymus"
    ],
    correctAnswer: "Laiko juostos informaciją",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 122,
    question: "FLE Standard Time atitinka:",
    options: [
      "London laiką",
      "Helsinkį, Kijevą, Rygą, Sofiją, Taliną, Vilnių",
      "Berlin laiką",
      "Maskvos laiką"
    ],
    correctAnswer: "Helsinkį, Kijevą, Rygą, Sofiją, Taliną, Vilnių",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 123,
    question: "Kurie du pagrindiniai failai sudaro vartotojo registro duomenis Windows sistemoje?",
    options: [
      "SYSTEM.DAT ir SOFTWARE.DAT",
      "NTUSER.DAT ir UsrClass.dat",
      "SAM.DAT ir SECURITY.DAT",
      "USER.DAT ir PROFILE.DAT"
    ],
    correctAnswer: "NTUSER.DAT ir UsrClass.dat",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 124,
    question: "Kuriame kataloge Windows XP sistemoje saugomi ištrinti failai?",
    options: [
      "C:\\$RECYCLE.BIN\\%SID%",
      "C:\\RECYCLER\\%SID%",
      "C:\\Recycle\\%UserName%",
      "C:\\Deleted\\%SID%"
    ],
    correctAnswer: "C:\\RECYCLER\\%SID%",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 125,
    question: "Windows 7/8/10 sistemose ištrinti failai saugomi kaip:",
    options: [
      "INFO2 failas",
      "Du failai: $Rxxxxxx ir $Ixxxxxx",
      "Thumbs.db failas",
      "NTUSER.DAT įrašai"
    ],
    correctAnswer: "Du failai: $Rxxxxxx ir $Ixxxxxx",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 126,
    question: "$Ixxxxxx failo dydis yra:",
    options: [
      "800 baitų",
      "544 baitai",
      "1024 baitai",
      "Kintamas dydis"
    ],
    correctAnswer: "544 baitai",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 127,
    question: "LNK failų antraštė prasideda baitais:",
    options: [
      "0x4C 0x00 0x00 0x00",
      "0x4E 0x4B 0x00 0x00",
      "0x4C 0x4E 0x4B 0x00",
      "0x00 0x4C 0x4E 0x4B"
    ],
    correctAnswer: "0x4C 0x00 0x00 0x00",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 128,
    question: "Event ID 41 sisteminiame žurnale reiškia:",
    options: [
      "Sėkmingą prisijungimą",
      "Staigų kompiuterio išjungimą",
      "Programos paleidimą",
      "Tinklo ryšio nutraukimą"
    ],
    correctAnswer: "Staigų kompiuterio išjungimą",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 129,
    question: "Windows 7/8/10 sistemose žurnalų failų plėtinys yra:",
    options: [
      ".evt",
      ".evtx",
      ".log",
      ".journal"
    ],
    correctAnswer: ".evtx",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 130,
    question: "Prefetch failai saugomi kataloge:",
    options: [
      "C:\\Windows\\Prefetch",
      "C:\\Windows\\System32\\Prefetch",
      "C:\\Users\\%UserName%\\Prefetch",
      "C:\\ProgramData\\Prefetch"
    ],
    correctAnswer: "C:\\Windows\\Prefetch",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 131,
    question: "Prefetch failo plėtinys yra:",
    options: [
      ".prf",
      ".pf",
      ".pre",
      ".fetch"
    ],
    correctAnswer: ".pf",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 132,
    question: "Windows 10 Prefetch failai yra:",
    options: [
      "Nesuspausti",
      "Suspausti",
      "Šifruoti",
      "Archyvuoti"
    ],
    correctAnswer: "Suspausti",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 133,
    question: "Windows XP sistemoje atvaizdų miniatiūros saugomos:",
    options: [
      "ThumbCache failuose",
      "Thumbs.db failuose",
      "Images.db failuose",
      "Pictures.cache failuose"
    ],
    correctAnswer: "Thumbs.db failuose",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 134,
    question: "Windows 7/8/10 sistemose ThumbCache failai saugomi:",
    options: [
      "Kiekviename kataloge su paveikslėliais",
      "C:\\Users\\[user]\\AppData\\Local\\Microsoft\\Windows\\Explorer",
      "C:\\Windows\\System32\\ThumbCache",
      "C:\\ProgramData\\Microsoft\\ThumbCache"
    ],
    correctAnswer: "C:\\Users\\[user]\\AppData\\Local\\Microsoft\\Windows\\Explorer",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 135,
    question: "Print Spooler failai saugomi kataloge:",
    options: [
      "C:\\Windows\\System32\\spool\\PRINTERS",
      "C:\\Windows\\Spool\\Printers",
      "C:\\ProgramData\\Spool\\Printers",
      "C:\\Users\\%UserName%\\Spool"
    ],
    correctAnswer: "C:\\Windows\\System32\\spool\\PRINTERS",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 136,
    question: "Kiekvienam spausdintam failui sukuriami:",
    options: [
      "Vienas .SPL failas",
      "Vienas .SHD failas",
      "Du failai: .SHD ir .SPL",
      "Trys failai: .SHD, .SPL ir .EMF"
    ],
    correctAnswer: "Du failai: .SHD ir .SPL",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 137,
    question: "FTK Imager programoje operatyviosios atminties kopijos sukūrimui naudojama funkcija:",
    options: [
      "Create Disk Image",
      "Memory Capture",
      "RAM Dump",
      "Memory Analysis"
    ],
    correctAnswer: "Memory Capture",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 138,
    question: "Operatyviojoje atmintyje galima rasti:",
    options: [
      "Tik vykdomų programų duomenis",
      "Tik sistemos informaciją",
      "Slaptažodžius, tinklalapių turinį ir kitus duomenis",
      "Tik tinklo informaciją"
    ],
    correctAnswer: "Slaptažodžius, tinklalapių turinį ir kitus duomenis",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 139,
    question: "Kas yra BitLocker?",
    options: [
      "Antivirusinė programa",
      "Windows disko šifravimo technologija",
      "Slaptažodžių generatorius",
      "Tinklo saugumo protokolas"
    ],
    correctAnswer: "Windows disko šifravimo technologija",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 140,
    question: "Windows 10 skatina naudoti:",
    options: [
      "Vietines paskyras",
      "Microsoft paskyras",
      "Domain paskyras",
      "Guest paskyras"
    ],
    correctAnswer: "Microsoft paskyras",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 141,
    question: "Paveikslėlio slaptažodis reikalauja:",
    options: [
      "2 gestų",
      "3 gestų",
      "4 gestų",
      "5 gestų"
    ],
    correctAnswer: "3 gestų",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 142,
    question: "Roaming kataloge saugomi:",
    options: [
      "Vietiniai duomenys",
      "Laikini failai",
      "Su vartotoju susiję duomenys",
      "Sisteminiai failai"
    ],
    correctAnswer: "Su vartotoju susiję duomenys",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 143,
    question: "Registro failų antraštėje yra:",
    options: [
      "\"regf\"",
      "\"hive\"",
      "\"reg\"",
      "\"key\""
    ],
    correctAnswer: "\"regf\"",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 144,
    question: "REG_SZ duomenų tipas reiškia:",
    options: [
      "Dvejetainius duomenis",
      "Skaičių",
      "Teksto eilutę",
      "Datą"
    ],
    correctAnswer: "Teksto eilutę",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 145,
    question: "F rakte saugoma:",
    options: [
      "Vartotojo vardas",
      "Slaptažodis",
      "Prisijungimo laikai ir skaičius",
      "Grupės narystė"
    ],
    correctAnswer: "Prisijungimo laikai ir skaičius",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 146,
    question: "SOFTWARE registre InstallDate reikšmė yra:",
    options: [
      "Tekstinis formatas",
      "Windows timestamp",
      "Unix timestamp (32-bit)",
      "ISO formatas"
    ],
    correctAnswer: "Unix timestamp (32-bit)",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 147,
    question: "W32Time Parameters Type=NTP reiškia:",
    options: [
      "Sinchronizavimas išjungtas",
      "Sinchronizavimas su NTP serveriu",
      "Vietinis laikas",
      "UTC laikas"
    ],
    correctAnswer: "Sinchronizavimas su NTP serveriu",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 148,
    question: "MountedDevices rakte saugoma informacija apie:",
    options: [
      "Programas",
      "Vartotojus",
      "Prijungtas laikmenas",
      "Tinklo ryšius"
    ],
    correctAnswer: "Prijungtas laikmenas",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 149,
    question: "TCPIP\\Parameters\\Interfaces saugo:",
    options: [
      "Programų sąrašą",
      "Tinklo nustatymų informaciją",
      "Vartotojų sąrašą",
      "Failų sistemą"
    ],
    correctAnswer: "Tinklo nustatymų informaciją",
    chapter: "Windows operacinė sistema"
  },
  {
    id: 150,
    question: "FirewallPolicy rakte galima rasti:",
    options: [
      "Antiviruso nustatymus",
      "Ugniasienės nustatymus",
      "Tinklo topologiją",
      "Prisijungimo žurnalą"
    ],
    correctAnswer: "Ugniasienės nustatymus",
    chapter: "Windows operacinė sistema"
  },
  // Pabaiga X skyriaus

  // XI SKYRIUS: LINUX FORENSICS (Klausimai 151-175)
  {
    id: 151,
    question: "Kokie du pagrindiniai Linux forensics požiūriai egzistuoja?",
    options: [
      "Linux kaip serverio sistema ir Linux kaip darbalaukio sistema",
      "Linux forensics distribucija ir Linux operacinė sistema kaip tiriamasis objektas",
      "Atviro kodo Linux ir komercinė Linux versija",
      "32-bitų ir 64-bitų Linux sistemos"
    ],
    correctAnswer: "Linux forensics distribucija ir Linux operacinė sistema kaip tiriamasis objektas",
    chapter: "Linux forensics"
  },
  {
    id: 152,
    question: "Kiek Linux distribucijų yra sukurta?",
    options: [
      "Daugiau nei 300",
      "Daugiau nei 500",
      "Daugiau nei 600",
      "Daugiau nei 1000"
    ],
    correctAnswer: "Daugiau nei 600",
    chapter: "Linux forensics"
  },
  {
    id: 153,
    question: "Kurios distribucijos priklauso Debian šeimai?",
    options: [
      "CentOS, Fedora, OpenSuse",
      "Ubuntu, BackTrack, Kali Linux, Knoppix",
      "Chrome OS, Gentoox",
      "Android, SalixOS"
    ],
    correctAnswer: "Ubuntu, BackTrack, Kali Linux, Knoppix",
    chapter: "Linux forensics"
  },
  {
    id: 154,
    question: "Kurios yra pagrindinės Linux forensics distribucijos?",
    options: [
      "Ubuntu, Debian, CentOS",
      "CAINE, PALADIN, KALI",
      "Fedora, OpenSuse, Mint",
      "BackTrack, Knoppix, Android"
    ],
    correctAnswer: "CAINE, PALADIN, KALI",
    chapter: "Linux forensics"
  },
  {
    id: 155,
    question: "Kas yra LUKS?",
    options: [
      "Linux Unified Key Setup-on-disk-format - Linux standžiojo disko šifravimo standartas",
      "Linux Universal Kernel System",
      "Linux User Key Service",
      "Linux Utility for Key Storage"
    ],
    correctAnswer: "Linux Unified Key Setup-on-disk-format - Linux standžiojo disko šifravimo standartas",
    chapter: "Linux forensics"
  },
  {
    id: 156,
    question: "Kuris šifravimo algoritmas yra labiausiai paplitęs LUKS sistemoje?",
    options: [
      "Serpent",
      "Twofish",
      "AES",
      "CAST-128"
    ],
    correctAnswer: "AES",
    chapter: "Linux forensics"
  },
  {
    id: 157,
    question: "Kokia yra teisinga Linux sistemos krovos seka?",
    options: [
      "BIOS → GRUB → MBR → Kernel → INIT",
      "MBR → BIOS → GRUB → Kernel → INIT",
      "BIOS → MBR → GRUB → Kernel → INIT",
      "GRUB → BIOS → MBR → Kernel → INIT"
    ],
    correctAnswer: "BIOS → MBR → GRUB → Kernel → INIT",
    chapter: "Linux forensics"
  },
  {
    id: 158,
    question: "Kurios yra pagrindinės Linux failų sistemos?",
    options: [
      "NTFS, FAT32, exFAT",
      "ext2, ext3, ext4, ReiserFS, JFS, XFS",
      "HFS+, APFS, ZFS",
      "UFS, FFS, LFS"
    ],
    correctAnswer: "ext2, ext3, ext4, ReiserFS, JFS, XFS",
    chapter: "Linux forensics"
  },
  {
    id: 159,
    question: "Kokį maksimalų failo dydį palaiko EXT4 failų sistema su standartiniu 4 KiB bloko dydžiu?",
    options: [
      "2 TB",
      "8 TB",
      "16 TB",
      "32 TB"
    ],
    correctAnswer: "16 TB",
    chapter: "Linux forensics"
  },
  {
    id: 160,
    question: "Kurioje direktorijoje saugomi sistemos konfigūracijos failai?",
    options: [
      "/bin",
      "/var",
      "/etc",
      "/usr"
    ],
    correctAnswer: "/etc",
    chapter: "Linux forensics"
  },
  {
    id: 161,
    question: "Kuriame faile galima rasti operacinės sistemos versijos informaciją?",
    options: [
      "/etc/version",
      "/etc/os-release",
      "/etc/system",
      "/etc/kernel"
    ],
    correctAnswer: "/etc/os-release",
    chapter: "Linux forensics"
  },
  {
    id: 162,
    question: "Kuriame faile saugoma informacija apie vartotojus, kuriems leista naudoti sudo komandą?",
    options: [
      "/etc/sudo",
      "/etc/sudoers",
      "/etc/sudo.conf",
      "/etc/users"
    ],
    correctAnswer: "/etc/sudoers",
    chapter: "Linux forensics"
  },
  {
    id: 163,
    question: "Kuris žurnalas yra vienas svarbiausių Linux sistemoje?",
    options: [
      "/var/log/messages",
      "/var/log/auth.log",
      "/var/log/syslog",
      "/var/log/kernel.log"
    ],
    correctAnswer: "/var/log/syslog",
    chapter: "Linux forensics"
  },
  {
    id: 164,
    question: "Kuris failas saugo informaciją apie vartotojus, kurie šiuo metu prisijungę prie sistemos?",
    options: [
      "/var/run/wtmp",
      "/var/run/btmp",
      "/var/run/utmp",
      "/var/log/lastlog"
    ],
    correctAnswer: "/var/run/utmp",
    chapter: "Linux forensics"
  },
  {
    id: 165,
    question: "Kuriame faile saugoma pagrindinė vartotojų paskyrų informacija?",
    options: [
      "/etc/users",
      "/etc/passwd",
      "/etc/accounts",
      "/etc/login"
    ],
    correctAnswer: "/etc/passwd",
    chapter: "Linux forensics"
  },
  {
    id: 166,
    question: "Kuriame faile Linux sistemoje saugomi užšifruoti vartotojų slaptažodžiai?",
    options: [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/security",
      "/etc/passwords"
    ],
    correctAnswer: "/etc/shadow",
    chapter: "Linux forensics"
  },
  {
    id: 167,
    question: "Kuris simbolis /etc/shadow faile nurodo, kad naudojamas SHA-512 šifravimo algoritmas?",
    options: [
      "$1$",
      "$5$",
      "$6$",
      "$2y$"
    ],
    correctAnswer: "$6$",
    chapter: "Linux forensics"
  },
  {
    id: 168,
    question: "Kuriame faile saugoma vartotojo terminalo komandų istorija?",
    options: [
      ".command_history",
      ".terminal_log",
      ".bash_history",
      ".shell_history"
    ],
    correctAnswer: ".bash_history",
    chapter: "Linux forensics"
  },
  {
    id: 169,
    question: "Kuriame kataloge Linux sistemoje saugomi vartotojo ištrinti failai?",
    options: [
      "/home/%username%/.trash",
      "/home/%username%/.deleted",
      "/home/%username%/.local/share/Trash",
      "/home/%username%/.recycle"
    ],
    correctAnswer: "/home/%username%/.local/share/Trash",
    chapter: "Linux forensics"
  },
  {
    id: 170,
    question: "Kas yra CUPS?",
    options: [
      "Computer Unix Printing Service",
      "Common UNIX Printing System",
      "Central Unix Print Server",
      "Core Unix Printer Support"
    ],
    correctAnswer: "Common UNIX Printing System",
    chapter: "Linux forensics"
  },
  {
    id: 171,
    question: "Kuriame faile Debian/Ubuntu sistemose saugoma programinės įrangos diegimo istorija?",
    options: [
      "/var/log/apt/history.log",
      "/var/log/install.log",
      "/var/log/packages.log",
      "/var/log/software.log"
    ],
    correctAnswer: "/var/log/apt/history.log",
    chapter: "Linux forensics"
  },
  {
    id: 172,
    question: "Kuriame kataloge Linux sistemoje saugomos failų miniatiūros?",
    options: [
      "/home/%username%/.thumbnails",
      "/home/%username%/.cache/thumbnails",
      "/home/%username%/.images/thumbs",
      "/home/%username%/.preview"
    ],
    correctAnswer: "/home/%username%/.cache/thumbnails",
    chapter: "Linux forensics"
  },
  {
    id: 173,
    question: "Kuriame faile saugoma sistemos laiko juostos informacija?",
    options: [
      "/etc/time",
      "/etc/timezone",
      "/etc/localtime",
      "Teisingi a ir b atsakymai"
    ],
    correctAnswer: "/etc/localtime",
    chapter: "Linux forensics"
  },
  {
    id: 174,
    question: "Kodėl daugelis Linux distribucijų atsisakė ReiserFS failų sistemos?",
    options: [
      "Dėl techninių problemų",
      "Dėl Hans Reiser baudžiamosios bylos",
      "Dėl licencijos problemų",
      "Dėl našumo problemų"
    ],
    correctAnswer: "Dėl Hans Reiser baudžiamosios bylos",
    chapter: "Linux forensics"
  },
  {
    id: 175,
    question: "Kuris yra pagrindinis rsyslog konfigūracijos failas?",
    options: [
      "/etc/rsyslog.cfg",
      "/etc/rsyslog.conf",
      "/etc/syslog.conf",
      "/etc/log.conf"
    ],
    correctAnswer: "/etc/rsyslog.conf",
    chapter: "Linux forensics"
  },
  // Pabaiga XI skyriaus

  // XII SKYRIUS: MOBILIŲJŲ ĮRENGINIŲ IR KITI FORENSICS KLAUSIMAI (Klausimai 176-197)
  {
    id: 176,
    question: "Kas yra iOS failų sistemos pavadinimas?",
    options: [
      "HFS+",
      "APFS",
      "UFS",
      "ZFS"
    ],
    correctAnswer: "APFS",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 177,
    question: "Kas yra jailbreak iOS įrenginiuose?",
    options: [
      "Duomenų atsarginė kopija",
      "Sistemos atkūrimas",
      "Apribojimų pašalinimas",
      "Duomenų šifravimas"
    ],
    correctAnswer: "Apribojimų pašalinimas",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 178,
    question: "Koks yra IMEI kodo ilgis?",
    options: [
      "14 skaitmenų",
      "15 skaitmenų",
      "16 skaitmenų",
      "17 skaitmenų"
    ],
    correctAnswer: "15 skaitmenų",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 179,
    question: "Kas yra MAC adresas?",
    options: [
      "Mobilaus telefono identifikatorius",
      "Programinės įrangos identifikatorius",
      "Tinklo plokštės unikalus identifikatorius",
      "Operacinės sistemos identifikatorius"
    ],
    correctAnswer: "Tinklo plokštės unikalus identifikatorius",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 180,
    question: "Kas yra root Android įrenginiuose?",
    options: [
      "Administratoriaus teisių gavimas",
      "Duomenų šifravimas",
      "Programų šalinimas",
      "Sistemos atkūrimas"
    ],
    correctAnswer: "Administratoriaus teisių gavimas",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 181,
    question: "Kuri šifravimo technologija naudojama naujausiuose Android įrenginiuose?",
    options: [
      "DES",
      "3DES",
      "AES-256",
      "RSA"
    ],
    correctAnswer: "AES-256",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 182,
    question: "Kas yra SQLite duomenų bazė?",
    options: [
      "Didelė serverinė duomenų bazė",
      "Lengva, įterpta duomenų bazė",
      "Tinklo duomenų bazė",
      "Debesų duomenų bazė"
    ],
    correctAnswer: "Lengva, įterpta duomenų bazė",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 183,
    question: "Koks yra PNG failų antraštės žymuo?",
    options: [
      "\\xFF\\xD8\\xFF",
      "\\x89\\x50\\x4E\\x47",
      "\\x25\\x50\\x44\\x46",
      "\\x50\\x4B\\x03\\x04"
    ],
    correctAnswer: "\\x89\\x50\\x4E\\x47",
    chapter: "Techninis turinys"
  },
  {
    id: 184,
    question: "Koks yra maksimalus PIN kodo ilgis iOS įrenginiuose?",
    options: [
      "4 skaitmenys",
      "6 skaitmenys",
      "8 skaitmenys",
      "Neribojamas"
    ],
    correctAnswer: "Neribojamas",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 185,
    question: "Kuri technologija apsaugo iOS įrenginius nuo brutalaus jėgos atakų?",
    options: [
      "Touch ID",
      "Face ID",
      "Secure Enclave",
      "Keychain"
    ],
    correctAnswer: "Secure Enclave",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 186,
    question: "Kiek laiko reikia laukti po 5 klaidingų PIN bandymų iOS įrenginyje?",
    options: [
      "1 minutė",
      "5 minutės",
      "15 minučių",
      "1 valanda"
    ],
    correctAnswer: "1 minutė",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 187,
    question: "Kas yra Cellebrite įranga?",
    options: [
      "Duomenų atkūrimo programa",
      "Mobiliųjų įrenginių forensics įranga",
      "Tinklo analizės įrankis",
      "Antivirusinė programa"
    ],
    correctAnswer: "Mobiliųjų įrenginių forensics įranga",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 188,
    question: "Kas yra UFED (Universal Forensic Extraction Device)?",
    options: [
      "Diskų kopijavimo įranga",
      "Mobiliųjų duomenų gavimo įranga",
      "Tinklo stebėjimo įranga",
      "Slaptažodžių spargdinimo įranga"
    ],
    correctAnswer: "Mobiliųjų duomenų gavimo įranga",
    chapter: "Mobiliųjų įrenginių forensics"
  },
  {
    id: 189,
    question: "Koks yra SHA-1 hash funkcijos rezultato ilgis?",
    options: [
      "128 bitai",
      "160 bitų",
      "256 bitai",
      "512 bitų"
    ],
    correctAnswer: "160 bitų",
    chapter: "Techninis turinys"
  },
  {
    id: 190,
    question: "Kas yra MD5 hash funkcijos rezultato ilgis?",
    options: [
      "64 bitai",
      "128 bitai",
      "256 bitai",
      "512 bitų"
    ],
    correctAnswer: "128 bitai",
    chapter: "Techninis turinys"
  },
  {
    id: 191,
    question: "Koks yra ZIP failų antraštės žymuo?",
    options: [
      "\\x50\\x4B\\x03\\x04",
      "\\x52\\x61\\x72\\x21",
      "\\x1F\\x8B\\x08",
      "\\x42\\x5A\\x68"
    ],
    correctAnswer: "\\x50\\x4B\\x03\\x04",
    chapter: "Techninis turinys"
  },
  {
    id: 192,
    question: "Kas yra steganografija?",
    options: [
      "Duomenų šifravimas",
      "Duomenų suspaudimas",
      "Duomenų slėpimas kitose duomenyse",
      "Duomenų atsarginė kopija"
    ],
    correctAnswer: "Duomenų slėpimas kitose duomenyse",
    chapter: "Techninis turinys"
  },
  {
    id: 193,
    question: "Kokia yra pagrindinė cloud forensics problema?",
    options: [
      "Duomenų dydis",
      "Jurisdikcijos ir prieigos kontrolė",
      "Technologijų trūkumas",
      "Aukštos kainos"
    ],
    correctAnswer: "Jurisdikcijos ir prieigos kontrolė",
    chapter: "Debesų forensics"
  },
  {
    id: 194,
    question: "Kas yra RAM analizės tikslas?",
    options: [
      "Sistemos greičio patikrinimas",
      "Vykdomų procesų ir slaptažodžių radimas",
      "Aparatūros diagnostika",
      "Energijos suvartojimo matavimas"
    ],
    correctAnswer: "Vykdomų procesų ir slaptažodžių radimas",
    chapter: "Atminties forensics"
  },
  {
    id: 195,
    question: "Kas yra tinklo forensics pagrindinis tikslas?",
    options: [
      "Tinklo greičio matavimas",
      "Kibernetinių incidentų tyrimas",
      "Aparatūros diagnostika",
      "Programinės įrangos diegimas"
    ],
    correctAnswer: "Kibernetinių incidentų tyrimas",
    chapter: "Tinklo forensics"
  },
  {
    id: 196,
    question: "Kas yra PCAP failai?",
    options: [
      "Programų konfigūracijos failai",
      "Tinklo srauto duomenų failai",
      "Sistemos žurnalo failai",
      "Duomenų bazės failai"
    ],
    correctAnswer: "Tinklo srauto duomenų failai",
    chapter: "Tinklo forensics"
  },
  {
    id: 197,
    question: "Kokia yra IoT įrenginių forensics pagrindinė problema?",
    options: [
      "Per mažas atminties kiekis",
      "Standartizuotų metodų trūkumas",
      "Aukštos kainos",
      "Energijos suvartojimas"
    ],
    correctAnswer: "Standartizuotų metodų trūkumas",
    chapter: "IoT forensics"
  }
  // Pabaiga XII skyriaus
]; 