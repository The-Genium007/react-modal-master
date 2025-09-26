# react-modal-master

Modal React légère + hook `useModal`.

## Installation

```bash
npm install react-modal-master
```

Optionnel (styles par défaut) :

```js
import 'react-modal-master/styles.css';
```

## Démarrage rapide

```jsx
import { Modal } from 'react-modal-master';
import 'react-modal-master/styles.css';

export const Demo = () => {
  const modal = useModal();

  return (
    <>
      <button onClick={modal.openModal}>Ouvrir</button>
      <Modal isOpen={modal.isOpen} onClose={modal.closeModal} showSpinner={modal.isLoading}>
        <h2>Bonjour 👋</h2>
        <p>Votre contenu ici.</p>
        <button onClick={modal.closeModal}>Fermer</button>
      </Modal>
    </>
  );
};
```

## Hook résumé

```js
const { isOpen, openModal, closeModal, isLoading, startLoading, stopLoading } = useModal();
```

## Licence

MIT
