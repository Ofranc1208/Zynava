import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const productsDirectory = path.join(process.cwd(), 'src/content/products');

export function getAllProducts() {
  // Get file names under /src/content/products
  const fileNames = fs.readdirSync(productsDirectory);

  const allProductsData = fileNames.map(fileName => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as { title: string; price: number; image: string; short_description: string }),
    };
  });

  // Return all products
  return allProductsData;
}

export function getProductBySlug(slug: string) {
  // Construct the file path for the specific product
  const fullPath = path.join(productsDirectory, `${slug}.mdx`);
  
  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  // Read markdown file as string
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Return both the frontmatter data and the content
  return {
    slug,
    ...(matterResult.data as { title: string; price: number; image: string; short_description: string }),
    content: matterResult.content,
  };
} 