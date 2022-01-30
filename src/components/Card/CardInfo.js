import cheesecakeRaspberry from "./pictures/izbrani/cheesecake-raspberry.jpg";
import bruschettaMix from "./pictures/izbrani/bruschetta-mix.jpg";
import bananaPancakes from "./pictures/izbrani/banana-pancakes.jpg";
import sweetBread from "./pictures/izbrani/sweet-bread.jpg";
import tBoneSteak from "./pictures/izbrani/t-bone-steak.jpg";
import chocolateSouffle from "./pictures/izbrani/chocolate-souffle.jpg";
import whiteSourdoughBread from "./pictures/izbrani/white-sourdough-bread.jpg";
import cheesecakeChocolate from "./pictures/izbrani/cheesecake-chocolate.jpg";
import pumpkinPastry from "./pictures/izbrani/pumpkin-pastry.jpg";

import bananaBread from "./pictures/izbrani/banana-bread.jpg";
import pizzaDough from "./pictures/izbrani/pizza-dough.jpg";
import ryeSourdoughBread from "./pictures/izbrani/rye-sourdough-bread.jpg";
import beanSoup from "./pictures/izbrani/bean-soup.jpg";
import frenchHoneyCake from "./pictures/izbrani/french-honey-cake.jpg";

import friedSquid from "./pictures/izbrani/fried-squid.jpg";
import tiramisu from "./pictures/izbrani/tiramisu.jpg";
import pancakesWithYoghurt from "./pictures/izbrani/pancakes-with-yoghurt.jpg";



// https://www.shutterstock.com/image-resizer

