export function slugify(text) {
  return text.toLowerCase().replace(/[\s_]+/g, '-');
}
