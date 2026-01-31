import { MD3LightTheme } from 'react-native-paper'

const LightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: "rgb(140, 68, 131)",
        onPrimary: "rgb(255, 255, 255)",
        primaryContainer: "rgb(255, 215, 244)",
        onPrimaryContainer: "rgb(57, 0, 54)",
        secondary: "rgb(121, 74, 153)",
        onSecondary: "rgb(255, 255, 255)",
        secondaryContainer: "rgb(243, 218, 255)",
        onSecondaryContainer: "rgb(47, 0, 76)",
        tertiary: "rgb(0, 105, 108)",
        onTertiary: "rgb(255, 255, 255)",
        tertiaryContainer: "rgb(111, 246, 251)",
        onTertiaryContainer: "rgb(0, 32, 33)",
        error: "rgb(186, 26, 26)",
        onError: "rgb(255, 255, 255)",
        errorContainer: "rgb(255, 218, 214)",
        onErrorContainer: "rgb(65, 0, 2)",
        background: "rgb(255, 251, 255)",
        onBackground: "rgb(31, 26, 29)",
        surface: "rgb(255, 251, 255)",
        onSurface: "rgb(31, 26, 29)",
        surfaceVariant: "rgb(238, 222, 231)",
        onSurfaceVariant: "rgb(78, 68, 75)",
        outline: "rgb(128, 116, 123)",
        outlineVariant: "rgb(209, 194, 203)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(52, 47, 50)",
        inverseOnSurface: "rgb(248, 238, 242)",
        inversePrimary: "rgb(255, 171, 239)",
        elevation: {
            level0: "transparent",
            level1: "rgb(249, 242, 249)",
            level2: "rgb(246, 236, 245)",
            level3: "rgb(242, 231, 241)",
            level4: "rgb(241, 229, 240)",
            level5: "rgb(239, 225, 238)"
        },
        surfaceDisabled: "rgba(31, 26, 29, 0.12)",
        onSurfaceDisabled: "rgba(31, 26, 29, 0.38)",
        backdrop: "rgba(55, 46, 52, 0.4)"
    }
}

export default LightTheme;