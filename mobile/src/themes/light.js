export const lightTheme = {
  background: "#f3f4f6",
  surface: "#ffffff",
  primary: "#e94560",
  secondary: "#e5e7eb",
  text: "#111827",
  textSecondary: "#6b7280",
  border: "#d1d5db",
  input: "#ffffff",
  error: "#ef4444",
  success: "#10b981",
  navigationBar: "#ffffff",
  navigationButtons: "dark",
  card: "#ffffff",
  status: {
    accepted: { background: "#d1fae5", text: "#065f46", label: "Aceito" },
    waiting: { background: "#f3f4f6", text: "#374151", label: "Aguardando" },
    rejected: { background: "#fee2e2", text: "#991b1b", label: "Recusado" },
    pending: { background: "#fef3c7", text: "#92400e", label: "Pendente" },
  },
  chat: {
    bubbleSent: "#1d8cf8", // Azul vibrante para mensagens enviadas
    textSent: "#ffffff",
    bubbleReceived: "#ffffff",
    textReceived: "#111827",
    proposalCard: "#ffffff",
    actionButton: {
      accept: "#10b981",
      reject: "#f87171",
      suggest: "#e5e7eb",
      textSuggest: "#374151",
    },
  },
  profile: {
    avatarEdit: '#3b82f6',
    sectionTitle: '#6b7280',
    iconBackground: '#f3f4f6',
    logout: '#ef4444',
    logouText: "#ffffff",
    contaners: '#ffffff',
    avatarBorder: '#d1d5db',
    btnAvatarBorder: '#ffffff',
  },
  
  // Estilos de Componentes Específicos
  components: {
    icons: {
      color: "#3b82f6",
    },
    typeSelector: {
      backgroundColor: "#e5e7eb",
    },
    typeButton: {
      activeBackgroundColor: "#e94560",
      inactiveBackgroundColor: "transparent",
    },
    typeButtonActive: {
        backgroundColor: '#3b82f6',
    },
    typeText: {
      activeColor: "#ffffff",
      inactiveColor: "#6b7280",
    },
    loginButton: {
      backgroundColor: "#3b82f6",
      text: "#ffffff",
    },
    forgotButton: {
      text: "#6b7280",
    },
  },
};
