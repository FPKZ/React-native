export const darkTheme = {
  background: "#1a1a2e",
  surface: "#16213e",
  primary: "#e94560",
  secondary: "#0f3460",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  border: "#0f3460",
  input: "#1a1a2e",
  error: "#f87171",
  success: "#34d399",
  navigationBar: "#1a1a2e",
  navigationButtons: "light",
  card: "#16213e",
  status: {
    accepted: {
      background: "rgba(52, 211, 153, 0.2)",
      text: "#34d399",
      label: "Aceito",
    },
    waiting: {
      background: "rgba(255, 255, 255, 0.1)",
      text: "#e5e7eb",
      label: "Aguardando",
    },
    rejected: {
      background: "rgba(248, 113, 113, 0.2)",
      text: "#f87171",
      label: "Recusado",
    },
    pending: {
      background: "rgba(251, 191, 36, 0.2)",
      text: "#fbbf24",
      label: "Pendente",
    },
  },
  chat: {
    bubbleSent: "#1d8cf8",
    textSent: "#ffffff",
    bubbleReceived: "#1e293b",
    textReceived: "#e2e8f0",
    proposalCard: "#1e293b",
    actionButton: {
      accept: "#059669",
      reject: "#dc2626",
      suggest: "#334155",
      textSuggest: "#e2e8f0",
    },
  },
  profile: {
    avatarEdit: "#3b82f6",
    sectionTitle: "#94a3b8",
    iconBackground: "#1e293b",
    logout: "#192333",
    logouText: "#f87171",
    contaners: "#192333",
    avatarBorder: "#1e293b",
    btnAvatarBorder: "#111827",
  },

  // Estilos de Componentes Específicos
  components: {
    typeSelector: {
      backgroundColor: "#0f3460",
    },
    typeButton: {
      activeBackgroundColor: "#e94560",
      inactiveBackgroundColor: "transparent",
    },
    typeText: {
      activeColor: "#ffffff",
      inactiveColor: "#a0a0b0",
    },
    loginButton: {
      backgroundColor: "#e94560",
      text: "#ffffff",
    },
    forgotButton: {
      text: "#a0a0b0",
    },
  },
};
