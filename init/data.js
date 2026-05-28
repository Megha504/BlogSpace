const posts = [
  {
    title: "10 Daily Habits for a Healthier Life",
    body: "Small changes lead to big results. Here are 10 daily habits that can transform your health...",
    category: "Health",
    tags: ["Wellness", "Habits", "Lifestyle"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1474859569645-e0def92b02bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "habits-healthier-life.jpg"
    }
  },
  {
    title: "Top 5 Places to Visit in India This Summer",
    body: "From mountains to beaches, here's a travel guide for your summer adventure in India...",
    category: "Travel",
    tags: ["India", "Tourism", "Adventure"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "places-to-visit-india.jpg"
    }
  },
  {
    title: "Budgeting 101: How to Manage Your Money",
    body: "Managing personal finance is key to a stress-free life. Learn how to budget wisely...",
    category: "Finance",
    tags: ["Money", "Budgeting", "Savings"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1619169448145-eea99df06181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "budgeting-money.jpg"
    }
  },
  {
    title: "5 Easy Recipes for Beginners",
    body: "Don’t know how to cook? Start with these simple and delicious recipes...",
    category: "Food",
    tags: ["Cooking", "Quick Meals", "Home Food"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1695837390040-ea8077f56205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "easy-recipes.jpg"
    }
  },
  {
    title: "Building a Simple To-Do App in JavaScript",
    body: "A hands-on project to build a to-do app using plain HTML, CSS, and JavaScript...",
    category: "Programming",
    tags: ["JavaScript", "Web Development", "Projects"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0",
      filename: "todo-app-js.jpg"
    }
  },
  {
    title: "How to Stay Motivated While Studying",
    body: "Tips and techniques to keep yourself motivated during long study hours...",
    category: "Education",
    tags: ["Motivation", "Students", "Study Tips"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1617529497832-5ad49d9b5928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "stay-motivated-studying.jpg"
    }
  },
  {
    title: "Remote Work: The New Normal",
    body: "Explore how the shift to remote work is reshaping companies and careers...",
    category: "Career",
    tags: ["Remote Jobs", "Work From Home", "Office Culture"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1664575197229-3bbebc281874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "remote-work.jpg"
    }
  },
  {
    title: "My First Solo Trip to Europe",
    body: "A personal story of self-discovery, travel hacks, and budget travel in Europe...",
    category: "Personal Experience",
    tags: ["Travel", "Solo Trip", "Europe"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1645095540206-945f7eddc320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "solo-trip-europe.jpg"
    }
  },
  {
    title: "The Power of Mindfulness in Daily Life",
    body: "Mindfulness isn't just meditation—it's a way to reconnect with the present moment...",
    category: "Wellness",
    tags: ["Mental Health", "Mindfulness", "Self-Care"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "mindfulness-daily.jpg"
    }
  },
  {
    title: "How I Started My Photography Journey",
    body: "From smartphone snapshots to DSLR clicks—here’s how I found my passion...",
    category: "Photography",
    tags: ["Hobby", "Creativity", "Camera"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1645390747771-6e5a4397c4cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "photography-journey.jpg"
    }
  },
  {
    title: "Why You Should Try Journaling Every Day",
    body: "Journaling can improve your mental clarity and emotional well-being...",
    category: "Self Improvement",
    tags: ["Journaling", "Habits", "Mental Health"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1592474097022-3485716440b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "journaling-daily.jpg"
    }
  },
  {
    title: "Getting Started with Freelancing in 2025",
    body: "Turn your skills into income. A beginner’s guide to freelancing platforms and mindset...",
    category: "Freelancing",
    tags: ["Work Online", "Clients", "Skill Building"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1610473068533-b68dbcd23543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "freelancing-2025.jpg"
    }
  },
  {
    title: "Decorating Your Room on a Budget",
    body: "Style your space without breaking the bank. Tips for students and young professionals...",
    category: "Lifestyle",
    tags: ["Home Decor", "Budget", "DIY"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1631679893114-7957e44879db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "room-decor-budget.jpg"
    }
  },
  {
    title: "How I Overcame My Fear of Public Speaking",
    body: "A real story with practical tips to become a confident speaker...",
    category: "Personal Growth",
    tags: ["Confidence", "Communication", "Soft Skills"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1538449327350-43b4fcfd35ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "public-speaking-fear.jpg"
    }
  },
  {
    title: "Understanding the Basics of Cryptocurrency",
    body: "Bitcoin, Ethereum, NFTs—what are they and why do they matter?",
    category: "Technology",
    tags: ["Crypto", "Blockchain", "Future Tech"],
    coverImage: {
      url: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      filename: "basics-crypto.jpg"
    }
  }
];

module.exports = { data: posts };
