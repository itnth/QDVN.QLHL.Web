import { defineComponent, onMounted, ref } from 'vue'
import './TrainingPlanDetail.css'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { TrainingPlan } from '@/models/TrainingPlan'
import dayjs, { Dayjs } from 'dayjs'
import { Class } from '@/models/Class'
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce'
import type { Managers } from '@/models/Managers'
import { Enumeration } from '@/common/Enum'
export default defineComponent({
  components: { Editor },
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const SubjectDatas = ref([])
    const TrainingPlansData = ref([])
    const ManagersData = ref([])
    const masterData = ref(new TrainingPlan())
    const types = ref(CommonStored.DeviceTypes)
    const armyUnits: any = ref([])
    const cboArmyUnit_Change = (e: any, r: ArmyUnit) => {
      try {
        // ...
        masterData.value.ArmyUnitName = r.Name
      } catch (error) {
        console.error(error)
      }
    }
    const editorInit = ref({
      powerpaste_word_import: 'merge',
      toolbar_mode: 'sliding',
      height: '450px',
      browser_spellcheck: true,
      promotion: false,
      branding: false,
      save_enablewhendirty: false,
      autosave_ask_before_unload: true,
      autosave_interval: '20s',
      font_family_formats:
        'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats;AR One Sans=AR One Sans;Agbalumo=Agbalumo;Alata=Alata;Alatsi=Alatsi;Alegreya=Alegreya;Alegreya SC=Alegreya SC;Alegreya Sans=Alegreya Sans;Alegreya Sans SC=Alegreya Sans SC;Aleo=Aleo;Alex Brush=Alex Brush;Alexandria=Alexandria;Alfa Slab One=Alfa Slab One;Allison=Allison;Allura=Allura;Alumni Sans=Alumni Sans;Alumni Sans Collegiate One=Alumni Sans Collegiate One;Alumni Sans Inline One=Alumni Sans Inline One;Alumni Sans Pinstripe=Alumni Sans Pinstripe;Amatic SC=Amatic SC;Andada Pro=Andada Pro;Andika=Andika;Anek Latin=Anek Latin;Anton=Anton;Anuphan=Anuphan;Anybody=Anybody;Archivo=Archivo;Archivo Narrow=Archivo Narrow;Are You Serious=Are You Serious;Arima=Arima;Arimo=Arimo;Arizonia=Arizonia;Arsenal=Arsenal;Asap=Asap;Asap Condensed=Asap Condensed;Athiti=Athiti;Babylonica=Babylonica;Bahianita=Bahianita;Bai Jamjuree=Bai Jamjuree;Ballet=Ballet;Baloo 2=Baloo 2;Baloo Bhai 2=Baloo Bhai 2;Baloo Bhaijaan 2=Baloo Bhaijaan 2;Baloo Bhaina 2=Baloo Bhaina 2;Baloo Chettan 2=Baloo Chettan 2;Baloo Da 2=Baloo Da 2;Baloo Paaji 2=Baloo Paaji 2;Baloo Tamma 2=Baloo Tamma 2;Baloo Tammudu 2=Baloo Tammudu 2;Baloo Thambi 2=Baloo Thambi 2;Bangers=Bangers;Barlow=Barlow;Barlow Condensed=Barlow Condensed;Barlow Semi Condensed=Barlow Semi Condensed;Barriecito=Barriecito;Be Vietnam Pro=Be Vietnam Pro;Beau Rivage=Beau Rivage;Bellota=Bellota;Bellota Text=Bellota Text;Bevan=Bevan;Big Shoulders Display=Big Shoulders Display;Big Shoulders Inline Display=Big Shoulders Inline Display;Big Shoulders Inline Text=Big Shoulders Inline Text;Big Shoulders Stencil Display=Big Shoulders Stencil Display;Big Shoulders Stencil Text=Big Shoulders Stencil Text;Big Shoulders Text=Big Shoulders Text;Bilbo=Bilbo;Birthstone=Birthstone;Birthstone Bounce=Birthstone Bounce;Bitter=Bitter;Black Ops One=Black Ops One;Bona Nova=Bona Nova;Bonheur Royale=Bonheur Royale;Braah One=Braah One;Bricolage Grotesque=Bricolage Grotesque;Brygada 1918=Brygada 1918;Bungee=Bungee;Bungee Hairline=Bungee Hairline;Bungee Inline=Bungee Inline;Bungee Outline=Bungee Outline;Bungee Shade=Bungee Shade;Bungee Spice=Bungee Spice;Cabin=Cabin;Cabin Condensed=Cabin Condensed;Calistoga=Calistoga;Caramel=Caramel;Carattere=Carattere;Carlito=Carlito;Chakra Petch=Chakra Petch;Charis SIL=Charis SIL;Charm=Charm;Charmonman=Charmonman;Cherish=Cherish;Cherry Bomb One=Cherry Bomb One;Chivo=Chivo;Chivo Mono=Chivo Mono;Chokokutai=Chokokutai;Chonburi=Chonburi;Coiny=Coiny;Comfortaa=Comfortaa;Comforter=Comforter;Comforter Brush=Comforter Brush;Commissioner=Commissioner;Corinthia=Corinthia;Cormorant=Cormorant;Cormorant Garamond=Cormorant Garamond;Cormorant Infant=Cormorant Infant;Cormorant SC=Cormorant SC;Cormorant Unicase=Cormorant Unicase;Cormorant Upright=Cormorant Upright;Cousine=Cousine;Crimson Pro=Crimson Pro;Crimson Text=Crimson Text;Cuprum=Cuprum;Dancing Script=Dancing Script;Darker Grotesque=Darker Grotesque;David Libre=David Libre;Dela Gothic One=Dela Gothic One;Denk One=Denk One;Dongle=Dongle;Dosis=Dosis;EB Garamond=EB Garamond;Encode Sans=Encode Sans;Encode Sans Condensed=Encode Sans Condensed;Encode Sans Expanded=Encode Sans Expanded;Encode Sans SC=Encode Sans SC;Encode Sans Semi Condensed=Encode Sans Semi Condensed;Encode Sans Semi Expanded=Encode Sans Semi Expanded;Ephesis=Ephesis;Epilogue=Epilogue;Estonia=Estonia;Exo=Exo;Exo 2=Exo 2;Explora=Explora;Fahkwang=Fahkwang;Familjen Grotesk=Familjen Grotesk;Farsan=Farsan;Faustina=Faustina;Festive=Festive;Fira Sans=Fira Sans;Fira Sans Condensed=Fira Sans Condensed;Fira Sans Extra Condensed=Fira Sans Extra Condensed;Fjalla One=Fjalla One;Fleur De Leah=Fleur De Leah;Flow Block=Flow Block;Flow Circular=Flow Circular;Flow Rounded=Flow Rounded;Foldit=Foldit;Francois One=Francois One;Fraunces=Fraunces;Fruktur=Fruktur;Fuggles=Fuggles;Fuzzy Bubbles=Fuzzy Bubbles;Gelasio=Gelasio;Genos=Genos;Gentium Book Plus=Gentium Book Plus;Gentium Plus=Gentium Plus;Geologica=Geologica;Georama=Georama;Gideon Roman=Gideon Roman;Glory=Glory;Gluten=Gluten;Goldman=Goldman;Gotu=Gotu;Gowun Batang=Gowun Batang;Gowun Dodum=Gowun Dodum;Grandstander=Grandstander;Grape Nuts=Grape Nuts;Great Vibes=Great Vibes;Grechen Fuemen=Grechen Fuemen;Grenze=Grenze;Grenze Gotisch=Grenze Gotisch;Grey Qo=Grey Qo;Gwendolyn=Gwendolyn;Hahmlet=Hahmlet;Handjet=Handjet;Hanken Grotesk=Hanken Grotesk;Hepta Slab=Hepta Slab;Hina Mincho=Hina Mincho;Hurricane=Hurricane;IBM Plex Mono=IBM Plex Mono;IBM Plex Sans=IBM Plex Sans;IBM Plex Sans Condensed=IBM Plex Sans Condensed;IBM Plex Serif=IBM Plex Serif;Imbue=Imbue;Imperial Script=Imperial Script;Inclusive Sans=Inclusive Sans;Inconsolata=Inconsolata;Ingrid Darling=Ingrid Darling;Inspiration=Inspiration;Inter=Inter;Inter Tight=Inter Tight;Island Moments=Island Moments;Italianno=Italianno;Itim=Itim;JetBrains Mono=JetBrains Mono;Josefin Sans=Josefin Sans;Judson=Judson;Jura=Jura;K2D=K2D;Kablammo=Kablammo;Kanit=Kanit;Kings=Kings;KoHo=KoHo;Kodchasan=Kodchasan;Kolker Brush=Kolker Brush;Krub=Krub;Kufam=Kufam;Labrada=Labrada;Lalezar=Lalezar;Lavishly Yours=Lavishly Yours;League Gothic=League Gothic;League Spartan=League Spartan;Lemonada=Lemonada;Lexend=Lexend;Lexend Deca=Lexend Deca;Lexend Exa=Lexend Exa;Lexend Giga=Lexend Giga;Lexend Mega=Lexend Mega;Lexend Peta=Lexend Peta;Lexend Tera=Lexend Tera;Lexend Zetta=Lexend Zetta;Libre Bodoni=Libre Bodoni;Libre Franklin=Libre Franklin;Licorice=Licorice;Literata=Literata;Livvic=Livvic;Lobster=Lobster;Lora=Lora;Love Light=Love Light;Lovers Quarrel=Lovers Quarrel;Lunasima=Lunasima;Luxurious Roman=Luxurious Roman;Luxurious Script=Luxurious Script;M PLUS 1=M PLUS 1;M PLUS 1 Code=M PLUS 1 Code;M PLUS 1p=M PLUS 1p;M PLUS 2=M PLUS 2;M PLUS Code Latin=M PLUS Code Latin;M PLUS Rounded 1c=M PLUS Rounded 1c;Maitree=Maitree;Major Mono Display=Major Mono Display;Mali=Mali;Manrope=Manrope;Mansalva=Mansalva;Manuale=Manuale;Markazi Text=Markazi Text;Marmelad=Marmelad;Maven Pro=Maven Pro;Mea Culpa=Mea Culpa;Meow Script=Meow Script;Merienda=Merienda;Merriweather=Merriweather;Merriweather Sans=Merriweather Sans;Metrophobic=Metrophobic;Mitr=Mitr;Monda=Monda;Montagu Slab=Montagu Slab;MonteCarlo=MonteCarlo;Montserrat=Montserrat;Montserrat Alternates=Montserrat Alternates;Moo Lah Lah=Moo Lah Lah;Moon Dance=Moon Dance;Ms Madi=Ms Madi;Mulish=Mulish;MuseoModerno=MuseoModerno;My Soul=My Soul;Mynerve=Mynerve;Nabla=Nabla;Neonderthaw=Neonderthaw;Newsreader=Newsreader;Niramit=Niramit;Noticia Text=Noticia Text;Noto Sans=Noto Sans;Noto Sans Display=Noto Sans Display;Noto Sans HK=Noto Sans HK;Noto Sans JP=Noto Sans JP;Noto Sans KR=Noto Sans KR;Noto Sans Mono=Noto Sans Mono;Noto Sans SC=Noto Sans SC;Noto Sans TC=Noto Sans TC;Noto Serif=Noto Serif;Noto Serif Display=Noto Serif Display;Noto Serif HK=Noto Serif HK;Nunito=Nunito;Nunito Sans=Nunito Sans;Oi=Oi;Old Standard TT=Old Standard TT;Ole=Ole;Oooh Baby=Oooh Baby;Open Sans=Open Sans;Oswald=Oswald;Overpass=Overpass;Overpass Mono=Overpass Mono;Pacifico=Pacifico;Pangolin=Pangolin;Passions Conflict=Passions Conflict;Pathway Extreme=Pathway Extreme;Patrick Hand=Patrick Hand;Patrick Hand SC=Patrick Hand SC;Pattaya=Pattaya;Paytone One=Paytone One;Petemoss=Petemoss;Petrona=Petrona;Philosopher=Philosopher;Phudu=Phudu;Piazzolla=Piazzolla;Pinyon Script=Pinyon Script;Play=Play;Playball=Playball;Playfair=Playfair;Playfair Display=Playfair Display;Playfair Display SC=Playfair Display SC;Playpen Sans=Playpen Sans;Plus Jakarta Sans=Plus Jakarta Sans;Podkova=Podkova;Poltawski Nowy=Poltawski Nowy;Potta One=Potta One;Praise=Praise;Prata=Prata;Pridi=Pridi;Prompt=Prompt;Public Sans=Public Sans;Puppies Play=Puppies Play;Questrial=Questrial;Quicksand=Quicksand;Qwigley=Qwigley;Qwitcher Grypen=Qwitcher Grypen;REM=REM;Radio Canada=Radio Canada;Raleway=Raleway;Rasa=Rasa;Readex Pro=Readex Pro;Recursive=Recursive;Red Rose=Red Rose;Reem Kufi=Reem Kufi;Reem Kufi Fun=Reem Kufi Fun;Reem Kufi Ink=Reem Kufi Ink;Road Rage=Road Rage;Roboto=Roboto;Roboto Condensed=Roboto Condensed;Roboto Flex=Roboto Flex;Roboto Mono=Roboto Mono;Roboto Serif=Roboto Serif;Roboto Slab=Roboto Slab;Rokkitt=Rokkitt;Rosario=Rosario;Rowdies=Rowdies;Ruda=Ruda;Ruge Boogie=Ruge Boogie;Ruthie=Ruthie;STIX Two Text=STIX Two Text;Saira=Saira;Saira Condensed=Saira Condensed;Saira Extra Condensed=Saira Extra Condensed;Saira Semi Condensed=Saira Semi Condensed;Saira Stencil One=Saira Stencil One;Sansita Swashed=Sansita Swashed;Sarabun=Sarabun;Sassy Frass=Sassy Frass;Sawarabi Gothic=Sawarabi Gothic;Sedgwick Ave=Sedgwick Ave;Sedgwick Ave Display=Sedgwick Ave Display;Send Flowers=Send Flowers;Shalimar=Shalimar;Shantell Sans=Shantell Sans;Sigmar=Sigmar;Sigmar One=Sigmar One;Signika=Signika;Signika Negative=Signika Negative;Smooch=Smooch;Smooch Sans=Smooch Sans;Sono=Sono;Source Code Pro=Source Code Pro;Source Sans 3=Source Sans 3;Source Serif 4=Source Serif 4;Space Grotesk=Space Grotesk;Space Mono=Space Mono;Spectral=Spectral;Spectral SC=Spectral SC;Splash=Splash;Square Peg=Square Peg;Sriracha=Sriracha;Srisakdi=Srisakdi;Style Script=Style Script;Tai Heritage Pro=Tai Heritage Pro;Tapestry=Tapestry;Taviraj=Taviraj;Tektur=Tektur;Texturina=Texturina;Thasadith=Thasadith;The Nautigal=The Nautigal;Tilt Neon=Tilt Neon;Tilt Prism=Tilt Prism;Tilt Warp=Tilt Warp;Tinos=Tinos;Tourney=Tourney;Trirong=Trirong;Trispace=Trispace;Truculenta=Truculenta;Twinkle Star=Twinkle Star;Unbounded=Unbounded;Unica One=Unica One;Updock=Updock;VT323=VT323;Varela Round=Varela Round;Varta=Varta;Viaoda Libre=Viaoda Libre;Victor Mono=Victor Mono;Vina Sans=Vina Sans;Vollkorn=Vollkorn;Vollkorn SC=Vollkorn SC;Voltaire=Voltaire;Vujahday Script=Vujahday Script;Water Brush=Water Brush;Waterfall=Waterfall;Whisper=Whisper;WindSong=WindSong;Wix Madefor Display=Wix Madefor Display;Wix Madefor Text=Wix Madefor Text;Work Sans=Work Sans;Xanh Mono=Xanh Mono;Yanone Kaffeesatz=Yanone Kaffeesatz;Yeseva One=Yeseva One;Yomogi=Yomogi;Yrsa=Yrsa;Ysabeau=Ysabeau;Ysabeau Infant=Ysabeau Infant;Ysabeau Office=Ysabeau Office;Ysabeau SC=Ysabeau SC',
      content_style:
        "@import url('https://fonts.googleapis.com/css2?family=AR One Sans&family=Agbalumo&family=Alata&family=Alatsi&family=Alegreya&family=Alegreya SC&family=Alegreya Sans&family=Alegreya Sans SC&family=Aleo&family=Alex Brush&family=Alexandria&family=Alfa Slab One&family=Allison&family=Allura&family=Alumni Sans&family=Alumni Sans Collegiate One&family=Alumni Sans Inline One&family=Alumni Sans Pinstripe&family=Amatic SC&family=Andada Pro&family=Andika&family=Anek Latin&family=Anton&family=Anuphan&family=Anybody&family=Archivo&family=Archivo Narrow&family=Are You Serious&family=Arima&family=Arimo&family=Arizonia&family=Arsenal&family=Asap&family=Asap Condensed&family=Athiti&family=Babylonica&family=Bahianita&family=Bai Jamjuree&family=Ballet&family=Baloo 2&family=Baloo Bhai 2&family=Baloo Bhaijaan 2&family=Baloo Bhaina 2&family=Baloo Chettan 2&family=Baloo Da 2&family=Baloo Paaji 2&family=Baloo Tamma 2&family=Baloo Tammudu 2&family=Baloo Thambi 2&family=Bangers&family=Barlow&family=Barlow Condensed&family=Barlow Semi Condensed&family=Barriecito&family=Be Vietnam Pro&family=Beau Rivage&family=Bellota&family=Bellota Text&family=Bevan&family=Big Shoulders Display&family=Big Shoulders Inline Display&family=Big Shoulders Inline Text&family=Big Shoulders Stencil Display&family=Big Shoulders Stencil Text&family=Big Shoulders Text&family=Bilbo&family=Birthstone&family=Birthstone Bounce&family=Bitter&family=Black Ops One&family=Bona Nova&family=Bonheur Royale&family=Braah One&family=Bricolage Grotesque&family=Brygada 1918&family=Bungee&family=Bungee Hairline&family=Bungee Inline&family=Bungee Outline&family=Bungee Shade&family=Bungee Spice&family=Cabin&family=Cabin Condensed&family=Calistoga&family=Caramel&family=Carattere&family=Carlito&family=Chakra Petch&family=Charis SIL&family=Charm&family=Charmonman&family=Cherish&family=Cherry Bomb One&family=Chivo&family=Chivo Mono&family=Chokokutai&family=Chonburi&family=Coiny&family=Comfortaa&family=Comforter&family=Comforter Brush&family=Commissioner&family=Corinthia&family=Cormorant&family=Cormorant Garamond&family=Cormorant Infant&family=Cormorant SC&family=Cormorant Unicase&family=Cormorant Upright&family=Cousine&family=Crimson Pro&family=Crimson Text&family=Cuprum&family=Dancing Script&family=Darker Grotesque&family=David Libre&family=Dela Gothic One&family=Denk One&family=Dongle&family=Dosis&family=EB Garamond&family=Encode Sans&family=Encode Sans Condensed&family=Encode Sans Expanded&family=Encode Sans SC&family=Encode Sans Semi Condensed&family=Encode Sans Semi Expanded&family=Ephesis&family=Epilogue&family=Estonia&family=Exo&family=Exo 2&family=Explora&family=Fahkwang&family=Familjen Grotesk&family=Farsan&family=Faustina&family=Festive&family=Fira Sans&family=Fira Sans Condensed&family=Fira Sans Extra Condensed&family=Fjalla One&family=Fleur De Leah&family=Flow Block&family=Flow Circular&family=Flow Rounded&family=Foldit&family=Francois One&family=Fraunces&family=Fruktur&family=Fuggles&family=Fuzzy Bubbles&family=Gelasio&family=Genos&family=Gentium Book Plus&family=Gentium Plus&family=Geologica&family=Georama&family=Gideon Roman&family=Glory&family=Gluten&family=Goldman&family=Gotu&family=Gowun Batang&family=Gowun Dodum&family=Grandstander&family=Grape Nuts&family=Great Vibes&family=Grechen Fuemen&family=Grenze&family=Grenze Gotisch&family=Grey Qo&family=Gwendolyn&family=Hahmlet&family=Handjet&family=Hanken Grotesk&family=Hepta Slab&family=Hina Mincho&family=Hurricane&family=IBM Plex Mono&family=IBM Plex Sans&family=IBM Plex Sans Condensed&family=IBM Plex Serif&family=Imbue&family=Imperial Script&family=Inclusive Sans&family=Inconsolata&family=Ingrid Darling&family=Inspiration&family=Inter&family=Inter Tight&family=Island Moments&family=Italianno&family=Itim&family=JetBrains Mono&family=Josefin Sans&family=Judson&family=Jura&family=K2D&family=Kablammo&family=Kanit&family=Kings&family=KoHo&family=Kodchasan&family=Kolker Brush&family=Krub&family=Kufam&family=Labrada&family=Lalezar&family=Lavishly Yours&family=League Gothic&family=League Spartan&family=Lemonada&family=Lexend&family=Lexend Deca&family=Lexend Exa&family=Lexend Giga&family=Lexend Mega&family=Lexend Peta&family=Lexend Tera&family=Lexend Zetta&family=Libre Bodoni&family=Libre Franklin&family=Licorice&family=Literata&family=Livvic&family=Lobster&family=Lora&family=Love Light&family=Lovers Quarrel&family=Lunasima&family=Luxurious Roman&family=Luxurious Script&family=M PLUS 1&family=M PLUS 1 Code&family=M PLUS 1p&family=M PLUS 2&family=M PLUS Code Latin&family=M PLUS Rounded 1c&family=Maitree&family=Major Mono Display&family=Mali&family=Manrope&family=Mansalva&family=Manuale&family=Markazi Text&family=Marmelad&family=Maven Pro&family=Mea Culpa&family=Meow Script&family=Merienda&family=Merriweather&family=Merriweather Sans&family=Metrophobic&family=Mitr&family=Monda&family=Montagu Slab&family=MonteCarlo&family=Montserrat&family=Montserrat Alternates&family=Moo Lah Lah&family=Moon Dance&family=Ms Madi&family=Mulish&family=MuseoModerno&family=My Soul&family=Mynerve&family=Nabla&family=Neonderthaw&family=Newsreader&family=Niramit&family=Noticia Text&family=Noto Sans&family=Noto Sans Display&family=Noto Sans HK&family=Noto Sans JP&family=Noto Sans KR&family=Noto Sans Mono&family=Noto Sans SC&family=Noto Sans TC&family=Noto Serif&family=Noto Serif Display&family=Noto Serif HK&family=Nunito&family=Nunito Sans&family=Oi&family=Old Standard TT&family=Ole&family=Oooh Baby&family=Open Sans&family=Oswald&family=Overpass&family=Overpass Mono&family=Pacifico&family=Pangolin&family=Passions Conflict&family=Pathway Extreme&family=Patrick Hand&family=Patrick Hand SC&family=Pattaya&family=Paytone One&family=Petemoss&family=Petrona&family=Philosopher&family=Phudu&family=Piazzolla&family=Pinyon Script&family=Play&family=Playball&family=Playfair&family=Playfair Display&family=Playfair Display SC&family=Playpen Sans&family=Plus Jakarta Sans&family=Podkova&family=Poltawski Nowy&family=Potta One&family=Praise&family=Prata&family=Pridi&family=Prompt&family=Public Sans&family=Puppies Play&family=Questrial&family=Quicksand&family=Qwigley&family=Qwitcher Grypen&family=REM&family=Radio Canada&family=Raleway&family=Rasa&family=Readex Pro&family=Recursive&family=Red Rose&family=Reem Kufi&family=Reem Kufi Fun&family=Reem Kufi Ink&family=Road Rage&family=Roboto&family=Roboto Condensed&family=Roboto Flex&family=Roboto Mono&family=Roboto Serif&family=Roboto Slab&family=Rokkitt&family=Rosario&family=Rowdies&family=Ruda&family=Ruge Boogie&family=Ruthie&family=STIX Two Text&family=Saira&family=Saira Condensed&family=Saira Extra Condensed&family=Saira Semi Condensed&family=Saira Stencil One&family=Sansita Swashed&family=Sarabun&family=Sassy Frass&family=Sawarabi Gothic&family=Sedgwick Ave&family=Sedgwick Ave Display&family=Send Flowers&family=Shalimar&family=Shantell Sans&family=Sigmar&family=Sigmar One&family=Signika&family=Signika Negative&family=Smooch&family=Smooch Sans&family=Sono&family=Source Code Pro&family=Source Sans 3&family=Source Serif 4&family=Space Grotesk&family=Space Mono&family=Spectral&family=Spectral SC&family=Splash&family=Square Peg&family=Sriracha&family=Srisakdi&family=Style Script&family=Tai Heritage Pro&family=Tapestry&family=Taviraj&family=Tektur&family=Texturina&family=Thasadith&family=The Nautigal&family=Tilt Neon&family=Tilt Prism&family=Tilt Warp&family=Tinos&family=Tourney&family=Trirong&family=Trispace&family=Truculenta&family=Twinkle Star&family=Unbounded&family=Unica One&family=Updock&family=VT323&family=Varela Round&family=Varta&family=Viaoda Libre&family=Victor Mono&family=Vina Sans&family=Vollkorn&family=Vollkorn SC&family=Voltaire&family=Vujahday Script&family=Water Brush&family=Waterfall&family=Whisper&family=WindSong&family=Wix Madefor Display&family=Wix Madefor Text&family=Work Sans&family=Xanh Mono&family=Yanone Kaffeesatz&family=Yeseva One&family=Yomogi&family=Yrsa&family=Ysabeau&family=Ysabeau Infant&family=Ysabeau Office&family=Ysabeau SC'); body { font-family: times new roman }",
      font_size_formats:
        '8px 9px 10px 12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px',
      line_height_formats: '0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5',
      menu: {
        file: {
          title: 'File',
          items: 'newdocument restoredraft | save | preview | export print | deleteallconversations'
        },
        edit: {
          title: 'Edit',
          items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'
        },
        view: {
          title: 'View',
          items:
            'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments'
        },
        insert: {
          title: 'Insert',
          items:
            'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime'
        },
        format: {
          title: 'Format',
          items:
            'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat'
        },
        tools: {
          title: 'Tools',
          items: 'browserspellcheck spellchecker spellcheckerlanguage | a11ycheck code wordcount'
        },
        table: {
          title: 'Table',
          items: 'inserttable | cell row column | advtablesort | tableprops deletetable'
        },
        help: { title: 'Help', items: 'help' },
        custom: { title: 'Custom menu', items: 'basicitem nesteditem toggleitem' }
      },
      plugins: [
        'formatpainter',
        'powerpaste',
        'quickbars',
        'save',
        'visualchars',
        'autosave',
        'advlist',
        'autolink',
        'link',
        'image',
        'lists',
        'charmap',
        'preview',
        'anchor',
        'pagebreak',
        'searchreplace',
        'wordcount',
        'visualblocks',
        'visualchars',
        'code',
        'fullscreen',
        'insertdatetime',
        'media',
        'table',
        'emoticons',
        'template',
        'help'
      ],
      toolbar1:
        'undo redo | styles fontfamily fontsize align lineheight | bold italic underline strikethrough superscript subscript | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullscreen ',
      toolbar2:
        'formatpainter | save | restoredraft | autosave | forecolor backcolor emoticons | help'
    })
    onMounted(async () => {
      // ...
      tinymce.init({})
    })
    const show = async (data: TrainingPlan) => {
      showForm.value = true
      masterData.value = data
      masterData.value.StartDate = dayjs(masterData.value.StartDate)
      masterData.value.EndDate = dayjs(masterData.value.EndDate)
      const res: BaseRespone = await axios.get('Subject/SelectAll')
      if (res && res.Success && res.Data) {
        SubjectDatas.value = <Array<Class>>res.Data
      }
      const resTP: BaseRespone = await axios.get('TrainingPlan/SelectAll')
      if (resTP && resTP.Success && resTP.Data) {
        TrainingPlansData.value = <Array<TrainingPlan>>(
          resTP.Data.filter((x) => x.ParentId == '00000000-0000-0000-0000-000000000000')
        )
      }
      const resM: BaseRespone = await axios.get('Managers/SelectAll')
      if (resM && resM.Success && resM.Data) {
        ManagersData.value = <Array<Managers>>resM.Data
      }
      const resAU: BaseRespone = await axios.get('ArmyUnit/SelectAll')
      if (resAU && resAU.Success && resAU.Data) {
        armyUnits.value = <Array<ArmyUnit>>resAU.Data
      }
    }
    const btnOk_click = () => {
      if (masterData.value) {
        if (masterData.value.EditMode == Enumeration.EditMode.View) {
          masterData.value.EditMode = Enumeration.EditMode.Edit
        } else {
          formRef.value.validate().then(async () => {
            const res: BaseRespone = await axios.post(
              'TrainingPlan/SaveData',
              Array<TrainingPlan>(masterData.value)
            )
            if (res && res.Success && res.Data) {
              // ...
              showForm.value = false
              ctx.emit('SaveSuccess', true)
            }
          })
        }
      }
    }
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    const cboSubject_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.SubjectName = r.Name
      } catch (error) {
        console.error(error)
      }
    }
    const cboParent_Change = (e: any, r: TrainingPlan) => {
      try {
        masterData.value.ParentName = r.ParentName
      } catch (error) {
        console.error(error)
      }
    }
    const cboManager_Change = (e: any, r: Managers) => {
      try {
        masterData.value.ManagerName = r.FullName
      } catch (error) {
        console.error(error)
      }
    }
    return {
      masterData,
      btnOk_click,
      showForm,
      formRef,
      filterOption,
      show,
      dayjs,
      cboSubject_Change,
      types,
      SubjectDatas,
      ManagersData,
      TrainingPlansData,
      editorInit,
      cboManager_Change,
      cboParent_Change,
      armyUnits,
      cboArmyUnit_Change,
      Enumeration
    }
  }
})
