# Design System Documentation

This document outlines the design system implemented in our frontend boilerplate using Chakra UI v3.

## Overview

Our design system is built on Chakra UI v3's new theming architecture, which uses Panda CSS under the hood for better performance and flexibility.

## Architecture

- **Theme Configuration**: `src/theme/index.ts`
- **Components**: `src/components/ui/`
- **Provider**: `src/components/ui/provider.tsx`

## Design Tokens

### Colors

#### Primary Colors
```typescript
primary: {
  50: "#E3F2FD",   // Lightest
  100: "#BBDEFB",
  200: "#90CAF9",
  300: "#64B5F6",
  400: "#42A5F5",
  500: "#2196F3",  // Brand color
  600: "#1E88E5",
  700: "#1976D2",
  800: "#1565C0",
  900: "#0D47A1"   // Darkest
}
```

#### Neutral Colors
```typescript
neutral: {
  50: "#FAFAFA",   // Surface
  100: "#F5F5F5",
  200: "#EEEEEE",  // Border
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",  // Text muted
  600: "#757575",  // Text secondary
  700: "#616161",
  800: "#424242",
  900: "#212121"   // Text primary
}
```

#### Status Colors
```typescript
success: { 500: "#4CAF50" }
warning: { 500: "#FF9800" }
error: { 500: "#F44336" }
```

### Semantic Tokens

Semantic tokens provide meaningful names for design values:

```typescript
colors: {
  brand: "{colors.primary.500}",
  "brand-light": "{colors.primary.50}",
  "brand-dark": "{colors.primary.900}",
  surface: "{colors.neutral.50}",
  "surface-elevated": "white",
  "text-primary": "{colors.neutral.900}",
  "text-secondary": "{colors.neutral.600}",
  "text-muted": "{colors.neutral.500}",
  border: "{colors.neutral.200}",
  "border-focus": "{colors.primary.500}"
}
```

### Spacing

```typescript
spacing: {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px"
}
```

### Border Radius

```typescript
radii: {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px"
}
```

### Shadows

```typescript
shadows: {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui"

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
```

**Props:**
- `variant`: "primary" | "secondary" | "ghost" | "danger"
- `size`: "sm" | "md" | "lg"
- `disabled`: boolean

### Card

A flexible card component that supports both **convenient props** for quick implementation and **flexible composition** for custom layouts.

#### Approach 1: Convenient Props (Quick & Easy)

Perfect for common use cases where you just need to pass data:

```tsx
import { Button, Card } from "@/components/ui"

// Simple card with title and content
<Card 
  variant="elevated" 
  title="Welcome"
  content="This is a simple card with convenient props."
/>

// Card with subtitle and footer
<Card 
  variant="outline"
  title="User Profile"
  subtitle="John Doe"
  content="Software Engineer at Tech Corp"
  footer="Last updated 2 hours ago"
/>

// Card with actions
<Card 
  title="Settings"
  content="Configure your preferences"
  actions={
    <>
      <Button variant="ghost" size="sm">Cancel</Button>
      <Button variant="primary" size="sm">Save</Button>
    </>
  }
/>
```

#### Approach 2: Flexible Composition (Custom Layouts)

Perfect for complex layouts that need custom styling:

```tsx
import { Box, Text, VStack, HStack } from "@chakra-ui/react"
import { Card } from "@/components/ui"

// Custom layout with progress bar
<Card variant="elevated">
  <VStack gap="md" align="stretch">
    <HStack justify="space-between" align="center">
      <Text fontWeight="semibold">Project Progress</Text>
      <Box w="8px" h="8px" bg="success.500" borderRadius="full" />
    </HStack>
    <Box bg="surface" p="md" borderRadius="md">
      <Text fontSize="sm" color="text-secondary">
        Custom content with complex layout
      </Text>
    </Box>
    <HStack gap="sm">
      <Box w="full" h="2px" bg="primary.200" borderRadius="full" />
      <Text fontSize="xs" color="text-muted">75%</Text>
    </HStack>
  </VStack>
</Card>

// Complex content with tags
<Card variant="outline">
  <Box p="md">
    <VStack gap="sm" align="stretch">
      <Text fontWeight="semibold">Article Tags</Text>
      <HStack gap="sm" flexWrap="wrap">
        <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
          <Text fontSize="xs" color="brand">React</Text>
        </Box>
        <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
          <Text fontSize="xs" color="brand">TypeScript</Text>
        </Box>
      </HStack>
    </VStack>
  </Box>
</Card>
```

