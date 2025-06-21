"use client";

import { Button, VStack, HStack, Text, Badge, Box } from "@chakra-ui/react";
import { Card } from "@/components/ui/card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <VStack gap={8} p={8} align="center" justify="center" minH="100vh">
        <Card
          headerTitle="Welcome to Your App"
          headerSubtitle="Built with Next.js 15 and Chakra UI v3"
          body={
            <VStack gap={4} align="stretch">
              <Text>This is a reusable Card component that demonstrates:</Text>
              <Box as="ul" pl={4}>
                <li>Flexible header with title and subtitle</li>
                <li>Custom body content with complex layouts</li>
                <li>Footer with action buttons</li>
                <li>Consistent styling and spacing</li>
              </Box>
              <Box w="100%" bg="gray.200" borderRadius="full" h="8px">
                <Box w="75%" bg="blue.500" h="8px" borderRadius="full" />
              </Box>
              <HStack justify="space-between">
                <Text fontSize="sm">Setup Progress</Text>
                <Text fontSize="sm" fontWeight="bold">75% Complete</Text>
              </HStack>
            </VStack>
          }
          footer={
            <HStack gap={3} justify="space-between">
              <Badge colorScheme="green">Ready to use</Badge>
              <HStack gap={2}>
                <Button size="sm" colorScheme="blue">Get Started</Button>
                <Button size="sm" variant="outline">Learn More</Button>
              </HStack>
            </HStack>
          }
          maxW="500px"
          w="100%"
        />
      </VStack>
    </div>
  );
}
