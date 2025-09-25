import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

// Composant Modal avec CSS personnalisé
export const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  showSpinner = false
}) => {

  // Fermer la modal avec la touche ESC
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Ajouter l'événement seulement si la modal est ouverte
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    // Nettoyer l'événement quand la modal se ferme
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Si la modal est fermée, ne rien afficher
  if (!isOpen) {
    return null;
  }

  // Fonction pour fermer quand on clique sur l'arrière-plan
  const handleBackgroundClick = (event) => {
    // Si on clique directement sur l'arrière-plan (pas sur le contenu)
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Structure CSS personnalisé uniquement
  return (
    <div 
      className="modal-background"
      onClick={handleBackgroundClick}
    >
      <div className="modal-content">
        {/* Bouton pour fermer CSS */}
        <button 
          className="modal-close-button"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        {/* Contenu de la modal CSS */}
        {showSpinner ? (
          <div className="modal-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

// Validation des props avec PropTypes
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,        // Modal ouverte ou fermée ?
  onClose: PropTypes.func.isRequired,      // Fonction pour fermer la modal
  children: PropTypes.node,                // Contenu à afficher
  showSpinner: PropTypes.bool              // Afficher un spinner de chargement ?
};

// Valeurs par défaut des props
Modal.defaultProps = {
  showSpinner: false
};