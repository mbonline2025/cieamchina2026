import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section-bg flex items-center justify-center min-h-screen p-8">
          <div className="flex flex-col items-center w-full max-w-2xl p-12 premium-card">
            <div className="mb-8 p-4 rounded-full bg-gradient-to-br from-[#EF444420] to-[#DC263520]">
              <AlertTriangle
                size={48}
                className="text-destructive"
              />
            </div>

            <h2 className="text-3xl md:text-4xl text-white-cream font-light mb-3 text-center">
              Oops! Algo deu errado
            </h2>

            <p className="text-white-cream/60 text-center mb-8">
              Desculpe, encontramos um erro inesperado. Nossa equipe foi notificada. Por favor, tente recarregar a página.
            </p>

            <div className="p-6 w-full rounded-lg bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] border border-[#2A2A2A] overflow-auto mb-8 max-h-48">
              <pre className="text-xs text-muted-foreground whitespace-break-spaces font-mono">
                {this.state.error?.stack}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                onClick={() => window.location.reload()}
                className={cn(
                  "flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                  "bg-gradient-to-br from-[#D4AF37] to-[#B8941E]",
                  "text-black-deep font-semibold",
                  "hover:shadow-lg hover:shadow-gold/30 transition-all duration-300",
                  "cursor-pointer"
                )}
              >
                <RotateCcw size={16} />
                Recarregar Página
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className={cn(
                  "flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                  "bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]",
                  "text-white-cream border border-[#3A3A3A]",
                  "hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300",
                  "cursor-pointer"
                )}
              >
                Voltar para Home
              </button>
            </div>

            <p className="text-xs text-muted-foreground mt-8 text-center">
              Código de erro: {this.state.error?.name || 'UNKNOWN'} —
              <span className="text-gold/60 ml-1">support@cieam.org</span>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
