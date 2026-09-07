/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

interface Post {
  author: string;
  content: string;
  hashtags: string[];
  likes: number;
}

const posts: Post[] = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typescriptPosts: Post[] = posts.filter (
  (post) =>
    post.hashtags.includes("typescript") ||
  post.content.toLowerCase().includes("typescript")
)

const nestjsPosts: Post[] = posts.filter(
  (post) =>
    post.hashtags.includes("nestjs") ||
    post.content.toLowerCase().includes("nestjs")
);

const mostLikedPost: Post | undefined = posts.reduce<Post | undefined>(
  (max, current) => (!max || current.likes > max.likes ? current : max),
  undefined
);
const totalLikes: number = posts.reduce((sum, post) => sum + post.likes, 0);

console.log("1. Posts containing 'typescript':", typescriptPosts);
console.log("2. Posts containing 'nestjs':", nestjsPosts);
console.log("3. Most Liked Post:", mostLikedPost);
console.log("4. Total Likes:", totalLikes);


