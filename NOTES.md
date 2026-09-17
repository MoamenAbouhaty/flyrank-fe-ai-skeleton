# FE-05 Accessibility Notes

## Manual Components vs shadcn/ui

I implemented the Modal Dialog, Tabs, and Disclosure components manually using React and TypeScript before adding shadcn/ui.

After reviewing the generated shadcn/ui Dialog and Tabs source, I identified several differences.

### 1. Focus Management

The manual Modal implements basic focus trapping and restores focus to the element that opened the dialog.

The shadcn/ui Dialog provides more robust focus management through its underlying component primitives, including automatic focus handling when the dialog opens and closes.

### 2. Accessibility Wiring

The manual Modal requires manually defining ARIA attributes such as:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`

The shadcn/ui Dialog automatically manages important accessibility relationships between the dialog, title, and description components.

### 3. Keyboard and Interaction Handling

The manual components require custom keyboard event handling for behaviors such as:

- Escape to close the modal
- Tab and Shift+Tab focus trapping
- Arrow key navigation for tabs
- Home and End navigation for tabs

The shadcn/ui components provide reusable interaction behavior through their underlying primitives, reducing the amount of accessibility logic that needs to be implemented manually.

### Conclusion

Building the components manually helped me understand the accessibility requirements and ARIA patterns behind interactive components.

Using shadcn/ui provides reusable primitives that handle many accessibility and interaction details consistently, while still allowing the component source and styling to be customized.