export type postType = {
  title: string
  slug: string
  image: string
  intro: string
  pattern: string
  level: string
  id: number
}

const levels = [
  { name: "Beginner", catslug: "Beginner"},
  { name: "Intermediate", catslug: "Intermediate"},
  { name: "Advanced", catslug: "Advanced"},
]

const posts = [
  {
    title: "Doll Pattern",
    slug: "doll",
    image: "https://placehold.co/600x400",
    intro: "lorem ipsum",
    pattern: "pattern time", 
    level: "Beginner", 
    id: 0
  },
  {
    title: "Blanket Pattern",
    slug: "blanket",
    image: "https://placehold.co/200x400",
    intro: "lorem ipsum",
    pattern: "pattern time", 
    level: "Intermediate", 
    id: 1
  },
  {
    title: "Gloves Pattern",
    slug: "gloves",
    image: "https://placehold.co/600x200",
    intro: "lorem ipsum",
    pattern: "pattern time", 
    level: "Advanced", 
    id: 2
  }
]

export function getPosts() {
return posts
}

export function getPostsBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function getLevel() {
  return levels
}

export function getPostsByLevel(levelslug: string) {
  return posts.filter((post) => post.level === levelslug)
}