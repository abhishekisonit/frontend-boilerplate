"use client";

import { Box, Text, VStack, HStack, Heading } from "@chakra-ui/react"
import { Button, Card, Input } from "@/components/ui"

export default function Home() {
  return (
    <Box minH="100vh" bg="surface" p="lg">
      <VStack gap="xl" maxW="1200px" mx="auto">
        {/* Header */}
        <Box textAlign="center" py="xl">
          <Heading
            size="2xl"
            color="text-primary"
            mb="md"
          >
            Frontend Boilerplate
          </Heading>
          <Text color="text-secondary" fontSize="lg">
            A modern Next.js app with Chakra UI v3 design system
          </Text>
        </Box>

        {/* Design System Showcase */}
        <Card p="xl" w="100%">
          <VStack gap="lg" align="stretch">
            <Heading size="lg" color="text-primary">
              Design System Components
            </Heading>

            {/* Buttons */}
            <Box>
              <Text fontSize="md" fontWeight="semibold" color="text-primary" mb="md">
                Buttons
              </Text>
              <HStack gap="md" flexWrap="wrap">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="primary" size="md">Primary Medium</Button>
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="secondary" size="md">Secondary</Button>
                <Button variant="ghost" size="md">Ghost</Button>
                <Button variant="danger" size="md">Danger</Button>
                <Button variant="primary" size="md" disabled>Disabled</Button>
              </HStack>
            </Box>

            {/* Inputs */}
            <Box>
              <Text fontSize="md" fontWeight="semibold" color="text-primary" mb="md">
                Inputs
              </Text>
              <VStack gap="md" align="stretch">
                <Input
                  placeholder="Default input"
                />
                <Input
                  placeholder="Error input"
                  variant="error"
                />
              </VStack>
            </Box>

            {/* Cards - Hybrid Approach */}
            <Box>
              <Text fontSize="md" fontWeight="semibold" color="text-primary" mb="md">
                Cards - Hybrid Approach
              </Text>

              {/* Convenient Props Approach */}
              <VStack gap="md" align="stretch" mb="lg">
                <Text fontSize="sm" fontWeight="medium" color="text-secondary">
                  Convenient Props (Quick & Easy)
                </Text>
                <HStack gap="md" align="stretch">
                  <Card
                    variant="elevated"
                    title="Simple Card"
                    content="This card uses convenient props for quick implementation."
                    flex="1"
                  />
                  <Card
                    variant="outline"
                    title="Card with Actions"
                    subtitle="Optional subtitle"
                    content="This card includes footer actions."
                    footer="Last updated 2 hours ago"
                    actions={
                      <>
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="primary" size="sm">Save</Button>
                      </>
                    }
                    flex="1"
                  />
                </HStack>
              </VStack>

              {/* Flexible Composition Approach */}
              <VStack gap="md" align="stretch">
                <Text fontSize="sm" fontWeight="medium" color="text-secondary">
                  Flexible Composition (Custom Layouts)
                </Text>
                <HStack gap="md" align="stretch">
                  <Card variant="elevated" flex="1">
                    <VStack gap="md" align="stretch">
                      <HStack justify="space-between" align="center">
                        <Text color="text-primary" fontWeight="semibold">Custom Layout</Text>
                        <Box w="8px" h="8px" bg="success.500" borderRadius="full" />
                      </HStack>
                      <Box bg="surface" p="md" borderRadius="md">
                        <Text fontSize="sm" color="text-secondary">
                          This card uses children for completely custom content layout.
                        </Text>
                      </Box>
                      <HStack gap="sm">
                        <Box w="full" h="2px" bg="primary.200" borderRadius="full" />
                        <Text fontSize="xs" color="text-muted">75%</Text>
                      </HStack>
                    </VStack>
                  </Card>
                  <Card variant="outline" flex="1">
                    <Box p="md">
                      <VStack gap="sm" align="stretch">
                        <Text color="text-primary" fontWeight="semibold">Complex Content</Text>
                        <HStack gap="sm" flexWrap="wrap">
                          <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
                            <Text fontSize="xs" color="brand">Tag 1</Text>
                          </Box>
                          <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
                            <Text fontSize="xs" color="brand">Tag 2</Text>
                          </Box>
                        </HStack>
                        <Text fontSize="sm" color="text-secondary">
                          Perfect for complex layouts that need custom styling.
                        </Text>
                      </VStack>
                    </Box>
                  </Card>
                </HStack>
              </VStack>
            </Box>

            {/* Color Palette */}
            <Box>
              <Text fontSize="md" fontWeight="semibold" color="text-primary" mb="md">
                Color Palette
              </Text>
              <VStack gap="sm" align="stretch">
                <HStack gap="sm">
                  <Box w="60px" h="40px" bg="primary.500" borderRadius="sm" />
                  <Box w="60px" h="40px" bg="primary.600" borderRadius="sm" />
                  <Box w="60px" h="40px" bg="primary.700" borderRadius="sm" />
                  <Text color="text-secondary" fontSize="sm">Primary Colors</Text>
                </HStack>
                <HStack gap="sm">
                  <Box w="60px" h="40px" bg="success.500" borderRadius="sm" />
                  <Box w="60px" h="40px" bg="warning.500" borderRadius="sm" />
                  <Box w="60px" h="40px" bg="error.500" borderRadius="sm" />
                  <Text color="text-secondary" fontSize="sm">Status Colors</Text>
                </HStack>
              </VStack>
            </Box>

            {/* Spacing Scale */}
            <Box>
              <Text fontSize="md" fontWeight="semibold" color="text-primary" mb="md">
                Spacing Scale
              </Text>
              <HStack gap="md">
                <Box w="xs" h="xs" bg="brand" borderRadius="sm" />
                <Box w="sm" h="sm" bg="brand" borderRadius="sm" />
                <Box w="md" h="md" bg="brand" borderRadius="sm" />
                <Box w="lg" h="lg" bg="brand" borderRadius="sm" />
                <Text color="text-secondary" fontSize="sm">xs, sm, md, lg</Text>
              </HStack>
            </Box>
          </VStack>
        </Card>
      </VStack>
    </Box>
  )
}
