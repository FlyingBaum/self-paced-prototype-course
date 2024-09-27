import { TurtleCourse, TurtleSection } from './@types';

export const course: TurtleCourse = {
	title: 'Programmierkurs mit Schildkröte Toby',
	internalTitle: 'turtle-course',
	id: '1',
	structure: [
		{
			sectionId: '0',
			title: 'Übersicht',
		},
		{
			sectionId: '1',
			title: 'Abschnitt 1: Grundlagen',
		},
		{
			sectionId: '2',
			title: 'Abschnitt 2: Variablen & Funktionen',
		},
		{
			sectionId: '3',
			title: 'Abschnitt 3: Bedingungen',
		},
		{
			sectionId: '4',
			title: 'Abschnitt 4: While Schleifen',
		},
		{
			sectionId: '5',
			title: 'Abschnitt 5: For Schleifen',
		},
		{
			sectionId: '6',
			title: 'Abschnitt 6: Rekursion',
		},
		{
			sectionId: '7',
			title: 'Abschluss',
		},
	],
};

export const sections: TurtleSection[] = [
	{
		id: '0',
		title: course.structure[0].title,
		theory: [
			{
				explanation: `Willkommen zu unserem Kurs über das Lernen komplexer Programmierlack-Konzepte mit <b>Turtle Graphics</b>!\n
				Begleite unsere Schildkröte <b>Toby</b> auf einem erstaunlichen Abenteuer durch das Programmierland und sammle mit ihm praktische Erfahrungen mit grundlegenden Programmierkonstrukten wie <b>Schleifen</b>, <b>Bedingungsanweisungen</b>, <b>Funktionen</b> und <b>Rekursion</b> - alles mithilfe von <b>JavaScript</b> und <b>Turtle Graphics</b>. Rekursion erscheint vielleicht anfangs kompliziert, aber wir werden sie Schritt für Schritt einführen, um das Verständnis zu erleichtern.\n
				Mit Turtle Graphics kann man unsere Schildkröte Toby auf dem Bildschirm steuern und sie dazu bringen, verschiedene Formen und Muster zu zeichnen.\n
				<b>Wichtige Punkte:</b>\n
				- Einführung in Turtle Graphics mögliche Befehle.
				- Ausflug ins Thema der Rekursion.
				- Vorausgesetzte Kenntnisse: Etwas Erfahrung mit Programmierung (z.B. durch vorige Teilnahme an einem unserer Programmierkurse)`,
			},
		],
	},
	{
		id: '1',
		title: course.structure[1].title,
		theory: [
			{
				explanation: `<b>Turtle Graphics</b> ist eine lustige Art, Programmierung zu lernen, indem man <b>Formen</b> und <b>Muster</b> zeichnet. Du steuerst eine Schildkröte, die sich über den Bildschirm bewegt und basierend auf deinen Anweisungen etwas zeichnet.\n
				Begleite Toby auf seiner Reise und hilf ihm, verschiedene Formen und Muster zu zeichnen!\n
				<b>Wichtige Befehle in diesem Beispiel</b>:
				<code>forward(distanz)</code> - Toby bewegt sich um die angegebene Distanz nach <b>vorne in seine Blickrichtung</b>.
				<code>right(winkel)</code> - Toby dreht sich im angegebenen Winkel nach <b>rechts</b>.`,
				exampleCode: `// Verwende diese Turtle-Anweisungen, um ein einfaches Quadrat zu zeichnen.
turtle.forward(200);
turtle.right(90);
turtle.forward(200);
turtle.right(90);
turtle.forward(200);
turtle.right(90);
turtle.forward(200);
turtle.right(90);`,
			},
		],
		exercises: [
			{
				task: `1. Versuche, den Parameter von <code>forward()</code> für jede Zeile auf den Wert <code>100</code> zu setzen. Wie verändert sich das Quadrat dadurch?
				2. Was passiert, wenn du statt dem Befehl <code>right(Winkel)</code> den Befehl <code>left(Winkel)</code> nutzt? Probiere es mal aus!
				3. Versuche, mit denselben Befehlen ein Dreieck zu zeichnen! Drehe dich dabei immer um 120 Grad.`,
				code: `// Verwende diese Turtle-Befehle, um ein einfaches Quadrat zu zeichnen.
turtle.forward(200);
turtle.right(90);
turtle.forward(200);
turtle.right(90);
turtle.forward(200);
turtle.right(90);
turtle.forward(200);
turtle.right(90);`,
			},
		],
		quiz: [
			{
				type: 'picture',
				question: 'Welche Form ergibt sich aus dem folgenden Code:',
				questionCode: `turtle.forward(100);
turtle.right(144);
turtle.forward(100);
turtle.right(144);
turtle.forward(100);
turtle.right(144);
turtle.forward(100);
turtle.right(144);
turtle.forward(100);
turtle.right(144);`,
				answers: ['pentagram', 'pentagon', 'square', 'parallelogram'],
				correctAnswers: [0],
			},
		],
	},
	{
		id: '2',
		title: course.structure[2].title,
		theory: [
			{
				explanation: `<b>Variablen</b> helfen uns, Informationen zu speichern, die wir wiederverwenden können. <b>Funktionen</b> lassen uns Befehle gruppieren und als ganzes auszuführen.\n
				Du hast ja bereits das Quadrat kennengelernt. Wenn wir den Wert für die Länge einfach als Variable abspeichern, brauchen wir sie immer nur an einer Stelle anpassen, falls wir die Größe des Quadrats verändern wollen! Diese Variable kann dann einfach an die Funktion als sogenannter <b>Parameter</b> übergeben werden und Toby erinnert sich an diesen, wenn er etwas zeichnen will.`,
				exampleCode: `function zeichneQuadrat(breite) {
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
}

let breite = 90;

// Damit die Funktion ausgeführt wird, muss sie zuerst aufgerufen werden.
zeichneQuadrat(breite);`,
			},
		],
		exercises: [
			{
				task: 'Erstelle eine ähnliche Funktion wie <code>zeichneQuadrat()</code>, die aber ein Dreieck zeichnet, und nenne sie <code>zeichneDreieck(seitenLaenge)</code>.',
				code: `function zeichneQuadrat(breite) {
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
}

let breite = 90;

// Damit die Funktion ausgeführt wird, muss sie zuerst aufgerufen werden.
zeichneQuadrat(breite);`,
			},
		],
		quiz: [
			{
				type: 'code',
				question:
					'Wie deklariert man eine Variable namens <code>breite</code> mit dem Wert <code>100</code> in JavaScript?',
				answers: [
					'variable breite = 100;',
					'let breite = 100;',
					'int breite = 100;',
					'width == 100;',
				],
				correctAnswers: [1],
			},
			{
				type: 'code',
				question:
					'Wie definiert man eine Funktion namens <code>zeichneRechteck</code>, die <code>breite</code> und <code>laenge</code> als Parameter nimmt, in JavaScript?',
				answers: [
					'function zeichneViereck(breite, laenge) { }',
					'zeichneViereck function(breite, laenge) { }',
					'def zeichneViereck(breite, laenge): ( }',
				],
				correctAnswers: [0],
			},
		],
	},
	{
		id: '3',
		title: course.structure[3].title,
		theory: [
			{
				explanation: `Was machst du, wenn du vor einer <b>Gabelung</b> stehst? Bedingungsanweisungen helfen dir dabei, Entscheidungen für Toby zu treffen. Eine <code>if</code> Anweisung führt einen Block von Code nur aus, wenn eine bestimmte Bedingung <b>wahr</b> / <code>true</code> ist.\n
				Fügt man einen <code>else</code> Block hinzu, dann wird dieser ausgeführt, wenn die <code>if</code> Bedingung <b>nicht wahr</b> / <code>false</code> ist.\n
				Schau hin, was passiert, wenn du unten den Wert von <code>istBlau</code> auf <code>false</code> setzt.
				`,
				exampleCode: `// Funktion von vorher zum Zeichnen eines Quadrates.
function zeichneQuadrat(breite) {
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
}

// Zeichnet ein farbiges Quadrat.
function zeichneFarbigesQuadrat(istBlau) {
		// Wenn istBlau wahr ist, dann wird ein blaues Quadrat gezeichnet.
	if (istBlau) {
		turtle.setColor("blue");
		zeichneQuadrat(100);
	}
	// Wenn istBlau nicht wahr ist (false), dann wird ein rotes Quadrat gezeichnet.
	else {
		turtle.setColor("red");
		zeichneQuadrat(100);
	}
}

// Wir definieren eine Variable vom Typ boolean und setzen sie auf true.
let istBlau = true

zeichneFarbigesQuadrat(istBlau);`,
			},
			{
				explanation:
					'Manchmal gibt es mehr als zwei Möglichkeiten, wie bei einer Ampel. In solchen Fällen können wir <code>else if</code> verwenden, damit Toby weiß, was er tun soll, wenn es mehrere Bedingungen gibt, die er prüfen muss. Wenn keine der Bedingungen wahr ist, wird einfach wieder der <code>else</code> Block ausgeführt.',
				exampleCode: `function zeichneQuadrat(breite) {
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
}

// Zeichnet ein farbiges Quadrat.
function zeichneFarbigesQuadrat(farbe) {
	if (farbe === "blau") {
		turtle.setColor("blue");
		zeichneQuadrat(100);
	} else if (farbe === "rot") {
		turtle.setColor("red");
		zeichneQuadrat(100);
	} else {
		turtle.setColor("black");
		zeichneQuadrat(100);
	}
}

zeichneFarbigesQuadrat("rot");`,
			},
		],
		exercises: [
			{
				task: 'Füge weitere Farben hinzu, die Toby zeichnen kann, und erweitere die Funktion <code>zeichneFarbigesQuadrat()</code>.',
				code: `function zeichneQuadrat(breite) {
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
	turtle.forward(breite);
	turtle.right(90);
}

// Zeichnet ein farbiges Quadrat.
function zeichneFarbigesQuadrat(farbe) {
	if (farbe === "blau") {
		turtle.setColor("blue");
		zeichneQuadrat(100);
	} else if (farbe === "rot") {
		turtle.setColor("red");
		zeichneQuadrat(100);
	} else {
		turtle.setColor("black");
		zeichneQuadrat(100);
	}
}

zeichneFarbigesQuadrat("grün");`,
			},
		],
		quiz: [
			{
				type: 'picture',
				question:
					'Welche Form wird von folgendem Code gezeichnet, wenn <code>seitenLaenge</code> den Wert <code>150</code> hat?',
				questionCode: `let seitenLaenge = 150;
if (seitenLaenge < 100) {
	zeichneDreieck(seitenLaenge);
} else {
	zeichneQuadrat(seitenLaenge);
}`,
				answers: ['triangle', 'square', 'rectangle'],
				correctAnswers: [1],
			},
			{
				type: 'picture',
				question:
					'Welche Form wird von folgendem Code gezeichnet, wenn <code>form</code> den Wert <code>stern</code> hat?',
				questionCode: `let form = "stern";

if (form === "kreis") {
	zeichneKreis(100);
} else if (form === "quadrat") {
	zeichneQuadrat(100);
} else {
	zeichneLinie(100);
}`,
				answers: ['circle', 'square', 'line', 'pentagram'],
				correctAnswers: [2],
			},
		],
	},
	{
		id: '4',
		title: course.structure[4].title,
		theory: [
			{
				explanation: `<b>While Schleife ohne klare Abbruchbedingung:</b>
				Schleifen sind wie magische Wiederholungskästen für deinen Code. Sie erlauben Toby, dieselben Dinge immer und immer wieder zu tun, ohne den Code ständig neu schreiben zu müssen. Lass uns zusammen schauen, wie das funktioniert!\n
				Erinnerst du dich an den Code fürs Zeichnen eines Quadrates? Anstatt dieselben Anweisungen viermal aufzuschreiben, könnten wir eine Schleife verwenden.\n
				Unten im Beispiel ist eine <code>while</code> Schleife, die Toby immer wieder dazu anweist, sich zu bewegen und zu drehen – aber er wird nie aufhören, weil wir keine Abbruchbedingung gesetzt haben.`,
				exampleCode: `// Das ist eine Endlosschleife. Toby würde nie aufhören!
while (true) {
	turtle.forward(100);
	turtle.right(90);
}`,
			},
			{
				explanation: `<b>While Schleife mit einer Bedingung</b>
				Damit Toby den Code nur 4 mal wiederholt, brauchen wir eine Bedingung und eine Zählvariable <code>n</code> wie unten im Beispiel.`,
				exampleCode: `let n = 0;

/*
	Solange n kleiner als 4 ist, wiederholen wir den Code in der Schleife.
	Die Schleife stoppt, wenn n den Wert 4 erreicht.
*/
while (n < 4) {
	turtle.forward(100);
	turtle.right(90);
	
	// Wert von n wird jedes Mal um 1 erhöht.
	n = n + 1;
}`,
			},
		],
		exercises: [
			{
				task: `Wir zeichnen ein Fünfeck mit einer <code>while</code> Schleife. Toby dreht sich jedes Mal um 72 Grad nach rechts und läuft dann weiter.\n
				Wie groß muss <code>n</code> mindestens sein, damit Toby ein ganzes Fünfeck zeichnet?`,
				code: `let n = 0;

// Setze hier rechts den Wert ein, damit Toby ein Fünfeck zeichnet.
while (n < 0) {
	turtle.forward(100);
	turtle.right(72);
	
	// Wert von n wird jedes Mal um 1 erhöht.
	n = n + 1;
}`,
			},
		],
		quiz: [
			{
				type: 'text',
				question: `Was ist der Wert von <code>n</code> nachdem die Schleife ausgeführt wurde?`,
				questionCode: `let n = 0;
while (n < 4) {
	turtle.forward(100);
	turtle.right(90);
	n = n + 1;
}`,
				answers: ['0', '1', '2', '3', '4'],
				correctAnswers: [4],
			},
		],
	},
	{
		id: '5',
		title: course.structure[5].title,
		theory: [
			{
				explanation:
					'<b>For Schleifen</b> sind eine weitere Möglichkeit, wiederholte Anweisungen auszuführen. Sie eignen sich besonders gut, wenn wir im Voraus wissen, wie oft Toby etwas wiederholen soll.',
				exampleCode: `function zeichneQuadrat(breite) {
	/*
		i wird auf 0 gesetzt, und die Schleife wird ausgeführt.
		i wird jedes Mal um 1 erhöht und dann wird die Bedingung in der Mitte überprüft.
		Wenn die Bedingung nicht mehr wahr ist, wird die Schleife beendet.
	*/
	for(i = 0; i < 4; i++) {
		turtle.forward(breite);
		turtle.right(90);
	}
}
// Ein Array mit verschiedenen Farben. Arrays sind wie eine Variable, die mehrere Werte speichern kann.
let farben = ["red", "blue", "green", "yellow", "purple"];

// Solange i kleiner als die Länge des Arrays "farben" ist, wird die Schleife ausgeführt.
for(let i = 1; i < 12; i++) {
	// Setze die Farbe auf den Wert des Arrays an der Stelle i.
	let farbe = farben[i % farben.length];
	turtle.setColor(farbe);

	zeichneQuadrat(i * 15);
	turtle.right(30);
}`,
			},
		],
		exercises: [
			{
				task: `Schreibe eine Funktion <code>zeichneStern()</code> mithilfe einer <b>For Schleife</b>, um eine Sternform zu zeichnen.
				<b>Tipp</b>: Toby muss sich jeweils um 144 Grad drehen, um die fünf Ecken des Sterns zu zeichnen.`,
				code: `function zeichneStern() {
	// Schreibe hier deinen Code.
}`,
			},
		],
		quiz: [
			{
				type: 'text',
				question: 'Wie viele Formen wird diese Schleife zeichnen?',
				questionCode: `let formen = ["rechteck", "quadrat", "dreieck", "linie", "kreis"];

for(i = 0; i < 2; i++) {
	zeichneForm(formen[i]);
}`,
				answers: ['2', '3', '4', '5'],
				correctAnswers: [1],
			},
		],
	},
	{
		id: '6',
		title: course.structure[6].title,
		theory: [
			{
				explanation: `<b>Rekursion</b> ist eine Technik, bei der eine Funktion sich selbst aufruft, um kleinere Instanzen desselben Problems zu lösen. Es ist wie ein Blick in zwei parallel stehende Spiegel.
				Klingt kompliziert, macht aber Spaß! Toby wird uns zeigen, wie man coole, rekursive Muster malt.`,
				exampleCode: `// Unendliche Rekursion für eine Spirale.
function zeichneLinie(laenge) {
	turtle.forward(laenge);
	turtle.right(90);
	zeichneLinie(laenge + 3);
}

zeichneLinie(1)`,
			},
			{
				explanation: `Falls du den oberen Code ausprobierst, wirst du sehen, dass die Funktion immer weiterlaufen würde, ohne anzuhalten. Das ist eine <b>unendliche Rekursion</b>.\n
				Damit Toby nicht wieder ewig lange etwas zeichnet, können wir wieder eine Bedingung hinzufügen, genauso wie bei den Schleifen vorhin!`,
				exampleCode: `// Rekursive Implementierung mit Bedingung.
turtle.setColor("blue");
function zeichneLinie(distanz) {
	if(distanz <= 400) {
		turtle.forward(distanz);
		turtle.right(90);
		zeichneLinie(distanz + 3);
	}
}

zeichneLinie(1)`,
			},
			{
				exampleCode: `// Implementierung mit Schleife.
function zeichneLinie(distanz) {
	while(distanz <= 400) {
		turtle.forward(distanz);
		turtle.right(90);
		distanz = distanz + 3;
	}
}

zeichneLinie(1)`,
			},
			{
				explanation: `Im Vergleich siehst du oben einmal die <b>rekursive Implementierung</b> und drunter mit einer <b>Schleife</b>!
				Toby ist beides recht, aber manchmal sind Implementierungen mit Rekursion einfach lesbarer, wie bei diesem <b>Y Baum</b> unten!`,
				exampleCode: `function baum(laenge, tiefe) {
	// Der Base Case.
	if (tiefe == 0) {
		return;
	} else {
		// Zeichne den Stamm des Baumes.
		turtle.forward(laenge);
		
		// Zeichne den linken Zweig.
		turtle.left(30);
		baum(laenge * 0.8, tiefe - 1);
		turtle.right(30);  // Zur Ausgangsrichtung zurückkehren.
		
		// Zeichne den rechten Zweig.
		turtle.right(30);
		baum(laenge * 0.8, tiefe - 1);
		turtle.left(30);  // Zur Ausgangsrichtung zurückkehren.
		
		// Zurück zum Ausgangspunkt.
		turtle.right(180);
		turtle.forward(laenge);
		turtle.right(180);  // Zur Ausgangsrichtung zurückkehren.
		
		return;
	}
}

// Zeichne den Baum mit gegebener Länge und Tiefe.
baum(50, 7);`,
			},
			{
				explanation: `Die Funktion <code>baum()</code> zeichnet einen Baum mit einer bestimmten Länge und Tiefe. Die Funktion ruft sich selbst <b>rekursiv</b> auf, um die Zweige des Baumes zu zeichnen. 
				Das ist ein gutes Beispiel für die Verwendung von Rekursion, um <b>komplexe Muster</b> zu erzeugen.
				Mit einer Schleife würde der Code viel länger und schwerer zu lesen sein, weil wir die Zweige des Baumes in einer bestimmten Reihenfolge zeichnen müssen. Rekursion ist hier eine elegantere Lösung!`,
			},
		],
		exercises: [
			{
				task: `Schreibe eine <b>rekursive</b> Funktion, die ein <b>Quadrat</b> zeichnet und dabei jedes Mal die <b>Seitenlänge</b> um <b>10</b> erhöht. 
				Gib dabei auch eine Abbruchbedingung an, damit Toby nicht ewig weitermacht (<b>Tiefe</b>).`,
				code: `function zeichneQuadrat(laenge, tiefe) {
	// Schreibe hier deinen Code.
}`,
			},
		],
		quiz: [
			{
				type: 'text',
				question:
					'Was ist der Unterschied zwischen einer <b>rekursiven</b> und einer <b>iterativen</b> Implementierung?',
				answers: [
					'Eine rekursive Implementierung ruft sich selbst auf, während eine iterative Implementierung Schleifen verwendet.',
					'Eine rekursive Implementierung verwendet Schleifen, während eine iterative Implementierung sich selbst aufruft.',
					'Beide sind gleich und verwenden sowohl Schleifen als auch Selbstaufrufe.',
					'Rekursive Implementierungen sind immer schneller als iterative.',
				],
				correctAnswers: [0],
			},
			{
				type: 'code',
				question: `Welche Bedingung (Base Case) fehlt im folgenden rekursiven Code, um die <b>Rekursion zu stoppen</b>?`,
				questionCode: `function zeichneSpirale(distanz) {
	if (____) {
		return;
	}
	turtle.forward(distanz);
	turtle.right(90);
	zeichneSpirale(distanz + 5);
}`,
				answers: [
					'distanz == 0',
					'distanz > 100',
					'distanz < 0',
					'keine Bedingung wird benötigt',
				],
				correctAnswers: [1],
			},
		],
	},
	{
		id: '7',
		title: 'Abschluss',
		theory: [
			{
				explanation: `Herzlichen Glückwunsch! Du hast es geschafft, Toby durch alle Abschnitte zu führen und ihm dabei geholfen, viele verschiedene Formen und Muster zu zeichnen. 
				Rekursion ist eine fortgeschrittene Technik, die in vielen Bereichen der Informatik eingesetzt wird, um komplexe Probleme zu lösen. 
				Wir hoffen, dass du jetzt ein besseres Verständnis für die Funktionsweise von Rekursion hast und wir freuen uns darauf, dich in einem unserer weiteren Kurse zu sehen!`,
			},
		],
	},
];
