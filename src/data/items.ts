export type Lang = "en" | "es" | "uk" | "pt";

export interface Item {
  id: string;
  images: string[];
  price: number | null;
  originalPrice: number | null;
  condition: "new" | "almost_new" | "perfect" | "good";
  delivery: "local" | "malaga";
  status: "available" | "reserved" | "sold";
  title: Record<Lang, string>;
  shortDesc: Record<Lang, string>;
  desc: Record<Lang, string>;
}

export const ITEMS: Item[] = [
  {
    id: "ebike",
    images: ["/images/ebike-1.webp","/images/ebike-10.webp","/images/ebike-2.webp","/images/ebike-3.webp","/images/ebike-4.webp","/images/ebike-5.webp","/images/ebike-6.webp","/images/ebike-7.webp","/images/ebike-8.webp","/images/ebike-9.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "local", status: "available",
    title: { en: "E-Bike — Bafang M510 Mid-Drive", es: "Bicicleta Eléctrica — Bafang M510", uk: "Електровелосипед — Bafang M510", pt: "Bicicleta Elétrica — Bafang M510" },
    shortDesc: { en: "E-bike with Bafang M510 motor, Tektro disc brakes, ~900 km", es: "E-bike con motor Bafang M510, frenos disco Tektro, ~900 km", uk: "Електровелосипед з мотором Bafang M510, дискові гальма Tektro, ~900 км", pt: "E-bike com motor Bafang M510, travões disco Tektro, ~900 km" },
    desc: { en: "Electric bicycle with Bafang M510 mid-drive motor. XCM suspension fork, Tektro hydraulic disc brakes, Shinetour comfort saddle. Display shows ~900 km trip. Rear rack and bottle cage included.", es: "Bicicleta eléctrica con motor central Bafang M510. Horquilla de suspensión XCM, frenos de disco hidráulicos Tektro, sillín confort Shinetour. Display muestra ~900 km recorridos. Portaequipajes trasero y portabidón incluidos.", uk: "Електровелосипед з центральним мотором Bafang M510. Вилка XCM, гідравлічні дискові гальма Tektro, сідло Shinetour. Дисплей показує ~900 км пробігу. Багажник та тримач пляшки включені.", pt: "Bicicleta elétrica com motor central Bafang M510. Forqueta de suspensão XCM, travões de disco hidráulicos Tektro, selim conforto Shinetour. Display mostra ~900 km percorridos. Porta-bagagens traseiro e porta-bidon incluídos." }
  },
  {
    id: "drill",
    images: ["/images/drill-1.webp","/images/drill-2.webp","/images/drill-3.webp","/images/drill-product-1.webp","/images/drill-product-2.webp"],
    price: 85, originalPrice: 122, condition: "perfect", delivery: "malaga", status: "available",
    title: { en: "Makita Drill DHP458 + Makpac", es: "Taladro Makita DHP458 + Makpac", uk: "Дриль Makita DHP458 + Makpac", pt: "Berbequim Makita DHP458 + Makpac" },
    shortDesc: { en: "18V cordless hammer drill with Makpac case. Perfect condition. Battery not included.", es: "Taladro percutor 18V con maletín Makpac. Estado perfecto. Batería no incluida.", uk: "Акумуляторний ударний дриль 18V з кейсом Makpac. Ідеальний стан. Акумулятор не включено.", pt: "Berbequim de percussão 18V com mala Makpac. Estado perfeito. Bateria não incluída." },
    desc: { en: "Makita DHP458 18V LXT cordless hammer drill/driver. 2-speed, 21 torque settings, 84Nm max torque, LED job light, keyless chuck. Includes side handle, depth gauge, and stackable Makpac carry case. Perfect condition, fully functional. Battery not included. Purchased from [Amazon.es](https://www.amazon.es/dp/B00HW2SQP0) on 9 Dec 2025, under warranty.", es: "Taladro percutor Makita DHP458 18V LXT. 2 velocidades, 21 ajustes de par, 84Nm par máximo, luz LED, portabrocas sin llave. Incluye empuñadura lateral, tope de profundidad y maletín apilable Makpac. Estado perfecto, totalmente funcional. Batería no incluida. Comprado en [Amazon.es](https://www.amazon.es/dp/B00HW2SQP0) el 9 dic 2025, en garantía.", uk: "Акумуляторний ударний дриль Makita DHP458 18V LXT. 2 швидкості, 21 налаштування крутного моменту, 84Нм макс. момент, LED підсвітка, безключовий патрон. Включає бокову ручку, обмежувач глибини та кейс Makpac. Ідеальний стан, повністю працездатний. Акумулятор не включено. Придбано на [Amazon.es](https://www.amazon.es/dp/B00HW2SQP0) 9 грудня 2025, на гарантії.", pt: "Berbequim de percussão Makita DHP458 18V LXT. 2 velocidades, 21 configurações de binário, 84Nm binário máximo, luz LED, mandril sem chave. Inclui punho lateral, batente de profundidade e mala empilhável Makpac. Estado perfeito, totalmente funcional. Bateria não incluída. Comprado na [Amazon.es](https://www.amazon.es/dp/B00HW2SQP0) a 9 dez 2025, em garantia." }
  },
  {
    id: "circular-saw",
    images: ["/images/circular-saw-1.webp","/images/circular-saw-2.webp","/images/circular-saw-3.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Makita Circular Saw 18V BL", es: "Sierra Circular Makita 18V BL", uk: "Циркулярна пила Makita 18V BL", pt: "Serra Circular Makita 18V BL" },
    shortDesc: { en: "18V brushless circular saw, LXT series", es: "Sierra circular 18V sin escobillas, serie LXT", uk: "Циркулярна пила 18V безщіткова, серія LXT", pt: "Serra circular 18V sem escovas, série LXT" },
    desc: { en: "Makita 18V LXT brushless circular saw. Compact and powerful.", es: "Sierra circular Makita 18V LXT sin escobillas. Compacta y potente.", uk: "Циркулярна пила Makita 18V LXT безщіткова. Компактна та потужна.", pt: "Serra circular Makita 18V LXT sem escovas. Compacta e potente." }
  },
  {
    id: "string-trimmer",
    images: ["/images/string-trimmer-1.webp","/images/string-trimmer-2.webp","/images/string-trimmer-3.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Makita String Trimmer / Brush Cutter 18V", es: "Desbrozadora Makita 18V", uk: "Тример / Мотокоса Makita 18V", pt: "Roçadora Makita 18V" },
    shortDesc: { en: "18V LXT cordless string trimmer and brush cutter", es: "Desbrozadora inalámbrica 18V LXT", uk: "Акумуляторний тример та мотокоса 18V LXT", pt: "Roçadora sem fios 18V LXT" },
    desc: { en: "Makita 18V LXT cordless string trimmer / brush cutter.", es: "Desbrozadora Makita 18V LXT inalámbrica.", uk: "Тример / мотокоса Makita 18V LXT акумуляторна.", pt: "Roçadora Makita 18V LXT sem fios." }
  },
  {
    id: "angle-grinder",
    images: ["/images/angle-grinder-2.webp","/images/angle-grinder-1.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Makita Angle Grinder DGA504 18V", es: "Amoladora Makita DGA504 18V", uk: "Болгарка Makita DGA504 18V", pt: "Rebarbadora Makita DGA504 18V" },
    shortDesc: { en: "18V LXT cordless angle grinder", es: "Amoladora angular inalámbrica 18V LXT", uk: "Акумуляторна кутова шліфмашина 18V LXT", pt: "Rebarbadora angular sem fios 18V LXT" },
    desc: { en: "Makita DGA504 18V LXT cordless angle grinder.", es: "Amoladora angular Makita DGA504 18V LXT inalámbrica.", uk: "Кутова шліфмашина Makita DGA504 18V LXT акумуляторна.", pt: "Rebarbadora angular Makita DGA504 18V LXT sem fios." }
  },
  {
    id: "multi-tool",
    images: ["/images/multi-tool-1.webp","/images/multi-tool-2.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Makita Multi Tool 18V BL (Starlock Max)", es: "Multiherramienta Makita 18V BL (Starlock Max)", uk: "Мультитул Makita 18V BL (Starlock Max)", pt: "Multiferramenta Makita 18V BL (Starlock Max)" },
    shortDesc: { en: "18V brushless oscillating multi tool, AVT, XPT", es: "Multiherramienta oscilante 18V sin escobillas, AVT, XPT", uk: "Реноватор 18V безщітковий, AVT, XPT", pt: "Multiferramenta oscilante 18V sem escovas, AVT, XPT" },
    desc: { en: "Makita 18V LXT brushless cordless multi tool with Starlock Max, AVT anti-vibration, XPT dust/water protection.", es: "Multiherramienta Makita 18V LXT sin escobillas con Starlock Max, antivibración AVT, protección XPT.", uk: "Реноватор Makita 18V LXT безщітковий з Starlock Max, антивібрація AVT, захист XPT.", pt: "Multiferramenta Makita 18V LXT sem escovas com Starlock Max, antivibração AVT, proteção XPT." }
  },
  {
    id: "router-trimmer",
    images: ["/images/router-makita-1.webp","/images/router-makita-2.webp","/images/router-makita-3.webp","/images/router-makita-4.webp","/images/router-makita-5.webp"],
    price: 180, originalPrice: 237, condition: "new", delivery: "malaga", status: "available",
    title: { en: "Makita Router / Trimmer DRT50ZJX2 18V BL", es: "Fresadora Makita DRT50ZJX2 18V BL", uk: "Фрезер Makita DRT50ZJX2 18V BL", pt: "Tupia Makita DRT50ZJX2 18V BL" },
    shortDesc: { en: "18V brushless cordless router with 3 bases + Makpac. New, opened box. Battery not included.", es: "Fresadora 18V sin escobillas con 3 bases + Makpac. Nueva, caja abierta. Batería no incluida.", uk: "Фрезер 18V безщітковий з 3 базами + Makpac. Новий, відкрита коробка. Акумулятор не включено.", pt: "Tupia 18V sem escovas com 3 bases + Makpac. Nova, caixa aberta. Bateria não incluída." },
    desc: { en: "Makita DRT50ZJX2 18V LXT brushless cordless router/trimmer. Includes 3 interchangeable bases (trimmer, tilt, plunge), straight guide, dust nozzles, and Makpac Type 4 case. Variable speed 10,000–30,000 RPM, dual LED. New, never used — opened box only. Purchased from Amazon.es on 16 Dec 2025, under warranty. Battery not included. Purchased from [Amazon.es](https://www.amazon.es/dp/B078K5K75W) on 16 Dec 2025, under warranty.", es: "Fresadora Makita DRT50ZJX2 18V LXT sin escobillas. Incluye 3 bases intercambiables (fresado, inclinación, inmersión), guía recta, boquillas de polvo y maletín Makpac Tipo 4. Velocidad variable 10.000–30.000 RPM, doble LED. Nueva, nunca usada — solo caja abierta. Comprada en [Amazon.es](https://www.amazon.es/dp/B078K5K75W) el 16 dic 2025, en garantía. Batería no incluida.", uk: "Фрезер Makita DRT50ZJX2 18V LXT безщітковий. Включає 3 змінні бази (тример, нахил, занурення), пряму напрямну, пилові насадки та кейс Makpac Type 4. Змінна швидкість 10 000–30 000 об/хв, подвійний LED. Новий, ніколи не використовувався — лише відкрита коробка. Придбано на [Amazon.es](https://www.amazon.es/dp/B078K5K75W) 16 грудня 2025, на гарантії. Акумулятор не включено.", pt: "Tupia Makita DRT50ZJX2 18V LXT sem escovas. Inclui 3 bases intermutáveis (tupia, inclinação, mergulho), guia reta, bocais de pó e mala Makpac Tipo 4. Velocidade variável 10.000–30.000 RPM, LED duplo. Nova, nunca usada — caixa apenas aberta. Comprada na [Amazon.es](https://www.amazon.es/dp/B078K5K75W) a 16 dez 2025, em garantia. Bateria não incluída." }
  },
  {
    id: "jigsaw-pin-nailer",
    images: ["/images/jigsaw.webp", "/images/pin-nailer.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Makita Jigsaw DJV181Z + Pin Nailer 18V BL", es: "Sierra de Calar + Clavadora Makita 18V BL", uk: "Лобзик + Шпилькозабивач Makita 18V BL", pt: "Serra Tico-Tico + Pregadora Makita 18V BL" },
    shortDesc: { en: "18V brushless cordless jigsaw and pin nailer", es: "Sierra de calar y clavadora 18V sin escobillas", uk: "Акумуляторний лобзик та шпилькозабивач 18V безщіткові", pt: "Serra tico-tico e pregadora 18V sem escovas" },
    desc: { en: "Makita DJV181Z 18V LXT brushless cordless jigsaw (body only) + Makita 18V LXT brushless cordless pin nailer.", es: "Sierra de calar Makita DJV181Z 18V LXT sin escobillas (solo cuerpo) + Clavadora de pines Makita 18V LXT sin escobillas.", uk: "Лобзик Makita DJV181Z 18V LXT безщітковий (тільки корпус) + Шпилькозабивач Makita 18V LXT безщітковий.", pt: "Serra tico-tico Makita DJV181Z 18V LXT sem escovas (só corpo) + Pregadora de pinos Makita 18V LXT sem escovas." }
  },
  {
    id: "batteries-charger",
    images: ["/images/batteries-charger.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Makita Batteries (2\u00d76.0Ah + 5.0Ah) & Charger DC18RC", es: "Bater\u00edas Makita (2\u00d76.0Ah + 5.0Ah) y Cargador DC18RC", uk: "\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 Makita (2\u00d76.0Ah + 5.0Ah) \u0442\u0430 \u0417\u0430\u0440\u044f\u0434\u043d\u0438\u0439 DC18RC", pt: "Baterias Makita (2\u00d76.0Ah + 5.0Ah) e Carregador DC18RC" },
    shortDesc: { en: "2\u00d7 6.0Ah + 1\u00d7 5.0Ah 18V batteries with DC18RC fast charger", es: "2\u00d7 6.0Ah + 1\u00d7 5.0Ah bater\u00edas 18V con cargador r\u00e1pido DC18RC", uk: "2\u00d7 6.0Ah + 1\u00d7 5.0Ah \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 18V \u0437 \u0448\u0432\u0438\u0434\u043a\u043e\u0437\u0430\u0440\u044f\u0434\u043d\u0438\u043c DC18RC", pt: "2\u00d7 6.0Ah + 1\u00d7 5.0Ah baterias 18V com carregador r\u00e1pido DC18RC" },
    desc: { en: "Makita 18V LXT battery set: 2\u00d7 BL1860B (6.0Ah) + 1\u00d7 BL1850B (5.0Ah) + DC18RC fast charger.", es: "Set de bater\u00edas Makita 18V LXT: 2\u00d7 BL1860B (6.0Ah) + 1\u00d7 BL1850B (5.0Ah) + cargador r\u00e1pido DC18RC.", uk: "\u041d\u0430\u0431\u0456\u0440 \u0430\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0456\u0432 Makita 18V LXT: 2\u00d7 BL1860B (6.0Ah) + 1\u00d7 BL1850B (5.0Ah) + \u0448\u0432\u0438\u0434\u043a\u043e\u0437\u0430\u0440\u044f\u0434\u043d\u0438\u0439 DC18RC.", pt: "Conjunto de baterias Makita 18V LXT: 2\u00d7 BL1860B (6.0Ah) + 1\u00d7 BL1850B (5.0Ah) + carregador r\u00e1pido DC18RC." }
  },
  {
    id: "heat-gun",
    images: ["/images/heat-gun-1.webp","/images/heat-gun-2.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Seekone Heat Gun 1800W", es: "Pistola de Calor Seekone 1800W", uk: "\u0424\u0435\u043d \u0431\u0443\u0434\u0456\u0432\u0435\u043b\u044c\u043d\u0438\u0439 Seekone 1800W", pt: "Pistola de Calor Seekone 1800W" },
    shortDesc: { en: "1800W variable temperature heat gun", es: "Pistola de calor 1800W con temperatura variable", uk: "\u0411\u0443\u0434\u0456\u0432\u0435\u043b\u044c\u043d\u0438\u0439 \u0444\u0435\u043d 1800W \u0437\u0456 \u0437\u043c\u0456\u043d\u043d\u043e\u044e \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043e\u044e", pt: "Pistola de calor 1800W com temperatura vari\u00e1vel" },
    desc: { en: "Seekone 1800W heat gun with variable temperature control.", es: "Pistola de calor Seekone 1800W con control de temperatura variable.", uk: "\u0411\u0443\u0434\u0456\u0432\u0435\u043b\u044c\u043d\u0438\u0439 \u0444\u0435\u043d Seekone 1800W \u0437\u0456 \u0437\u043c\u0456\u043d\u043d\u043e\u044e \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043e\u044e.", pt: "Pistola de calor Seekone 1800W com controlo de temperatura vari\u00e1vel." }
  },
  {
    id: "router-bits",
    images: ["/images/router-bits.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Bosch Pro Router Bit Set (15pc, L-Boxx)", es: "Set Fresas Bosch Pro (15pz, L-Boxx)", uk: "\u041d\u0430\u0431\u0456\u0440 \u0444\u0440\u0435\u0437 Bosch Pro (15\u0448\u0442, L-Boxx)", pt: "Conjunto Fresas Bosch Pro (15p\u00e7, L-Boxx)" },
    shortDesc: { en: "15-piece professional router bit set in L-Boxx case", es: "Set de 15 fresas profesionales en malet\u00edn L-Boxx", uk: "\u041d\u0430\u0431\u0456\u0440 \u0437 15 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u0439\u043d\u0438\u0445 \u0444\u0440\u0435\u0437 \u0443 \u043a\u0435\u0439\u0441\u0456 L-Boxx", pt: "Conjunto de 15 fresas profissionais em mala L-Boxx" },
    desc: { en: "Bosch Professional 15-piece router bit set in L-Boxx carry case.", es: "Set de 15 fresas Bosch Professional en malet\u00edn L-Boxx.", uk: "\u041d\u0430\u0431\u0456\u0440 \u0437 15 \u0444\u0440\u0435\u0437 Bosch Professional \u0443 \u043a\u0435\u0439\u0441\u0456 L-Boxx.", pt: "Conjunto de 15 fresas Bosch Professional em mala L-Boxx." }
  },
  {
    id: "saw-blades",
    images: ["/images/saw-blades.webp"],
    price: null, originalPrice: null, condition: "new", delivery: "malaga", status: "available",
    title: { en: "Makita Saw Blades 165mm (\u00d72)", es: "Discos Sierra Makita 165mm (\u00d72)", uk: "\u0414\u0438\u0441\u043a\u0438 \u0434\u043b\u044f \u043f\u0438\u043b\u0438 Makita 165\u043c\u043c (\u00d72)", pt: "Discos Serra Makita 165mm (\u00d72)" },
    shortDesc: { en: "Two 165mm circular saw blades for Makita", es: "Dos discos de sierra circular 165mm para Makita", uk: "\u0414\u0432\u0430 \u0434\u0438\u0441\u043a\u0438 \u0434\u043b\u044f \u0446\u0438\u0440\u043a\u0443\u043b\u044f\u0440\u043d\u043e\u0457 \u043f\u0438\u043b\u0438 165\u043c\u043c \u0434\u043b\u044f Makita", pt: "Dois discos de serra circular 165mm para Makita" },
    desc: { en: "Two Makita 165mm circular saw blades.", es: "Dos discos de sierra circular Makita 165mm.", uk: "\u0414\u0432\u0430 \u0434\u0438\u0441\u043a\u0438 \u0434\u043b\u044f \u0446\u0438\u0440\u043a\u0443\u043b\u044f\u0440\u043d\u043e\u0457 \u043f\u0438\u043b\u0438 Makita 165\u043c\u043c.", pt: "Dois discos de serra circular Makita 165mm." }
  },
  {
    id: "tool-kit",
    images: ["/images/tool-kit.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "malaga", status: "available",
    title: { en: "Bosch Tool Kit (Drill Bits, Pliers, Hammer, Level\u2026)", es: "Kit Herramientas Bosch (Brocas, Alicates, Martillo, Nivel\u2026)", uk: "\u041d\u0430\u0431\u0456\u0440 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 Bosch (\u0441\u0432\u0435\u0440\u0434\u043b\u0430, \u043f\u043b\u043e\u0441\u043a\u043e\u0433\u0443\u0431\u0446\u0456, \u043c\u043e\u043b\u043e\u0442\u043e\u043a, \u0440\u0456\u0432\u0435\u043d\u044c\u2026)", pt: "Kit Ferramentas Bosch (Brocas, Alicates, Martelo, N\u00edvel\u2026)" },
    shortDesc: { en: "Comprehensive tool kit: drill bits, screwdriver bits, pliers, hammer, level and more", es: "Kit completo: brocas, puntas, alicates, martillo, nivel y m\u00e1s", uk: "\u041f\u043e\u0432\u043d\u0438\u0439 \u043d\u0430\u0431\u0456\u0440: \u0441\u0432\u0435\u0440\u0434\u043b\u0430, \u0431\u0456\u0442\u0438, \u043f\u043b\u043e\u0441\u043a\u043e\u0433\u0443\u0431\u0446\u0456, \u043c\u043e\u043b\u043e\u0442\u043e\u043a, \u0440\u0456\u0432\u0435\u043d\u044c \u0442\u0430 \u0456\u043d\u0448\u0435", pt: "Kit completo: brocas, pontas, alicates, martelo, n\u00edvel e mais" },
    desc: { en: "Bosch tool kit including drill bits, screwdriver bits, pliers, hammer, spirit level, and more.", es: "Kit de herramientas Bosch con brocas, puntas de destornillador, alicates, martillo, nivel y m\u00e1s.", uk: "\u041d\u0430\u0431\u0456\u0440 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 Bosch: \u0441\u0432\u0435\u0440\u0434\u043b\u0430, \u0431\u0456\u0442\u0438, \u043f\u043b\u043e\u0441\u043a\u043e\u0433\u0443\u0431\u0446\u0456, \u043c\u043e\u043b\u043e\u0442\u043e\u043a, \u0440\u0456\u0432\u0435\u043d\u044c \u0442\u0430 \u0456\u043d\u0448\u0435.", pt: "Kit de ferramentas Bosch com brocas, pontas de parafusadora, alicates, martelo, n\u00edvel e mais." }
  },
  {
    id: "wood-planks",
    images: ["/images/wood-planks.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "local", status: "available",
    title: { en: "Wood Planks & Metal Sheets", es: "Tablones de Madera y Chapas Met\u00e1licas", uk: "\u0414\u0435\u0440\u0435\u0432\u2019\u044f\u043d\u0456 \u0434\u043e\u0448\u043a\u0438 \u0442\u0430 \u043c\u0435\u0442\u0430\u043b\u0435\u0432\u0456 \u043b\u0438\u0441\u0442\u0438", pt: "T\u00e1buas de Madeira e Chapas Met\u00e1licas" },
    shortDesc: { en: "Wood planks and perforated metal sheets", es: "Tablones de madera y chapas met\u00e1licas perforadas", uk: "\u0414\u0435\u0440\u0435\u0432\u2019\u044f\u043d\u0456 \u0434\u043e\u0448\u043a\u0438 \u0442\u0430 \u043f\u0435\u0440\u0444\u043e\u0440\u043e\u0432\u0430\u043d\u0456 \u043c\u0435\u0442\u0430\u043b\u0435\u0432\u0456 \u043b\u0438\u0441\u0442\u0438", pt: "T\u00e1buas de madeira e chapas met\u00e1licas perfuradas" },
    desc: { en: "Wooden planks/boards and perforated metal sheets.", es: "Tablones/tablas de madera y chapas met\u00e1licas perforadas.", uk: "\u0414\u0435\u0440\u0435\u0432\u2019\u044f\u043d\u0456 \u0434\u043e\u0448\u043a\u0438 \u0442\u0430 \u043f\u0435\u0440\u0444\u043e\u0440\u043e\u0432\u0430\u043d\u0456 \u043c\u0435\u0442\u0430\u043b\u0435\u0432\u0456 \u043b\u0438\u0441\u0442\u0438.", pt: "T\u00e1buas/pranchas de madeira e chapas met\u00e1licas perfuradas." }
  },
  {
    id: "deck-tiles",
    images: ["/images/deck-tiles.webp"],
    price: null, originalPrice: null, condition: "good", delivery: "local", status: "available",
    title: { en: "Wooden Deck Tiles (Interlocking)", es: "Baldosas de Madera (Encajables)", uk: "\u0414\u0435\u0440\u0435\u0432\u2019\u044f\u043d\u0430 \u043f\u043b\u0438\u0442\u043a\u0430 \u0434\u043b\u044f \u0442\u0435\u0440\u0430\u0441\u0438 (\u0437\u2019\u0454\u0434\u043d\u0443\u0432\u0430\u043b\u044c\u043d\u0430)", pt: "Ladrilhos de Madeira (Encaix\u00e1veis)" },
    shortDesc: { en: "Interlocking wooden deck/patio tiles", es: "Baldosas de madera encajables para terraza", uk: "\u0417\u2019\u0454\u0434\u043d\u0443\u0432\u0430\u043b\u044c\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u2019\u044f\u043d\u0430 \u043f\u043b\u0438\u0442\u043a\u0430 \u0434\u043b\u044f \u0442\u0435\u0440\u0430\u0441\u0438", pt: "Ladrilhos de madeira encaix\u00e1veis para terra\u00e7o" },
    desc: { en: "Interlocking wooden deck tiles for patio/terrace.", es: "Baldosas de madera encajables para patio/terraza.", uk: "\u0417\u2019\u0454\u0434\u043d\u0443\u0432\u0430\u043b\u044c\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u2019\u044f\u043d\u0430 \u043f\u043b\u0438\u0442\u043a\u0430 \u0434\u043b\u044f \u043f\u0430\u0442\u0456\u043e/\u0442\u0435\u0440\u0430\u0441\u0438.", pt: "Ladrilhos de madeira encaix\u00e1veis para p\u00e1tio/terra\u00e7o." }
  }
];
