const users = [
  {
    name: "Aarav Mehta",
    username: "aaravm",
    profession: "Web Developer",
    description: "Full-stack developer with love for React & Node.",
    followers: 450,
    following: 180,
    posts: 6,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    postsData: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1611924707078-da8777fc99cb?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Late night coding session 💻",
        likes: 120,
        date: "2025-06-18",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Coffee + Code = ❤️",
        likes: 80,
        date: "2025-06-16",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Friends 😍",
        likes: 110,
        date: "2025-06-14",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Work mode ON 🔥",
        likes: 75,
        date: "2025-06-13",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Explore the mountains 🌙",
        likes: 102,
        date: "2025-06-12",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1565735852636-cbf956b1d01a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Morning Vibes = 😎",
        likes: 140,
        date: "2025-06-10",
      },
    ],
  },
  {
    name: "Kavya Sharma",
    username: "kavya.s",
    profession: "UI/UX Designer",
    description: "Designing with heart & Figma. Coffee lover ☕",
    followers: 890,
    following: 200,
    posts: 6,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    postsData: [
      {
        id: 7,
        image:
          "https://images.unsplash.com/photo-1471696035578-3d8c78d99684?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Figma is my playground 🎨",
        likes: 150,
        date: "2025-06-19",
      },
      {
        id: 8,
        image:
          "https://images.unsplash.com/photo-1631127887321-0a2cf902a002?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Playing with color palettes 🌈",
        likes: 112,
        date: "2025-06-17",
      },
      {
        id: 9,
        image:
          "https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "UI sketching day 📒",
        likes: 97,
        date: "2025-06-15",
      },
      {
        id: 10,
        image:
          "https://images.unsplash.com/photo-1589153954586-953af22510a0?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Font love 🖋️",
        likes: 89,
        date: "2025-06-13",
      },
      {
        id: 11,
        image:
          "https://images.unsplash.com/photo-1531668720450-39cf1563fab9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Clean desk, clear mind ✨",
        likes: 130,
        date: "2025-06-11",
      },
      {
        id: 12,
        image:
          "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Moodboard Mondays 💡",
        likes: 143,
        date: "2025-06-09",
      },
    ],
  },
  {
    name: "Rohan Verma",
    username: "rohanv",
    profession: "Data Analyst",
    description: "Data is the new oil, and I refine it daily.",
    followers: 320,
    following: 150,
    posts: 6,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    postsData: [
      {
        id: 13,
        image:
          "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Data cleaning day 🧹",
        likes: 90,
        date: "2025-06-18",
      },
      {
        id: 14,
        image:
          "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Dashboard building in progress 📊",
        likes: 105,
        date: "2025-06-16",
      },
      {
        id: 15,
        image:
          "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Python & Pandas 💚",
        likes: 80,
        date: "2025-06-14",
      },
      {
        id: 16,
        image:
          "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Stats never lie 📈",
        likes: 76,
        date: "2025-06-12",
      },
      {
        id: 17,
        image:
          "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Queries all day long 🧠",
        likes: 85,
        date: "2025-06-11",
      },
      {
        id: 18,
        image:
          "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Big Data adventures 🔍",
        likes: 100,
        date: "2025-06-10",
      },
    ],
  },
  {
    name: "Anaya Singh",
    username: "anaya_singh",
    profession: "Content Creator",
    description: "Words + visuals = magic 🪄",
    followers: 1020,
    following: 300,
    posts: 6,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    postsData: [
      {
        id: 19,
        image:
          "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "New blog post live! ✍️",
        likes: 180,
        date: "2025-06-18",
      },
      {
        id: 20,
        image:
          "https://images.unsplash.com/photo-1561486008-1011a284acfb?q=80&w=2332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Exploring Jaipur 🏰",
        likes: 210,
        date: "2025-06-16",
      },
      {
        id: 21,
        image:
          "https://images.unsplash.com/photo-1679504802105-ea2b154cf7b8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Behind the scenes 📸",
        likes: 170,
        date: "2025-06-14",
      },
      {
        id: 22,
        image:
          "https://images.unsplash.com/photo-1559677437-62c20d42dd27?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Simple joys ☀️",
        likes: 150,
        date: "2025-06-12",
      },
      {
        id: 23,
        image:
          "https://images.unsplash.com/photo-1532294220147-279399e4e00f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Reading break 📚",
        likes: 145,
        date: "2025-06-11",
      },
      {
        id: 24,
        image:
          "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Pen meets thoughts 🖋️",
        likes: 160,
        date: "2025-06-09",
      },
    ],
  },
  {
    name: "Dev Joshi",
    username: "devj",
    profession: "Mobile App Developer",
    description: "Building apps that matter 📱",
    followers: 600,
    following: 250,
    posts: 6,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    postsData: [
      {
        id: 25,
        image:
          "https://images.unsplash.com/photo-1605944697199-84d43c611530?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Android builds be like 🤖",
        likes: 130,
        date: "2025-06-18",
      },
      {
        id: 26,
        image:
          "https://images.unsplash.com/photo-1508051860858-e7cdbeddd706?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Swift day today 🍎",
        likes: 110,
        date: "2025-06-16",
      },
      {
        id: 27,
        image:
          "https://images.unsplash.com/photo-1624695472330-6a4c02c905f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Flutter feels 💙",
        likes: 140,
        date: "2025-06-14",
      },
      {
        id: 28,
        image:
          "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Fixing bugs at 2AM 🐛",
        likes: 120,
        date: "2025-06-12",
      },
      {
        id: 29,
        image:
          "https://images.unsplash.com/photo-1676738384938-68d92995931e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "App live on Play Store! 🚀",
        likes: 180,
        date: "2025-06-11",
      },
      {
        id: 30,
        image:
          "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Dev squad meet 💬",
        likes: 90,
        date: "2025-06-09",
      },
    ],
  },
];

export default users;
