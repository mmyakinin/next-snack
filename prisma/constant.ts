export const categories = [
    {
        name: "Додстеры",
    },
    {
        name: "Дэнвичи",
    },
    {
        name: "Закуски",
    },
    {
        name: "Коктейли",
    },
    {
        name: "Напитки",
    },
];

export const products = [
    // Додстеры
    {
        name: "Додстер",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11ee82b16ad7d93b8242de840a104eda.avif",
        description:
            "Фирменная закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке, запеченная в печи до хрустящей корочки.",
        price: 5.5,
        categoryId: 1,
    },
    {
        name: "Додстер Чилл Гриль",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/0196cac09d88744e96704bdd078d5456.avif",
        description:
            "Горячая закуска с цыпленком и соусом гриль с луком, маринованными огурчиками и моцареллой в тонкой пшеничной лепешке.",
        price: 5.5,
        categoryId: 1,
    },
    {
        name: "Острый Додстер",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11eecf5e550a1936b484cea1be734696.avif",
        description:
            "Горячая закуска с цыпленком, перчиком халапеньо, маринованными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке.",
        price: 5.5,
        categoryId: 1,
    },
    {
        name: "Мясной Додстер",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11ee8bc1d793dc1aba515995849df097.avif",
        description:
            "Горячая закуска с моцареллой, пастрами и соусом ранч в тонкой пшеничной лепешке.",
        price: 5.5,
        categoryId: 1,
    },

    // Дэнвичи
    {
        name: "Дэнвич Ветчина и Сыр",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/0196f3f7e37b784a9ee1d15200f584fe.avif",
        description:
            "Поджаристая чиабатта и знакомое сочетание ветчины из индейки, цыпленка, моцареллы со свежими томатами, соусом ранч и чесноком",
        price: 7.5,
        categoryId: 2,
    },
    {
        name: "Дэнвич Пепперони Барбекю",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/0196f3f5f9277114ad5f9b3ef99c11c1.avif",
        description:
            "Насыщенный вкус чоризо с пикантной пепперони с соусами бургер и барбекю, свежими томатами, маринованными огурчиками, моцареллой и луком в румяной чиабатте",
        price: 7.5,
        categoryId: 2,
    },
    {
        name: "Дэнвич с говядиной",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/0196f3f39cb877f8a17dab0a174fbe73.avif",
        description:
            "Хрустящая чиабатта с ароматной пряной говядиной и цыпленком с соусами бургер и барбекю, свежими томатами и моцареллой",
        price: 7.5,
        categoryId: 2,
    },
    {
        name: "Дэнвич Песто",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/0199f18eab3f705eb81922b81b6b2504.avif",
        description:
            "Открой вкус Италии в каждом кусочке! Нежный дэнвич с ароматным песто, сочными томатами, ветчиной, зеленым перцем, кукурузой и тянущейся моцареллой — идеальное сочетание свежести и сытости.",
        price: 7.5,
        categoryId: 2,
    },

    // Закуски
    {
        name: "Картофель из печи с соусом",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11ee8bddcafaad479b95725830e65d67.avif",
        description:
            "Запеченная в печи картошечка с пряными специями. В комплекте сырный соус",
        price: 3.9,
        categoryId: 3,
    },
    {
        name: "Наггетсы",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/019744a7bab178dabc35166d350e4885.avif",
        description:
            "Хрустящие, золотистые и безумно вкусные куриные наггетсы. Попробуйте один — и точно захотите ещё!",
        price: 4.3,
        categoryId: 3,
    },
    {
        name: "Паста Карбонара",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/01997c7e7515737a9288df2f819091a1.avif",
        description:
            "Нежная Kарбонара с ветчиной, соусом альфредо и тягучими сырами",
        price: 6.5,
        categoryId: 3,
    },
    {
        name: "Паста Мясная",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/01997ca227e17936b3ef9cd393c11f12.avif",
        description:
            "Сочная паста с говядиной, соусами и тянущимся сыром моцарелла",
        price: 6.5,
        categoryId: 3,
    },

    // Коктейли
    {
        name: "Классический молочный коктейль",
        imageUrl:
            "https://media.dodostatic.net/image/r:584x584/019880d9a81873129e7300a65203f39b.avif",
        description: "Это классика: молоко, мороженое и ничего лишнего",
        price: 5.9,
        categoryId: 4,
    },
    {
        name: "Шоколадный молочный коктейль",
        imageUrl:
            "https://media.dodostatic.net/image/r:584x584/0199864cde067657875cc624002e2500.avif",
        description:
            "Это шок! Шоколадный молочный коктейль со сливочным мороженым и фирменным какао",
        price: 5.9,
        categoryId: 4,
    },
    {
        name: "Клубничный молочный коктейль",
        imageUrl:
            "https://media.dodostatic.net/image/r:584x584/0199ae7176e279399630a1442abc93a7.avif",
        description:
            "Не важно, какое время года на улице, этот коктейль с клубничным сиропом вернет вас в лето с одного глотка",
        price: 5.9,
        categoryId: 4,
    },
    {
        name: "Молочный коктейль с печеньем Орео",
        imageUrl:
            "https://media.dodostatic.net/image/r:584x584/019986496b5276b89f66e83aa460d5b3.avif",
        description:
            "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
        price: 5.9,
        categoryId: 4,
    },

    // Напитки
    {
        name: "Coca-Cola",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11ee92aae1aef44ca3103450855e7c0d.avif",
        price: 2.5,
        categoryId: 5,
    },
    {
        name: "Fanta",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11ee92ab8f4aca2f97bfea8f7efc978a.avif",
        price: 2.5,
        categoryId: 5,
    },
    {
        name: "Sprite",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/11ee92ac194ab5f390837f213546c8e5.avif",
        price: 2.5,
        categoryId: 5,
    },
    {
        name: "Мохито",
        imageUrl:
            "https://media.dodostatic.com/image/r:584x584/01993cca6c797989acfd137d7251df92.avif",
        price: 3.9,
        categoryId: 5,
    },
];
