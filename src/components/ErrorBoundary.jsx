import { Component } from 'react';

/**
 * ErrorBoundary — catches React reconciliation errors caused by browser
 * auto-translate DOM mutations and attempts an automatic recovery.
 * Without this, a translation-induced crash leaves only the black background.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Only auto-recover from hydration/reconciliation errors (translation-induced)
    const isTranslationError =
      error?.message?.includes('Node') ||
      error?.message?.includes('removeChild') ||
      error?.message?.includes('insertBefore') ||
      error?.message?.includes('The node to be removed') ||
      error?.message?.includes('NotFoundError');

    if (isTranslationError && this.state.retryCount < 3) {
      setTimeout(() => {
        this.setState(prev => ({
          hasError: false,
          retryCount: prev.retryCount + 1,
        }));
      }, 100);
    }
  }

  render() {
    if (this.state.hasError) {
      // Render nothing visible rather than a black screen — body fallback color shows instead
      return null;
    }
    return this.props.children;
  }
}
