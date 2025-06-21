"use client"

import { Box } from "@chakra-ui/react"
import { forwardRef, type InputHTMLAttributes } from "react"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: "default" | "error"
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ variant = "default", ...props }, ref) => {
        const baseStyles = {
            width: "100%",
            px: "md",
            py: "sm",
            borderRadius: "md",
            border: "1px solid",
            borderColor: "border",
            bg: "surface-elevated",
            fontSize: "md",
            transition: "border-color 0.2s",
            _focus: {
                outline: "none",
                borderColor: "border-focus",
                boxShadow: "0 0 0 1px {colors.primary.500}",
            },
            _placeholder: {
                color: "text-muted",
            },
        }

        const variantStyles = {
            default: {},
            error: {
                borderColor: "error.500",
                _focus: {
                    borderColor: "error.500",
                    boxShadow: "0 0 0 1px {colors.error.500}",
                },
            },
        }

        return (
            <Box
                as="input"
                ref={ref}
                {...baseStyles}
                {...variantStyles[variant]}
                {...props}
            />
        )
    }
)

Input.displayName = "Input" 