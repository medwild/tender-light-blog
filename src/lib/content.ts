export {
  POSTS,
  getPost,
  getPostsByHub,
  sortedPosts,
  getRelatedPosts,
  postPath,
  extractToc,
  readingTime,
  formatDate,
  getCategory,
  articleItems,
} from "../content/posts";
export { HUBS, getHub } from "../content/hubs";
export type { Hub } from "../content/types";
import { POSTS } from "../content/posts";
export const getPostsCount = () => POSTS.length;
