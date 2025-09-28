# react-modal-master

Modal React légère + hook `useModal`.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** : version 16.0.0 ou supérieure
- **npm** : version 8.0.0 ou supérieure (ou **yarn** version 1.22.0+)
- **React** : version 17.0.0 ou supérieure

### Éditeur recommandé

- **Visual Studio Code** avec les extensions suivantes :
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint

## Installation

```bash
npm install react-modal-master
```

ou avec yarn :

```bash
yarn add react-modal-master
```

## Démarrage rapide

```jsx
import { Modal, useModal } from 'react-modal-master';
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
