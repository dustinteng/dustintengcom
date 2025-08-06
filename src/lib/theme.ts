/**
 * Theme System Utilities
 * Centralized theme management and design tokens
 */

// Theme types
export type Theme = 'light' | 'dark';

// Design tokens
export const designTokens = {
  // Spacing scale
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  
  // Typography scale
  typography: {
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
    strong: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(0, 255, 255, 0.3)',
    glowStrong: '0 0 30px rgba(0, 255, 255, 0.5)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
    slow: '300ms ease-out',
  },
  
  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Color utilities
export const colorUtils = {
  // Convert RGB values to CSS custom property format
  rgbToCssVar: (r: number, g: number, b: number) => `${r} ${g} ${b}`,
  
  // Get color with opacity
  withOpacity: (color: string, opacity: number) => `rgb(${color} / ${opacity})`,
  
  // Theme-aware color getter
  getThemeColor: (colorName: string, theme: Theme = 'light') => {
    const prefix = theme === 'dark' ? 'dark' : 'light';
    return `var(--color-${colorName})`;
  },
};

// Theme utilities
export const themeUtils = {
  // Apply theme to document
  applyTheme: (theme: Theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  },
  
  // Get system theme preference
  getSystemTheme: (): Theme => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  },
  
  // Get stored theme preference
  getStoredTheme: (): Theme | null => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      return stored === 'dark' || stored === 'light' ? stored : null;
    }
    return null;
  },
  
  // Store theme preference
  storeTheme: (theme: Theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  },
  
  // Get effective theme (stored > system > default)
  getEffectiveTheme: (): Theme => {
    const stored = themeUtils.getStoredTheme();
    if (stored) return stored;
    
    return themeUtils.getSystemTheme();
  },
};

// Component variants
export const componentVariants = {
  button: {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    outline: 'btn btn-outline',
    ghost: 'btn btn-ghost',
  },
  
  card: {
    default: 'card',
    interactive: 'card-interactive',
  },
  
  text: {
    gradient: 'text-gradient',
    muted: 'text-muted-foreground',
  },
  
  background: {
    gradient: {
      primary: 'bg-gradient-primary',
      accent: 'bg-gradient-accent',
      surface: 'bg-gradient-surface',
    },
    glass: 'backdrop-blur-glass',
  },
} as const;

// Animation presets
export const animations = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
  glowPulse: 'animate-glow-pulse',
  float: 'animate-float',
  spinSlow: 'animate-spin-slow',
} as const;

// Responsive utilities
export const responsive = {
  hideOnMobile: 'hide-mobile',
  showOnMobile: 'show-mobile',
  hideOnDesktop: 'hide-desktop',
  showOnDesktop: 'show-desktop',
} as const;

// Layout utilities
export const layout = {
  container: 'container',
  section: 'section',
  sectionSm: 'section-sm',
  sectionLg: 'section-lg',
} as const;

// Utility function to combine classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Theme-aware class generator
export const themeClass = (lightClass: string, darkClass: string) => {
  return `${lightClass} dark:${darkClass}`;
};

export default {
  designTokens,
  colorUtils,
  themeUtils,
  componentVariants,
  animations,
  responsive,
  layout,
  cn,
  themeClass,
}; 