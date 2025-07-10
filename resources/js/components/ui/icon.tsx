import { LucideIcon } from 'lucide-react';

interface IconProps {
    iconNode?: LucideIcon | null;
    className?: string;
    fa?: string; // Font Awesome icon class, e.g., 'fa-facebook'
}

export function Icon({ iconNode: IconNode, className, fa }: IconProps) {
    if (fa) {
        return <i className={`fa ${fa} ${className || ''}`.trim()} aria-hidden="true" />;
    }
    if (!IconNode) return null;
    return <IconNode className={className} />;
}
