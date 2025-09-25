import { useState } from 'react';

/**
 * Hook simplifié pour gérer l'état de la modal
 * 
 * Utilisation:
 * const modal = useModal();
 * 
 * Puis utiliser:
 * - modal.isOpen pour savoir si la modal est ouverte
 * - modal.openModal() pour ouvrir la modal
 * - modal.closeModal() pour fermer la modal
 * - modal.isLoading pour le spinner
 * - modal.startLoading() / modal.stopLoading() pour gérer le chargement
 */
export const useModal = () => {
  // État: la modal est-elle ouverte ?
  const [isOpen, setIsOpen] = useState(false);
  
  // État: est-ce qu'on affiche un spinner ?
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour ouvrir la modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsOpen(false);
    setIsLoading(false); // Arrêter le loading aussi
  };

  // Fonction pour démarrer le loading
  const startLoading = () => {
    setIsLoading(true);
  };

  // Fonction pour arrêter le loading
  const stopLoading = () => {
    setIsLoading(false);
  };

  // Fonction générale pour gérer le loading (compatible avec l'ancienne version)
  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  // Retourner tout ce dont on a besoin
  return {
    isOpen,        // true si la modal est ouverte
    isLoading,     // true si on affiche le spinner
    openModal,     // fonction pour ouvrir
    closeModal,    // fonction pour fermer
    startLoading,  // fonction pour démarrer le loading
    stopLoading,   // fonction pour arrêter le loading
    setLoading     // fonction générale pour gérer le loading
  };
};