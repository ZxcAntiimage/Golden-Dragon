'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';
import { DragonModel } from './DragonModel';
import { DragonProcedural } from './DragonProcedural';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ModelErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[Dragon] GLB model unavailable, using procedural fallback:', error.message, info);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

/** Золотой дракон: GLB-модель с запасным процедурным вариантом. */
export function Dragon() {
  return (
    <ModelErrorBoundary fallback={<DragonProcedural />}>
      <DragonModel />
    </ModelErrorBoundary>
  );
}
