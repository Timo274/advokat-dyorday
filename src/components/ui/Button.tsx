import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl active:scale-95';
    
    const variants = {
      primary: 'bg-accent-gold text-primary-dark hover:bg-accent-gold-light hover:shadow-lg hover:shadow-accent-gold/20',
      secondary: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 hover:text-accent-gold-light',
      dark: 'bg-primary-dark text-white hover:bg-primary-light hover:shadow-lg',
      ghost: 'bg-transparent text-primary hover:bg-primary/5 hover:text-primary-dark',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as any)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
