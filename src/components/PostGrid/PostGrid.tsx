import Link from 'next/link';
import Image from 'next/image';
import styles from './PostGrid.module.css';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  previewImage?: string;
}

interface PostGridProps {
  title?: string;
  posts: Post[];
}

export default function PostGrid({ title, posts }: PostGridProps) {
  return (
    <div className={styles.postGrid}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <ul>
          {posts.map((post, index) => (
            <li key={index} className={styles.post}>
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.previewImage || '/images/preview/default-preview.jpg'}
                  alt={post.title}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
              <h3>
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