const CardInfo = [
    {
        id: 0,
        imgMain: cheesecakeRaspberry,
        url: "cheesecake-raspberry",
        title: "Чийзкейк със сладко от малини",
        products: "<hr><u>Необходими продукти: </u> <br> <br> За блата: <br> &nbsp&nbsp-200 гр обикновени бисквити<br>&nbsp&nbsp-120 гр масло<br><br>За крема: <br>&nbsp&nbsp-4 яйца<br>&nbsp&nbsp-6 пакетчета българско крема сирене<br>&nbsp&nbsp-150 гр захар<br>&nbsp&nbsp-1 пакетче ванилия<br>&nbsp&nbsp-Сладко от малини/ боровинки или друг плод<hr>",
        description: "Чийзкейкът е един от най-популярните десерти. Има толкова много вариации - с шоколад, с боровинково сладко, с печене, без печене, но основните продукти са крема сиренето, маслото и бисквитите. <br>Тази рецепта е една от най- лесни за мен и една от най-вкусните.<br><br>Разтопете маслото или в микровълнова фурна, или на водна баня. Разбийте в блендер или на ръка бисквитите и след като станат на трохи добавете маслото при тях и разбъркайте. В тавата, която ще печете чийзкейка, изсипете бисквитите и притиснете хубаво, за да  залепнат на дъното. Докато приготвяте крема, оставете тавата в хладилника, за да може да стегне. <br>Загрейте фурната на 180 гр. без вентилатор. <br> За крема разбийте захарта и яйцата с миксер. След като захарта се разтопи, добавете крема сиренето и продължете да разбивате, а след това добавете и ванилията. <br> Извадете от хладилника вече стегналия блат и изсипете крема при него. Пече се за около 30-40 мин зависимост от вашата фурна. Готов е, когато краищата са стегнали, а в средата леко мърда. След като го извадите от фурната, изчакайте да изстине напълно и изсипете сладкото. Отново върнете в хладилника до пълното му стягане. Бих препоръчала 24 часа, ако може да издържите.",
        minutes: "70 мин",
        difficulty: "1",
        servings: "12",
        category: "dessert"
    },
    {
        id: 1,
        imgMain: bruschettaMix,
        url: "bruschetta-mix",
        title: "Микс от брускети",
        products: "<hr><u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-Франзела или друг вид хлебче<br>&nbsp&nbsp-домати <br>&nbsp&nbsp-гъби <br>&nbsp&nbsp- прошуто <br>&nbsp&nbsp-крема сирене <br>&nbsp&nbsp- тиквени семки <br>&nbsp&nbsp-авокадо<br>&nbsp&nbsp- босилек <br>&nbsp&nbsp-маслини <br>&nbsp&nbsp-сол<br>&nbsp&nbsp-балсамико <br>&nbsp&nbsp-зехтин<hr>",
        description: "Представям ви едно чудесно предястие или пък защо не и закуска. <br><br>1. Брускета със сирене, домат и босилек. Натрошете сирене и отгоре сложете малко розов домат. Завършете с лист босилек, капка зехтин и щипка сол. <br> 2. Брускета с авокадо сирене и тиквени семки. Намачкайте едно авокадо, отгоре сложете сирене и отново завършете с капка зехтин, щипка сол и поръсете с тиквени семки.<br>3. Брускета с прошуто. Накъсайте прошуто и го наредете върху брускетата.<br>4. Брускета с домат, сирене и маслини. В отделна купичка нарежете на малки кубчета маслини, домат, босилек и сирене. Овкусете ги с червен балсамико, зехтин и сол. <br>5. Брускета с гъби и крема сирене. Гъбите ги обелих и запържих в малко масло, когато придобият хубав, златист загар са готови. Намажете брускетата с крема сирене и сложете няколко гъбки. <br><br>Може да използвате най - различни комбинации. Развихрете се.",
        minutes: "15 мин",
        difficulty: "1",
        servings: "5",
        category: "appetizer"
    },
    {
        id: 2,
        imgMain: bananaPancakes,
        url: "banana-pancakes",
        title: "Бананови палачинки",
        products: "<hr><u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-2 бр банан <br>&nbsp&nbsp-4 яйца<br>&nbsp&nbsp-канела <br>&nbsp&nbsp-ванилия <br>&nbsp&nbsp-масло краве/кокосово/какаово за намазване на тиган <hr>",
        description: "Банановите палачинки стават за малки и големи и са доста хранителни и вкусни. Има най-различни рецепти за този вид палачинки и аз ще ви представя моята. <br><br>Загрейте тигана. <br>Намачкайте бананите с вилица (не използвайте миксер, защото сместа ще стане прекалено течна) и добавете 4 яйца. След като ги разбъркате, добавете щипка канела и ванилия. <br>В тигана сложете масло по избор и намалете котлона. Ако искате да направите малки палачинки, то тогава използвайте супена лъжица, като взимате от сместа и слагате в тигана. Когато са по - малки палачинките се обръщат по - лесно и не се разпадат. Изчакайте да станат готови преди да ги обърнете. <br>Гарнирайте ги по избор. Моята любима комбинация е с мед и фъстъчено масло.",
        minutes: "25 мин",
        difficulty: "1",
        servings: "2",
        category: "dessert"
    },
    {
        id: 3,
        imgMain: sweetBread,
        url: "sweet-bread",
        title: "Великденски козунак",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-3 яйца на стайна температура <br>&nbsp&nbsp-150 гр захар <br>&nbsp&nbsp-50 гр масло <br>&nbsp&nbsp-50 мл олио <br>&nbsp&nbsp-кората от 1/2 лимон, 1/2 портокал и 1/2 лайм <br>&nbsp&nbsp-21 гр жива мая <br>&nbsp&nbsp-125 мл прясно мляко <br>&nbsp&nbsp-500 гр брашно предварително пресято няколко пъти <br>&nbsp&nbsp-1 щипка сол <br>&nbsp&nbsp-Пълнеж за козунака пожелание",
        description: "Няма да ви лъжа доста е трудоемко да замесиш хубав козунак, но пък си заслужава. На мен ми се получи може би от третия път. Три пъти за щастие както се казва. <br><br>Тези продукти са за 1 брой по-голям козунак. <br>Прясното мляко се затопля леко и се добавя маята с 1 с.л. брашно и 1 с.л. захар и се оставя да шупне за около 15-20 мин. <br>Яйцата и захарта се разбиват и след като се разтопи захарта се добавят корите от лимон, лайм и портокал. В брашното добавете солта и смесете с яйцата и захарта. Трябва да месите около 20 минути и може да удряте в масата самото тесто, за да може да се смесят по-добре продуктите. Ако тестото е много лепкаво добавете малко брашно, но не прекалявайте, за да не стане прекалено твърдо. След това започваме да добавяме по малко от разтопеното масло и олиото и да месим докато се поеме цялата мазнина. Трябва да втаса около 2 часа и 30 мин до 3 часа на стайна температура, покрито с фолио и кърпа, за да не изсъхва. Наблюдавайте го. <br><br>След като втаса идва ред на финалното оформяне, може да го оставите без пълнеж, с пълнеж от шоколад или мармалад, или с ядки и сушени плодове. Разделете го на 3 равни части и ако няма да му слагате пълнеж го направете на плитка. Ако слагате ядки и сушени плодове, размесете го хубаво с тях, докато ги поеме и отново разделете на 3 части и направете плитка. Ако изберете варианта с шоколад например, разделете на 3 равни части и ги разточете. Може да го разточите на много тънко ако искате да има повече шоколад. Завийте, така че да не излезе шоколада и заплетете на плитка. Оставете за повторно втасване за 30 мин. Когато втаса се намазва с разбит жълтък и малко прясно мляко и се поръсва със захар. Пече се в предварително загрята фурна на 180 гр за 25- 30 мин. При нужда се слага фолио и се допича отдолу.",
        minutes: "300 мин",
        difficulty: "3",
        servings: "8",
        category: "pastry"
    },
    {
        id: 4,
        imgMain: tBoneSteak,
        url: "t-bone-steak",
        title: "Т-боун стек",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp- 1 бр стек  <br>&nbsp&nbsp- 4-5 скилидки чесън  <br>&nbsp&nbsp- 30 мл олио <br>&nbsp&nbsp- 50 грама масло <br>&nbsp&nbsp- 4-5- клонки розмарин <br>&nbsp&nbsp- сол <br>&nbsp&nbsp- черен пипер  <br>&nbsp&nbsp-&nbsp<a style=color:#8c0608 href= https://jddimov.github.io/food-blog/recipes/soup/chicken >розмаринова сол </a>",
        description: "За един истински добър стек, най-важното е качественото месо. Ако искате да се топи в устата ви, то ви препоръчвам да изберете силно мраморизиран. За крехко месо изберете порода теле, което е месодайна порода. Ако е изсушен - още по-добре. <br><br>Преди да работите с месото го извадете от хладилника поне 20 мин предварително, за да се темперира. Загрейте тигана на максимална степен и изчакайте да се нагрее хубаво. Овкусете пържолата от двете страни със сол, черен пипер и розмариновата сол. В тигана сложете ½ от маслото и цялото олиото. След като се разтопи маслото сложете пържолата, ½ от чесъна и розмарина. В зависимост от дебелината на стека и това колко изпечено искате да бъде, оставете го в тигана 3-6 мин. Обърнете го, сложете и останалите съставки и започнете да го поливате с новото разтопено масло. Когато е готово, го оставете да си почине в чиния около 5 минути, като оставите под него вилица или лъжица, за да не ляга изяло върху чинията. Месото не се реже веднага, за да не му изтекат всички сокове.",
        minutes: "20 мин",
        difficulty: "2",
        servings: "2",
        category: "main-dish"
    },
    {
        id: 5,
        imgMain: chocolateSouffle,
        url: "chocolate-souffle",
        title: "Шоколадово суфле",
        products: "<hr><u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-200 грама черен шоколад <br>&nbsp&nbsp-200 грама масло <br>&nbsp&nbsp-6 яйца <br>&nbsp&nbsp-200 гр захар <br>&nbsp&nbsp-30 грама какао  <br>&nbsp&nbsp-120 грама брашно<hr> ",
        description: "Това суфле е една бомба от шоколад, изключителен и неустоим десерт, определено един от любимите ми. Суфлето може да се направи и да се изпече веднага, да се държи до 3 дни в хладилник или да се замрази и да се изпече, когато дойдат гостите. Във всеки един от вариантите времето за печене е различно. <br><br>Загрейте фурната на 225 градуса. Разтопете маслото и шоколада на водна баня или микровълнова и изчакайте да се охлади. Разбийте захарта с яйца и прибавете маслото и шоколада поетапно, за да не се сварят яйцата. Към тази смес добавете и останалите продукти и разбъркайте. Купичките, в които ще печете, намажете малко с масло и поръсете с какао. Разделете сместа в купичките.  Тук идва момента, в който ще решите дали ще ги изпечете веднага или ще ги оставите за по-късно. Ако ги оставите за по-късно, разбира се няма да включвате фурната. Пекат се за 10 мин.",
        minutes: "25 мин",
        difficulty: "2",
        servings: "6",
        category: "dessert"
    },
    {
        id: 6,
        imgMain: pumpkinPastry,
        url: "pumpkin-pastry",
        title: "Тиквеник",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-настъргана тиква 500 гр  <br>&nbsp&nbsp-захар 70 гр  <br>&nbsp&nbsp-олио <br>&nbsp&nbsp-натрошени орехи 50 гр  <br>&nbsp&nbsp-канела <br>&nbsp&nbsp-фини точени кори 8 бр ",
        description: "Тиквеникът е традиционно българско ястие. Когато бях по-малка и отивах при баба, винаги ми правеше тиквеник и разбира се нейния ставаше най-вкусен. Запазих съставките, но намалих захарта и олиото, все пак знаем бабите как готвят. <br><br>Загрейте фурната на 200 гр. Вземете тава, в която ще печете тиквеника и поръсете с малко олио. Вземете 2 кори и поръсете малко олио на всяка. Сложете от настърганата тиква, ако искате да е по-сочен тиквеника сложете повече тиква, ако предпочитате да е по-сух - сложете по-малко тиква. Сложете 1 не препълнена супена лъжица захар- 15 гр, поръсете с орехите и канелата. Завийте на не стегнато руло корите и пренесете в тавата. Повторете така с всички кори. След като всички кори са в тавата поръсете със захар и олио. Печете за около 30 мин.",
        minutes: "40 мин",
        difficulty: "1",
        servings: "8",
        category: "dessert"
    },
    {
        id: 7,
        imgMain: cheesecakeChocolate,
        url: "cheesecake-chocolate",
        title: "Чийзкейк с шоколад",
        products: "<u>Необходими продукти: </u> <br> <br> За блат: <br>&nbsp&nbsp-120 гр масло <br>&nbsp&nbsp-160 грама обикновени бисквити <br><br> За крема : <br>&nbsp&nbsp-500 грама крема сирене <br>&nbsp&nbsp-120 грама захар <br>&nbsp&nbsp-4 яйца <br>&nbsp&nbsp-ванилия <br>&nbsp&nbsp-60 грама шоколад <br> <br> За ганаш: <br>&nbsp&nbsp-100 грама черен шоколад <br>&nbsp&nbsp-100 мл сметана, неподсладена <br>&nbsp&nbsp-100 грама натрошени лешници за гарниране ",
        description: "Отново за любителите на шоколада ви показвам един чийзкейк с печене, който ще предизвика еуфория от вкусове. Хрупкави маслени бисквити, с нежен чийз крем и парченца шоколад, полят с ганаш, посипан с лешници. <br><br>Загрейте фурната на 180 градуса без вентилатор. Натрошете бисквитите и разтопете маслото. Разбъркайте хубаво двете съставки и ги изсипете в тавичката, която ще печете чийзкейка. Притиснете добре и оставете в хладилника докато се заемете с крема. Разбийте захарта с яйцата, след това добавете крема сиренето и ванилията. Изсипете половината крем в тавичката и наредете парченцата шоколад, така че за всяко парче от чийзкейка да се падне по парченце шоколад. Печете чийзкейка около 50 минути. След като стане готов  и се охлади, преминаваме към приготвянето на ганаша. Сложете сметната на котлона и добавете шоколада, разбъркайте до пълното разтапяне и оставете да поври около 5 мин, за да може да се сгъсти леко. Полейте чийзкейка с ганаша и поръсете обилно с лешници. Оставете го в хладилник за минимум 6 часа.",
        minutes: "100 мин",
        difficulty: "1",
        servings: "6",
        category: "dessert"
    },
    {
        id: 8,
        imgMain: whiteSourdoughBread,
        url: "white-sourdough-bread",
        title: "Бял хляб с квас",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-Брашно <br> &nbsp&nbsp-вода <br> &nbsp&nbsp-квас <br> &nbsp&nbsp-сол",
        description: "Това е една от любимите ми рецепти, но няма да ви лъжа, че доста време отнема да се забърка един такъв хляб. На мен ми отнема горе долу малко повече от 24 часа. Въпреки това, си заслужава чакането. Използвам отгледан от мен квас по <u>тази рецепта</u>. Тъй като няма да говоря в грамажи, а в проценти, вие сами ще прецените колко голям хляб да направите. Според мен, тръгнете от малко количество брашно, за да може да усъвършенствате техниката. Количеството вода зависи от самото брашно, колкото е по-голям процента на протеин в него, толкова повече вода може да поеме. Аз използвам еко сем бяло брашно и съм доволна от резултата, пробвала съм и брашно на лидл, което не ми се получи особено добър хляб.  Златното правило за този вид хляб е 100% брашно, 60-85% вода (съветвам ви да започнете с по-малко количество - 60%, аз го правя със 70% заради самото брашно), 20% квас и 2 % сол. <br><br>Първото нещо е да имате напълно активен квас. Пресейте брашното и го смесете с водата. Разбъркайте хубаво, докато се усвои напълно брашното от водата. Този процес се нарича автолиза. Оставете да престои около 2 часа. <br><br>Когато са минали 2 часа погледнете тестото, вече напълно трябва да се е абсорбирала водата и повдигнете леко част от тестото и „погледнете през него“. Това се нарича “window effect”. Добавете  кваса и размесете в купата, така че да се разпредели кваса навсякъде, без да изкарвате тестото. Оставете да престои отново 20 мин до 1 час. След като е престояло, сложете солта и размесете по същия начин. Отново оставете да си почине за 1 час. <br><br>Време е за съществената работа. Направете coil and fold по <u>този начин</u> около 3-4 пъти през около час. Като през цялото време, когато не работите с тестото го оставете покрито с капак. Когато тестото не се „разлива“ по съда, а седи стегнато, вече е готово. <br><br> Идва ред на stretch and fold. Извадете тестото от съда и го оставете на плота без брашно. Разтеглете го по плота и започнете да го сгъвате като плик. Повторете 1-2 пъти през около 30 мин. <br><br> Следващата стъпка е оформянето. В малък съд може да сложите част от тестото и да наблюдавате кога ще удвои обема. Другия вариант е да направите тест с пръста си, когато пипнете леко тестото то не трябва да възвръща бързо формата си, тогава е готово. Това се нарича ферментация или втасване и отнема дълго време в зависимост от топлината в стаята ви- 4-8 часа. След като го формите на желаната от вас форма, аз директно го слагам в тавата, намазана обилно с брашно, която ще го пека и отново го похлупвам с капак. <br><br>Когато мине ферментацията го слагам в хладилника за около 12-18 часа в зависимост кога искате да го печете. Тази стъпка може и да се пропусне, но лично за мен е важна, защото така се подобряват вкусовете на самия хляб. <br><br>Поне 30 мин преди да го извадите от хладилника, загрейте фурната на 200 градуса с една празна тава вътре. Извадете хляба и направете разрез под ъгъл 45 градуса. Това се прави, защото ако тестото има слаба част може да се спука.  Когато сложите хляба във фурната сложете и в празната тава вряла вода и печете първите 15 мин с тавата, където сте сложили врялата вода, а след това я махнете. Пече се около 1 час. Хляба се проверява кога е готово като го почукате леко и той бие на кухо. Изчакайте до пълното му изстиване преди да го разрежете. <br><br>Съвети:<br>1. Използвайте филтрирана вода<br>2. Когато се образуват малки балончета на хляба, това е добър знак<br>3. Колкото по-голямо е ухото на хляба, толкова по-добра ферментация е имало<br>4. Колкото и да лепне тестото не добавяйте повече брашно, а просто леко си намокрете ръцете със студена вода.<br>5. Аз пека с обикновена фурна и не слагам бенетон, ако имате задължително използвайте оризово брашно, за да не залепне<br>6. Парата, която отделя водата при печене, образува коричката. Колкото повече пара има, толкова по- хрупкава коричка ще имате. Пече се продължително, но все пак внимавайте да не прегори.<br>7. Тестото да не престоява повече от 18 часа в хладилник, за да не стане прекалено кисел хляба. <br>8. Не поръсвайте с олио тавата, защото има вкус на мекица.<br>9. Изчакайте хляба да изстине напълно преди да го разрежете, поне 3 часа, защото има голяма вероятност да стане като гума вътре. Но все пак това не пречи да се хапва и така." ,
        minutes: "24 часа",
        difficulty: "3",
        servings: "12",
        category: "pastry"
    },
    {
        id: 9,
        imgMain: beanSoup,
        url: "bean-soup",
        title: "Боб",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-250 гр суров боб <br>&nbsp&nbsp-1 глава лук  <br>&nbsp&nbsp-1 морков  <br>&nbsp&nbsp-2 с.л. олио <br>&nbsp&nbsp-1 ч.л. сол <br>&nbsp&nbsp-1 ч.л. чубрица <br>&nbsp&nbsp-2 ч.л. джоджен  <br>&nbsp&nbsp-400 грама домати от консерва <br>&nbsp&nbsp-щипка захар  <br>&nbsp&nbsp-пресен магданоз за поръсване",
        description: "Тази рецепта я знам от моята свекърва. Честно да си призная, боба беше едно от нещата, които никога не ми се получаваха. Колкото и да готвя и да го варя, ами просто не ставаше. Когато свекърва ми каза тази рецепта и я направих с малко помощ от мъжа ми, боба стана наистина вкусен. Вече я усъвършенствах и смея да кажа, че се справям чудесно. <br><br>Винаги използвам суров боб, ако използвате вече сварен, може да пропуснете тази стъпка. Накиснете боба за 24 часа в студена вода, количеството трябва да е повече от боба, защото той поема голяма част от водата и набъбва. <br><br> На следващия ден изсипете старата вода и сложете нова, когато заври боба, изхвърлете тази вода и сипете в тенджерата догоре студена вода. След като заври отново, намалете котлона и варете докато се сварят бобчетата, възможно е да добавяте нова студена вода в тенджерата. Времето е около 2-3 часа, а може и повече зависи колко ви е стар боба. <br><br>След като се свари, сложете лука, моркова, олиото, солта, джоджена и чубрицата и продължете да варите. Тази стъпка може да ви отнеме 1-2 часа и тук също може да се наложи да добавяте още вода. При пълното сваряване на боба сложете доматите и захарта. Варете още около час, но не забравяйте да бъркате от време на време, за да не загори на дъното. <br>След като е готов може да поръсите с пресен магданоз.",
        minutes: "5 часа",
        difficulty: "2",
        servings: "5",
        category: "soup"
    },
    {
        id: 10,
        imgMain: ryeSourdoughBread,
        url: "rye-sourdough-bread",
        title: "100 % ръжен хляб с квас",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp- 100 % брашно от ръж <br>&nbsp&nbsp- 70% вода  <br>&nbsp&nbsp- 20 % квас <br>&nbsp&nbsp- 2% сол ",
        description: "Това е една от най- лесните рецепти за ръжен хляб и то с квас. Всички съставки се смесват и почти е готов. Кваса е по <u>тази рецепта</u>. Отново ще ви говоря в проценти. Всички зависи от количеството брашно. Тоест при 100 гр брашно, ще използвам 70 гр вода, 20 грама квас и 2 грама сол. <br><br> Разбъркайте много добре всички съставки. Оставете да втаса на стайна температура докато удвои обема си. Въпреки че тестото е лепкаво, не добавяйте още брашно. <br>След това го оформете и го сложете в тавата, която ще печете, покрито с брашно и го оставете в хладилник за 12-15 часа. <br>Поне 30 мин преди да го извадите от хладилника, загрейте фурната на 200 градуса с една празна тава вътре. Извадете хляба и направете разрез под ъгъл 45 градуса. Това се прави, защото ако тестото има слаба част може да се спука.  Когато сложите хляба във фурната сложете и в празната тава вряла вода и печете първите 15 мин с тавата, където сте сложили врялата вода, а след това я махнете. Пече се около 1 час. Хляба се проверява дали е готов като го почукате леко и той бие на кухо.",
        minutes: "24 часа",
        difficulty: "1",
        servings: "12",
        category: "pastry"
    },
    {
        id: 11,
        imgMain: pizzaDough,
        url: "pizza-dough",
        title: "Тесто за пица",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-1 кг брашно тип 00 <br>&nbsp&nbsp-2 гр. Суха мая <br>&nbsp&nbsp-30 гр сол <br>&nbsp&nbsp-30 гр зехтин",
        description: "Смело мога да кажа, че това е любимата рецепта на моя съпруг. След като опитах тази пица, вече дори и в италиански ресторант не искам да ходя поне в България. Толкова е хрупкава и вкусна, че те пренася в Италия. <br>От тези продукти замесете меко тесто и оставете на стайна температура за 2 часа. След като това го оставете в хладилник за 24-48 часа. 2 часа преди да правите пиците, извадете тестото от хладилника. <br>Разделете на 10 равни части. Аз използвам тиган за пица, но може да стане и в обикновен тиган, а както и във фурна. Сложете малко олио в тигана и разточете тестото през това време. Сложете го в тигана и запечете от едната страна, когато стане готова, обърнете я и сложете върху вече запечената част малко доматен сос по <u>тази рецепта</u> и наредете желаните продукти. Захлупете с капак, за да се задуши кашкавала. ",
        minutes: "30 мин",
        difficulty: "1",
        servings: "10",
        category: "pastry"
    },
    {
        id: 12,
        imgMain: bananaBread,
        url: "banana-bread",
        title: "Бананов хляб",
        products: "<u>Необходими продукти: </u> <br><br>&nbsp&nbsp-2 бр банани <br>&nbsp&nbsp-150 гр масло <br>&nbsp&nbsp-1 бр яйца <br>&nbsp&nbsp-70 гр захар <br>&nbsp&nbsp-½ к. л. Канела <br>&nbsp&nbsp-50 гр натрошени орехи <br>&nbsp&nbsp-400 гр брашно <br>&nbsp&nbsp-Щипка сода ",
        description: "Изключително вкусен и лек десерт. С вкус на банани и дъх на канела, с мирис на масло, супер комбинация за следобедното кафе. <br><br>Разбийте яйцата със захарта до пълното и стопяване. Добавете маслото и отново разбъркайте. Намачкайте бананите с вилица, добавете канелата, брашното, содата, орехите и разбъркайте с шпатула. В намаслена тавичка изсипете хляба и печете в предварително загрята фурна на 200 градуса за около 50 мин. Изчакайте до пълното му изстиване преди да го разрежете, за да не стане глетав от вътре.",
        minutes: "90 мин",
        difficulty: "2",
        servings: "10",
        category: "dessert"
    },
    {
        id: 13,
        imgMain: pancakesWithYoghurt,
        url: "pancakes-with-yoghurt",
        title: "Катми",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp- 400 гр кисело мляко <br>&nbsp&nbsp-1 к.л. сода <br>&nbsp&nbsp-2 яйца  <br>&nbsp&nbsp-щипка сол <br>&nbsp&nbsp-брашно – колкото поеме ",
        description: "Катмите са традиционно родопско ястие. Когато отида в Родопите едно от нещата, които искам да опитам отново и отново са катми на сач. Е моите са на тиган, но отново се доближават на така прочутите родопски катми. <br><br>Смесете содата и киселото мляко и разбъркайте добре. Прибавете солта, яйцето и брашното и разбийте с миксер. Сместа трябва да наподобява на боза. Загрейте тигана и намажете с масло. Сложете в тигана част от сместа, когато е готова катмата я обърнете и намажете с масло. Повторете с цялата смес. Пълнежа за катмите е пожелание. Може дори да сложите върху катмата още докато е в тигана сирене и кашкавал.",
        minutes: "40 мин",
        difficulty: "1",
        servings: "15",
        category: "dessert"
    },
    {
        id: 14,
        imgMain: tiramisu,
        url: "tiramisu",
        title: "Тирамису",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp-5 белтъка <br>&nbsp&nbsp-5 жълтъка <br>&nbsp&nbsp-100 грама пудра захар <br>&nbsp&nbsp-400 грама маскарпоне <br>&nbsp&nbsp-2 бр силно кафе от машина <br>&nbsp&nbsp-50 грама уиски <br>&nbsp&nbsp-200 грама бишкоти <br>&nbsp&nbsp-какао за поръсване",
        description: "Отново се пренасяме в Италия с това леко и опияняващо тирамису. <br><br>Разбийте белтъците в идеално чиста и суха купа и чисти и сухи бъркалки на миксера на сняг с щипка сол. <br>В отделен съд разбийте жълтъците и пудрата захар, след това добавете и маскарпонето, но внимавайте да не се втечни. Когато се разбие напълно започнете да прибавяте от белтъците с шпатула в крема с маскарпонето по малко и с въртеливи движение в едната посока да смесвате двете смеси. Повторете до пълното смесване на белтъците с крема. <br>Кафето смесете с уискито. Започнете да топите бишкотите в него и да ги редите в тавичка. Залейте с част от крема и повторете до изчерпването на продуктите. Оставете го в хладилни да стегне за 24 часа. След това може да го поръсите с какао.",
        minutes: "60 мин",
        difficulty: "2",
        servings: "8",
        category: "dessert"
    },
    {
        id: 15,
        imgMain: friedSquid,
        url: "fried-squid",
        title: "Калмари с корнфлейкс",
        products: "<u>Необходими продукти: </u> <br> <br>&nbsp&nbsp- 2 броя пресни калмара с пипалата ( ако взимате изчистени, вземете 3 броя) <br>&nbsp&nbsp- 35 мл соев сос <br>&nbsp&nbsp- олио <br>&nbsp&nbsp- черен пипер <br>&nbsp&nbsp- червен пипер <br>&nbsp&nbsp- корнфлейкс  <br> <br>за соса: <br>&nbsp&nbsp- 150 гр кисело мляко <br>&nbsp&nbsp- 100 гр майонеза <br>&nbsp&nbsp- 1 скилидка чесън <br>&nbsp&nbsp- зехтин  <br>&nbsp&nbsp- сол <br>&nbsp&nbsp- копър",
        description: "Тъй като калмарите са ми най- любимите морски дарове, а пък пържени не са особено за препоръчване, моята е рецепта е за печени във фурната. С лек чеснов сос са идеално мезе за бирата. <br>Изчистете калмарите и ги нарежете на 1 см дебелина. Поръсете с малко олио, соевия сос, черния и червения пипер. Оставете ги да се мариноват поне за 2 часа. <br> <br>Забъркайте соса от изброените продукти. <br> <br>Когато са минали 2 часа загрейте фурната на 200 градуса. Смелете корнфлейкса в блендер и всеки един от калмарите ги оваляйте в корнфлейкса. Подредете в тавичката и печете за точно 20 минути. Извадете бирата от хладилника и се насладете на крехките калмари.",
        minutes: "30 мин",
        difficulty: "1",
        servings: "3",
        category: "main-dish"
    },
    {
        id: 16,
        imgMain: frenchHoneyCake,
        url: "french-honey-cake",
        title: "Френска селска торта",
        products: "<u>Необходими продукти: </u> <br> <br> За блат: <br> &nbsp&nbsp-1 яйце <br> &nbsp&nbsp-150 гр захар <br> &nbsp&nbsp-50 гр масло <br> &nbsp&nbsp-2 с.л мед <br> &nbsp&nbsp-2 ч.л сода  <br> &nbsp&nbsp-200 мл прясно мляко  <br> &nbsp&nbsp-400 грама брашно <br> <br> За крем: <br> &nbsp&nbsp-1200 г заквасена сметана  <br> &nbsp&nbsp-180 гр захар <br> &nbsp&nbsp-Сладко от боровинки <br> &nbsp&nbsp-300 гр смлени на ситно орехи",
        description: "Френска селска торта с комбинация от орехи и боровинково сладко, хрупкави блатове и нежен крем. <br>Това е може би една от най- трудните торти, които съм правила, специално заради блатовете. Трябва да се разточат на много тънко, а на всичкото отгоре са и 7. <br><br>Тъй като ще се използва котлон и касерола/тенджера, загрейте котлона и направо в съда, в който ще слагате на котлона смесете яйцето и захарта и разбъркайте с вилица. След това добавете останалите продукти без брашното, отново разбъркайте и сложете на котлона. Бъркайте постоянно, за да не загори сместа. Имайте предвид, че от содата сместа увеличава обема си. Трябва да варите докато придобие карамелен цвят. Това може да ви отнеме 15-20 мин. Възможно е да имате малки парченца мек карамел, които може или да прецедите през цедка или да го сложите директно така в брашното. Оставете да изстине леко и добавете брашното. Замесете тесто, при нужда добавете още брашно. Оставете да си почине до като вие подготвяте хартията за печене. <br> <br>Загрейте фурната на 200 градуса и върху хартия за печене начертайте кръг в зависимост от големината на тортата. Най- лесно ще стане като вземете ринг за торта и го очертаете върху хартията. След това ще ви бъде лесно при разточването. <br>Разделете тестото на 7 равни части и започнете да разточвате. Може да го правите върху набрашнен плод или директно върху хартията, където сте очертали размерите за блата. Преди да го сложите във фурната да се пече, го надупчете с вилица, за да не се надигне. Печете за около 5 мин, внимавайте да не загори. След като стане готов блата го изрежете в желаната големина още докато е топъл, защото после става хрупкав и може да се счупи лесно. Оставете да се охлади върху решетка. Повторете така с всички останали 6 топки тесто. <br> <br>За крема, смесете заквасената сметана и захарта и разбъркайте хубаво с шпатула. Не използвайте миксер, защото ще се втечни. След като са изстинали напълно блатовете започва и реденето на тортата. Намажете на дъното на формата малко от крема, за да може да залепне и да не се мърда блата. След като сложите първия блат, сложете по около 4 с.л. от крема, така че да е покрито навсякъде, поръсете с малко сладко от боровинки по около 1.с.л. и поръсете с малко от орехите. Повторете и с останалите блатове, като завършите само с крем. Измажете цялата торта с останалия крем и поръсете обилно с орехи навсякъде, както и отстрани на тортата. Оставете за около 24 часа  в хладилник.",
        minutes: "100 мин",
        difficulty: "3",
        servings: "12",
        category: "dessert"
    }
]

export default CardInfo