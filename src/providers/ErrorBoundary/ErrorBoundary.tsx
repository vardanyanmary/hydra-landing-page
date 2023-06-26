import React, { ErrorInfo, ReactNode} from 'react';
import cls from './ErrorBoundary.module.scss'
interface ErrorBoundaryProps {
    children: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error);
        console.log(errorInfo); 
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <p className={cls.errorP}>
                    Error was handled please reload page
                </p>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
