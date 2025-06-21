import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    type BoxProps,
} from '@chakra-ui/react';

export interface CardProps extends BoxProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    headerTitle?: string;
    headerSubtitle?: string;
    bodyText?: string;
    footerText?: string;
    children?: React.ReactNode;
}

export function Card({
    header,
    body,
    footer,
    headerTitle,
    headerSubtitle,
    bodyText,
    footerText,
    children,
    bg = 'white',
    shadow = 'md',
    borderRadius = 'lg',
    p = 0,
    ...props
}: CardProps) {
    return (
        <Box
            bg={bg}
            shadow={shadow}
            borderRadius={borderRadius}
            overflow="hidden"
            {...props}
        >
            {/* Header */}
            {(header || headerTitle || headerSubtitle) && (
                <Box p={6} pb={headerSubtitle ? 4 : 6} borderBottom="1px" borderColor="gray.200">
                    {header || (
                        <VStack align="start" gap={2}>
                            {headerTitle && (
                                <Heading size="md">
                                    {headerTitle}
                                </Heading>
                            )}
                            {headerSubtitle && (
                                <Text fontSize="sm" color="gray.500">
                                    {headerSubtitle}
                                </Text>
                            )}
                        </VStack>
                    )}
                </Box>
            )}

            {/* Body */}
            {(body || bodyText || children) && (
                <Box p={6}>
                    {children || body || (bodyText && <Text>{bodyText}</Text>)}
                </Box>
            )}

            {/* Footer */}
            {(footer || footerText) && (
                <Box p={6} pt={4} borderTop="1px" borderColor="gray.200">
                    {footer || (footerText && <Text fontSize="sm">{footerText}</Text>)}
                </Box>
            )}
        </Box>
    );
} 