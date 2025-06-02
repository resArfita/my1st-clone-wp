const books = [
  {
    id: 1,
    title: "Beneath the Crimson Moon",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
     latestUpdate: "9 new parts",
    lastRead: "part 29",
    author: "Grace Adams",
    views: "1.33M",
    votes: "14.8K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "322",
    tags: ["dark", "cinta", "adult", "+15 more"],
    chapters: "24", //it can be merge with the chapterContent (with length - 1 method), but can do it later
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 2,
    title: "The Antagonist World",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "3 new parts",
    lastRead: "part 2",
    author: "whitney",
    views: "7.65M",
    votes: "408K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "Complete",
    comments: "222",
    tags: ["miskin", "fiksi", "hidupkembali", "+22 more"],
    chapters: "74",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 3,
    title: "Fat Princess of the Sea",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "2 new parts",
    lastRead: "part 8",
    author: "Lily",
    views: "1.22M",
    votes: "58.4K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "32",
    tags: ["gemuk", "romansa", "adult", "+21 more"],
    chapters: "46",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 4,
    title: "The Dragon's Breath",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
        latestUpdate: "5 new parts",
    lastRead: "Chapter 48",
    author: "Frank Stone",
    views: "3.2M",
    votes: "35.1K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "Complete",
    comments: "68",
    tags: ["high fantasy", "epic", "action", "+12 more"],
    chapters: "55",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 5,
    title: "The Whispering Woods",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "4 new parts",
    lastRead: "part 35",
    author: "Alice Green",
    views: "2.1M",
    votes: "25.3K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "45",
    tags: ["fantasy", "adventure", "magic", "+10 more"],
    chapters: "40",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 6,
    title: "City of Shadows",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "1 new part",
    lastRead: "part 15",
    author: "Bob Black",
    views: "875K",
    votes: "9.1K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "18",
    tags: ["sci-fi", "dystopian", "thriller", "+8 more"],
    chapters: "22",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 7,
    title: "Love's Echoes",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "6 new parts",
    lastRead: "part 27",
    author: "Carol White",
    views: "1.5M",
    votes: "18.0K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "Complete",
    comments: "30",
    tags: ["romance", "drama", "slice of life", "+5 more"],
    chapters: "30",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 8,
    title: "Whispers in the Library",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "1 new part",
    lastRead: "part 5",
    author: "Emily Rose",
    views: "410K",
    votes: "5.5K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "9",
    tags: ["mystery", "historical", "cozy", "+3 more"],
    chapters: "18",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 9,
    title: "The Chronicles of Eldoria: Book One",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "Continue",
    lastRead: "part 5",
    author: "MythicalScribe",
    views: "3.1M",
    votes: "10.1K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "420",
    tags: ["epic fantasy", "quest", "dragons", "+20 more"],
    chapters: "45",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 10,
    title: "Cooking with Chef Leo: Global Flavors",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "3 new part",
    lastRead: "part 9",
    author: "ChefLeoOfficial",
    views: "2.1M",
    votes: "12.8K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "210",
    tags: ["cooking", "food", "recipes", "+8 more"],
    chapters: "20",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 11,
    title: "The Quantum Paradox",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "Continue",
    lastRead: "part 1",
    author: "MindBender",
    views: "4.9M",
    votes: "14.5K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "Complete",
    comments: "380",
    tags: ["sci-fi", "thriller", "mystery", "+16 more"],
    chapters: "25",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 12,
    title: "Art of Mindful Living",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "1 new part",
    lastRead: "part 1",
    author: "ZenMaster",
    views: "550K",
    votes: "2.8K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "65",
    tags: ["self-improve", "wellness", "philosophy", "+3 more"],
    chapters: "7",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 13,
    title: "Chronicles of the Last Guardian",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "1 new part",
    lastRead: "part 15",
    author: "EpicTeller",
    views: "7.2M",
    votes: "22.5K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "Complete",
    comments: "480",
    tags: ["adventure", "magic", "epic", "+25 more"],
    chapters: "40",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 14,
    title: "The Perfect Heist: An Action Thriller",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "1 new part",
    lastRead: "part 3",
    author: "AdrenalineJunkie",
    views: "11.9M",
    votes: "35.1K",
    summary: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde.",
    status: "On going",
    comments: "550",
    tags: ["action", "thriller", "crime", "+13 more"],
    chapters: "22",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
  {
    id: 15,
    title: "Codebreaker: A Cyberpunk Saga",
    cover:
      "https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740",
    latestUpdate: "1 new part",
    lastRead: "part 1",
    author: "DigitalDreamer",
    views: "6.8M",
    votes: "19.3K",
    comments: "390",
    tags: ["cyberpunk", "sci-fi", "hacking", "+12 more"],
    chapters: "18",
    chapterContent: [
      {
        id: 1,
        subtitle: "Chapter 1",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 2,
        subtitle: "Chapter 2",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 3,
        subtitle: "Chapter 3",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 4,
        subtitle: "Chapter 4",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
      {
        id: 5,
        subtitle: "Chapter 5",
        content: "lorem ipsum dolor sit amet consectetur adipisicing elit. vitae quaerat culpa, temporibus repellendus blanditiis voluptate enim inventore labore tenetur modi eveniet nam debitis. perferendis illum quis quae sed cumque unde."
      },
    ]
  },
];

export default books;