**Props:**
- `variant`: "elevated" | "outline"
- `title`: string (optional)
- `subtitle`: string (optional)
- `content`: string (optional)
- `footer`: string (optional)
- `actions`: React.ReactNode (optional)
- `showHeader`: boolean (optional)
- `showFooter`: boolean (optional)
- `children`: React.ReactNode (optional)

### Input

A form input component with validation states.

```tsx
import { Input } from "@/components/ui"

// States
<Input placeholder="Default input" />
<Input variant="error" placeholder="Error input" />
```

**Props:**
- `variant`: "default" | "error"
- All standard HTML input props

## Usage Patterns

### Using Design Tokens

```tsx
import { Box, Text } from "@chakra-ui/react"

// Using semantic tokens
<Box bg="surface" color="text-primary">
  <Text color="text-secondary">Content</Text>
</Box>

// Using raw tokens
<Box bg="primary.500" p="md" borderRadius="lg">
  Content
</Box>
```

### Component Composition

```tsx
import { Box, VStack, HStack } from "@chakra-ui/react"
import { Button, Card, Input } from "@/components/ui"

function MyComponent() {
  return (
    <Box p="lg" bg="surface">
      <VStack gap="md">
        <Card p="md">
          <VStack gap="sm">
            <Input placeholder="Enter text" />
            <HStack gap="sm">
              <Button variant="primary">Save</Button>
              <Button variant="secondary">Cancel</Button>
            </HStack>
          </VStack>
        </Card>
      </VStack>
    </Box>
  )
}
```

### Responsive Design

```tsx
<Box 
  p={{ base: "sm", md: "md", lg: "lg" }}
  fontSize={{ base: "sm", md: "md", lg: "lg" }}
>
  Responsive content
</Box>
```

## Best Practices

### 1. Use Semantic Tokens
Prefer semantic tokens over raw values for better maintainability:

```tsx
// ✅ Good
<Text color="text-primary">Title</Text>
<Box bg="surface">Container</Box>

// ❌ Avoid
<Text color="neutral.900">Title</Text>
<Box bg="neutral.50">Container</Box>
```

### 2. Consistent Spacing
Use the defined spacing scale:

```tsx
// ✅ Good
<VStack gap="md">
<Box p="lg">

// ❌ Avoid
<VStack gap="20px">
<Box p="30px">
```

### 3. Component Variants
Use component variants instead of inline styles:

```tsx
// ✅ Good
<Button variant="primary">Action</Button>
<Card variant="elevated">Content</Card>

// ❌ Avoid
<Box 
  bg="brand" 
  color="white" 
  px="md" 
  py="sm"
>
  Action
</Box>
```

### 4. Hybrid Card Approach
Choose the right approach for your use case:

```tsx
// ✅ Quick implementation
<Card title="Simple" content="Quick card" />

// ✅ Custom layout
<Card>
  <CustomLayout />
</Card>
```

### 5. Accessibility
All components include built-in accessibility features:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Color contrast compliance

## Customization

### Adding New Tokens

1. Add tokens to `src/theme/index.ts`:
```typescript
tokens: {
  colors: {
    custom: {
      500: { value: "#FF0000" }
    }
  }
}
```

2. Add semantic tokens if needed:
```typescript
semanticTokens: {
  colors: {
    "custom-brand": { value: "{colors.custom.500}" }
  }
}
```

### Creating New Components

1. Create component file in `src/components/ui/`
2. Use design tokens for styling
3. Export from `src/components/ui/index.ts`
4. Document in this file

## Development

### Running the App
```bash
npm run dev
```

### Type Generation
```bash
npx @chakra-ui/cli typegen ./src/theme/index.ts
```

### Building
```bash
npm run build
```

## Resources

- [Chakra UI v3 Documentation](https://chakra-ui.com/docs)
- [Panda CSS Documentation](https://panda-css.com/docs)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/) 