import DOMPurify from 'dompurify'

/**
 * Sanitizes HTML strings to prevent XSS attacks.
 * Use only when you absolutely must render HTML (e.g. rich text from CMS).
 * React JSX escapes by default — prefer JSX over this function.
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'br', 'p'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  })
}

/**
 * Strips all HTML from a string, returning plain text.
 */
export function stripHtml(html: string): string {
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
}
