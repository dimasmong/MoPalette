declare module 'culori' {
  export interface Color {
    mode: string;
    [key: string]: any;
  }

  export function rgb(color: any): { mode: 'rgb'; r: number; g: number; b: number; alpha?: number } | undefined;
  export function hsl(color: any): { mode: 'hsl'; h: number; s: number; l: number; alpha?: number } | undefined;
  export function hsv(color: any): { mode: 'hsv'; h: number; s: number; v: number; alpha?: number } | undefined;
  export function oklch(color: any): { mode: 'oklch'; l: number; c: number; h: number; alpha?: number } | undefined;
  export function lab(color: any): { mode: 'lab'; l: number; a: number; b: number; alpha?: number } | undefined;

  export function formatHex(color: any): string;
  export function formatRgb(color: any): string;
  export function formatHsl(color: any): string;

  export function clampRgb(color: any): any;
  export function wcagLuminance(color: any): number;
  export function wcagContrast(colorA: any, colorB: any): number;

  export function differenceEuclidean(mode?: string): (colorA: any, colorB: any) => number;
  export function interpolate(colors: any[], mode?: string): (t: number) => any;
}
