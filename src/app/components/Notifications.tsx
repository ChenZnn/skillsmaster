// components/Notifications.tsx
import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Fermer la notification après 5 secondes
    }, 5000);

    return () => clearTimeout(timer); // Nettoyer le timer lorsque le composant est démonté
  }, [onClose]);

  return (
    <div className="notification">
      <div className="notification-content">
        <h3>{message}</h3>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Notification; // Assurez-vous que c'est bien exporté par défaut
