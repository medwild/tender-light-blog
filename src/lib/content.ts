/**
 * Re-exported content helpers kept out of the big posts file
 * so UI components can import types without a cycle.
 */
import {
  CATEGORIES,
  POSTS,
  extractToc as _extractToc,
  formatDate as _formatDate,
  getCategory as _getCategory,
  getPost as _getPost,
  getPostsByCategory,
  getRelatedPosts,
  readingTime as _readingTime,
  sortedPosts,
} from "../content/posts";
import type { Post } from "../content/types";

export const extractToc = _extractToc;

export type PostLike = Post;

export const allPosts = POSTS;
export const categories = CATEGORIES;
export const getPost = _getPost;
export const getCategory = _getCategory;
export const postsByCategory = getPostsByCategory;
export const relatedPosts = getRelatedPosts;
export const readingTime = _readingTime;
export const formatDate = _formatDate;
export { sortedPosts };
