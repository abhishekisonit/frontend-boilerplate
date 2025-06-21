import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
    cssVarsPrefix: "chakra",
    theme: {
        tokens: {
            colors: {
                primary: {
                    50: { value: "#E3F2FD" },
                    100: { value: "#BBDEFB" },
                    200: { value: "#90CAF9" },
                    300: { value: "#64B5F6" },
                    400: { value: "#42A5F5" },
                    500: { value: "#2196F3" },
                    600: { value: "#1E88E5" },
                    700: { value: "#1976D2" },
                    800: { value: "#1565C0" },
                    900: { value: "#0D47A1" }
                },
                neutral: {
                    50: { value: "#FAFAFA" },
                    100: { value: "#F5F5F5" },
                    200: { value: "#EEEEEE" },
                    300: { value: "#E0E0E0" },
                    400: { value: "#BDBDBD" },
                    500: { value: "#9E9E9E" },
                    600: { value: "#757575" },
                    700: { value: "#616161" },
                    800: { value: "#424242" },
                    900: { value: "#212121" }
                },
                success: {
                    50: { value: "#E8F5E8" },
                    100: { value: "#C8E6C9" },
                    500: { value: "#4CAF50" },
                    900: { value: "#1B5E20" }
                },
                warning: {
                    50: { value: "#FFF8E1" },
                    100: { value: "#FFECB3" },
                    500: { value: "#FF9800" },
                    900: { value: "#E65100" }
                },
                error: {
                    50: { value: "#FFEBEE" },
                    100: { value: "#FFCDD2" },
                    500: { value: "#F44336" },
                    900: { value: "#B71C1C" }
                }
            },
            spacing: {
                xs: { value: "4px" },
                sm: { value: "8px" },
                md: { value: "16px" },
                lg: { value: "24px" },
                xl: { value: "32px" },
                "2xl": { value: "48px" },
                "3xl": { value: "64px" }
            },
            radii: {
                none: { value: "0px" },
                sm: { value: "4px" },
                md: { value: "8px" },
                lg: { value: "12px" },
                xl: { value: "16px" },
                full: { value: "9999px" }
            },
            shadows: {
                sm: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
                md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
                lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
                xl: { value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
            }
        },
        semanticTokens: {
            colors: {
                brand: { value: "{colors.primary.500}" },
                "brand-light": { value: "{colors.primary.50}" },
                "brand-dark": { value: "{colors.primary.900}" },
                surface: { value: "{colors.neutral.50}" },
                "surface-elevated": { value: "white" },
                "text-primary": { value: "{colors.neutral.900}" },
                "text-secondary": { value: "{colors.neutral.600}" },
                "text-muted": { value: "{colors.neutral.500}" },
                border: { value: "{colors.neutral.200}" },
                "border-focus": { value: "{colors.primary.500}" }
            }
        },
        breakpoints: {
            sm: "320px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
            "2xl": "1536px"
        },
        keyframes: {
            fadeIn: {
                from: { opacity: "0" },
                to: { opacity: "1" }
            },
            slideInUp: {
                from: { transform: "translateY(100%)" },
                to: { transform: "translateY(0)" }
            },
            spin: {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" }
            }
        }
    }
})

export const system = createSystem(defaultConfig, config) 