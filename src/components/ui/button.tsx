"use client"

import { Box, type BoxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface ButtonProps extends BoxProps {
    variant?: "primary" | "secondary" | "ghost" | "danger"
    size?: "sm" | "md" | "lg"
    disabled?: boolean
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
    ({ variant = "primary", size = "md", disabled = false, children, ...props }, ref) => {
        const baseStyles = {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "md",
            fontWeight: "semibold",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 0.2s",
            opacity: disabled ? 0.6 : 1,
        }

        const sizeStyles = {
            sm: { px: "sm", py: "xs", fontSize: "sm" },
            md: { px: "md", py: "sm", fontSize: "md" },
            lg: { px: "lg", py: "md", fontSize: "lg" },
        }

        const variantStyles = {
            primary: {
                bg: "brand",
                color: "white",
                _hover: disabled ? {} : { bg: "primary.600" },
                _active: disabled ? {} : { bg: "primary.700" },
            },
            secondary: {
                bg: "transparent",
                color: "brand",
                border: "1px solid",
                borderColor: "brand",
                _hover: disabled ? {} : { bg: "brand-light" },
            },
            ghost: {
                bg: "transparent",
                color: "text-primary",
                _hover: disabled ? {} : { bg: "surface" },
            },
            danger: {
                bg: "error.500",
                color: "white",
                _hover: disabled ? {} : { bg: "error.600" },
            },
        }

        return (
            <Box
                ref={ref}
                {...baseStyles}
                {...sizeStyles[size]}
                {...variantStyles[variant]}
                {...props}
            >
                {children}
            </Box>
        )
    }
)

Button.displayName = "Button" 