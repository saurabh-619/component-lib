import React from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  varient?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, varient, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        varient={varient}
        size={size}
        isFullWidth={isFullWidth}
        type="button"
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  varient: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};

Button.defaultProps = {
  varient: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
