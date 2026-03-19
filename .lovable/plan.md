

# Remove Contact Form, Keep Enquire Buttons as External Links

## Changes

### 1. Remove ContactSection entirely
- Delete the form and contact details section from the page
- Remove it from `Index.tsx` imports and rendering

### 2. Update "BOOK NOW" buttons to link externally
- **OfferSection**: Change the `<a href="#enquire">` to point to a placeholder booking engine URL (e.g., `https://book.dorp.co.za` or `#` with a comment)
- Since the actual booking engine URL isn't specified, I'll use `https://www.dorp.co.za/book` as a placeholder with `target="_blank"` and `rel="noopener noreferrer"`

### Files Modified
- `src/pages/Index.tsx` — remove ContactSection import and usage
- `src/components/OfferSection.tsx` — update BOOK NOW link href
- `src/components/ContactSection.tsx` — can be deleted or left unused

