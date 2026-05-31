import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge Tailwind CSS classes with clsx
 * Handles conditional classes and resolves Tailwind conflicts
 * 
 * @param  {...any} inputs - Class values (strings, objects, arrays)
 * @returns {string} - Merged class string
 * 
 * @example
 * cn('px-4 py-2', isActive && 'bg-navy text-white', className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
