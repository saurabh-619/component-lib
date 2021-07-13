import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledTextarea } from './styles';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);

    return (
      <StyledTextarea ref={ref} id={id} isResizable={isResizable} {...props} />
    );
  }
);

Textarea.displayName = 'Field.Textarea';

Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
