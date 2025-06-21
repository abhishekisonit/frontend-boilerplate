"use client"

import { Box, type BoxProps, Text, VStack, HStack, Heading } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CardProps extends BoxProps {
    variant?: "elevated" | "outline"
    // Convenient props for common use cases
    title?: string
    subtitle?: string
    content?: string
    footer?: string
    // Layout props
    showHeader?: boolean
    showFooter?: boolean
    // Action props
    actions?: React.ReactNode
    // Content override
    children?: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({
        variant = "elevated",
        title,
        subtitle,
        content,
        footer,
        showHeader = false,
        showFooter = false,
        actions,
        children,
        ...props
    }, ref) => {
        const baseStyles = {
            bg: "surface-elevated",
            borderRadius: "lg",
            border: "1px solid",
            borderColor: "border",
            overflow: "hidden",
        }

        const variantStyles = {
            elevated: {
                boxShadow: "md",
            },
            outline: {
                borderColor: "border",
            },
        }

        // Determine if we should show header/footer based on props
        const shouldShowHeader = showHeader || title || subtitle
        const shouldShowFooter = showFooter || footer || actions

        return (
            <Box
                ref={ref}
                {...baseStyles}
                {...variantStyles[variant]}
                {...props}
            >
                {/* Header Section */}
                {shouldShowHeader && (
                    <Box p="lg" pb={subtitle ? "sm" : "lg"} borderBottom="1px" borderColor="border">
                        <VStack align="start" gap="sm">
                            {title && (
                                <Heading size="md" color="text-primary">
                                    {title}
                                </Heading>
                            )}
                            {subtitle && (
                                <Text fontSize="sm" color="text-secondary">
                                    {subtitle}
                                </Text>
                            )}
                        </VStack>
                    </Box>
                )}

                {/* Body Section */}
                {(children || content) && (
                    <Box p="lg">
                        {children || (content && <Text color="text-primary">{content}</Text>)}
                    </Box>
                )}

                {/* Footer Section */}
                {shouldShowFooter && (
                    <Box p="lg" pt="md" borderTop="1px" borderColor="border">
                        <HStack justify="space-between" align="center">
                            {footer && (
                                <Text fontSize="sm" color="text-secondary">
                                    {footer}
                                </Text>
                            )}
                            {actions && (
                                <HStack gap="sm">
                                    {actions}
                                </HStack>
                            )}
                        </HStack>
                    </Box>
                )}
            </Box>
        )
    }
)

Card.displayName = "Card" 