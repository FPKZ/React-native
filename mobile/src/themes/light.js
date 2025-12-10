export const lightTheme = {
  background: '#f3f4f6',
  surface: '#ffffff',
  primary: '#e94560',
  secondary: '#e5e7eb',
  text: '#111827',
  textSecondary: '#6b7280',
  border: '#d1d5db',
  input: '#ffffff',
  error: '#ef4444',
  success: '#10b981',
  navigationBar: '#ffffff',
  navigationButtons: 'dark',
  card: '#ffffff',
  status: {
    accepted: { background: '#d1fae5', text: '#065f46', label: 'Aceito' },
    waiting: { background: '#f3f4f6', text: '#374151', label: 'Aguardando' },
    rejected: { background: '#fee2e2', text: '#991b1b', label: 'Recusado' },
    pending: { background: '#fef3c7', text: '#92400e', label: 'Pendente' },
  },
  
  // Estilos de Componentes Específicos
  components: {
    typeSelector: {
      backgroundColor: '#e5e7eb',
    },
    typeButton: {
      activeBackgroundColor: '#e94560',
      inactiveBackgroundColor: 'transparent',
    },
    typeText: {
      activeColor: '#ffffff',
      inactiveColor: '#6b7280',
    },
    loginButton: {
      backgroundColor: '#e94560',
      text: '#ffffff',
    },
    forgotButton: {
      text: '#6b7280',
    }
  }
};
