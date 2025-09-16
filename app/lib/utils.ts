/**
 * Convert a size in bytes to a human-readable string (KB, MB, GB).
 * - Uses 1024 as the base.
 * - Rounds to one decimal place for non-integer values, trims trailing .0.
 * - Caps at GB.
 * - Handles invalid inputs by treating as 0.
 */
export function formatSize(input: number): string {
    const bytes = Number.isFinite(input) ? Math.max(0, input) : 0;

    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;

    const format = (value: number, unit: string) => {
        const rounded = Math.round(value * 10) / 10; // one decimal
        const str = rounded % 1 === 0 ? String(rounded | 0) : String(rounded);
        return `${str} ${unit}`;
    };

    if (bytes >= GB) return format(bytes / GB, 'GB');
    if (bytes >= MB) return format(bytes / MB, 'MB');
    if (bytes >= KB) return format(bytes / KB, 'KB');

    // Less than 1KB -> show as 0 KB to avoid bytes granularity per spec
    return '0 KB';
}

export const generateUuid = () => crypto.randomUUID();