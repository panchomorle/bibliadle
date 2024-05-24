type Definition = {
  word: string
  definition: string
  example: string
}

const DEFINITIONS: Definition[] = [
  {
    "word": "angel",
    "definition": "Ser celestial enviado por Dios como mensajero.",
    "example": "Y se le apareció un ángel del Señor, puesto en pie a la derecha del altar del incienso. - Lucas 1:11"
  },
  {
    "word": "reina",
    "definition": "Esposa de un rey o mujer que gobierna un reino.",
    "example": "La reina de Sabá oyó de la fama que Salomón había alcanzado gracias al nombre del Señor, y vino a ponerlo a prueba con preguntas difíciles. - 1 Reyes 10:1"
  },
  {
    "word": "jesus",
    "definition": "Nombre del Hijo de Dios, el Mesías y Salvador del mundo según el cristianismo.",
    "example": "Pero cuando él lo pensaba, he aquí un ángel del Señor se le apareció en sueños y le dijo: José, hijo de David, no temas recibir a María tu mujer, porque lo que en ella es engendrado, del Espíritu Santo es. Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados. - Mateo 1:20-21"
  },
  {
    "word": "cielo",
    "definition": "La morada de Dios, los ángeles y los bienaventurados después de la segunda venida de Cristo.",
    "example": "Al principio creó Dios los cielos y la tierra. - Génesis 1:1"
  },
  {
    "word": "Padre",
    "definition": "Cabeza de una descendencia, familia o pueblo. Autor, creador o fundador de algo.",
    "example": "[palabras de Jesús] Padre, aquellos que me has dado, quiero que donde yo estoy, también ellos estén conmigo, para que vean mi gloria que me has dado; porque me has amado desde antes de la fundación del mundo. - Juan 17:24"
  },
  {
    "word": "David",
    "definition": "Segundo rey de Israel, conocido por derrotar a Goliat y por su reinado justo.",
    "example": "Y sucedió que, cuando Saúl volvió de perseguir a los filisteos, le dieron aviso, diciendo: He aquí David está en el desierto de Engadi. - 1 Samuel 24:1"
  },
  {
    "word": "Orare",
    "definition": "[futuro] Dirigirse a Dios con palabras de súplica, adoración o agradecimiento.",
    "example": "¿Qué, pues? Oraré con el espíritu, pero oraré también con el entendimiento; cantaré con el espíritu, pero cantaré también con el entendimiento. - 1 Corintios 14:15"
  },
  {
    "word": "Libro",
    "definition": "Conjunto de hojas de papel u otro material con texto escrito, como la Biblia.",
    "example": "Entonces dijo: Aquí vengo, oh Dios, para hacer tu voluntad, como en el rollo del libro está escrito de mí. - Hebreos 10:7"
  },
  {
    "word": "Ester",
    "definition": "Una reina judía de Persia que salvó a su pueblo de la destrucción.",
    "example": "Y así la joven Ester ganó el favor de todos los que la veían. - Ester 2:15"
  },
  {
    "word": "Isaac",
    "definition": "Hijo de Abraham y Sara, y padre de Jacob y Esaú.",
    "example": "Entonces dijo Dios: Ciertamente Sara tu mujer te dará a luz un hijo, y llamarás su nombre Isaac. - Génesis 17:19"
  },
  {
    "word": "Santo",
    "definition": "Del hebreo kadosh (קדוש). Separado. Apartado de toda idolatria , inmundicia, de toda contaminación.",
    "example": "Sed santos, porque yo soy santo. - Levítico 11:44"
  },
  {
    "word": "Salmo",
    "definition": "Canto o poema sagrado, especialmente los del libro de los Salmos en la Biblia.",
    "example": "Jehová es mi pastor; nada me faltará. - Salmo 23:1"
  },
  {
    "word": "Trigo",
    "definition": "Cereal que es una de las principales fuentes de alimento; simbólicamente, representa abundancia y bendición.",
    "example": "Si el grano de trigo no cae en tierra y muere, queda solo; pero si muere, lleva mucho fruto. - Juan 12:24"
  },
  {
    "word": "Mujer",
    "definition": "Persona del sexo femenino, a menudo mencionada en diversas historias y roles en la Biblia.",
    "example": "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y mujer los creó. - Génesis 1:27"
  },
  {
    "word": "exodo",
    "definition": "Segundo libro de la Biblia, que narra la salida de los israelitas de Egipto.",
    "example": "Ahora pues, ven, y te enviaré a Faraón, para que saques de Egipto a mi pueblo, los hijos de Israel. - Éxodo 3:10"
  },
  {
    "word": "Reino",
    "definition": "Territorio o país gobernado por un rey o reina; en la Biblia, a menudo se refiere al Reino de Dios.",
    "example": "Buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas. - Mateo 6:33"
  },
  {
    "word": "Salud",
    "definition": "Estado de bienestar físico y espiritual.",
    "example": "No seas sabio en tu propia opinión; más bien, teme al Señor y huye del mal. Esto infundirá salud a tu cuerpo y fortalecerá tu ser. - Proverbios 3:7-8"
  },
  {
    "word": "Temor",
    "definition": "Sentimiento de miedo o reverencia, especialmente hacia Dios.",
    "example": "El temor de Jehová es el principio de la sabiduría; los insensatos desprecian la sabiduría y la enseñanza. - Proverbios 1:7"
  },
  {
    "word": "Monte",
    "definition": "Elevación natural del terreno; en la Biblia, a menudo es un lugar de encuentro con Dios.",
    "example": "Cuando Moisés subió al monte, la nube cubrió el monte. - Éxodo 24:15"
  },
  {
    "word": "sanos",
    "definition": "(personas) Que gozan de perfecta salud.",
    "example": "Al oír esto, Jesús les contestó: —No son los sanos los que necesitan médico, sino los enfermos. - Mateo 9:12"
  },
  {
    "word": "Olivo",
    "definition": "Árbol cuyo fruto es la aceituna, y del cual se extrae el aceite de oliva.",
    "example": "Y el cuervo no volvió a él; pero envió de sí una paloma, para ver si las aguas se habían retirado de sobre la faz de la tierra. - Génesis 8:11"
  },
  {
    "word": "Hades",
    "definition": 'Del griego hádēs, se traduce como "muerte" o "sepulcro", lugar físico donde descansan los muertos.',
    "example": "Y la muerte y el Hades fueron lanzados al lago de fuego. Esta es la muerte segunda. - Apocalipsis 20:14"
  },
  {
    "word": "Jonas",
    "definition": "Profeta del Antiguo Testamento conocido por ser tragado por un gran pez.",
    "example": "Pero Jehová tenía preparado un gran pez que tragase a Jonás; y estuvo Jonás en el vientre del pez tres días y tres noches. - Jonás 1:17"
  },
  {
    "word": "Maria",
    "definition": "Nombre de varias mujeres en la Biblia, incluida la madre de Jesús.",
    "example": "Y entrando el ángel en donde ella estaba, dijo: ¡Salve, muy favorecida! El Señor es contigo; bendita tú entre las mujeres. - Lucas 1:28"
  },
  {
    "word": "Betel",
    "definition": "Lugar donde Jacob tuvo una visión de una escalera al cielo.",
    "example": "Y llamó el nombre de aquel lugar Betel, aunque Luz era el nombre de la ciudad primero. - Génesis 28:19"
  },
  {
    "word": "Cesar",
    "definition": "Título de los emperadores romanos, mencionado en el Nuevo Testamento.",
    "example": "Entonces les dijo: Dad, pues, a César lo que es de César, y a Dios lo que es de Dios. - Mateo 22:21"
  },
  {
    "word": "Jacob",
    "definition": "Patriarca bíblico, hijo de Isaac y Rebeca, y padre de las doce tribus de Israel.",
    "example": "Y le dijo Dios: Yo soy el Dios Todopoderoso: crece y multiplícate; una nación y conjunto de naciones procederán de ti, y reyes saldrán de tus lomos. - Génesis 35:11"
  },
  {
    "word": "Elias",
    "definition": "Profeta del Antiguo Testamento conocido por su confrontación con los profetas de Baal.",
    "example": "Entonces Elías dijo a todo el pueblo: Acercaos a mí. Y todo el pueblo se acercó a él. Y él arregló el altar de Jehová que estaba arruinado. - 1 Reyes 18:30"
  },
  {
    "word": "Saulo",
    "definition": "Nombre hebreo del apóstol Pablo antes de su conversión al cristianismo.",
    "example": "Y Saulo, respirando aún amenazas y muerte contra los discípulos del Señor, vino al sumo sacerdote. - Hechos 9:1"
  },
  {
    "word": "Judas",
    "definition": "Nombre de varios personajes bíblicos, incluido Judas Iscariote, el apóstol que traicionó a Jesús.",
    "example": "Entonces Judas Iscariote, uno de los doce, fue a los principales sacerdotes para entregárselo. - Marcos 14:10"
  },
  {
    "word": "Justo",
    "definition": "Persona que vive de acuerdo con la justicia y la rectitud, conforme a la voluntad de Dios.",
    "example": "Porque el justo Jehová ama la justicia; el hombre recto mirará su rostro. - Salmo 11:7"
  },
  {
    "word": "Carne",
    "definition": "El cuerpo humano y su naturaleza caída, a menudo contrastada con el espíritu.",
    "example": "En esto conoced el Espíritu de Dios: Todo espíritu que confiesa que Jesucristo ha venido en carne, es de Dios; - 1 Juan 4:2"
  },
  {
    "word": "Pablo",
    "definition": "Apóstol del Nuevo Testamento, conocido por sus cartas y su labor misionera.",
    "example": "Saulo, que también es Pablo, lleno del Espíritu Santo, fijando en él los ojos, dijo: - Hechos 13:9"
  },
  {
    "word": "Pedro",
    "definition": "Uno de los apóstoles de Jesús, también conocido como Simón Pedro.",
    "example": "Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia. - Mateo 16:18"
  },
  {
    "word": "Hijos",
    "definition": "Descendientes directos de una persona, frecuentemente mencionado en genealogías bíblicas.",
    "example": "He aquí, herencia de Jehová son los hijos; cosa de estima el fruto del vientre. - Salmo 127:3"
  },
  {
    "word": "Grano",
    "definition": "Semilla de cereales; en la Biblia, a menudo representa provisión y bendición.",
    "example": "Si el grano de trigo no cae en tierra y muere, queda solo; pero si muere, lleva mucho fruto. - Juan 12:24"
  },
  {
    "word": "Perla",
    "definition": "Gema preciosa mencionada en parábolas de Jesús.",
    "example": "También el reino de los cielos es semejante a un mercader que busca buenas perlas. - Mateo 13:45"
  },
  {
    "word": "Ramos",
    "definition": "Ramas de árboles, usadas en la celebración de la entrada triunfal de Jesús en Jerusalén.",
    "example": "Tomaron ramos de palmera, y salieron a recibirle, y clamaban: ¡Hosanna! - Juan 12:13"
  },
  {
    "word": "Reyes",
    "definition": "Gobernantes de un reino, mencionados frecuentemente en la Biblia.",
    "example": "Y él entregará sus reyes en tu mano, y tú destruirás el nombre de ellos de debajo del cielo; nadie te hará frente hasta que los destruyas. - Deuteronomio 7:24"
  },
  {
    "word": "Cañas",
    "definition": "Plantas de tallo alto y delgado, mencionadas en la Biblia.",
    "example": "Y no quebrará la caña cascada, ni apagará el pábilo que humeare. - Mateo 12:20"
  },
  {
    "word": "Pacto",
    "definition": "Acuerdo solemne entre Dios y su pueblo.",
    "example": "Estableceré mi pacto entre mí y ti, y tu descendencia después de ti en sus generaciones por pacto perpetuo. - Génesis 17:7"
  },
  {
    "word": "Siria",
    "definition": "Antigua nación mencionada frecuentemente en el Antiguo Testamento.",
    "example": "Porque el rey de Siria ha acordado venir contra ti con Efraín y con el hijo de Remalías. - Isaías 7:5"
  },
  {
    "word": "Jairo",
    "definition": "Un jefe de la sinagoga que pidió a Jesús que sanara a su hija.",
    "example": "Entonces vino uno de los principales de la sinagoga, llamado Jairo; y luego que le vio, se postró a sus pies. - Marcos 5:22"
  },
  {
    "word": "Marta",
    "definition": "Hermana de María y Lázaro, conocida por su servicio a Jesús.",
    "example": "Pero Marta se preocupaba con muchos quehaceres, y acercándose, dijo: Señor, ¿no te da cuidado que mi hermana me deje servir sola? Dile, pues, que me ayude. - Lucas 10:40"
  },
  {
    "word": "Felix",
    "definition": "Procurador romano mencionado en el Nuevo Testamento.",
    "example": "Pero Félix, teniendo un conocimiento más exacto de este Camino, les aplazó, diciendo: Cuando descendiere el tribuno Lisias, acabaré de conocer de vuestro asunto. - Hechos 24:22"
  },
  {
    "word": "Belen",
    "definition": "Ciudad donde nació Jesús.",
    "example": "Y José subió de Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén. - Lucas 2:4"
  },
  {
    "word": "Ruben",
    "definition": "El primer hijo de Jacob y Lea, y uno de los doce patriarcas de Israel.",
    "example": "Y aconteció que cuando Israel habitaba en aquella tierra, Rubén fue y durmió con Bilha, la concubina de su padre; lo cual llegó a saber Israel. - Génesis 35:22"
  },
  {
    "word": "Caleb",
    "definition": "Uno de los doce espías enviados por Moisés a Canaán, conocido por su fe y valentía.",
    "example": "Entonces Caleb hizo callar al pueblo delante de Moisés, y dijo: Subamos luego, y tomemos posesión de ella; porque más podremos nosotros que ellos. - Números 13:30"
  },
  {
    "word": "Cetro",
    "definition": "Vara o bastón que simboliza la autoridad de un rey.",
    "example": "No será quitado el cetro de Judá, ni el legislador de entre sus pies, hasta que venga Siloh; y a él se congregarán los pueblos. - Génesis 49:10"
  },
  { 
    "word": "Balac", 
    "definition": "Rey de Moab que intentó maldecir a Israel a través del profeta Balaam.",
    "example": "Y Balac hijo de Zipor era entonces rey de Moab. - Números 22:4" 
  },
  { 
    "word": "Lobos",
    "definition": "Animales mencionados en la Biblia como símbolos de ferocidad.",
    "example": "He aquí, yo os envío como a ovejas en medio de lobos; sed, pues, prudentes como serpientes, y sencillos como palomas. - Mateo 10:16" 
  },
  { 
    "word": "Lugar",
    "definition": "Espacio ocupado o que puede ser ocupado por un cuerpo cualquiera.",
    "example": "En la casa de mi Padre muchas moradas hay; si así no fuera, yo os lo hubiera dicho; voy, pues, a preparar lugar para vosotros. - Juan 14:2-4" 
  },
  { 
    "word": "amigo",
    "definition": "Afecto personal, puro y desinteresado, compartido con otra persona, que nace y se fortalece con el trato.",
    "example": "Nadie tiene amor más grande que el dar la vida por sus amigos. - Juan 15:13" 
  },
  { 
    "word": "josue",
    "definition": "Líder israelita sucesor de Moisés, conocido por guiar a los israelitas en la conquista de Canaán (tierra prometida).",
    "example": "Después de la muerte de Moisés siervo de Jehová, Jehová habló a Josué hijo de Nun, servidor de Moisés... - Josué 1:1" 
  },
  { 
    "word": "efeso",
    "definition": "Antigua ciudad de Asia Menor y primera de las 7 iglesias de la profecía de Apocalipsis.",
    "example": "Escribe esto al ángel de la iglesia de Éfeso [...] Yo sé todo lo que haces, que trabajas duro y nunca te rindes, y que no aceptas a los malos. - Apoc. 2:1-2" 
  },
  {
    "word": "Babel",
    "definition": "Ciudad mencionada en el Génesis, donde se intentó construir una torre que llegara al cielo.",
    "example": "Y dijeron: Vamos, edifiquémonos una ciudad y una torre cuya cúspide llegue al cielo, y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra. - Génesis 11:4"
  },
  {
    "word": "Lidia",
    "definition": "Mujer piadosa convertida al cristianismo en el Nuevo Testamento.",
    "example": "Y una mujer llamada Lidia, vendedora de púrpura, de la ciudad de Tiatira, que adoraba a Dios, estaba oyendo; y el Señor abrió el corazón de ella para que estuviese atenta a lo que Pablo decía. - Hechos 16:14"
  },
  {
    "word": "Siloe",
    "definition": "Estanque en Jerusalén mencionado en el Nuevo Testamento.",
    "example": "Jesús dijo: Ve, lávate en el estanque de Siloé (que significa: Enviado). Entonces fue, se lavó, y volvió viendo. - Juan 9:7"
  },
  {
    "word": "varon",
    "definition": "Persona del sexo masculino. A menudo mencionado en la biblia en diversas historias. Jesús fue uno.",
    "example": "Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto; y como que escondimos de él el rostro, fue menospreciado, y no lo estimamos. - Isaías 53:3"
  },

]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word.toLocaleLowerCase())
})

export { WORDS, DEFINITIONS }
