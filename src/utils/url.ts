export function stringToSlug(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[\s]+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ""); // Remove hyphens from start and end
}
