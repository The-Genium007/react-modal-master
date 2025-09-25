import { useState } from 'react';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';


export const ModalDemo = () => {
  // Modals
  const simpleModal = useModal();
  const loadingModal = useModal();
  const dynamicModal = useModal();
  
  // État pour le contenu chargé dynamiquement
  const [loadedContent, setLoadedContent] = useState('');

  // Fonction pour simuler le chargement de contenu
  const handleLoadContent = async () => {
    loadingModal.openModal();
    loadingModal.startLoading();

    try {
      // Simuler un appel à une API (2 secondes d'attente)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoadedContent('Contenu chargé avec succès !');
      loadingModal.stopLoading();
    } catch (error) {
      console.error('Erreur:', error);
      loadingModal.closeModal();
    }
  };

  // Fonction pour charger du contenu dynamique
  const handleDynamicContent = () => {
    const content = `Contenu généré le ${new Date().toLocaleTimeString()}`;
    setLoadedContent(content);
    dynamicModal.openModal();
  };

  return (
    <div className="container">
      <h1 className="title">Modal React - Démonstration</h1>
      
      {/* Section principale */}
      <div className="demo-section">
        <h2 className="section-title">🎨 Modals avec CSS Personnalisé</h2>
        <div className="button-group">
          <button 
            onClick={simpleModal.openModal}
            className="demo-button demo-button-blue"
          >
            Modal Simple
          </button>
          <button 
            onClick={handleLoadContent}
            className="demo-button demo-button-green"
          >
            Modal avec Loading
          </button>
          <button 
            onClick={handleDynamicContent}
            className="demo-button demo-button-purple"
          >
            Modal Dynamique
          </button>
        </div>
      </div>

      {/* ========== MODALS ========== */}
      
      {/* Modal simple */}
      <Modal 
        isOpen={simpleModal.isOpen} 
        onClose={simpleModal.closeModal}
      >
        <h2>Modal Simple</h2>
        <p>Cette modal utilise notre CSS personnalisé.</p>
        <ul>
          <li>Style fait main</li>
          <li>Contrôle total du design</li>
          <li>Plus léger (pas de dépendances externes)</li>
          <li>Entièrement personnalisable</li>
        </ul>
        <button 
          onClick={simpleModal.closeModal}
          className="demo-button demo-button-blue"
          style={{ marginTop: '16px' }}
        >
          Fermer
        </button>
      </Modal>

      {/* Modal avec loading */}
      <Modal 
        isOpen={loadingModal.isOpen} 
        onClose={loadingModal.closeModal}
        showSpinner={loadingModal.isLoading}
      >
        {!loadingModal.isLoading && (
          <div>
            <h2>Contenu Chargé</h2>
            <p>{loadedContent}</p>
            <div style={{ marginTop: '16px' }}>
              <p><strong>Fonctionnalités :</strong></p>
              <ul>
                <li>Chargement asynchrone</li>
                <li>Spinner intégré</li>
                <li>Gestion d'erreurs</li>
              </ul>
            </div>
            <button 
              onClick={loadingModal.closeModal}
              className="demo-button demo-button-green"
              style={{ marginTop: '16px' }}
            >
              Fermer
            </button>
          </div>
        )}
      </Modal>

      {/* Modal dynamique */}
      <Modal 
        isOpen={dynamicModal.isOpen} 
        onClose={dynamicModal.closeModal}
      >
        <h2>Modal Dynamique</h2>
        <p>{loadedContent}</p>
        <div style={{ marginTop: '16px' }}>
          <p><strong>Avantages :</strong></p>
          <ul>
            <li>Contenu généré à la volée</li>
            <li>Réutilisable</li>
            <li>Léger et performant</li>
          </ul>
        </div>
        <button 
          onClick={dynamicModal.closeModal}
          className="demo-button demo-button-purple"
          style={{ marginTop: '16px' }}
        >
          Fermer
        </button>
      </Modal>    </div>
  );
};