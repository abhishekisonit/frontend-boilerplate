"use client"

import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react"
import { Button, Card } from "@/components/ui"

export function CardExamples() {
    return (
        <VStack gap="lg" align="stretch">
            {/* Quick Implementation Examples */}
            <Box>
                <Text fontSize="lg" fontWeight="semibold" color="text-primary" mb="md">
                    Quick Implementation (Convenient Props)
                </Text>
                <VStack gap="md" align="stretch">
                    {/* Simple Card */}
                    <Card
                        variant="elevated"
                        title="Welcome Message"
                        content="This is a simple card using convenient props. Perfect for quick implementation when you just need to display some data."
                    />

                    {/* Card with Subtitle and Footer */}
                    <Card
                        variant="outline"
                        title="User Profile"
                        subtitle="john.doe@example.com"
                        content="Software Engineer with 5+ years of experience in React and TypeScript. Passionate about building scalable web applications."
                        footer="Profile last updated 2 hours ago"
                    />

                    {/* Card with Actions */}
                    <Card
                        title="Settings Panel"
                        content="Configure your application preferences and account settings."
                        actions={
                            <>
                                <Button variant="ghost" size="sm">Reset</Button>
                                <Button variant="primary" size="sm">Save Changes</Button>
                            </>
                        }
                    />

                    {/* Card with All Props */}
                    <Card
                        variant="elevated"
                        title="Project Status"
                        subtitle="Frontend Boilerplate"
                        content="Design system implementation completed. Ready for development."
                        footer="Status: In Progress"
                        actions={
                            <>
                                <Badge colorScheme="green">Active</Badge>
                                <Button variant="secondary" size="sm">View Details</Button>
                            </>
                        }
                    />
                </VStack>
            </Box>

            {/* Custom Layout Examples */}
            <Box>
                <Text fontSize="lg" fontWeight="semibold" color="text-primary" mb="md">
                    Custom Layouts (Flexible Composition)
                </Text>
                <VStack gap="md" align="stretch">
                    {/* Progress Card */}
                    <Card variant="elevated">
                        <VStack gap="md" align="stretch">
                            <HStack justify="space-between" align="center">
                                <Text fontWeight="semibold" color="text-primary">Project Progress</Text>
                                <Box w="8px" h="8px" bg="success.500" borderRadius="full" />
                            </HStack>
                            <Box bg="surface" p="md" borderRadius="md">
                                <Text fontSize="sm" color="text-secondary">
                                    Design system implementation with hybrid card approach
                                </Text>
                            </Box>
                            <VStack gap="sm" align="stretch">
                                <HStack justify="space-between">
                                    <Text fontSize="sm" color="text-secondary">Completion</Text>
                                    <Text fontSize="sm" fontWeight="semibold" color="text-primary">75%</Text>
                                </HStack>
                                <Box w="full" h="2px" bg="neutral.200" borderRadius="full" overflow="hidden">
                                    <Box w="75%" h="full" bg="primary.500" borderRadius="full" />
                                </Box>
                            </VStack>
                        </VStack>
                    </Card>

                    {/* Tagged Content Card */}
                    <Card variant="outline">
                        <Box p="md">
                            <VStack gap="md" align="stretch">
                                <Text fontWeight="semibold" color="text-primary">Article Tags</Text>
                                <Text fontSize="sm" color="text-secondary">
                                    This card demonstrates complex content with custom styling and layout.
                                </Text>
                                <HStack gap="sm" flexWrap="wrap">
                                    <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
                                        <Text fontSize="xs" color="brand">React</Text>
                                    </Box>
                                    <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
                                        <Text fontSize="xs" color="brand">TypeScript</Text>
                                    </Box>
                                    <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
                                        <Text fontSize="xs" color="brand">Chakra UI</Text>
                                    </Box>
                                    <Box px="sm" py="xs" bg="brand-light" borderRadius="sm">
                                        <Text fontSize="xs" color="brand">Design System</Text>
                                    </Box>
                                </HStack>
                                <HStack gap="sm" justify="space-between">
                                    <Text fontSize="xs" color="text-muted">Published 2 days ago</Text>
                                    <Button variant="ghost" size="sm">Read More</Button>
                                </HStack>
                            </VStack>
                        </Box>
                    </Card>

                    {/* Stats Card */}
                    <Card>
                        <Box p="md">
                            <VStack gap="md" align="stretch">
                                <Text fontWeight="semibold" color="text-primary">Analytics Overview</Text>
                                <HStack gap="lg" justify="space-around">
                                    <VStack gap="xs">
                                        <Text fontSize="2xl" fontWeight="bold" color="primary.500">1,234</Text>
                                        <Text fontSize="xs" color="text-secondary">Total Users</Text>
                                    </VStack>
                                    <VStack gap="xs">
                                        <Text fontSize="2xl" fontWeight="bold" color="success.500">89%</Text>
                                        <Text fontSize="xs" color="text-secondary">Satisfaction</Text>
                                    </VStack>
                                    <VStack gap="xs">
                                        <Text fontSize="2xl" fontWeight="bold" color="warning.500">45</Text>
                                        <Text fontSize="xs" color="text-secondary">Active Projects</Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </Box>
                    </Card>
                </VStack>
            </Box>
        </VStack>
    )
} 