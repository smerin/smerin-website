import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostFrontmatter {
  path: string;
  date: string;
  title: string;
  excerpt: string;
  banner?: string;
  previewImage?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  previewImage?: string;
}

function getPostFolders(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((folder) => {
    const folderPath = path.join(postsDirectory, folder);
    return fs.statSync(folderPath).isDirectory();
  });
}

export function getAllPosts(): PostSummary[] {
  const folders = getPostFolders();

  const posts = folders
    .map((folder) => {
      const filePath = path.join(postsDirectory, folder, 'index.md');
      if (!fs.existsSync(filePath)) {
        return null;
      }

      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const frontmatter = data as PostFrontmatter;

      // Get the slug from the frontmatter path (remove leading slash)
      const slug = frontmatter.path.replace(/^\//, '');

      // Construct preview image path
      let previewImage: string | undefined;
      if (frontmatter.previewImage) {
        previewImage = `/images/blog/${folder}/${frontmatter.previewImage}`;
      }

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt,
        previewImage,
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null);

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const folders = getPostFolders();

  for (const folder of folders) {
    const filePath = path.join(postsDirectory, folder, 'index.md');
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    // Check if this post's path matches the slug
    const postSlug = frontmatter.path.replace(/^\//, '');
    if (postSlug === slug) {
      // Update banner and preview image paths
      if (frontmatter.banner) {
        frontmatter.banner = `/images/blog/${folder}/${frontmatter.banner}`;
      }
      if (frontmatter.previewImage) {
        frontmatter.previewImage = `/images/blog/${folder}/${frontmatter.previewImage}`;
      }

      return {
        slug,
        frontmatter,
        content,
      };
    }
  }

  return null;
}

export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}
