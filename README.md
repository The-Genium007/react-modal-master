# React Modal Component - Version CSS Pure

Un composant modal React simple et léger utilisant uniquement du CSS personnalisé.

Composant modal moderne avec fermeture automatique (ESC, clic extérieur), spinner de chargement intégré, animations CSS fluides et 100% personnalisable. Code JavaScript pur avec PropTypes pour la validation des props.

## 🚀 Démarrage Rapide

```bash
npm install
npm run dev
```

## 📋 Utilisation de Base

### Import
```javascript
import { Modal } from './components/Modal';
import { useModal } from './hooks/useModal';
```

### Utilisation simple
```javascript
const MyComponent = () => {
  const modal = useModal();

  return (
    <div>
      <button onClick={modal.openModal}>
        Ouvrir la modal
      </button>

      <Modal isOpen={modal.isOpen} onClose={modal.closeModal}>
        <h2>Ma Modal</h2>
        <p>Contenu de la modal</p>
        <button onClick={modal.closeModal}>Fermer</button>
      </Modal>
    </div>
  );
};
```

### Modal avec chargement
```javascript
const LoadingExample = () => {
  const modal = useModal();

  const handleLoad = async () => {
    modal.openModal();
    modal.startLoading();
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 2000));
    modal.stopLoading();
  };

  return (
    <Modal 
      isOpen={modal.isOpen} 
      onClose={modal.closeModal}
      showSpinner={modal.isLoading}
    >
      {!modal.isLoading && (
        <div>
          <h2>Contenu chargé !</h2>
          <button onClick={modal.closeModal}>Fermer</button>
        </div>
      )}
    </Modal>
  );
};
```